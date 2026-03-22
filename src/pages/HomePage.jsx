import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import './HomePage.css'

const TOOLS = [
  {
    key: 'crop',
    titleEn: 'Crop',
    titleZh: '裁剪',
    descEn: 'Batch crop with custom focal points',
    descZh: '自定义焦点批量裁剪',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 2v6H2M6 8h10a2 2 0 012 2v10M18 22v-6h4M18 16H8a2 2 0 01-2-2V4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    key: 'resize',
    titleEn: 'Resize',
    titleZh: '缩放',
    descEn: '50+ presets for social & print',
    descZh: '50+ 社交媒体与打印预设',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    key: 'compress',
    titleEn: 'Compress',
    titleZh: '压缩',
    descEn: 'Reduce file size up to 90%',
    descZh: '文件体积缩小高达 90%',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2v4M12 18v4M8 8h8M6 12h12M8 16h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  },
  {
    key: 'watermark',
    titleEn: 'Watermark',
    titleZh: '水印',
    descEn: 'Add text watermarks in batch',
    descZh: '批量添加文字水印',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="1.8"/><path d="M8 12l2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    key: 'convert',
    titleEn: 'Convert',
    titleZh: '转换',
    descEn: 'JPG, PNG, WebP, HEIC',
    descZh: 'JPG、PNG、WebP、HEIC 互转',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17 1l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 11V9a4 4 0 014-4h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 23l-4-4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 13v2a4 4 0 01-4 4H3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
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
            {lang === 'zh' ? '了解功能 ↓' : 'See Features ↓'}
          </a>
        </div>
        <div className="home-hero-tags">
          <span>🔒 {lang === 'zh' ? '无需上传' : 'No Uploads'}</span>
          <span>⚡ {lang === 'zh' ? '免费无限量' : 'Free & Unlimited'}</span>
          <span>✨ {lang === 'zh' ? '无水印' : 'No Watermarks'}</span>
        </div>
      </section>

      {/* Tools */}
      <section className="home-tools" id="tools">
        <div className="home-tools-header">
          <h2>{lang === 'zh' ? '五大核心工具' : 'Five Core Tools'}</h2>
          <p>{lang === 'zh' ? '每个工具独立可用，也可组合使用' : 'Use each tool alone, or combine them all at once'}</p>
        </div>
        <div className="home-tools-grid">
          {TOOLS.map(tool => (
            <Link key={tool.key} to={`/${tool.key}`} className="home-tool-card">
              <div className="home-tool-icon">{tool.svg}</div>
              <div className="home-tool-text">
                <h3>{lang === 'zh' ? tool.titleZh : tool.titleEn}</h3>
                <p>{lang === 'zh' ? tool.descZh : tool.descEn}</p>
              </div>
              <svg className="home-tool-go" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          ))}
        </div>
        <div className="home-tools-allbtn">
          <Link to="/app" className="home-cta-primary">
            {lang === 'zh' ? '🚀 一键使用全部功能' : '🚀 Use All Tools at Once'}
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="home-how">
        <h2>{lang === 'zh' ? '三步搞定' : 'How It Works'}</h2>
        <div className="home-how-steps">
          <div className="home-how-step">
            <div className="home-how-num">1</div>
            <h3>{lang === 'zh' ? '上传图片' : 'Upload'}</h3>
            <p>{lang === 'zh' ? '拖拽或点击，支持 JPG/PNG/WebP/HEIC' : 'Drag & drop, supports JPG/PNG/WebP/HEIC'}</p>
          </div>
          <div className="home-how-divider" />
          <div className="home-how-step">
            <div className="home-how-num">2</div>
            <h3>{lang === 'zh' ? '选择设置' : 'Configure'}</h3>
            <p>{lang === 'zh' ? '选预设或自定义尺寸、压缩等参数' : 'Pick presets or customize size, compression, etc.'}</p>
          </div>
          <div className="home-how-divider" />
          <div className="home-how-step">
            <div className="home-how-num">3</div>
            <h3>{lang === 'zh' ? '导出下载' : 'Export'}</h3>
            <p>{lang === 'zh' ? '一键处理，单张或 ZIP 打包下载' : 'One click to process, download one by one or as ZIP'}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="home-footer-brand">
          <img src="/2048.png" alt="TapCrop" className="home-footer-logo" />
          <span>TapCrop</span>
        </div>
        <div className="home-footer-links">
          <Link to="/tutorial">Tutorial</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/about">About</Link>
          <Link to="/feedback">Feedback</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>
        <p className="home-footer-copy">&copy; {new Date().getFullYear()} TapCrop. {lang === 'zh' ? '图片不离开你的设备。' : 'Your images never leave your device.'}</p>
      </footer>
    </div>
  )
}
