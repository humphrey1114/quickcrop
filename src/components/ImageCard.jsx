import { useRef, useState, useCallback, useEffect, useMemo } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import './ImageCard.css'

export default function ImageCard({ image, settings, onUpdateFocalPoint, onRemoveImage }) {
  const { t } = useLanguage()
  const containerRef = useRef(null)
  const [dragging, setDragging] = useState(false)

  const { naturalWidth, naturalHeight, focalPoint } = image
  const targetW = settings.width
  const targetH = settings.height

  const focalX = focalPoint ? focalPoint.x : 0.5
  const focalY = focalPoint ? focalPoint.y : 0.5

  // Calculate the actual crop region for preview overlay
  const cropRegion = useMemo(() => {
    if (settings.doNotResize || !naturalWidth || !naturalHeight || !targetW || !targetH) return null
    const targetRatio = targetW / targetH
    const srcRatio = naturalWidth / naturalHeight

    let cropX, cropY, cropW, cropH
    if (Math.abs(srcRatio - targetRatio) < 0.01) {
      // Same ratio, no crop needed
      return null
    } else if (srcRatio > targetRatio) {
      // Source is wider: crop sides
      cropH = naturalHeight
      cropW = Math.round(naturalHeight * targetRatio)
      cropY = 0
      cropX = Math.round((naturalWidth - cropW) * focalX)
      cropX = Math.max(0, Math.min(cropX, naturalWidth - cropW))
    } else {
      // Source is taller: crop top/bottom
      cropW = naturalWidth
      cropH = Math.round(naturalWidth / targetRatio)
      cropX = 0
      cropY = Math.round((naturalHeight - cropH) * focalY)
      cropY = Math.max(0, Math.min(cropY, naturalHeight - cropH))
    }

    return {
      x: cropX / naturalWidth * 100,
      y: cropY / naturalHeight * 100,
      w: cropW / naturalWidth * 100,
      h: cropH / naturalHeight * 100,
    }
  }, [naturalWidth, naturalHeight, targetW, targetH, focalX, focalY, settings.doNotResize])

  const handlePointerDown = useCallback((e) => {
    if (settings.doNotResize) return
    e.preventDefault()
    setDragging(true)
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height))
    onUpdateFocalPoint(image.id, { x, y })
  }, [image.id, onUpdateFocalPoint, settings.doNotResize])

  const handlePointerMove = useCallback((e) => {
    if (!dragging) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height))
    onUpdateFocalPoint(image.id, { x, y })
  }, [dragging, image.id, onUpdateFocalPoint])

  const handlePointerUp = useCallback(() => {
    setDragging(false)
  }, [])

  useEffect(() => {
    if (dragging) {
      window.addEventListener('pointermove', handlePointerMove)
      window.addEventListener('pointerup', handlePointerUp)
      return () => {
        window.removeEventListener('pointermove', handlePointerMove)
        window.removeEventListener('pointerup', handlePointerUp)
      }
    }
  }, [dragging, handlePointerMove, handlePointerUp])

  const statusLabel = {
    processing: { cls: 'status-processing', text: t('status.processing') },
    done: { cls: 'status-done', text: t('status.done') },
    error: { cls: 'status-error', text: t('status.error'), tooltip: image.errorMsg },
  }[image.status]

  return (
    <div className={`image-card ${image.status}`}>
      {/* Original image with crop overlay */}
      <div
        ref={containerRef}
        className="image-card-preview"
        onPointerDown={handlePointerDown}
      >
        <img
          src={image.originalUrl}
          alt={image.name}
          className="image-card-img"
          draggable={false}
        />

        {/* Gray overlay on areas that will be cropped away */}
        {cropRegion && (
          <>
            {/* Top cropped area */}
            {cropRegion.y > 0.1 && (
              <div className="crop-overlay" style={{
                top: 0, left: 0, right: 0, height: `${cropRegion.y}%`
              }} />
            )}
            {/* Bottom cropped area */}
            {(100 - cropRegion.y - cropRegion.h) > 0.1 && (
              <div className="crop-overlay" style={{
                bottom: 0, left: 0, right: 0, height: `${100 - cropRegion.y - cropRegion.h}%`
              }} />
            )}
            {/* Left cropped area */}
            {cropRegion.x > 0.1 && (
              <div className="crop-overlay" style={{
                top: `${cropRegion.y}%`, left: 0, width: `${cropRegion.x}%`, height: `${cropRegion.h}%`
              }} />
            )}
            {/* Right cropped area */}
            {(100 - cropRegion.x - cropRegion.w) > 0.1 && (
              <div className="crop-overlay" style={{
                top: `${cropRegion.y}%`, right: 0, width: `${100 - cropRegion.x - cropRegion.w}%`, height: `${cropRegion.h}%`
              }} />
            )}
            {/* Blue border around kept area */}
            <div className="crop-border" style={{
              top: `${cropRegion.y}%`, left: `${cropRegion.x}%`,
              width: `${cropRegion.w}%`, height: `${cropRegion.h}%`
            }} />
          </>
        )}

        {/* Watermark preview - positioned inside crop region */}
        {settings.watermarkEnabled && settings.watermarkText && (
          <div
            className="watermark-preview-container"
            style={cropRegion ? {
              position: 'absolute',
              top: `${cropRegion.y}%`,
              left: `${cropRegion.x}%`,
              width: `${cropRegion.w}%`,
              height: `${cropRegion.h}%`,
            } : {
              position: 'absolute',
              top: 0, left: 0, width: '100%', height: '100%',
            }}
          >
            <div
              className="watermark-preview"
              style={{
                ...(() => {
                  const pos = settings.watermarkPosition || 'bottom-right'
                  const pad = '6px'
                  const s = {}
                  if (pos.includes('top')) { s.top = pad }
                  if (pos.includes('bottom')) { s.bottom = pad }
                  if (pos === 'center') { s.top = '50%'; s.left = '50%'; s.transform = 'translate(-50%, -50%)' }
                  if (pos.includes('left')) { s.left = pad }
                  if (pos.includes('right')) { s.right = pad }
                  if (pos === 'top-center' || pos === 'bottom-center') { s.left = '50%'; s.transform = 'translateX(-50%)' }
                  return s
                })(),
                color: settings.watermarkColor,
                opacity: settings.watermarkOpacity / 100,
                fontSize: `${Math.max(10, settings.watermarkFontSize * 0.35)}px`,
              }}
            >
              {settings.watermarkText}
            </div>
          </div>
        )}

        {/* Focal point indicator */}
        {!settings.doNotResize && (
          <>
            <div
              className="focal-point"
              style={{ left: `${focalX * 100}%`, top: `${focalY * 100}%` }}
            />
            {!focalPoint && (
              <div className="focal-hint">{t('imageCard.focalHint')}</div>
            )}
          </>
        )}

        {/* Status label */}
        {statusLabel && (
          <span className={`status-label ${statusLabel.cls}`} title={statusLabel.tooltip || ''}>{statusLabel.text}</span>
        )}

        {/* Remove button */}
        <button
          className="image-card-remove"
          onClick={(e) => { e.stopPropagation(); onRemoveImage(image.id) }}
          title={t('imageCard.remove')}
          aria-label={t('imageCard.remove')}
        >
          ×
        </button>
      </div>

      {/* File info */}
      <div className="image-card-info">
        <span className="image-card-name" title={image.name}>{image.name}</span>
        <span className="image-card-meta">
          {naturalWidth} × {naturalHeight}
          {image.status === 'done' && (
            <span className="meta-arrow"> → {targetW} × {targetH}</span>
          )}
        </span>
      </div>
    </div>
  )
}
