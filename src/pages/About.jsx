import PageLayout from './PageLayout'
import { useLanguage } from '../i18n/LanguageContext'
import useSEO from '../hooks/useSEO'

export default function About() {
  const { t, lang } = useLanguage()

  useSEO({
    title: lang === 'zh' ? '关于秒裁 | TapCrop' : 'About TapCrop — Free Online Batch Image Editor',
    description: lang === 'zh'
      ? 'TapCrop 秒裁是一款 100% 浏览器端运行的免费在线批量图片处理工具。图片不上传，隐私安全。'
      : 'TapCrop is a free online batch image editor that runs 100% in your browser. Your images never leave your device.',
    path: '/about',
  })

  return (
    <PageLayout title={t('about.title')}>
      <h2>{t('about.heading')}</h2>
      <p>{t('about.intro1')}</p>
      <p>{t('about.intro2')}</p>

      <h2>{t('about.valuesTitle')}</h2>
      <ul className="about-values-list">
        <li><strong>{t('about.v.efficient')}</strong> — {t('about.v.efficient.desc')}</li>
        <li><strong>{t('about.v.privacy')}</strong> — {t('about.v.privacy.desc')}</li>
        <li><strong>{t('about.v.free')}</strong> — {t('about.v.free.desc')}</li>
        <li><strong>{t('about.v.simple')}</strong> — {t('about.v.simple.desc')}</li>
        <li><strong>{t('about.v.smart')}</strong> — {t('about.v.smart.desc')}</li>
        <li><strong>{t('about.v.fast')}</strong> — {t('about.v.fast.desc')}</li>
      </ul>

      <h2>{t('about.contactTitle')}</h2>
      <p>
        {t('about.contactDesc')} <a href="mailto:humphrey1114@gmail.com" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>humphrey1114@gmail.com</a>
      </p>
    </PageLayout>
  )
}
