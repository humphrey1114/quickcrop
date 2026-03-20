import { createContext, useContext, useState, useCallback, useMemo } from 'react'
import zh from './zh'
import en from './en'

const translations = { zh, en }

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('miaocai-lang') || 'zh'
    } catch {
      return 'zh'
    }
  })

  const toggleLang = useCallback(() => {
    setLang(prev => {
      const next = prev === 'zh' ? 'en' : 'zh'
      try { localStorage.setItem('miaocai-lang', next) } catch {}
      return next
    })
  }, [])

  const t = useCallback((key, params) => {
    const val = translations[lang]?.[key] ?? translations.zh[key] ?? key
    if (!params) return val
    return val.replace(/\{(\w+)\}/g, (_, k) => params[k] ?? '')
  }, [lang])

  const value = useMemo(() => ({ lang, toggleLang, t }), [lang, toggleLang, t])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
