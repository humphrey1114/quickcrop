import PageLayout from './PageLayout'
import { useLanguage } from '../i18n/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <PageLayout title={t('about.title')}>
      <h2>{t('about.heading')}</h2>
      <p>{t('about.intro1')}</p>
      <p>{t('about.intro2')}</p>

      <h2>{t('about.valuesTitle')}</h2>
      <div className="about-values">
        <div className="about-value">
          <div className="about-value-icon">&#9889;</div>
          <h3>{t('about.v.efficient')}</h3>
          <p>{t('about.v.efficient.desc')}</p>
        </div>
        <div className="about-value">
          <div className="about-value-icon">&#128274;</div>
          <h3>{t('about.v.privacy')}</h3>
          <p>{t('about.v.privacy.desc')}</p>
        </div>
        <div className="about-value">
          <div className="about-value-icon">&#127873;</div>
          <h3>{t('about.v.free')}</h3>
          <p>{t('about.v.free.desc')}</p>
        </div>
        <div className="about-value">
          <div className="about-value-icon">&#10024;</div>
          <h3>{t('about.v.simple')}</h3>
          <p>{t('about.v.simple.desc')}</p>
        </div>
        <div className="about-value">
          <div className="about-value-icon">&#128247;</div>
          <h3>{t('about.v.smart')}</h3>
          <p>{t('about.v.smart.desc')}</p>
        </div>
        <div className="about-value">
          <div className="about-value-icon">&#128640;</div>
          <h3>{t('about.v.fast')}</h3>
          <p>{t('about.v.fast.desc')}</p>
        </div>
      </div>

      <h2>{t('about.contactTitle')}</h2>
      <p>
        {t('about.contactDesc')} <a href="mailto:feedback294@163.com" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>feedback294@163.com</a>
      </p>
    </PageLayout>
  )
}
