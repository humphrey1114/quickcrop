import { useState, useRef } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { processImage } from '../core/imageProcessor'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'
import './ExportBundleModal.css'

const BUNDLES = [
  {
    id: 'instagram',
    icon: '\u{1F4F8}',
    sizes: [
      { name: 'Profile', w: 320, h: 320 },
      { name: 'Square', w: 1080, h: 1080 },
      { name: 'Portrait', w: 1080, h: 1350 },
      { name: 'Story', w: 1080, h: 1920 },
    ]
  },
  {
    id: 'youtube',
    icon: '\u{1F3AC}',
    sizes: [
      { name: 'Thumbnail', w: 1280, h: 720 },
      { name: 'Banner', w: 2560, h: 1440 },
      { name: 'Avatar', w: 800, h: 800 },
    ]
  },
  {
    id: 'twitter',
    icon: '\u{1F426}',
    sizes: [
      { name: 'Header', w: 1500, h: 500 },
      { name: 'Post', w: 1200, h: 675 },
      { name: 'Avatar', w: 400, h: 400 },
    ]
  },
  {
    id: 'facebook',
    icon: '\u{1F464}',
    sizes: [
      { name: 'Cover', w: 820, h: 312 },
      { name: 'Post', w: 1200, h: 630 },
      { name: 'Avatar', w: 170, h: 170 },
    ]
  },
]

export default function ExportBundleModal({ onClose, images, settings }) {
  const { t } = useLanguage()
  const [selectedBundle, setSelectedBundle] = useState(null)
  const [generating, setGenerating] = useState(false)
  const [progress, setProgress] = useState({ current: 0, total: 0 })
  const abortRef = useRef(false)

  const handleGenerate = async () => {
    const bundle = BUNDLES.find(b => b.id === selectedBundle)
    if (!bundle) return

    const doneImages = images.filter(i => i.file)
    if (doneImages.length === 0) return

    setGenerating(true)
    abortRef.current = false
    const total = doneImages.length * bundle.sizes.length
    setProgress({ current: 0, total })

    const zip = new JSZip()
    let processed = 0

    const ext = settings.format === 'png' ? 'png' : settings.format === 'webp' ? 'webp' : 'jpg'

    for (const size of bundle.sizes) {
      const folder = zip.folder(`${t('bundle.' + bundle.id)}/${size.name}_${size.w}x${size.h}`)

      for (const img of doneImages) {
        if (abortRef.current) break

        try {
          const overrideSettings = {
            ...settings,
            width: size.w,
            height: size.h,
            autoWidth: false,
            autoHeight: false,
            doNotResize: false,
            focalPoint: img.focalPoint,
            rotation: img.rotation || 0,
            flipH: !!img.flipH,
            flipV: !!img.flipV,
          }

          const result = await processImage(img.file, overrideSettings)
          const filename = img.name.replace(/\.[^.]+$/, '') + '.' + ext
          folder.file(filename, result.blob)
        } catch (err) {
          console.error('Bundle processing failed for', img.name, err)
        }

        processed++
        setProgress({ current: processed, total })
      }
    }

    if (!abortRef.current) {
      const content = await zip.generateAsync(
        { type: 'blob', compression: 'DEFLATE', compressionOptions: { level: 6 } }
      )
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
      saveAs(content, `${bundle.id}_kit_${timestamp}.zip`)
    }

    setGenerating(false)
    setProgress({ current: 0, total: 0 })
  }

  const handleClose = () => {
    if (generating) {
      abortRef.current = true
    }
    onClose()
  }

  const progressPercent = progress.total > 0
    ? Math.round((progress.current / progress.total) * 100)
    : 0

  return (
    <div className="bundle-overlay" onClick={handleClose}>
      <div className="bundle-modal" onClick={e => e.stopPropagation()}>
        <button className="bundle-close" onClick={handleClose}>&times;</button>

        <div className="bundle-header">
          <h2 className="bundle-title">{t('bundle.title')}</h2>
          <p className="bundle-desc">{t('bundle.desc')}</p>
        </div>

        <div className="bundle-grid">
          {BUNDLES.map(bundle => (
            <div
              key={bundle.id}
              className={`bundle-card ${selectedBundle === bundle.id ? 'active' : ''}`}
              onClick={() => !generating && setSelectedBundle(bundle.id)}
            >
              <div className="bundle-card-icon">{bundle.icon}</div>
              <div className="bundle-card-info">
                <div className="bundle-card-name">{t('bundle.' + bundle.id)}</div>
                <div className="bundle-card-count">
                  {t('bundle.sizes', { count: bundle.sizes.length })}
                </div>
              </div>
              <ul className="bundle-card-sizes">
                {bundle.sizes.map(s => (
                  <li key={s.name}>{s.name} ({s.w}&times;{s.h})</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {generating && (
          <div className="bundle-progress">
            <div className="bundle-progress-bar">
              <div
                className="bundle-progress-fill"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="bundle-progress-text">
              {progress.current} / {progress.total} ({progressPercent}%)
            </span>
          </div>
        )}

        <button
          className="bundle-generate"
          onClick={handleGenerate}
          disabled={!selectedBundle || generating}
        >
          {generating ? t('bundle.generating') : t('bundle.generate')}
        </button>
      </div>
    </div>
  )
}
