import { useState, useRef, useCallback } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import './BeforeAfter.css'

export default function BeforeAfter() {
  const { lang } = useLanguage()
  const isZh = lang === 'zh'
  const [position, setPosition] = useState(50)
  const containerRef = useRef(null)
  const dragging = useRef(false)

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100))
    setPosition(x)
  }, [])

  const handlePointerDown = useCallback((e) => {
    e.preventDefault()
    dragging.current = true
    updatePosition(e.clientX)
    const onMove = (e) => { if (dragging.current) updatePosition(e.clientX) }
    const onUp = () => { dragging.current = false; window.removeEventListener('pointermove', onMove); window.removeEventListener('pointerup', onUp) }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
  }, [updatePosition])

  return (
    <div className="ba-container" ref={containerRef} onPointerDown={handlePointerDown}>
      {/* After image (full, behind) */}
      <div className="ba-after">
        <img src="/demo-after.svg" alt="After crop" draggable={false} />
        <span className="ba-label ba-label-after">{isZh ? '裁剪后' : 'After'}</span>
      </div>

      {/* Before image (clipped) */}
      <div className="ba-before" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <img src="/demo-before.svg" alt="Before crop" draggable={false} />
        <span className="ba-label ba-label-before">{isZh ? '裁剪前' : 'Before'}</span>
      </div>

      {/* Slider handle */}
      <div className="ba-slider" style={{ left: `${position}%` }}>
        <div className="ba-line" />
        <div className="ba-handle">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M8 5l-5 7 5 7M16 5l5 7-5 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
