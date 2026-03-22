import { useState, useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import './HeroDemo.css'

const STEPS = [
  { icon: '📁', delay: 0 },
  { icon: '✂️', delay: 1.2 },
  { icon: '✅', delay: 2.4 },
]

export default function HeroDemo() {
  const { lang } = useLanguage()
  const isZh = lang === 'zh'
  const [activeStep, setActiveStep] = useState(-1)

  useEffect(() => {
    const timers = []
    // Animate steps sequentially
    STEPS.forEach((step, i) => {
      timers.push(setTimeout(() => setActiveStep(i), step.delay * 1000 + 500))
    })
    // Loop
    timers.push(setTimeout(() => setActiveStep(-1), 4500))
    const loop = setInterval(() => {
      setActiveStep(-1)
      STEPS.forEach((step, i) => {
        timers.push(setTimeout(() => setActiveStep(i), step.delay * 1000 + 500))
      })
      timers.push(setTimeout(() => setActiveStep(-1), 4500))
    }, 5000)
    return () => { timers.forEach(clearTimeout); clearInterval(loop) }
  }, [])

  const labels = isZh
    ? ['上传图片', '智能裁剪', '批量导出']
    : ['Upload', 'Smart Crop', 'Export']

  return (
    <div className="hero-demo">
      <div className="hero-flow">
        {STEPS.map((step, i) => (
          <div key={i} className="hero-flow-item">
            {i > 0 && (
              <div className={`hero-flow-arrow ${activeStep >= i ? 'active' : ''}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
            <div className={`hero-flow-step ${activeStep >= i ? 'active' : ''}`}>
              <div className="hero-flow-icon">{step.icon}</div>
              <div className="hero-flow-label">{labels[i]}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Animated preview cards */}
      <div className="hero-cards">
        <div className={`hero-card hero-card-1 ${activeStep >= 0 ? 'show' : ''}`}>
          <div className="hero-card-img" />
          <div className="hero-card-bar" />
        </div>
        <div className={`hero-card hero-card-2 ${activeStep >= 0 ? 'show' : ''}`}>
          <div className="hero-card-img" />
          <div className="hero-card-bar" />
        </div>
        <div className={`hero-card hero-card-3 ${activeStep >= 0 ? 'show' : ''}`}>
          <div className="hero-card-img" />
          <div className="hero-card-bar" />
        </div>

        {/* Crop frame overlay */}
        {activeStep >= 1 && (
          <div className="hero-crop-frame" />
        )}

        {/* Done checkmarks */}
        {activeStep >= 2 && (
          <div className="hero-done-overlay">
            <svg viewBox="0 0 36 36" className="hero-check">
              <circle cx="18" cy="18" r="15" fill="#34c759" />
              <path d="M10 18l5 5 11-11" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}
