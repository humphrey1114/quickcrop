import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from './PageLayout'
import { useLanguage } from '../i18n/LanguageContext'
import { useAuth } from '../contexts/AuthContext'
import { usePro } from '../contexts/ProContext'
import './Pricing.css'

export default function Pricing() {
  const { t, lang } = useLanguage()
  const { user } = useAuth()
  const { isPro } = usePro()

  useEffect(() => {
    document.title = lang === 'zh'
      ? '定价方案 — 秒裁 TapCrop 免费与 Pro 对比'
      : 'Pricing — TapCrop Free vs Pro Plans'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', lang === 'zh'
        ? '秒裁提供慷慨的免费方案，每天可处理 100 张图片。升级 Pro 享受无限处理、更大文件、无广告体验。'
        : 'TapCrop offers a generous free plan with 100 images/day. Upgrade to Pro for unlimited processing, larger files, and ad-free experience.')
    }
  }, [lang])

  const plans = [
    {
      name: t('pricing.free'),
      price: '$0',
      period: t('pricing.forever'),
      highlight: false,
      features: [
        { label: t('pricing.dailyLimit'), value: t('pricing.free.daily') },
        { label: t('pricing.batchUpload'), value: t('pricing.free.batch') },
        { label: t('pricing.fileSize'), value: '20 MB' },
        { label: t('pricing.basicTools'), value: t('pricing.free.basicTools') },
        { label: t('pricing.adjust'), value: t('pricing.free.adjust'), disabled: true },
        { label: t('pricing.watermarkPos'), value: t('pricing.free.watermarkPos'), disabled: true },
        { label: t('pricing.templates'), value: t('pricing.free.templates') },
        { label: t('pricing.exportQuality'), value: '80%' },
        { label: t('pricing.ads'), value: t('pricing.free.ads') },
      ],
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: `/ ${t('pricing.month')}`,
      highlight: true,
      features: [
        { label: t('pricing.dailyLimit'), value: t('pricing.pro.daily') },
        { label: t('pricing.batchUpload'), value: t('pricing.pro.batch') },
        { label: t('pricing.fileSize'), value: '50 MB' },
        { label: t('pricing.basicTools'), value: t('pricing.pro.basicTools') },
        { label: t('pricing.adjust'), value: t('pricing.pro.adjust') },
        { label: t('pricing.watermarkPos'), value: t('pricing.pro.watermarkPos') },
        { label: t('pricing.templates'), value: t('pricing.pro.templates') },
        { label: t('pricing.exportQuality'), value: '100%' },
        { label: t('pricing.ads'), value: t('pricing.pro.ads') },
      ],
    },
  ]

  const handleUpgrade = () => {
    if (!user) {
      alert(lang === 'zh' ? '请先登录后再升级 Pro' : 'Please log in before upgrading to Pro')
      return
    }
    if (isPro) {
      alert(lang === 'zh' ? '你已经是 Pro 用户了！' : 'You are already a Pro member!')
      return
    }
    // Pass Firebase UID and email to Creem for webhook identification
    const params = new URLSearchParams({
      client_reference_id: user.uid,
      prefilled_email: user.email || '',
    })
    window.open(`https://www.creem.io/payment/prod_443SQW7gVPLY8Gjx6vhk7x?${params}`, '_blank')
  }

  return (
    <PageLayout title={t('pricing.title')} wide>
      <p className="pricing-subtitle">{t('pricing.subtitle')}</p>

      <div className="pricing-grid">
        {plans.map(plan => (
          <div key={plan.name} className={`pricing-card ${plan.highlight ? 'pricing-card-pro' : ''}`}>
            {plan.highlight && <span className="pricing-badge">{t('pricing.popular')}</span>}
            <h2 className="pricing-plan-name">{plan.name}</h2>
            <div className="pricing-price">
              <span className="pricing-amount">{plan.price}</span>
              <span className="pricing-period">{plan.period}</span>
            </div>
            <ul className="pricing-features">
              {plan.features.map(f => (
                <li key={f.label} className={f.disabled ? 'pricing-feature-disabled' : ''}>
                  <span className="pricing-feature-label">{f.label}</span>
                  <span className="pricing-feature-value">{f.value}</span>
                </li>
              ))}
            </ul>
            {plan.highlight ? (
              <button className="pricing-btn pricing-btn-pro" onClick={handleUpgrade} disabled={isPro}>
                {isPro ? (lang === 'zh' ? '当前方案' : 'Current Plan') : t('pricing.upgrade')}
              </button>
            ) : (
              <Link to="/app" className="pricing-btn pricing-btn-free">
                {t('pricing.startFree')}
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="pricing-faq">
        <h2>{t('pricing.faq.title')}</h2>
        <div className="pricing-faq-item">
          <h3>{t('pricing.faq.q1')}</h3>
          <p>{t('pricing.faq.a1')}</p>
        </div>
        <div className="pricing-faq-item">
          <h3>{t('pricing.faq.q2')}</h3>
          <p>{t('pricing.faq.a2')}</p>
        </div>
        <div className="pricing-faq-item">
          <h3>{t('pricing.faq.q3')}</h3>
          <p>{t('pricing.faq.a3')}</p>
        </div>
      </div>
    </PageLayout>
  )
}
