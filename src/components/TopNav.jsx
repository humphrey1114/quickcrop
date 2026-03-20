import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import './TopNav.css'

export default function TopNav() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const { t, lang, toggleLang } = useLanguage()

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
