import { useState, useCallback, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import DropZone from './components/DropZone'
import SettingsPanel from './components/SettingsPanel'
import PreviewGrid from './components/PreviewGrid'
import TopNav from './components/TopNav'
import { useLanguage } from './i18n/LanguageContext'
import { processImage } from './core/imageProcessor'
import { downloadSingle, downloadAsZip, saveToFolder } from './core/fileExporter'
import useHistory from './hooks/useHistory'
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
  compressEnabled: false,
  compressPercent: 50,
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
  const [images, setImages, { undo, redo, canUndo, canRedo }] = useHistory([])
  const [processing, setProcessing] = useState(false)
  const fileInputRef = useRef(null)

  useEffect(() => {
    localStorage.setItem('miaocai-settings', JSON.stringify(settings))
  }, [settings])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
        e.preventDefault()
        if (e.shiftKey) { redo() } else { undo() }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [undo, redo])

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

  const handleReorderImages = useCallback((fromId, toId) => {
    setImages(prev => {
      const arr = [...prev]
      const fromIdx = arr.findIndex(i => i.id === fromId)
      const toIdx = arr.findIndex(i => i.id === toId)
      if (fromIdx < 0 || toIdx < 0) return prev
      const [moved] = arr.splice(fromIdx, 1)
      arr.splice(toIdx, 0, moved)
      return arr
    })
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
        ), { track: false })
        const result = await processImage(img.file, {
          ...settings,
          focalPoint: img.focalPoint,
        })
        updatedImages[i] = { ...img, processedBlob: result.blob, status: 'done' }
        setImages(prev => prev.map(x =>
          x.id === img.id ? { ...x, processedBlob: result.blob, status: 'done' } : x
        ), { track: false })
      } catch (err) {
        console.error('Processing failed:', err)
        updatedImages[i] = { ...img, status: 'error' }
        setImages(prev => prev.map(x =>
          x.id === img.id ? { ...x, status: 'error' } : x
        ), { track: false })
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
              <svg width="22" height="22" viewBox="0 0 501 492" fill="none">
                <path fill="#fff" d="M189.370361,93.327850 C242.464081,76.780182 294.370361,78.567902 344.621887,101.942657 C391.544678,123.769043 424.876678,158.591385 440.195343,208.822754 C443.793213,220.620560 445.091217,233.119736 447.545319,245.802734 C435.633301,245.802734 425.220245,245.802734 415.288879,245.802734 C412.980713,236.813965 411.441040,227.917496 408.405426,219.564713 C400.704346,198.374695 386.242096,182.219055 368.404785,168.940720 C343.779022,150.608994 315.734833,140.801010 285.635559,136.272446 C284.993866,136.175903 284.324921,136.260315 282.707733,136.260315 C279.417572,146.795364 275.803528,157.463623 272.759033,168.292038 C264.850159,196.421677 258.989166,224.933334 258.389740,254.283844 C257.718262,287.160217 266.053375,317.977722 281.060486,346.941132 C284.955780,354.458984 290.814819,361.171448 296.681061,367.397125 C302.701569,373.786469 310.501617,373.995209 318.403931,370.426147 C328.863617,365.702026 336.696503,357.813629 344.003998,349.281891 C344.963684,348.161377 345.915161,347.033875 347.152893,345.577240 C358.263702,353.996033 369.213593,362.292877 379.997009,370.463593 C379.929199,371.198730 380.020355,371.613159 379.853790,371.816193 C366.383179,388.236450 354.291290,405.901550 335.943878,417.747833 C303.323669,438.809540 269.960419,433.955505 245.137863,404.027283 C229.854584,385.600464 221.340988,363.774536 214.084976,341.317139 C200.657684,299.759521 201.346039,257.719604 209.363495,215.370483 C214.234314,189.642349 221.042679,164.450378 229.908188,139.812485 C230.295624,138.735748 230.576477,137.620667 231.143875,135.737030 C227.283844,136.266876 223.892914,136.621124 220.543121,137.209564 C191.394562,142.330048 164.308777,152.519882 140.894684,170.983475 C116.687988,190.072098 99.936287,213.681686 98.171165,245.790527 C87.524994,245.790527 77.099747,245.790527 65.304169,245.790527 C67.040855,236.086380 68.175415,226.720367 70.432320,217.633087 C83.837395,163.658493 117.814285,126.736862 166.842514,102.596176 C173.993210,99.075294 181.599075,96.478783 189.370361,93.327850z"/>
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
            <DropZone onFilesAdded={handleFilesAdded} currentCount={images.length} />
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
                <button className="btn-ghost" onClick={undo} disabled={!canUndo} title={t('toolbar.undo')}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M9 14L4 9l5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="btn-ghost" onClick={redo} disabled={!canRedo} title={t('toolbar.redo')}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M15 14l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 9H9.5a5.5 5.5 0 0 0 0 11H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="btn-ghost" onClick={() => fileInputRef.current?.click()}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  {t('toolbar.add')}
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,.heic,.heif"
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
              onReorder={handleReorderImages}
            />

            <DropZone onFilesAdded={handleFilesAdded} compact currentCount={images.length} />
          </>
        )}
        <footer className="app-footer">
          <span>&copy; {new Date().getFullYear()} TapCrop</span>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <a href="mailto:feedback294@163.com">Contact</a>
        </footer>
      </main>
    </div>
  )
}
