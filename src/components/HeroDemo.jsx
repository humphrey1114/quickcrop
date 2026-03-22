import { useState, useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import './HeroDemo.css'

const STEPS = [
  { icon: '📁' },
  { icon: '✂️' },
  { icon: '✅' },
]

export default function HeroDemo() {
  const { lang } = useLanguage()
  const isZh = lang === 'zh'
  // cardPhase: 0=cards fly in, 1=crop frame, 2=done check, -1=reset
  const [cardPhase, setCardPhase] = useState(-1)

  useEffect(() => {
    const timers = []
    const runCycle = () => {
      setCardPhase(0)                                         // cards appear
      timers.push(setTimeout(() => setCardPhase(1), 1200))    // crop frame
      timers.push(setTimeout(() => setCardPhase(2), 2400))    // done check
      timers.push(setTimeout(() => setCardPhase(-1), 4500))   // reset
    }
    // First cycle
    timers.push(setTimeout(runCycle, 500))
    // Loop
    const loop = setInterval(runCycle, 5000)
    return () => { timers.forEach(clearTimeout); clearInterval(loop) }
  }, [])

  const labels = isZh
    ? ['上传图片', '精准裁剪', '批量导出']
    : ['Upload', 'Crop', 'Export']

  return (
    <div className="hero-demo">
      {/* Flow steps — always visible, no animation */}
      <div className="hero-flow">
        {STEPS.map((step, i) => (
          <div key={i} className="hero-flow-item">
            {i > 0 && (
              <div className="hero-flow-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
            <div className="hero-flow-step">
              <div className="hero-flow-icon">{step.icon}</div>
              <div className="hero-flow-label">{labels[i]}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Animated preview cards */}
      <div className="hero-cards">
        <div className={`hero-card hero-card-1 ${cardPhase >= 0 ? 'show' : ''}`}>
          <div className="hero-card-img" />
          <div className="hero-card-bar" />
        </div>
        <div className={`hero-card hero-card-2 ${cardPhase >= 0 ? 'show' : ''}`}>
          <div className="hero-card-img" />
          <div className="hero-card-bar" />
        </div>
        <div className={`hero-card hero-card-3 ${cardPhase >= 0 ? 'show' : ''}`}>
          <div className="hero-card-img" />
          <div className="hero-card-bar" />
        </div>

        {/* Crop frame overlay */}
        {cardPhase >= 1 && (
          <div className="hero-crop-frame" />
        )}

        {/* Done checkmarks */}
        {cardPhase >= 2 && (
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
