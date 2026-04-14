import { createContext, useContext, useState, useEffect, useRef } from 'react'
import { ensureAuth } from '../firebase'

const AuthContext = createContext(null)

// Cache the firebase/auth module import so repeated calls don't re-parse it.
let authModPromise = null
function loadAuthMod() {
  if (!authModPromise) authModPromise = import('firebase/auth')
  return authModPromise
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const unsubRef = useRef(null)

  // Defer Firebase bootstrap until the browser is idle so it doesn't block first paint.
  // Everything downstream treats `user === null` as "not logged in", so delaying this
  // is safe — the anonymous UX is identical whether firebase is loaded or not.
  useEffect(() => {
    let cancelled = false
    const start = async () => {
      try {
        const [auth, mod] = await Promise.all([ensureAuth(), loadAuthMod()])
        if (cancelled) return
        unsubRef.current = mod.onAuthStateChanged(auth, (u) => {
          setUser(u)
          setLoading(false)
        })
      } catch {
        // If firebase fails to load (offline / blocked), stay in anonymous mode.
        if (!cancelled) setLoading(false)
      }
    }
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 1))
    const handle = idle(start, { timeout: 2000 })

    return () => {
      cancelled = true
      if (window.cancelIdleCallback && typeof handle === 'number') {
        window.cancelIdleCallback(handle)
      } else {
        clearTimeout(handle)
      }
      if (unsubRef.current) {
        unsubRef.current()
        unsubRef.current = null
      }
    }
  }, [])

  const register = async (email, password) => {
    const [auth, mod] = await Promise.all([ensureAuth(), loadAuthMod()])
    return mod.createUserWithEmailAndPassword(auth, email, password)
  }

  const login = async (email, password) => {
    const [auth, mod] = await Promise.all([ensureAuth(), loadAuthMod()])
    return mod.signInWithEmailAndPassword(auth, email, password)
  }

  const loginWithGoogle = async () => {
    const [auth, mod] = await Promise.all([ensureAuth(), loadAuthMod()])
    const provider = new mod.GoogleAuthProvider()
    return mod.signInWithPopup(auth, provider)
  }

  const resetPassword = async (email) => {
    const [auth, mod] = await Promise.all([ensureAuth(), loadAuthMod()])
    return mod.sendPasswordResetEmail(auth, email)
  }

  const logout = async () => {
    const [auth, mod] = await Promise.all([ensureAuth(), loadAuthMod()])
    return mod.signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, loading, register, login, loginWithGoogle, resetPassword, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
