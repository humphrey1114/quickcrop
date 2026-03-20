import { useCallback, useMemo, useState } from 'react'
import WatermarkSettings from './WatermarkSettings'
import { useLanguage } from '../i18n/LanguageContext'
import './SettingsPanel.css'

// mm to px at 300dpi
const mm2px = (mm) => Math.round(mm * 300 / 25.4)

function gcd(a, b) { return b === 0 ? a : gcd(b, a % b) }

export default function SettingsPanel({ settings, onUpdate, onBatchUpdate }) {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('ratio')

  const SIZE_CATEGORIES = useMemo(() => [
    {
      key: 'ratio', label: t('cat.ratio'),
      type: 'ratio',
      items: [
        { label: t('size.16:9.landscape'), rw: 16, rh: 9 },
        { label: t('size.9:16.portrait'), rw: 9, rh: 16 },
        { label: t('size.4:3'), rw: 4, rh: 3 },
        { label: t('size.3:4'), rw: 3, rh: 4 },
        { label: t('size.1:1.square'), rw: 1, rh: 1 },
        { label: t('size.3:2'), rw: 3, rh: 2 },
        { label: t('size.2:3'), rw: 2, rh: 3 },
        { label: t('size.21:9.ultrawide'), rw: 21, rh: 9 },
      ]
    },
    {
      key: 'resolution', label: t('cat.resolution'),
      type: 'size',
      items: [
        { label: t('size.1080p'), w: 1920, h: 1080 },
        { label: t('size.2k'), w: 2560, h: 1440 },
        { label: t('size.4k'), w: 3840, h: 2160 },
        { label: t('size.720p'), w: 1280, h: 720 },
        { label: t('size.square'), w: 1080, h: 1080 },
      ]
    },
    {
      key: 'xiaohongshu', label: t('cat.xiaohongshu'),
      type: 'size',
      items: [
        { label: t('size.xhs.coverV'), w: 1242, h: 1660 },
        { label: t('size.xhs.coverH'), w: 800, h: 600 },
        { label: t('size.xhs.bg'), w: 1000, h: 800 },
        { label: t('size.xhs.imgV'), w: 900, h: 1200 },
        { label: t('size.xhs.imgSq'), w: 1080, h: 1080 },
        { label: t('size.xhs.imgH'), w: 1200, h: 900 },
        { label: t('size.xhs.avatar'), w: 400, h: 400 },
        { label: t('size.xhs.redPacket'), w: 957, h: 1278 },
        { label: t('size.xhs.story'), w: 750, h: 1250 },
        { label: t('size.xhs.logo'), w: 200, h: 200 },
      ]
    },
    {
      key: 'douyin', label: t('cat.douyin'),
      type: 'size',
      items: [
        { label: t('size.dy.coverV'), w: 1080, h: 1920 },
        { label: t('size.dy.coverH'), w: 1920, h: 1080 },
        { label: t('size.dy.avatar'), w: 200, h: 200 },
      ]
    },
    {
      key: 'weibo', label: t('cat.weibo'),
      type: 'size',
      items: [
        { label: t('size.wb.avatar'), w: 180, h: 180 },
        { label: t('size.wb.cover'), w: 980, h: 300 },
        { label: t('size.wb.content'), w: 980, h: 900 },
        { label: t('size.wb.long'), w: 800, h: 2000 },
        { label: t('size.wb.headline'), w: 980, h: 560 },
        { label: t('size.wb.focus'), w: 540, h: 260 },
      ]
    },
    {
      key: 'wechat', label: t('cat.wechat'),
      type: 'size',
      items: [
        { label: t('size.wx.cover'), w: 900, h: 383 },
        { label: t('size.wx.avatar'), w: 240, h: 240 },
        { label: t('size.wx.small'), w: 200, h: 200 },
        { label: t('size.wx.guide'), w: 900, h: 500 },
        { label: t('size.wx.qr'), w: 600, h: 600 },
        { label: t('size.wx.videoH'), w: 1080, h: 608 },
        { label: t('size.wx.videoV'), w: 1080, h: 1260 },
      ]
    },
    {
      key: 'idphoto', label: t('cat.idphoto'),
      type: 'size',
      items: [
        { label: t('size.id.1inch'), w: mm2px(25), h: mm2px(35) },
        { label: t('size.id.small2inch'), w: mm2px(33), h: mm2px(48) },
        { label: t('size.id.2inch'), w: mm2px(35), h: mm2px(53) },
        { label: t('size.id.3inch'), w: mm2px(63), h: mm2px(85) },
        { label: t('size.id.idCard'), w: mm2px(26), h: mm2px(32) },
        { label: t('size.id.driver'), w: mm2px(22), h: mm2px(32) },
        { label: t('size.id.diploma'), w: mm2px(33), h: mm2px(48) },
        { label: t('size.id.hkPass'), w: mm2px(33), h: mm2px(48) },
        { label: t('size.id.passport'), w: mm2px(33), h: mm2px(48) },
      ]
    },
    {
      key: 'paper', label: t('cat.paper'),
      type: 'size',
      items: [
        { label: 'A3', w: mm2px(297), h: mm2px(420) },
        { label: 'A4', w: mm2px(210), h: mm2px(297) },
        { label: 'A5', w: mm2px(148), h: mm2px(210) },
        { label: 'A6', w: mm2px(105), h: mm2px(148) },
        { label: 'B4', w: mm2px(250), h: mm2px(353) },
        { label: 'B5', w: mm2px(176), h: mm2px(250) },
      ]
    },
  ], [t])

  const handleSizePreset = useCallback((w, h) => {
    const g = gcd(w, h)
    onBatchUpdate({
      width: w,
      height: h,
      ratioW: w / g,
      ratioH: h / g,
      lockRatio: true,
      autoWidth: false,
      autoHeight: false,
    })
  }, [onBatchUpdate])

  const handleSwapWidthHeight = useCallback(() => {
    onBatchUpdate({
      width: settings.height,
      height: settings.width,
      ratioW: settings.ratioH,
      ratioH: settings.ratioW,
    })
  }, [onBatchUpdate, settings.width, settings.height, settings.ratioW, settings.ratioH])

  const handleRatioPreset = useCallback((rw, rh) => {
    const newHeight = Math.round(settings.width * rh / rw)
    onBatchUpdate({
      ratioW: rw,
      ratioH: rh,
      lockRatio: true,
      height: newHeight,
    })
  }, [onBatchUpdate, settings.width])

  const activeCat = SIZE_CATEGORIES.find(c => c.key === activeCategory) || SIZE_CATEGORIES[0]

  // Current ratio display
  const ratioDisplay = settings.ratioW > 0 && settings.ratioH > 0
    ? `${settings.ratioW}:${settings.ratioH}`
    : ''

  return (
    <div className="settings-panel">
      {/* Output size */}
      <div className="sp-section">
        <div className="sp-label">{t('settings.outputSize')}</div>
        <div className="sp-size-row">
          <div className="sp-size-field">
            <span className="sp-field-tag">{t('settings.width')}</span>
            <div className="sp-input-wrap">
              <input
                type="number"
                className="sp-input"
                value={settings.width}
                onChange={e => onUpdate('width', parseInt(e.target.value) || 0)}
                disabled={settings.doNotResize}
              />
              <span className="sp-unit">px</span>
            </div>
          </div>

          <div className="sp-size-mid">
            <button
              className="sp-swap-btn"
              onClick={handleSwapWidthHeight}
              disabled={settings.doNotResize}
              title={t('settings.swapWH')}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4.5 2L2 4.5L4.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.5 4.5H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M11.5 9L14 11.5L11.5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.5 11.5H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            {ratioDisplay && <span className="sp-ratio-tag">{ratioDisplay}</span>}
          </div>

          <div className="sp-size-field">
            <span className="sp-field-tag">{t('settings.height')}</span>
            <div className="sp-input-wrap">
              <input
                type="number"
                className="sp-input"
                value={settings.height}
                onChange={e => onUpdate('height', parseInt(e.target.value) || 0)}
                disabled={settings.doNotResize}
              />
              <span className="sp-unit">px</span>
            </div>
          </div>
        </div>

        {/* Category tabs */}
        <div className="sp-cat-tabs">
          {SIZE_CATEGORIES.map(cat => (
            <button
              key={cat.key}
              className={`sp-cat-tab ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
              disabled={settings.doNotResize}
            >
              {cat.label}
            </button>
          ))}
          <button
            className={`sp-cat-tab ${activeCategory === 'custom' ? 'active' : ''}`}
            onClick={() => setActiveCategory('custom')}
            disabled={settings.doNotResize}
          >
            {t('settings.custom')}
          </button>
        </div>

        {/* Category items or custom ratio input */}
        {activeCategory === 'custom' ? (
          <div className="sp-custom-ratio">
            <div className="sp-custom-ratio-row">
              <div className="sp-input-wrap">
                <input
                  type="number"
                  className="sp-input"
                  value={settings.ratioW}
                  onChange={e => onUpdate('ratioW', parseInt(e.target.value) || 0)}
                  disabled={settings.doNotResize}
                  placeholder={t('settings.widthRatio')}
                  min="1"
                />
              </div>
              <span className="sp-ratio-sep">:</span>
              <div className="sp-input-wrap">
                <input
                  type="number"
                  className="sp-input"
                  value={settings.ratioH}
                  onChange={e => onUpdate('ratioH', parseInt(e.target.value) || 0)}
                  disabled={settings.doNotResize}
                  placeholder={t('settings.heightRatio')}
                  min="1"
                />
              </div>
            </div>
            <p className="sp-custom-ratio-hint">{t('settings.customHint')}</p>
          </div>
        ) : (
          <div className="sp-cat-items">
            {activeCat.type === 'ratio'
              ? activeCat.items.map((item, idx) => (
                  <button
                    key={`${activeCat.key}-${idx}`}
                    className={`sp-cat-item ${settings.ratioW === item.rw && settings.ratioH === item.rh ? 'active' : ''}`}
                    onClick={() => handleRatioPreset(item.rw, item.rh)}
                    disabled={settings.doNotResize}
                  >
                    <span className="sp-cat-item-name">{item.label}</span>
                    <span className="sp-cat-item-size">{item.rw}:{item.rh}</span>
                  </button>
                ))
              : activeCat.items.map((item, idx) => (
                  <button
                    key={`${activeCat.key}-${idx}`}
                    className={`sp-cat-item ${settings.width === item.w && settings.height === item.h ? 'active' : ''}`}
                    onClick={() => handleSizePreset(item.w, item.h)}
                    disabled={settings.doNotResize}
                  >
                    <span className="sp-cat-item-name">{item.label}</span>
                    <span className="sp-cat-item-size">{item.w}×{item.h}</span>
                  </button>
                ))
            }
          </div>
        )}
      </div>

      {/* Options */}
      <div className="sp-section">
        <div className="sp-label">{t('settings.options')}</div>
        <label className="sp-check">
          <input
            type="checkbox"
            checked={settings.autoDetectFocal}
            onChange={e => onUpdate('autoDetectFocal', e.target.checked)}
          />
          <span>{t('settings.autoFocal')}</span>
        </label>
        <label className="sp-check">
          <input
            type="checkbox"
            checked={settings.doNotResize}
            onChange={e => onUpdate('doNotResize', e.target.checked)}
          />
          <span>{t('settings.formatOnly')}</span>
        </label>
      </div>

      {/* Watermark & Border */}
      <div className="sp-section">
        <WatermarkSettings settings={settings} onUpdate={onUpdate} />
      </div>

      <div className="sp-section">
        <button
          className={`sp-toggle-btn ${settings.borderEnabled ? 'active' : ''}`}
          onClick={() => onUpdate('borderEnabled', !settings.borderEnabled)}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          {t('border')}
        </button>
        {settings.borderEnabled && (
          <div className="sp-border-opts">
            <div className="sp-opt-row">
              <label>{t('border.size')}</label>
              <div className="sp-input-wrap compact">
                <input
                  type="number"
                  className="sp-input"
                  value={settings.borderSize}
                  onChange={e => onUpdate('borderSize', parseInt(e.target.value) || 0)}
                />
                <span className="sp-unit">px</span>
              </div>
            </div>
            <div className="sp-opt-row">
              <label>{t('border.color')}</label>
              <input
                type="color"
                className="sp-color"
                value={settings.borderColor}
                onChange={e => onUpdate('borderColor', e.target.value)}
              />
            </div>
          </div>
        )}
      </div>

      {/* Format */}
      <div className="sp-section">
        <div className="sp-label">{t('settings.outputFormat')}</div>
        <div className="sp-format-bar">
          {['jpeg', 'png', 'webp'].map(fmt => (
            <button
              key={fmt}
              className={`sp-format-btn ${settings.format === fmt ? 'active' : ''}`}
              onClick={() => onUpdate('format', fmt)}
            >
              {fmt.toUpperCase()}
            </button>
          ))}
        </div>
        {settings.format !== 'png' && (
          <div className="sp-quality">
            <div className="sp-quality-head">
              <span>{t('settings.quality')}</span>
              <span className="sp-quality-val">{settings.quality}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              value={settings.quality}
              onChange={e => onUpdate('quality', parseInt(e.target.value))}
            />
          </div>
        )}
      </div>

      {/* Rename */}
      <div className="sp-section">
        <label className="sp-check">
          <input
            type="checkbox"
            checked={settings.renameEnabled}
            onChange={e => onUpdate('renameEnabled', e.target.checked)}
          />
          <span>{t('settings.batchRename')}</span>
        </label>
        {settings.renameEnabled && (
          <div className="sp-rename">
            <div className="sp-rename-row">
              <div className="sp-rename-field">
                <span className="sp-field-tag">{t('settings.filename')}</span>
                <input
                  type="text"
                  className="sp-rename-input"
                  placeholder={t('settings.filenamePlaceholder')}
                  value={settings.renamePrefix}
                  onChange={e => onUpdate('renamePrefix', e.target.value)}
                />
              </div>
              <div className="sp-rename-field sp-rename-field-num">
                <span className="sp-field-tag">{t('settings.startNumber')}</span>
                <input
                  type="text"
                  className="sp-rename-input"
                  value={settings.renameStart}
                  onChange={e => onUpdate('renameStart', e.target.value)}
                />
              </div>
            </div>
            <div className="sp-rename-preview">
              {(() => {
                const prefix = settings.renamePrefix.trim() || '产品图'
                const startStr = settings.renameStart || '001'
                const startNum = parseInt(startStr, 10) || 0
                const padLen = startStr.length
                const ext = settings.format === 'png' ? 'png' : settings.format === 'webp' ? 'webp' : 'jpg'
                const n1 = String(startNum).padStart(padLen, '0')
                const n2 = String(startNum + 1).padStart(padLen, '0')
                const n3 = String(startNum + 2).padStart(padLen, '0')
                return (
                  <>
                    <span className="sp-rename-preview-label">{t('settings.afterExport')}</span>
                    <span className="sp-rename-preview-name">{prefix}_{n1}.{ext}</span>
                    <span className="sp-rename-preview-more">, {prefix}_{n2}.{ext}, {prefix}_{n3}.{ext} ...</span>
                  </>
                )
              })()}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
