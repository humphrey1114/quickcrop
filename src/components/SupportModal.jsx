import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import './SupportModal.css'

const AMOUNTS = [
  { value: 5, emoji: '\u2615', label: 'Coffee' },
  { value: 10, emoji: '\uD83C\uDF55', label: 'Pizza' },
  { value: 25, emoji: '\uD83C\uDF89', label: 'Party' },
  { value: 50, emoji: '\uD83D\uDE80', label: 'Rocket' },
]

const CREEM_LINK = 'https://www.creem.io/payment/prod_443SQW7gVPLY8Gjx6vhk7x'

export default function SupportModal({ onClose }) {
  const { lang } = useLanguage()
  const [selected, setSelected] = useState(10)
  const [custom, setCustom] = useState('')
  const [isCustom, setIsCustom] = useState(false)

  const amount = isCustom ? (parseInt(custom) || 0) : selected

  const handleSupport = () => {
    // Open Creem payment link with amount parameter
    const url = `${CREEM_LINK}?amount=${amount}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const isZh = lang === 'zh'

  return (
    <div className="support-overlay" onClick={onClose}>
      <div className="support-modal" onClick={e => e.stopPropagation()}>
        <button className="support-close" onClick={onClose}>&times;</button>

        <div className="support-header">
          <div className="support-icon">&hearts;</div>
          <h2 className="support-title">
            {isZh ? '\u652F\u6301 TapCrop' : 'Support TapCrop'}
          </h2>
          <p className="support-desc">
            {isZh
              ? 'TapCrop \u662F\u514D\u8D39\u5F00\u6E90\u7684\uFF0C\u4F60\u7684\u652F\u6301\u8BA9\u6211\u80FD\u7EE7\u7EED\u5F00\u53D1\u548C\u6539\u8FDB\u5B83\u3002'
              : 'TapCrop is free and open-source. Your support helps me keep building and improving it.'}
          </p>
        </div>

        <div className="support-amounts">
          {AMOUNTS.map(item => (
            <button
              key={item.value}
              className={`support-amount ${!isCustom && selected === item.value ? 'active' : ''}`}
              onClick={() => { setSelected(item.value); setIsCustom(false) }}
            >
              <span className="support-amount-emoji">{item.emoji}</span>
              <span className="support-amount-value">${item.value}</span>
              <span className="support-amount-label">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="support-custom-row">
          <button
            className={`support-custom-toggle ${isCustom ? 'active' : ''}`}
            onClick={() => setIsCustom(true)}
          >
            {isZh ? '\u81EA\u5B9A\u4E49\u91D1\u989D' : 'Custom amount'}
          </button>
          {isCustom && (
            <div className="support-custom-input-wrap">
              <span className="support-custom-currency">$</span>
              <input
                type="number"
                className="support-custom-input"
                placeholder="0"
                min="1"
                max="999"
                value={custom}
                onChange={e => setCustom(e.target.value)}
                autoFocus
              />
            </div>
          )}
        </div>

        <button
          className="support-submit"
          onClick={handleSupport}
          disabled={amount < 1}
        >
          {isZh ? `\u652F\u6301 $${amount}` : `Support $${amount}`}
        </button>

        <div className="support-footer">
          <p>
            {isZh
              ? '\u2728 \u6BCF\u4E00\u4EFD\u652F\u6301\u90FD\u8BA9 TapCrop \u53D8\u5F97\u66F4\u597D'
              : '\u2728 Every contribution makes TapCrop better for everyone'}
          </p>
          <div className="support-alt">
            {isZh ? '\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5206\u4EAB\u7ED9\u670B\u53CB\u6765\u652F\u6301\u6211\u4EEC\uFF01' : 'You can also support us by sharing TapCrop with friends!'}
            <button className="support-share" onClick={() => {
              if (navigator.share) {
                navigator.share({ title: 'TapCrop', text: 'Free batch image cropping tool', url: 'https://www.tapcrop.com' })
              } else {
                navigator.clipboard.writeText('https://www.tapcrop.com')
                alert(isZh ? '\u94FE\u63A5\u5DF2\u590D\u5236\uFF01' : 'Link copied!')
              }
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {isZh ? '\u5206\u4EAB' : 'Share'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
