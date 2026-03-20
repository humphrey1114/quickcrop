import './WatermarkSettings.css'
import { useLanguage } from '../i18n/LanguageContext'

export default function WatermarkSettings({ settings, onUpdate }) {
  const { t } = useLanguage()

  const POSITIONS = [
    { value: 'top-left', label: t('watermark.pos.topLeft') },
    { value: 'top-center', label: t('watermark.pos.topCenter') },
    { value: 'top-right', label: t('watermark.pos.topRight') },
    { value: 'center', label: t('watermark.pos.center') },
    { value: 'bottom-left', label: t('watermark.pos.bottomLeft') },
    { value: 'bottom-center', label: t('watermark.pos.bottomCenter') },
    { value: 'bottom-right', label: t('watermark.pos.bottomRight') },
  ]

  return (
    <div>
      <button
        className={`sp-toggle-btn ${settings.watermarkEnabled ? 'active' : ''}`}
        onClick={() => onUpdate('watermarkEnabled', !settings.watermarkEnabled)}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 12L12 2M5 2h7v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {t('watermark')}
      </button>

      {settings.watermarkEnabled && (
        <div className="watermark-options">
          <div className="wm-row">
            <label>{t('watermark.text')}</label>
            <input
              type="text"
              className="wm-text-input"
              placeholder={t('watermark.textPlaceholder')}
              value={settings.watermarkText}
              onChange={e => onUpdate('watermarkText', e.target.value)}
            />
          </div>

          <div className="wm-row">
            <label>{t('watermark.size')}</label>
            <input
              type="number"
              className="wm-num-input"
              value={settings.watermarkFontSize}
              onChange={e => onUpdate('watermarkFontSize', parseInt(e.target.value) || 16)}
              min="8"
              max="200"
            />
            <span style={{ fontSize: 12, color: 'var(--text-3)' }}>px</span>
          </div>

          <div className="wm-row">
            <label>{t('watermark.color')}</label>
            <input
              type="color"
              value={settings.watermarkColor}
              onChange={e => onUpdate('watermarkColor', e.target.value)}
            />
          </div>

          <div className="wm-row">
            <label>{t('watermark.opacity')}</label>
            <input
              type="range"
              min="5"
              max="100"
              value={settings.watermarkOpacity}
              onChange={e => onUpdate('watermarkOpacity', parseInt(e.target.value))}
            />
            <span style={{ fontSize: 12, color: 'var(--text-3)', minWidth: 32 }}>{settings.watermarkOpacity}%</span>
          </div>

          <div className="wm-row">
            <label>{t('watermark.position')}</label>
            <select
              value={settings.watermarkPosition}
              onChange={e => onUpdate('watermarkPosition', e.target.value)}
              className="wm-select"
            >
              {POSITIONS.map(p => (
                <option key={p.value} value={p.value}>{p.label}</option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  )
}
