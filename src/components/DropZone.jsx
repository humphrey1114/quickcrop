import { useState, useRef, useCallback } from 'react'
import { track } from '@vercel/analytics/react'
import { useLanguage } from '../i18n/LanguageContext'
import { usePro } from '../contexts/ProContext'
import './DropZone.css'

async function convertHeic(file) {
  const heic2any = (await import('heic2any')).default
  const blob = await heic2any({ blob: file, toType: 'image/jpeg', quality: 0.92 })
  const converted = Array.isArray(blob) ? blob[0] : blob
  const name = file.name.replace(/\.heic$/i, '.jpg').replace(/\.heif$/i, '.jpg')
  const newFile = new File([converted], name, { type: 'image/jpeg' })
  newFile.originalName = file.name
  return newFile
}

function isHeic(file) {
  return /\.(heic|heif)$/i.test(file.name) || file.type === 'image/heic' || file.type === 'image/heif'
}

export default function DropZone({ onFilesAdded, compact = false, currentCount = 0 }) {
  const { t, lang } = useLanguage()
  const { limits } = usePro()
  const MAX_FILE_SIZE = limits.maxFileSize
  const MAX_FILE_COUNT = limits.batchUpload
  const [dragging, setDragging] = useState(false)
  const [toast, setToast] = useState(null)
  const inputRef = useRef(null)
  const sizeLimitLabel = `${Math.round(MAX_FILE_SIZE / (1024 * 1024))}MB`
  const dropzoneHint = lang === 'zh'
    ? `支持 JPG、PNG、WebP、BMP、HEIC — 单文件最大 ${sizeLimitLabel}，最多 ${MAX_FILE_COUNT} 张`
    : `Supports JPG, PNG, WebP, BMP, HEIC — max ${sizeLimitLabel} per file, up to ${MAX_FILE_COUNT} images`

  const showToast = useCallback((msg) => {
    setToast(msg)
    setTimeout(() => setToast(null), 4000)
  }, [])

  const handleFiles = useCallback(async (files) => {
    const allFiles = Array.from(files)
    const warnings = []

    // Check file count limit
    const remaining = MAX_FILE_COUNT - currentCount
    if (allFiles.length > remaining) {
      warnings.push(t('dropzone.tooMany', { max: MAX_FILE_COUNT }))
    }
    const limited = allFiles.slice(0, Math.max(0, remaining))

    // Filter valid image types
    const imageFiles = limited.filter(f => f.type.startsWith('image/') || isHeic(f))
    const rejected = limited.length - imageFiles.length
    if (rejected > 0) {
      warnings.push(t('dropzone.invalidType', { count: rejected }))
    }

    // Check file size
    const sizeOk = []
    let oversized = 0
    for (const f of imageFiles) {
      if (f.size > MAX_FILE_SIZE) {
        oversized++
      } else {
        sizeOk.push(f)
      }
    }
    if (oversized > 0) {
      warnings.push(t('dropzone.tooLarge', { count: oversized, max: sizeLimitLabel }))
    }

    if (sizeOk.length === 0) {
      if (warnings.length > 0) showToast(warnings.join(' '))
      return
    }

    // Convert HEIC files
    let heicFailed = 0
    const converted = await Promise.all(
      sizeOk.map(f => isHeic(f) ? convertHeic(f).catch(() => { heicFailed++; return null }) : f)
    )
    if (heicFailed > 0) {
      warnings.push(t('dropzone.heicFailed', { count: heicFailed }))
    }

    const valid = converted.filter(Boolean)
    if (valid.length > 0) {
      track('upload_started', {
        count: valid.length,
        source: compact ? 'compact-dropzone' : 'main-dropzone',
        includesHeic: sizeOk.some(isHeic),
      })
      onFilesAdded(valid)
    }
    if (warnings.length > 0) showToast(warnings.join(' '))
  }, [onFilesAdded, currentCount, t, showToast, sizeLimitLabel, compact])

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    setDragging(false)
    handleFiles(e.dataTransfer.files)
  }, [handleFiles])

  const handleDragOver = useCallback((e) => {
    e.preventDefault()
    setDragging(true)
  }, [])

  const handleDragLeave = useCallback((e) => {
    e.preventDefault()
    setDragging(false)
  }, [])

  const accept = "image/*,.heic,.heif"

  const toastEl = toast && <div className="dropzone-toast">{toast}</div>

  if (compact) {
    return (
      <>
        {toastEl}
        <div
          className={`dropzone-compact ${dragging ? 'dragging' : ''}`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => inputRef.current?.click()}
        >
          <span className="dropzone-compact-icon">+</span>
          <span>{t('dropzone.addMore')}</span>
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            multiple
            style={{ display: 'none' }}
            onChange={e => {
              handleFiles(e.target.files)
              e.target.value = ''
            }}
          />
        </div>
      </>
    )
  }

  return (
    <>
      {toastEl}
      <div
        className={`dropzone ${dragging ? 'dragging' : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => inputRef.current?.click()}
      >
        <div className="dropzone-content">
          <div className="dropzone-icon-wrap">
            <svg className="dropzone-icon" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect x="6" y="10" width="36" height="28" rx="4" stroke="currentColor" strokeWidth="2" />
              <circle cx="18" cy="22" r="4" stroke="currentColor" strokeWidth="2" />
              <path d="M6 34l10-10 8 8 6-6 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M24 2v8M20 6h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <p className="dropzone-title">{t('dropzone.title')}</p>
          <p className="dropzone-hint">{dropzoneHint}</p>
        </div>
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple
          style={{ display: 'none' }}
          onChange={e => {
            handleFiles(e.target.files)
            e.target.value = ''
          }}
        />
      </div>
    </>
  )
}
