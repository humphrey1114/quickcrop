import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import './HomePage.css'

const TOOLS = [
  { key: 'crop', titleEn: 'Crop', titleZh: '裁剪', descEn: 'Batch crop with custom focal points', descZh: '自定义焦点批量裁剪' },
  { key: 'resize', titleEn: 'Resize', titleZh: '缩放', descEn: '50+ presets for social & print', descZh: '50+ 社交媒体与打印预设' },
  { key: 'compress', titleEn: 'Compress', titleZh: '压缩', descEn: 'Reduce file size up to 90%', descZh: '文件体积缩小高达 90%' },
  { key: 'watermark', titleEn: 'Watermark', titleZh: '水印', descEn: 'Add text watermarks in batch', descZh: '批量添加文字水印' },
  { key: 'convert', titleEn: 'Convert', titleZh: '转换', descEn: 'JPG, PNG, WebP, HEIC', descZh: 'JPG、PNG、WebP、HEIC 互转' },
]

export default function HomePage() {
  const { lang, toggleLang } = useLanguage()

  useEffect(() => {
    document.title = lang === 'zh'
      ? 'TapCrop 秒裁 — 免费在线批量图片处理工具'
      : 'TapCrop — Free Online Batch Image Tools'
    const meta = document.querySelector('meta[name="description"]')
    const desc = lang === 'zh'
      ? '免费在线批量裁剪、缩放、压缩、加水印、转换图片格式。100% 浏览器端处理，无需注册，图片不上传。'
      : 'Free online batch image cropper, resizer, compressor, watermark tool, and format converter. 100% browser-based, no signup, no uploads.'
    if (meta) meta.setAttribute('content', desc)
  }, [lang])

  const [theme, setTheme] = useState(() => localStorage.getItem('tapcrop-theme') || 'light')
  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('tapcrop-theme', next)
  }

  return (
    <div className="home-page">
      {/* Nav */}
      <nav className="home-nav">
        <div className="home-nav-brand">
          <img src="/2048.png" alt="TapCrop" className="home-nav-logo" />
          <span className="home-nav-name">TapCrop</span>
        </div>
        <div className="home-nav-actions">
          <button className="home-nav-icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            )}
          </button>
          <button className="home-nav-text-btn" onClick={toggleLang}>
            {lang === 'zh' ? 'EN' : '中文'}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="home-hero">
        <h1 className="home-hero-title">
          {lang === 'zh'
            ? '批量处理图片，快人一步'
            : 'Batch Image Processing, Simplified'
          }
        </h1>
        <p className="home-hero-sub">
          {lang === 'zh'
            ? '裁剪 · 缩放 · 压缩 · 水印 · 转换 — 浏览器端完成，隐私零风险'
            : 'Crop · Resize · Compress · Watermark · Convert — all in your browser'
          }
        </p>
        <div className="home-hero-actions">
          <Link to="/app" className="home-cta-primary">
            {lang === 'zh' ? '开始使用' : 'Get Started'}
          </Link>
          <a href="#tools" className="home-cta-secondary">
            {lang === 'zh' ? '了解功能' : 'Learn More'}
          </a>
        </div>
        <p className="home-hero-note">
          {lang === 'zh'
            ? '无需注册 · 完全免费 · 图片不离开设备'
            : 'No signup · 100% free · Images stay on your device'
          }
        </p>
      </section>

      {/* Tools */}
      <section className="home-tools" id="tools">
        <h2 className="home-tools-title">
          {lang === 'zh' ? '工具' : 'Tools'}
        </h2>
        <div className="home-tools-grid">
          {TOOLS.map(tool => (
            <Link key={tool.key} to={`/${tool.key}`} className="home-tool-card">
              <div className="home-tool-text">
                <h3>{lang === 'zh' ? tool.titleZh : tool.titleEn}</h3>
                <p>{lang === 'zh' ? tool.descZh : tool.descEn}</p>
              </div>
              <span className="home-tool-arrow">&rarr;</span>
            </Link>
          ))}
        </div>
        <div className="home-tools-allbtn">
          <Link to="/app" className="home-cta-primary">
            {lang === 'zh' ? '一键使用全部功能' : 'Use All Tools at Once'}
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="home-how">
        <h2>{lang === 'zh' ? '三步搞定' : 'How It Works'}</h2>
        <div className="home-how-steps">
          <div className="home-how-step">
            <span className="home-how-num">1</span>
            <div>
              <h3>{lang === 'zh' ? '上传图片' : 'Upload'}</h3>
              <p>{lang === 'zh' ? '拖拽或点击，支持 JPG/PNG/WebP/HEIC' : 'Drag & drop, supports JPG/PNG/WebP/HEIC'}</p>
            </div>
          </div>
          <div className="home-how-step">
            <span className="home-how-num">2</span>
            <div>
              <h3>{lang === 'zh' ? '选择设置' : 'Configure'}</h3>
              <p>{lang === 'zh' ? '选预设或自定义参数' : 'Pick presets or customize settings'}</p>
            </div>
          </div>
          <div className="home-how-step">
            <span className="home-how-num">3</span>
            <div>
              <h3>{lang === 'zh' ? '导出下载' : 'Export'}</h3>
              <p>{lang === 'zh' ? '一键处理，单张或 ZIP 下载' : 'One click, download individually or as ZIP'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="home-footer-links">
          <Link to="/tutorial">Tutorial</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/about">About</Link>
          <Link to="/feedback">Feedback</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>
        <p className="home-footer-copy">&copy; {new Date().getFullYear()} TapCrop</p>
      </footer>
    </div>
  )
}
