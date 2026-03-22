import { Link } from 'react-router-dom'
import TopNav from '../components/TopNav'
import { useLanguage } from '../i18n/LanguageContext'
import './PageLayout.css'

export default function PageLayout({ title, children }) {
  return (
    <div className="page-layout">
      <TopNav />
      <div className="page-container">
        <h1 className="page-title">{title}</h1>
        <div className="page-content">
          {children}
        </div>
      </div>
      <footer className="page-footer">
        <span>&copy; {new Date().getFullYear()} TapCrop</span>
        <Link to="/terms">Terms of Service</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <a href="mailto:feedback294@163.com">Contact</a>
      </footer>
    </div>
  )
}
