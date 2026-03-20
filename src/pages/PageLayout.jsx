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
    </div>
  )
}
