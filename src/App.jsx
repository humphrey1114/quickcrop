import { useState, useCallback, useEffect, useRef } from 'react'
import DropZone from './components/DropZone'
import SettingsPanel from './components/SettingsPanel'
import PreviewGrid from './components/PreviewGrid'
import TopNav from './components/TopNav'
import { useLanguage } from './i18n/LanguageContext'
import { processImage } from './core/imageProcessor'
import { downloadSingle, downloadAsZip, saveToFolder } from './core/fileExporter'
import './App.css'

const DEFAULT_SETTINGS = {
  width: 1920,
  height: 1080,
  autoWidth: false,
  autoHeight: false,
  ratioW: 16,
  ratioH: 9,
  lockRatio: true,
  format: 'jpeg',
  quality: 92,
  doNotResize: false,
  autoDetectFocal: true,
  highQualityResize: true,
  watermarkEnabled: false,
  watermarkText: '',
  watermarkFontSize: 24,
  watermarkColor: '#ffffff',
  watermarkOpacity: 50,
  watermarkPosition: 'bottom-right',
  borderEnabled: false,
  borderSize: 0,
  borderColor: '#ffffff',
  renameEnabled: false,
  renamePrefix: '',
  renameStart: '001',
}

function loadSettings() {
  try {
    const saved = localStorage.getItem('miaocai-settings')
    if (saved) {
      const parsed = JSON.parse(saved)
      // Validate ratio consistency
      const s = { ...DEFAULT_SETTINGS, ...parsed }
      if (s.lockRatio && s.ratioW > 0 && s.ratioH > 0) {
        // Ensure height matches width * ratioH / ratioW
        const expectedH = Math.round(s.width * s.ratioH / s.ratioW)
        if (Math.abs(s.height - expectedH) > 1) {
          s.height = expectedH
        }
      }
      return s
    }
  } catch {}
  return { ...DEFAULT_SETTINGS }
}

// GCD for simplifying ratios
function gcd(a, b) { return b === 0 ? a : gcd(b, a % b) }

let imageIdCounter = 0

export default function App() {
  const { t, lang } = useLanguage()
  const [settings, setSettings] = useState(loadSettings)
  const [images, setImages] = useState([])
  const [processing, setProcessing] = useState(false)
  const fileInputRef = useRef(null)

  useEffect(() => {
    localStorage.setItem('miaocai-settings', JSON.stringify(settings))
  }, [settings])

  const updateSetting = useCallback((key, value) => {
    setSettings(prev => {
      const next = { ...prev, [key]: value }

      // When width changes and ratio is locked, recalculate height
      if (key === 'width' && prev.lockRatio && !prev.autoWidth && !prev.autoHeight) {
        if (next.ratioW > 0 && next.ratioH > 0) {
          next.height = Math.round(value * next.ratioH / next.ratioW)
        }
      }
      // When height changes and ratio is locked, recalculate width
      else if (key === 'height' && prev.lockRatio && !prev.autoHeight && !prev.autoWidth) {
        if (next.ratioW > 0 && next.ratioH > 0) {
          next.width = Math.round(value * next.ratioW / next.ratioH)
        }
      }
      // When ratioW changes, recalculate height from current width
      else if (key === 'ratioW' && prev.lockRatio && value > 0 && next.ratioH > 0) {
        next.height = Math.round(next.width * next.ratioH / value)
      }
      // When ratioH changes, recalculate height from current width
      else if (key === 'ratioH' && prev.lockRatio && value > 0 && next.ratioW > 0) {
        next.height = Math.round(next.width * value / next.ratioW)
      }

      return next
    })
  }, [])

  const updateSettingsBatch = useCallback((updates) => {
    setSettings(prev => {
      const next = { ...prev, ...updates }
      // If batch includes ratio changes, ensure width/height consistency
      if (('ratioW' in updates || 'ratioH' in updates) && next.lockRatio) {
        if (next.ratioW > 0 && next.ratioH > 0 && !('height' in updates)) {
          next.height = Math.round(next.width * next.ratioH / next.ratioW)
        }
      }
      return next
    })
  }, [])

  const handleFilesAdded = useCallback(async (files) => {
    const newImages = files.map(file => ({
      id: ++imageIdCounter,
      file,
      name: file.name,
      originalUrl: URL.createObjectURL(file),
      previewUrl: null,
      processedBlob: null,
      naturalWidth: 0,
      naturalHeight: 0,
      focalPoint: null,
      status: 'pending',
    }))
    setImages(prev => [...prev, ...newImages])

    for (const img of newImages) {
      const el = new Image()
      el.src = img.originalUrl
      await new Promise(resolve => {
        el.onload = () => {
          setImages(prev => prev.map(i =>
            i.id === img.id ? { ...i, naturalWidth: el.naturalWidth, naturalHeight: el.naturalHeight } : i
          ))
          resolve()
        }
        el.onerror = resolve
      })
    }
  }, [])

  const handleUpdateFocalPoint = useCallback((imageId, focalPoint) => {
    setImages(prev => prev.map(img =>
      img.id === imageId ? { ...img, focalPoint } : img
    ))
  }, [])

  const handleRemoveImage = useCallback((imageId) => {
    setImages(prev => {
      const img = prev.find(i => i.id === imageId)
      if (img) {
        URL.revokeObjectURL(img.originalUrl)
        if (img.previewUrl) URL.revokeObjectURL(img.previewUrl)
      }
      return prev.filter(i => i.id !== imageId)
    })
  }, [])

  const handleProcess = useCallback(async () => {
    if (images.length === 0) return
    setProcessing(true)
    const updatedImages = [...images]

    for (let i = 0; i < updatedImages.length; i++) {
      const img = updatedImages[i]
      try {
        setImages(prev => prev.map(x =>
          x.id === img.id ? { ...x, status: 'processing' } : x
        ))
        const result = await processImage(img.file, {
          ...settings,
          focalPoint: img.focalPoint,
        })
        updatedImages[i] = { ...img, processedBlob: result.blob, status: 'done' }
        setImages(prev => prev.map(x =>
          x.id === img.id ? { ...x, processedBlob: result.blob, status: 'done' } : x
        ))
      } catch (err) {
        console.error('Processing failed:', err)
        updatedImages[i] = { ...img, status: 'error' }
        setImages(prev => prev.map(x =>
          x.id === img.id ? { ...x, status: 'error' } : x
        ))
      }
    }
    setProcessing(false)
  }, [images, settings])

  const buildFileList = useCallback((doneImages) => {
    const ext = settings.format === 'png' ? 'png' : settings.format === 'webp' ? 'webp' : 'jpg'
    return doneImages.map((img, idx) => {
      let name
      if (settings.renameEnabled && settings.renamePrefix.trim()) {
        const startStr = settings.renameStart || '001'
        const startNum = parseInt(startStr, 10) || 0
        const padLen = startStr.length
        const num = String(startNum + idx).padStart(padLen, '0')
        name = settings.renamePrefix.trim() + '_' + num + '.' + ext
      } else {
        name = img.name.replace(/\.[^.]+$/, '') + '.' + ext
      }
      return { blob: img.processedBlob, filename: name }
    })
  }, [settings])

  const handleDownloadAll = useCallback(async () => {
    const doneImages = images.filter(i => i.processedBlob)
    if (doneImages.length === 0) return

    const files = buildFileList(doneImages)

    if (files.length === 1) {
      downloadSingle(files[0].blob, files[0].filename)
    } else {
      await downloadAsZip(files)
    }
  }, [images, buildFileList])

  const handleSaveToFolder = useCallback(async () => {
    const doneImages = images.filter(i => i.processedBlob)
    if (doneImages.length === 0) return

    const files = buildFileList(doneImages)

    await saveToFolder(files)
  }, [images, buildFileList])

  const handleClear = useCallback(() => {
    images.forEach(img => {
      URL.revokeObjectURL(img.originalUrl)
      if (img.previewUrl) URL.revokeObjectURL(img.previewUrl)
    })
    setImages([])
  }, [images])

  const doneCount = images.filter(i => i.status === 'done').length
  const hasProcessed = doneCount > 0
  const pendingCount = images.filter(i => i.status === 'pending' || i.status === 'error').length

  // Compute display ratio
  const displayRatio = settings.ratioW > 0 && settings.ratioH > 0
    ? (() => {
        const g = gcd(settings.width, settings.height)
        return `${settings.width / g}:${settings.height / g}`
      })()
    : ''

  return (
    <div className="app">
      {/* Left sidebar */}
      <aside className="sidebar">
        <div className="sidebar-inner">
          <div className="sidebar-brand">
            <div className="brand-icon">
              <svg width="22" height="22" viewBox="0 0 100 100" fill="none">
                <path d="M18 35 L18 18 L42 18" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M82 65 L82 82 L58 82" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="50" cy="50" r="12" stroke="#fff" strokeWidth="5" fill="none"/>
                <circle cx="50" cy="50" r="4.5" fill="#fff"/>
              </svg>
            </div>
            <div className="brand-text">
              <h1 className="brand-name">{t('brand.name')}</h1>
              {lang === 'zh' && <span className="brand-tag">{t('brand.tag')}</span>}
            </div>
          </div>

          <SettingsPanel settings={settings} onUpdate={updateSetting} onBatchUpdate={updateSettingsBatch} />
        </div>

        <div className="sidebar-footer">
          <button
            className="btn-action btn-process"
            onClick={handleProcess}
            disabled={processing || images.length === 0}
          >
            {processing ? (
              <span className="btn-processing">
                <span className="spinner" />
                {t('action.processing')}
              </span>
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 6l5 5L16 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {images.length > 0 ? t('action.processCount', { count: images.length }) : t('action.process')}
              </>
            )}
          </button>

          {hasProcessed && (
            <>
              <button className="btn-action btn-download" onClick={handleDownloadAll}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2v9M4 8l4 4 4-4M2 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {doneCount === 1 ? t('action.download') : t('action.downloadZip', { count: doneCount })}
              </button>
              {'showDirectoryPicker' in window && (
                <button className="btn-action btn-folder" onClick={handleSaveToFolder}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 4h4l2 2h6v7H2V4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t('action.saveToFolder')}
                </button>
              )}
            </>
          )}
        </div>
      </aside>

      {/* Main content */}
      <main className="main-area">
        <TopNav />
        {images.length === 0 ? (
          <div className="welcome">
            <div className="welcome-header">
              <h2 className="welcome-title">{t('welcome.title')}</h2>
              <p className="welcome-desc">
                {t('welcome.desc')}
              </p>
            </div>
            <DropZone onFilesAdded={handleFilesAdded} />
            <div className="features">
              <div className="feature">
                <div className="feature-dot" style={{ background: '#007AFF' }} />
                <div>
                  <div className="feature-name">{t('feature.smartCrop')}</div>
                  <div className="feature-text">{t('feature.smartCrop.desc')}</div>
                </div>
              </div>
              <div className="feature">
                <div className="feature-dot" style={{ background: '#FF9500' }} />
                <div>
                  <div className="feature-name">{t('feature.batch')}</div>
                  <div className="feature-text">{t('feature.batch.desc')}</div>
                </div>
              </div>
              <div className="feature">
                <div className="feature-dot" style={{ background: '#34C759' }} />
                <div>
                  <div className="feature-name">{t('feature.privacy')}</div>
                  <div className="feature-text">{t('feature.privacy.desc')}</div>
                </div>
              </div>
              <div className="feature">
                <div className="feature-dot" style={{ background: '#AF52DE' }} />
                <div>
                  <div className="feature-name">{t('feature.free')}</div>
                  <div className="feature-text">{t('feature.free.desc')}</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="toolbar">
              <div className="toolbar-info">
                <span className="toolbar-count">{t('toolbar.images', { count: images.length })}</span>
                {pendingCount > 0 && <span className="tag tag-pending">{t('toolbar.pending', { count: pendingCount })}</span>}
                {doneCount > 0 && <span className="tag tag-done">{t('toolbar.done', { count: doneCount })}</span>}
              </div>
              <div className="toolbar-actions">
                <button className="btn-ghost" onClick={() => fileInputRef.current?.click()}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  {t('toolbar.add')}
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  style={{ display: 'none' }}
                  onChange={e => {
                    handleFilesAdded(Array.from(e.target.files))
                    e.target.value = ''
                  }}
                />
                <button className="btn-ghost btn-danger" onClick={handleClear}>
                  {t('toolbar.clear')}
                </button>
              </div>
            </div>

            <PreviewGrid
              images={images}
              settings={settings}
              onUpdateFocalPoint={handleUpdateFocalPoint}
              onRemoveImage={handleRemoveImage}
            />

            <DropZone onFilesAdded={handleFilesAdded} compact />
          </>
        )}
      </main>
    </div>
  )
}
