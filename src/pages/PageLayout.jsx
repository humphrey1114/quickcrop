import { Link } from 'react-router-dom'
import TopNav from '../components/TopNav'
import { useLanguage } from '../i18n/LanguageContext'
import './PageLayout.css'

export default function PageLayout({ title, children }) {
  const { t } = useLanguage()
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
        <Link to="/terms">{t('footer.terms')}</Link>
        <Link to="/privacy">{t('footer.privacy')}</Link>
        <a href="mailto:feedback294@163.com">{t('footer.contact')}</a>
      </footer>
    </div>
  )
}
