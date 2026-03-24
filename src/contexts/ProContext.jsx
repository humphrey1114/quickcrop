import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { useAuth } from './AuthContext'
import { db } from '../firebase'
import { doc, onSnapshot, setDoc } from 'firebase/firestore'

const ProContext = createContext(null)

// Plan limits
export const LIMITS = {
  free: {
    dailyImages: 100,
    batchUpload: 30,
    maxFileSize: 20 * 1024 * 1024, // 20MB
    maxTemplates: 2,
    maxQuality: 80,
    adjustEnabled: false, // brightness/contrast/saturation is Pro only
    watermarkPositionLocked: true, // free users: forced bottom-right
    ads: true,
  },
  pro: {
    dailyImages: Infinity,
    batchUpload: 100,
    maxFileSize: 50 * 1024 * 1024, // 50MB
    maxTemplates: Infinity,
    maxQuality: 100,
    adjustEnabled: true,
    watermarkPositionLocked: false,
    ads: false,
  },
}

function getTodayKey() {
  return `tapcrop-usage-${new Date().toISOString().slice(0, 10)}`
}

function getDailyUsage() {
  try {
    const key = getTodayKey()
    return parseInt(localStorage.getItem(key) || '0', 10)
  } catch {
    return 0
  }
}

function setDailyUsage(count) {
  try {
    const key = getTodayKey()
    localStorage.setItem(key, String(count))
    // Clean up old keys (keep only today and yesterday)
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)
    const keepKeys = [
      `tapcrop-usage-${today.toISOString().slice(0, 10)}`,
      `tapcrop-usage-${yesterday.toISOString().slice(0, 10)}`,
    ]
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i)
      if (k && k.startsWith('tapcrop-usage-') && !keepKeys.includes(k)) {
        localStorage.removeItem(k)
      }
    }
  } catch { /* ignore */ }
}

function toDateValue(value) {
  if (!value) return null
  if (value instanceof Date) return value
  if (typeof value?.toDate === 'function') return value.toDate()
  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? null : parsed
}

export function ProProvider({ children }) {
  const { user } = useAuth()
  const [isPro, setIsPro] = useState(false)
  const [proLoading, setProLoading] = useState(true)
  const [dailyUsage, setDailyUsageState] = useState(getDailyUsage)

  // Listen to user's subscription status in Firestore
  useEffect(() => {
    if (!user) {
      setIsPro(false)
      setProLoading(false)
      return
    }

    const userDoc = doc(db, 'users', user.uid, 'subscription', 'status')
    const unsub = onSnapshot(userDoc, (snap) => {
      if (snap.exists()) {
        const data = snap.data()
        const expiresAt = toDateValue(data.expiresAt)
        const notExpired = !expiresAt || expiresAt > new Date()
        const accessBlocked = ['expired', 'paused'].includes(data.status)
        setIsPro(data.plan === 'pro' && notExpired && !accessBlocked)
      } else {
        setIsPro(false)
      }
      setProLoading(false)
    }, () => {
      // On error, default to free
      setIsPro(false)
      setProLoading(false)
    })

    return unsub
  }, [user])

  // Get current limits based on plan
  const limits = isPro ? LIMITS.pro : LIMITS.free

  // Track image processing usage
  const addUsage = useCallback((count) => {
    const newCount = getDailyUsage() + count
    setDailyUsage(newCount)
    setDailyUsageState(newCount)
  }, [])

  // Check if can process N more images
  const canProcess = useCallback((count = 1) => {
    if (isPro) return true
    return getDailyUsage() + count <= LIMITS.free.dailyImages
  }, [isPro])

  // Remaining daily quota
  const remainingToday = isPro ? Infinity : Math.max(0, LIMITS.free.dailyImages - dailyUsage)

  return (
    <ProContext.Provider value={{
      isPro,
      proLoading,
      limits,
      dailyUsage,
      remainingToday,
      addUsage,
      canProcess,
    }}>
      {children}
    </ProContext.Provider>
  )
}

export const usePro = () => useContext(ProContext)
