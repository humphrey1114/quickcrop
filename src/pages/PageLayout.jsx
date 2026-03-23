import { Link } from 'react-router-dom'
import TopNav from '../components/TopNav'
import { useLanguage } from '../i18n/LanguageContext'
import './PageLayout.css'

export default function PageLayout({ title, children, wide }) {
  const { t } = useLanguage()
  return (
    <div className={`page-layout${wide ? ' page-layout-wide' : ''}`}>
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
        <a href="mailto:humphrey1114@gmail.com">{t('footer.contact')}</a>
      </footer>
    </div>
  )
}
