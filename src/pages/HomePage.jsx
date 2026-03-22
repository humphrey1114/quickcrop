import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import './HomePage.css'

const TOOLS = [
  {
    key: 'crop',
    icon: '✂️',
    titleEn: 'Batch Crop',
    titleZh: '批量裁剪',
    descEn: 'Crop multiple images to the same size with custom focal points',
    descZh: '自定义焦点，批量裁剪图片为统一尺寸',
    color: '#FF6B6B',
  },
  {
    key: 'resize',
    icon: '↔️',
    titleEn: 'Batch Resize',
    titleZh: '批量缩放',
    descEn: 'Resize hundreds of images to exact dimensions with 50+ presets',
    descZh: '50+ 预设尺寸，批量缩放数百张图片',
    color: '#4ECDC4',
  },
  {
    key: 'compress',
    icon: '📦',
    titleEn: 'Compress Images',
    titleZh: '图片压缩',
    descEn: 'Reduce file sizes by up to 90% while keeping visual quality',
    descZh: '文件体积缩小高达 90%，保持视觉质量',
    color: '#FFB347',
  },
  {
    key: 'watermark',
    icon: '💧',
    titleEn: 'Add Watermark',
    titleZh: '添加水印',
    descEn: 'Batch add text watermarks with custom size, color, and position',
    descZh: '批量添加文字水印，自定义大小、颜色和位置',
    color: '#7C83FD',
  },
  {
    key: 'convert',
    icon: '🔄',
    titleEn: 'Convert Format',
    titleZh: '格式转换',
    descEn: 'Convert between JPG, PNG, WebP, and HEIC in batch',
    descZh: '批量转换 JPG、PNG、WebP、HEIC 格式',
    color: '#45B7D1',
  },
]

export default function HomePage() {
  const { t, lang } = useLanguage()

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
      {/* Minimal homepage nav */}
      <nav className="home-nav">
        <div className="home-nav-brand">
          <div className="home-nav-logo">
            <svg width="22" height="22" viewBox="0 0 501 492" fill="none">
              <path fill="#fff" d="M189.370361,93.327850 C242.464081,76.780182 294.370361,78.567902 344.621887,101.942657 C391.544678,123.769043 424.876678,158.591385 440.195343,208.822754 C443.793213,220.620560 445.091217,233.119736 447.545319,245.802734 C435.633301,245.802734 425.220245,245.802734 415.288879,245.802734 C412.980713,236.813965 411.441040,227.917496 408.405426,219.564713 C400.704346,198.374695 386.242096,182.219055 368.404785,168.940720 C343.779022,150.608994 315.734833,140.801010 285.635559,136.272446 C284.993866,136.175903 284.324921,136.260315 282.707733,136.260315 C279.417572,146.795364 275.803528,157.463623 272.759033,168.292038 C264.850159,196.421677 258.989166,224.933334 258.389740,254.283844 C257.718262,287.160217 266.053375,317.977722 281.060486,346.941132 C284.955780,354.458984 290.814819,361.171448 296.681061,367.397125 C302.701569,373.786469 310.501617,373.995209 318.403931,370.426147 C328.863617,365.702026 336.696503,357.813629 344.003998,349.281891 C344.963684,348.161377 345.915161,347.033875 347.152893,345.577240 C358.263702,353.996033 369.213593,362.292877 379.997009,370.463593 C379.929199,371.198730 380.020355,371.613159 379.853790,371.816193 C366.383179,388.236450 354.291290,405.901550 335.943878,417.747833 C303.323669,438.809540 269.960419,433.955505 245.137863,404.027283 C229.854584,385.600464 221.340988,363.774536 214.084976,341.317139 C200.657684,299.759521 201.346039,257.719604 209.363495,215.370483 C214.234314,189.642349 221.042679,164.450378 229.908188,139.812485 C230.295624,138.735748 230.576477,137.620667 231.143875,135.737030 C227.283844,136.266876 223.892914,136.621124 220.543121,137.209564 C191.394562,142.330048 164.308777,152.519882 140.894684,170.983475 C116.687988,190.072098 99.936287,213.681686 98.171165,245.790527 C87.524994,245.790527 77.099747,245.790527 65.304169,245.790527 C67.040855,236.086380 68.175415,226.720367 70.432320,217.633087 C83.837395,163.658493 117.814285,126.736862 166.842514,102.596176 C173.993210,99.075294 181.599075,96.478783 189.370361,93.327850z"/>
            </svg>
          </div>
          <span className="home-nav-name">TapCrop</span>
        </div>
        <div className="home-nav-actions">
          <button className="home-nav-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            )}
          </button>
          <button className="home-nav-lang" onClick={toggleLang}>
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" />
              <ellipse cx="8" cy="8" rx="3" ry="6.5" stroke="currentColor" strokeWidth="1.3" />
              <path d="M1.5 8h13M2.5 5h11M2.5 11h11" stroke="currentColor" strokeWidth="1.1" />
            </svg>
            {lang === 'zh' ? 'EN' : '中文'}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="home-hero">
        <div className="home-hero-badge">
          {lang === 'zh' ? '✨ 100% 免费 · 无需注册 · 图片不上传' : '✨ 100% Free · No Signup · No Uploads'}
        </div>
        <h1 className="home-hero-title">
          {lang === 'zh' ? (
            <>一站式<span className="home-highlight">批量图片处理</span>工具</>
          ) : (
            <>All-in-One <span className="home-highlight">Batch Image</span> Tools</>
          )}
        </h1>
        <p className="home-hero-desc">
          {lang === 'zh'
            ? '裁剪、缩放、压缩、加水印、格式转换——所有操作都在浏览器中完成，隐私安全。'
            : 'Crop, resize, compress, watermark, and convert — all processing happens in your browser. Private & secure.'
          }
        </p>
        <Link to="/app" className="home-hero-cta">
          {lang === 'zh' ? '立即开始使用' : 'Start Using — It\'s Free'}
        </Link>
      </div>

      {/* Tools grid */}
      <div className="home-tools-section">
        <h2 className="home-section-title">
          {lang === 'zh' ? '选择工具' : 'Choose a Tool'}
        </h2>
        <div className="home-tools-grid">
          {TOOLS.map(tool => (
            <Link key={tool.key} to={`/${tool.key}`} className="home-tool-card">
              <div className="home-tool-icon" style={{ background: `${tool.color}15` }}>
                <span>{tool.icon}</span>
              </div>
              <h3 className="home-tool-title">{lang === 'zh' ? tool.titleZh : tool.titleEn}</h3>
              <p className="home-tool-desc">{lang === 'zh' ? tool.descZh : tool.descEn}</p>
              <span className="home-tool-arrow">→</span>
            </Link>
          ))}

          {/* All-in-one card */}
          <Link to="/app" className="home-tool-card home-tool-card-all">
            <div className="home-tool-icon" style={{ background: 'rgba(26,26,26,0.06)' }}>
              <span>🚀</span>
            </div>
            <h3 className="home-tool-title">{lang === 'zh' ? '一键全部使用' : 'Use All Tools'}</h3>
            <p className="home-tool-desc">{lang === 'zh' ? '一套图，一次处理，所有功能同时用' : 'One upload, all tools at once'}</p>
            <span className="home-tool-arrow">→</span>
          </Link>
        </div>
      </div>

      {/* Trust section */}
      <div className="home-trust">
        <div className="home-trust-grid">
          {[
            { icon: '🔒', titleEn: '100% Private', titleZh: '100% 隐私', descEn: 'Images never leave your device', descZh: '图片不离开你的设备' },
            { icon: '⚡', titleEn: 'Lightning Fast', titleZh: '极速处理', descEn: 'Browser-based, no waiting for uploads', descZh: '浏览器端处理，无需等待上传' },
            { icon: '🎯', titleEn: 'No Signup', titleZh: '无需注册', descEn: 'Start using immediately, zero friction', descZh: '即开即用，零门槛' },
            { icon: '💎', titleEn: 'No Watermarks', titleZh: '无水印', descEn: 'All exports are clean, no branding added', descZh: '所有导出干净无添加' },
          ].map((item, i) => (
            <div key={i} className="home-trust-item">
              <span className="home-trust-icon">{item.icon}</span>
              <h3>{lang === 'zh' ? item.titleZh : item.titleEn}</h3>
              <p>{lang === 'zh' ? item.descZh : item.descEn}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="home-footer">
        <span>&copy; {new Date().getFullYear()} TapCrop</span>
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
        <Link to="/about">About</Link>
      </footer>
    </div>
  )
}
