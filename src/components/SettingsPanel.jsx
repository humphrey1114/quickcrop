import { useCallback, useEffect, useMemo, useState } from 'react'
import WatermarkSettings from './WatermarkSettings'
import { useLanguage } from '../i18n/LanguageContext'
import { useAuth } from '../contexts/AuthContext'
import { db } from '../firebase'
import { collection, doc, setDoc, deleteDoc, onSnapshot } from 'firebase/firestore'
import './SettingsPanel.css'

// mm to px at 300dpi
const mm2px = (mm) => Math.round(mm * 300 / 25.4)

function gcd(a, b) { return b === 0 ? a : gcd(b, a % b) }

function useTemplates() {
  const { user } = useAuth()
  const [templates, setTemplates] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('tapcrop-templates') || '[]')
    } catch { return [] }
  })

  // Sync with Firestore when logged in
  useEffect(() => {
    if (!user) return
    const col = collection(db, 'users', user.uid, 'templates')
    const unsub = onSnapshot(col, (snap) => {
      const data = snap.docs.map(d => ({ id: d.id, ...d.data() }))
      setTemplates(data)
      localStorage.setItem('tapcrop-templates', JSON.stringify(data))
    })
    return unsub
  }, [user])

  const save = async (name, settings) => {
    const { renamePrefix, renameStart, ...config } = settings
    const id = String(Date.now())
    const tpl = { id, name, config }

    if (user) {
      await setDoc(doc(db, 'users', user.uid, 'templates', id), { name, config })
    } else {
      const next = [...templates, tpl]
      setTemplates(next)
      localStorage.setItem('tapcrop-templates', JSON.stringify(next))
    }
  }

  const remove = async (id) => {
    if (user) {
      await deleteDoc(doc(db, 'users', user.uid, 'templates', String(id)))
    } else {
      const next = templates.filter(t => t.id !== id)
      setTemplates(next)
      localStorage.setItem('tapcrop-templates', JSON.stringify(next))
    }
  }

  const update = async (id, name, settings) => {
    const { renamePrefix, renameStart, ...config } = settings
    if (user) {
      await setDoc(doc(db, 'users', user.uid, 'templates', String(id)), { name, config })
    } else {
      const next = templates.map(t => t.id === id ? { ...t, name, config } : t)
      setTemplates(next)
      localStorage.setItem('tapcrop-templates', JSON.stringify(next))
    }
  }

  return { templates, save, remove, update }
}

export default function SettingsPanel({ settings, onUpdate, onBatchUpdate }) {
  const { t, lang } = useLanguage()
  const { user } = useAuth()
  const { templates, save: saveTemplate, remove: removeTemplate, update: updateTemplate } = useTemplates()
  const [templateName, setTemplateName] = useState('')
  const [editingId, setEditingId] = useState(null)
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
    // Chinese social media - only show in Chinese
    ...(lang === 'zh' ? [
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
    ] : []),
    // International social media - only show in English
    ...(lang === 'en' ? [
    {
      key: 'twitter', label: t('cat.twitter'),
      type: 'size',
      items: [
        { label: t('size.x.header'), w: 1500, h: 500 },
        { label: t('size.x.avatar'), w: 400, h: 400 },
        { label: t('size.x.post'), w: 1024, h: 512 },
        { label: t('size.x.card'), w: 800, h: 320 },
        { label: t('size.x.summary'), w: 280, h: 150 },
      ]
    },
    {
      key: 'instagram', label: t('cat.instagram'),
      type: 'size',
      items: [
        { label: t('size.ig.avatar'), w: 110, h: 110 },
        { label: t('size.ig.square'), w: 1080, h: 1080 },
        { label: t('size.ig.portrait'), w: 1080, h: 1350 },
        { label: t('size.ig.story'), w: 1080, h: 1920 },
      ]
    },
    {
      key: 'youtube', label: t('cat.youtube'),
      type: 'size',
      items: [
        { label: t('size.yt.thumbnail'), w: 1280, h: 720 },
        { label: t('size.yt.banner'), w: 2560, h: 1440 },
        { label: t('size.yt.video4k'), w: 3840, h: 2160 },
        { label: t('size.yt.avatar'), w: 800, h: 800 },
        { label: t('size.yt.bannerDesktop'), w: 2560, h: 423 },
        { label: t('size.yt.bannerTablet'), w: 1855, h: 423 },
        { label: t('size.yt.bannerMobile'), w: 1546, h: 423 },
        { label: t('size.yt.bannerTV'), w: 2560, h: 1440 },
      ]
    },
    {
      key: 'facebook', label: t('cat.facebook'),
      type: 'size',
      items: [
        { label: t('size.fb.avatar'), w: 400, h: 400 },
        { label: t('size.fb.cover'), w: 1125, h: 633 },
        { label: t('size.fb.post'), w: 1200, h: 630 },
        { label: t('size.fb.link'), w: 1200, h: 630 },
        { label: t('size.fb.event'), w: 1920, h: 1005 },
        { label: t('size.fb.adCarousel'), w: 1080, h: 1080 },
        { label: t('size.fb.adSingle'), w: 1200, h: 628 },
      ]
    },
    {
      key: 'linkedin', label: t('cat.linkedin'),
      type: 'size',
      items: [
        { label: t('size.li.avatar'), w: 400, h: 400 },
        { label: t('size.li.cover'), w: 1584, h: 396 },
        { label: t('size.li.shared'), w: 180, h: 110 },
      ]
    },
    {
      key: 'pinterest', label: t('cat.pinterest'),
      type: 'size',
      items: [
        { label: t('size.pin.avatar'), w: 165, h: 165 },
        { label: t('size.pin.board'), w: 222, h: 150 },
        { label: t('size.pin.pin'), w: 735, h: 1102 },
      ]
    },
    {
      key: 'twitch', label: t('cat.twitch'),
      type: 'size',
      items: [
        { label: t('size.tw.avatar'), w: 800, h: 800 },
        { label: t('size.tw.banner'), w: 1920, h: 480 },
        { label: t('size.tw.videoBanner'), w: 1920, h: 1080 },
        { label: t('size.tw.thumbnail'), w: 1280, h: 720 },
        { label: t('size.tw.cover'), w: 380, h: 1200 },
        { label: t('size.tw.infoPanel'), w: 320, h: 200 },
      ]
    },
    {
      key: 'soundcloud', label: t('cat.soundcloud'),
      type: 'size',
      items: [
        { label: t('size.sc.avatar'), w: 1000, h: 1000 },
        { label: t('size.sc.album'), w: 800, h: 800 },
        { label: t('size.sc.header'), w: 2480, h: 520 },
      ]
    },
    {
      key: 'tumblr', label: t('cat.tumblr'),
      type: 'size',
      items: [
        { label: t('size.tb.avatar'), w: 128, h: 128 },
        { label: t('size.tb.banner'), w: 3000, h: 1055 },
        { label: t('size.tb.shared'), w: 500, h: 750 },
      ]
    },
    {
      key: 'etsy', label: t('cat.etsy'),
      type: 'size',
      items: [
        { label: t('size.et.cover'), w: 3360, h: 840 },
        { label: t('size.et.avatar'), w: 400, h: 400 },
        { label: t('size.et.shopIcon'), w: 500, h: 500 },
        { label: t('size.et.shopBanner'), w: 760, h: 100 },
        { label: t('size.et.thumbnail'), w: 570, h: 456 },
        { label: t('size.et.teamLogo'), w: 170, h: 100 },
        { label: t('size.et.listing'), w: 800, h: 1000 },
      ]
    },
    ] : []),
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
        { label: 'A0', w: 9933, h: 14043 },
        { label: 'A1', w: 7016, h: 9933 },
        { label: 'A2', w: 4961, h: 7016 },
        { label: 'A3', w: 3508, h: 4961 },
        { label: 'A4', w: 2480, h: 3508 },
        { label: 'A5', w: 1748, h: 2480 },
        { label: 'A6', w: 1240, h: 1748 },
        { label: 'B0', w: 11811, h: 16701 },
        { label: 'B1', w: 8350, h: 11811 },
        { label: 'B2', w: 5906, h: 8350 },
        { label: 'B3', w: 4169, h: 5906 },
        { label: 'B4', w: 2953, h: 4169 },
        { label: 'B5', w: 2079, h: 2953 },
        { label: 'C0', w: 10831, h: 15319 },
        { label: 'C1', w: 7654, h: 10831 },
        { label: 'C2', w: 5409, h: 7654 },
        { label: 'C3', w: 3827, h: 5409 },
        { label: 'C4', w: 2705, h: 3827 },
      ]
    },
  ], [t, lang])

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

      {/* Adjust */}
      <div className="sp-section">
        <button
          className={`sp-toggle-btn ${settings.adjustEnabled ? 'active' : ''}`}
          onClick={() => onUpdate('adjustEnabled', !settings.adjustEnabled)}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 3v8M4.5 5l5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          {t('adjust')}
        </button>
        {settings.adjustEnabled && (
          <div className="sp-adjust-opts">
            <div className="sp-opt-row">
              <label>{t('adjust.brightness')}</label>
              <div className="sp-slider-row">
                <input
                  type="range"
                  min="-100"
                  max="100"
                  value={settings.adjustBrightness}
                  onChange={e => onUpdate('adjustBrightness', parseInt(e.target.value))}
                />
                <span className="sp-slider-val">{settings.adjustBrightness}</span>
              </div>
            </div>
            <div className="sp-opt-row">
              <label>{t('adjust.contrast')}</label>
              <div className="sp-slider-row">
                <input
                  type="range"
                  min="-100"
                  max="100"
                  value={settings.adjustContrast}
                  onChange={e => onUpdate('adjustContrast', parseInt(e.target.value))}
                />
                <span className="sp-slider-val">{settings.adjustContrast}</span>
              </div>
            </div>
            <div className="sp-opt-row">
              <label>{t('adjust.saturation')}</label>
              <div className="sp-slider-row">
                <input
                  type="range"
                  min="-100"
                  max="100"
                  value={settings.adjustSaturation}
                  onChange={e => onUpdate('adjustSaturation', parseInt(e.target.value))}
                />
                <span className="sp-slider-val">{settings.adjustSaturation}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Compress */}
      <div className="sp-section">
        <button
          className={`sp-toggle-btn ${settings.compressEnabled ? 'active' : ''}`}
          onClick={() => onUpdate('compressEnabled', !settings.compressEnabled)}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M4 1v4M10 9v4M4 5L10 9M1 4h6M7 10h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {t('compress')}
        </button>
        {settings.compressEnabled && (
          <div className="sp-compress-opts">
            <div className="sp-compress-hint">{t('compress.hint')}</div>
            <div className="sp-quality">
              <div className="sp-quality-head">
                <span>{t('compress.level')}</span>
                <div className="sp-quality-input-wrap">
                  <input
                    type="text"
                    inputMode="numeric"
                    className="sp-quality-input"
                    value={settings.compressPercent}
                    onChange={e => {
                      const raw = e.target.value.replace(/[^0-9]/g, '')
                      if (raw === '') { onUpdate('compressPercent', ''); return }
                      onUpdate('compressPercent', Math.min(90, parseInt(raw, 10)))
                    }}
                    onBlur={() => {
                      const v = typeof settings.compressPercent === 'number' ? settings.compressPercent : 50
                      onUpdate('compressPercent', Math.max(10, Math.min(90, v || 50)))
                    }}
                  />
                  <span className="sp-quality-pct">%</span>
                </div>
              </div>
              <input
                type="range"
                min="10"
                max="90"
                value={typeof settings.compressPercent === 'number' ? settings.compressPercent : 50}
                onChange={e => onUpdate('compressPercent', parseInt(e.target.value))}
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
              <div className="sp-quality-input-wrap">
                <input
                  type="text"
                  inputMode="numeric"
                  className="sp-quality-input"
                  value={settings.quality}
                  onChange={e => {
                    const raw = e.target.value.replace(/[^0-9]/g, '')
                    if (raw === '') { onUpdate('quality', ''); return }
                    const num = parseInt(raw, 10)
                    onUpdate('quality', Math.min(100, num))
                  }}
                  onBlur={() => {
                    const v = typeof settings.quality === 'number' ? settings.quality : 10
                    onUpdate('quality', Math.max(10, Math.min(100, v || 10)))
                  }}
                />
                <span className="sp-quality-pct">%</span>
              </div>
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
                const prefix = settings.renamePrefix.trim() || t('settings.filenameDefault')
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

      {/* Templates */}
      <div className="sp-section">
        <div className="sp-label">{t('template.title')}</div>
        <div className="sp-template-hint">{t('template.configHint')}</div>
        {!user && <div className="sp-template-login-hint">{t('template.loginHint')}</div>}
        <div className="sp-template-save">
          <input
            type="text"
            className="sp-rename-input"
            placeholder={t('template.namePlaceholder')}
            value={templateName}
            onChange={e => setTemplateName(e.target.value)}
          />
          <button
            className="sp-template-btn"
            disabled={!templateName.trim()}
            onClick={() => {
              if (editingId) {
                updateTemplate(editingId, templateName.trim(), settings)
                setEditingId(null)
              } else {
                saveTemplate(templateName.trim(), settings)
              }
              setTemplateName('')
            }}
          >
            {editingId ? t('template.update') : t('template.save')}
          </button>
        </div>
        {editingId && (
          <button className="sp-template-cancel" onClick={() => { setEditingId(null); setTemplateName('') }}>
            ✕ {t('template.cancelEdit')}
          </button>
        )}
        {templates.length === 0 ? (
          <div className="sp-template-empty">{t('template.empty')}</div>
        ) : (
          <div className="sp-template-list">
            {templates.map(tpl => {
              const c = tpl.config
              const orient = c.width > c.height ? t('template.landscape') : c.width < c.height ? t('template.portrait') : ''
              const fmtLabel = (c.format || 'jpeg').toUpperCase()
              const qLabel = c.format !== 'png' ? ` ${c.quality || 92}%` : ''
              return (
                <div key={tpl.id} className="sp-template-item">
                  <div className="sp-template-item-top">
                    <span
                      className="sp-template-name"
                      onClick={() => onBatchUpdate(tpl.config)}
                      title={t('template.load')}
                    >
                      {tpl.name}
                    </span>
                    <span className="sp-template-actions">
                      <button
                        className="sp-template-edit"
                        onClick={() => { setEditingId(tpl.id); setTemplateName(tpl.name); onBatchUpdate(tpl.config) }}
                        title={t('template.edit')}
                      >
                        ✎
                      </button>
                      <button
                        className="sp-template-delete"
                        onClick={() => removeTemplate(tpl.id)}
                        title={t('template.delete')}
                      >
                        ×
                      </button>
                    </span>
                  </div>
                  <div className="sp-template-meta">
                    {c.width}×{c.height}{orient ? ` ${orient}` : ''} · {fmtLabel}{qLabel}
                    {c.watermarkEnabled && ` · ${t('watermark')}`}
                    {c.borderEnabled && ` · ${t('border')}`}
                    {c.compressEnabled && ` · ${t('compress')} ${c.compressPercent}%`}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
