import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import './HomePage.css'

const TOOLS = [
  { key: 'crop', titleEn: 'Crop', titleZh: '裁剪', descEn: 'Custom focal points, batch crop', descZh: '自定义焦点批量裁剪' },
  { key: 'resize', titleEn: 'Resize', titleZh: '缩放', descEn: '50+ social & print presets', descZh: '50+ 社交媒体与打印预设' },
  { key: 'compress', titleEn: 'Compress', titleZh: '压缩', descEn: 'Shrink files up to 90%', descZh: '文件体积缩小高达 90%' },
  { key: 'watermark', titleEn: 'Watermark', titleZh: '水印', descEn: 'Batch text watermarks', descZh: '批量添加文字水印' },
  { key: 'convert', titleEn: 'Convert', titleZh: '转换', descEn: 'JPG, PNG, WebP, HEIC', descZh: 'JPG、PNG、WebP、HEIC 互转' },
]

const SUB_TOOLS = [
  { path: '/resize-jpg', titleEn: 'Resize JPG', titleZh: '缩放 JPG', descEn: 'Batch resize JPG images', descZh: '批量缩放 JPG 图片' },
  { path: '/resize-png', titleEn: 'Resize PNG', titleZh: '缩放 PNG', descEn: 'Keep transparency', descZh: '保留透明度' },
  { path: '/compress-jpg', titleEn: 'Compress JPG', titleZh: '压缩 JPG', descEn: 'Reduce JPG file size', descZh: '缩小 JPG 文件体积' },
  { path: '/resize-image-kb', titleEn: 'Resize in KB', titleZh: '按 KB 调整', descEn: 'Resize to exact file size', descZh: '精确调整文件大小' },
  { path: '/resize-to-100kb', titleEn: 'Resize to 100 KB', titleZh: '调整到 100KB', descEn: 'Exact 100 KB target', descZh: '精确 100KB 目标' },
  { path: '/webp-to-png', titleEn: 'WebP to PNG', titleZh: 'WebP 转 PNG', descEn: 'Convert WebP, PNG, JPG', descZh: 'WebP、PNG、JPG 互转' },
  { path: '/heic-to-jpg', titleEn: 'HEIC to JPG', titleZh: 'HEIC 转 JPG', descEn: 'Convert iPhone photos', descZh: '转换 iPhone 照片' },
]

const TOOL_DETAILS = [
  {
    key: 'crop',
    titleEn: 'Batch Crop',
    titleZh: '批量裁剪',
    descEn: 'Crop hundreds of images to the same size in one click. Set custom focal points for each image, choose from 50+ presets for Instagram, YouTube, Etsy, ID photos and more.',
    descZh: '一键将数百张图片裁剪为统一尺寸。为每张图片设置自定义焦点，50+ 预设尺寸适用于 Instagram、YouTube、Etsy、证件照等场景。',
    highlights: [
      { en: 'Custom focal point per image', zh: '每张图片独立焦点' },
      { en: '50+ size presets', zh: '50+ 尺寸预设' },
      { en: 'Crop preview toggle', zh: '裁剪预览切换' },
    ],
  },
  {
    key: 'resize',
    titleEn: 'Batch Resize',
    titleZh: '批量缩放',
    descEn: 'Resize images to exact pixel dimensions with high-quality resampling. Lock aspect ratio, use presets for social media and e-commerce, or set per-image custom sizes.',
    descZh: '使用高质量重采样将图片缩放为精确像素尺寸。锁定宽高比，使用社交媒体和电商预设，或为单张图片设置自定义尺寸。',
    highlights: [
      { en: 'Lock aspect ratio', zh: '锁定宽高比' },
      { en: 'Per-image size override', zh: '单图自定义尺寸' },
      { en: 'High-quality resampling', zh: '高质量重采样' },
    ],
  },
  {
    key: 'compress',
    titleEn: 'Image Compression',
    titleZh: '图片压缩',
    descEn: 'Reduce file size by up to 90% without visible quality loss. Adjustable compression slider lets you find the perfect balance between size and quality.',
    descZh: '将文件体积缩小高达 90%，不影响画质。可调节压缩滑块帮你在体积和画质之间找到完美平衡。',
    highlights: [
      { en: 'Up to 90% smaller', zh: '最高缩小 90%' },
      { en: 'Adjustable quality slider', zh: '可调压缩滑块' },
      { en: 'Batch compress hundreds', zh: '批量压缩数百张' },
    ],
  },
  {
    key: 'watermark',
    titleEn: 'Add Watermark',
    titleZh: '添加水印',
    descEn: 'Protect your images with custom text watermarks. Control font size, color, opacity, and position. Apply the same watermark to all images in one click.',
    descZh: '用自定义文字水印保护你的图片。控制字体大小、颜色、透明度和位置，一键为所有图片添加水印。',
    highlights: [
      { en: 'Custom text & style', zh: '自定义文字和样式' },
      { en: 'Adjustable opacity', zh: '可调透明度' },
      { en: '5 position options', zh: '5 种位置选项' },
    ],
  },
  {
    key: 'convert',
    titleEn: 'Format Conversion',
    titleZh: '格式转换',
    descEn: 'Convert between JPG, PNG, WebP, and HEIC formats. Perfect for converting iPhone HEIC photos to universally compatible JPG or optimizing images to WebP for the web.',
    descZh: '在 JPG、PNG、WebP 和 HEIC 格式之间自由转换。适合将 iPhone HEIC 照片转为通用 JPG，或将图片优化为 WebP 格式。',
    highlights: [
      { en: 'HEIC to JPG', zh: 'HEIC 转 JPG' },
      { en: 'PNG to WebP', zh: 'PNG 转 WebP' },
      { en: 'Batch convert all', zh: '批量转换' },
    ],
  },
]

function CropDemo() {
  return (
    <div className="demo-crop" /* demo */>
      <div className="demo-crop-img">
        <div className="demo-crop-frame" />
      </div>
    </div>
  )
}

function ResizeDemo() {
  return (
    <div className="demo-resize">
      <div className="demo-resize-box demo-resize-large">1920 x 1080</div>
      <div className="demo-resize-arrow">&rarr;</div>
      <div className="demo-resize-box demo-resize-small">800 x 600</div>
    </div>
  )
}

function CompressDemo() {
  return (
    <div className="demo-compress">
      <div className="demo-compress-bar">
        <div className="demo-compress-fill" />
      </div>
      <div className="demo-compress-labels">
        <span>5.2 MB</span>
        <span>0.8 MB</span>
      </div>
    </div>
  )
}

function WatermarkDemo() {
  return (
    <div className="demo-watermark">
      <div className="demo-watermark-img">
        <span className="demo-watermark-text">TapCrop</span>
        <span className="demo-watermark-text">TapCrop</span>
        <span className="demo-watermark-text">TapCrop</span>
      </div>
    </div>
  )
}

function ConvertDemo() {
  return (
    <div className="demo-convert">
      <div className="demo-convert-from">HEIC</div>
      <div className="demo-convert-arrow">&rarr;</div>
      <div className="demo-convert-to">
        <span>JPG</span>
        <span>PNG</span>
        <span>WebP</span>
      </div>
    </div>
  )
}

export default function HomePage() {
  const { lang, toggleLang } = useLanguage()

  useEffect(() => {
    document.title = lang === 'zh'
      ? 'TapCrop 秒裁 — 免费在线批量图片处理工具'
      : 'TapCrop — Free Image Resizer & Photo Editor Online | Resize, Crop, Compress Images'
    const meta = document.querySelector('meta[name="description"]')
    const desc = lang === 'zh'
      ? '免费在线批量裁剪、缩放、压缩、加水印、转换图片格式。100% 浏览器端处理，无需注册，图片不上传。'
      : 'Free online image resizer, photo resizer & batch editor. Resize, crop, compress, watermark and convert images in bulk. Reduce image size up to 90%. No signup, no uploads — 100% browser processing.'
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
      {/* Nav - full width */}
      <nav className="home-nav">
        <div className="home-nav-brand">
          <img src="/2048.png" alt="TapCrop" className="home-nav-logo" />
          <span className="home-nav-name">TapCrop</span>
        </div>
        <div className="home-nav-actions">
          <button className="home-nav-text-btn" onClick={toggleTheme}>
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>
          <button className="home-nav-text-btn" onClick={toggleLang}>
            {lang === 'zh' ? 'EN' : '中文'}
          </button>
          <Link to="/app" className="home-nav-login">
            {lang === 'zh' ? '登录' : 'Log in'}
          </Link>
        </div>
      </nav>
      <div className="home-inner">

        {/* Hero */}
        <section className="home-hero">
          <h1 className="home-hero-title">
            {lang === 'zh'
              ? '批量处理图片，快人一步'
              : 'Edit Hundreds of Images at Once'
            }
          </h1>
          <p className="home-hero-sub">
            {lang === 'zh'
              ? '裁剪 · 缩放 · 压缩 · 水印 · 转换 — 浏览器端完成，隐私零风险'
              : 'Crop, resize, compress, watermark, and convert — right in your browser. Nothing gets uploaded.'
            }
          </p>
          <div className="home-hero-actions">
            <Link to="/app" className="home-cta-primary">
              {lang === 'zh' ? '开始使用' : 'Start for Free'}
            </Link>
            <a href="#tools" className="home-cta-secondary">
              {lang === 'zh' ? '了解功能' : 'Learn More'}
            </a>
          </div>
          <p className="home-hero-note">
            {lang === 'zh'
              ? '无需注册 · 完全免费 · 图片不离开设备'
              : 'No account needed · Always free · Your files stay private'
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
              <Link key={tool.key} to={`/app?tool=${tool.key}`} className="home-tool-card">
                <div className="home-tool-text">
                  <h3>{lang === 'zh' ? tool.titleZh : tool.titleEn}</h3>
                  <p>{lang === 'zh' ? tool.descZh : tool.descEn}</p>
                </div>
              </Link>
            ))}
          </div>
          <h2 className="home-tools-subtitle">
            {lang === 'zh' ? '更多工具' : 'More Tools'}
          </h2>
          <div className="home-subtools-grid">
            {SUB_TOOLS.map(tool => (
              <Link key={tool.path} to={tool.path} className="home-subtool-card">
                <h3>{lang === 'zh' ? tool.titleZh : tool.titleEn}</h3>
                <p>{lang === 'zh' ? tool.descZh : tool.descEn}</p>
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
                <h3>{lang === 'zh' ? '上传图片' : 'Drop Your Files'}</h3>
                <p>{lang === 'zh' ? '拖拽或点击，支持 JPG/PNG/WebP/HEIC' : 'Drag & drop or browse. Supports JPG, PNG, WebP, HEIC.'}</p>
              </div>
            </div>
            <div className="home-how-step">
              <span className="home-how-num">2</span>
              <div>
                <h3>{lang === 'zh' ? '选择设置' : 'Pick Your Settings'}</h3>
                <p>{lang === 'zh' ? '选预设或自定义参数' : 'Choose a preset or dial in your own dimensions.'}</p>
              </div>
            </div>
            <div className="home-how-step">
              <span className="home-how-num">3</span>
              <div>
                <h3>{lang === 'zh' ? '导出下载' : 'Download'}</h3>
                <p>{lang === 'zh' ? '一键处理，单张或 ZIP 下载' : 'One click to process. Grab them one by one or as a ZIP.'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tool Details */}
        <section className="home-details">
          <h2 className="home-details-heading">
            {lang === 'zh' ? '功能介绍' : 'What You Can Do'}
          </h2>
          {TOOL_DETAILS.map((tool, i) => (
            <div key={tool.key} className={`home-detail ${i % 2 === 1 ? 'home-detail-reverse' : ''}`}>
              <div className="home-detail-content">
                <h3>{lang === 'zh' ? tool.titleZh : tool.titleEn}</h3>
                <p>{lang === 'zh' ? tool.descZh : tool.descEn}</p>
                <ul className="home-detail-highlights">
                  {tool.highlights.map((h, j) => (
                    <li key={j}>{lang === 'zh' ? h.zh : h.en}</li>
                  ))}
                </ul>
                <div className="home-detail-actions">
                  <Link to={`/app?tool=${tool.key}`} className="home-detail-use">
                    {lang === 'zh' ? '立即使用' : 'Use Now'}
                  </Link>
                  <Link to={`/${tool.key}`} className="home-detail-more">
                    {lang === 'zh' ? '了解更多' : 'Learn More'}
                  </Link>
                </div>
              </div>
              <div className={`home-detail-demo home-demo-${tool.key}`}>
                {tool.key === 'crop' && <CropDemo />}
                {tool.key === 'resize' && <ResizeDemo />}
                {tool.key === 'compress' && <CompressDemo />}
                {tool.key === 'watermark' && <WatermarkDemo />}
                {tool.key === 'convert' && <ConvertDemo />}
              </div>
            </div>
          ))}
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
    </div>
  )
}
