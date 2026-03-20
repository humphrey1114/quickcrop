import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import './TopNav.css'

function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem('tapcrop-theme') || 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('tapcrop-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light')
  return { theme, toggleTheme }
}

export default function TopNav() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const { t, lang, toggleLang } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  const NAV_ITEMS = [
    { path: '/tutorial', label: t('nav.tutorial') },
    { path: '/faq', label: t('nav.faq') },
    { path: '/changelog', label: t('nav.changelog') },
    { path: '/feedback', label: t('nav.feedback') },
    { path: '/about', label: t('nav.about') },
  ]

  return (
    <nav className="top-nav">
      {!isHome && (
        <Link to="/" className="top-nav-back">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {t('nav.back')}
        </Link>
      )}
      <div className="top-nav-links">
        {NAV_ITEMS.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`top-nav-link ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
        <button className="top-nav-theme" onClick={toggleTheme} title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}>
          {theme === 'light' ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          )}
        </button>
        <button className="top-nav-lang" onClick={toggleLang} title={lang === 'zh' ? 'Switch to English' : '切换到中文'}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" />
            <ellipse cx="8" cy="8" rx="3" ry="6.5" stroke="currentColor" strokeWidth="1.3" />
            <path d="M1.5 8h13M2.5 5h11M2.5 11h11" stroke="currentColor" strokeWidth="1.1" />
          </svg>
          <span>{lang === 'zh' ? 'English' : '中文'}</span>
        </button>
      </div>
    </nav>
  )
}
