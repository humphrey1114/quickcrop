import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { useAuth } from '../contexts/AuthContext'
import AuthModal from './AuthModal'
import SupportModal from './SupportModal'
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
  const { user, logout } = useAuth()
  const [showAuth, setShowAuth] = useState(false)
  const [showSupport, setShowSupport] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

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

      {/* Hamburger button - mobile only */}
      <button className="top-nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        {menuOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )}
      </button>

      <div className={`top-nav-links ${menuOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`top-nav-link ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
        <button className="top-nav-theme" onClick={toggleTheme} title={theme === 'light' ? 'Dark Mode' : 'Light Mode'} aria-label={theme === 'light' ? 'Dark Mode' : 'Light Mode'}>
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
        <button className="top-nav-lang" onClick={toggleLang} title={lang === 'zh' ? 'Switch to English' : '切换到中文'} aria-label={lang === 'zh' ? 'Switch to English' : '切换到中文'}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" />
            <ellipse cx="8" cy="8" rx="3" ry="6.5" stroke="currentColor" strokeWidth="1.3" />
            <path d="M1.5 8h13M2.5 5h11M2.5 11h11" stroke="currentColor" strokeWidth="1.1" />
          </svg>
          <span>{lang === 'zh' ? 'English' : '中文'}</span>
        </button>
        <button
          className="top-nav-support"
          onClick={() => setShowSupport(true)}
          title={lang === 'zh' ? '支持我们' : 'Support Us'}
          aria-label={lang === 'zh' ? '支持我们' : 'Support Us'}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>{lang === 'zh' ? '打赏' : 'Support'}</span>
        </button>
        {user ? (
          <div className="top-nav-user">
            <span className="top-nav-avatar">{user.email[0].toUpperCase()}</span>
            <button className="top-nav-logout" onClick={logout} title={t('auth.logout')} aria-label={t('auth.logout')}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        ) : (
          <button className="top-nav-login" onClick={() => setShowAuth(true)} aria-label={t('auth.login')}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{t('auth.login')}</span>
          </button>
        )}
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && <div className="top-nav-overlay" onClick={() => setMenuOpen(false)} />}

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
      {showSupport && <SupportModal onClose={() => setShowSupport(false)} />}
    </nav>
  )
}
