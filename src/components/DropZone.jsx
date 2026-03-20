import { useState, useRef, useCallback } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import './DropZone.css'

export default function DropZone({ onFilesAdded, compact = false }) {
  const { t } = useLanguage()
  const [dragging, setDragging] = useState(false)
  const inputRef = useRef(null)

  const handleFiles = useCallback((files) => {
    const imageFiles = Array.from(files).filter(f => f.type.startsWith('image/'))
    if (imageFiles.length > 0) {
      onFilesAdded(imageFiles)
    }
  }, [onFilesAdded])

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

  if (compact) {
    return (
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
          accept="image/*"
          multiple
          style={{ display: 'none' }}
          onChange={e => {
            handleFiles(e.target.files)
            e.target.value = ''
          }}
        />
      </div>
    )
  }

  return (
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
        <p className="dropzone-hint">{t('dropzone.hint')}</p>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        style={{ display: 'none' }}
        onChange={e => {
          handleFiles(e.target.files)
          e.target.value = ''
        }}
      />
    </div>
  )
}
