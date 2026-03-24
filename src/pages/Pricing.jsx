import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { track } from '@vercel/analytics/react'
import PageLayout from './PageLayout'
import { useLanguage } from '../i18n/LanguageContext'
import { useAuth } from '../contexts/AuthContext'
import { usePro } from '../contexts/ProContext'
import './Pricing.css'

export default function Pricing() {
  const { t, lang } = useLanguage()
  const { user } = useAuth()
  const { isPro } = usePro()
  const [searchParams] = useSearchParams()
  const [checkoutLoading, setCheckoutLoading] = useState(false)

  useEffect(() => {
    document.title = lang === 'zh'
      ? '定价方案 | TapCrop 免费版与 Pro 对比'
      : 'Pricing | TapCrop Free vs Pro Plans'

    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', lang === 'zh'
        ? 'TapCrop 提供免费版与 Pro 版。免费版每天可处理 100 张图片，升级 Pro 可解锁无限处理、更大文件和更多高级功能。'
        : 'TapCrop offers a free plan and Pro subscription. Start free with 100 images per day, then upgrade for unlimited processing, larger files, and advanced controls.')
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

  const handleUpgrade = async () => {
    if (!user) {
      alert(lang === 'zh' ? '请先登录后再升级 Pro' : 'Please log in before upgrading to Pro')
      return
    }

    if (isPro) {
      alert(lang === 'zh' ? '你已经是 Pro 用户了' : 'You are already a Pro member')
      return
    }

    setCheckoutLoading(true)

    try {
      const response = await fetch('/api/create-creem-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.uid,
          email: user.email || '',
          locale: lang,
        }),
      })

      const data = await response.json().catch(() => ({}))
      const checkoutUrl = data.checkoutUrl || data.fallbackUrl

      if (!checkoutUrl) {
        throw new Error(data.error || 'Checkout URL missing')
      }

      track('pricing_checkout_started', {
        plan: 'pro',
        loggedIn: true,
        checkoutMode: data.checkoutUrl ? 'api' : 'legacy-fallback',
      })

      window.location.assign(checkoutUrl)
    } catch (error) {
      console.error('Checkout start failed:', error)
      alert(lang === 'zh'
        ? '暂时无法打开支付页面，请稍后再试。'
        : 'Unable to open checkout right now. Please try again in a moment.')
    } finally {
      setCheckoutLoading(false)
    }
  }

  const successNotice = searchParams.get('checkout') === 'success'
  const canceledNotice = searchParams.get('checkout') === 'canceled'

  return (
    <PageLayout title={t('pricing.title')} wide>
      <p className="pricing-subtitle">{t('pricing.subtitle')}</p>
      {successNotice && (
        <p className="pricing-subtitle">
          {lang === 'zh'
            ? '支付已完成。如果你的 Pro 状态没有立刻更新，刷新页面或重新登录一次即可。'
            : 'Payment completed. If your Pro status does not update immediately, refresh the page or sign in again.'}
        </p>
      )}
      {canceledNotice && (
        <p className="pricing-subtitle">
          {lang === 'zh'
            ? '你已取消本次支付，没有产生扣款。'
            : 'Checkout canceled. No charge was made.'}
        </p>
      )}

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
              {plan.features.map((feature) => (
                <li key={feature.label} className={feature.disabled ? 'pricing-feature-disabled' : ''}>
                  <span className="pricing-feature-label">{feature.label}</span>
                  <span className="pricing-feature-value">{feature.value}</span>
                </li>
              ))}
            </ul>
            {plan.highlight ? (
              <button
                className="pricing-btn pricing-btn-pro"
                onClick={handleUpgrade}
                disabled={isPro || checkoutLoading}
              >
                {isPro
                  ? (lang === 'zh' ? '当前方案' : 'Current Plan')
                  : checkoutLoading
                    ? (lang === 'zh' ? '跳转中...' : 'Redirecting...')
                    : t('pricing.upgrade')}
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
