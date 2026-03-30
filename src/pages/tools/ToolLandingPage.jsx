import TopNav from '../../components/TopNav'
import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'
import useSEO, { buildFAQSchema, buildHowToSchema } from '../../hooks/useSEO'
import '../PageLayout.css'
import './ToolLandingPage.css'

export default function ToolLandingPage({ toolKey, toolPath, icon, titleEn, titleZh, descEn, descZh, features, stepsEn, stepsZh, faqEn, faqZh, geoSnippetEn, geoSnippetZh, sectionsEn, sectionsZh }) {
  const { lang } = useLanguage()
  const title = lang === 'zh' ? titleZh : titleEn
  const desc = lang === 'zh' ? descZh : descEn
  const steps = lang === 'zh' ? stepsZh : stepsEn
  const faq = lang === 'zh' ? faqZh : faqEn
  const geoSnippet = lang === 'zh' ? geoSnippetZh : geoSnippetEn
  const sections = lang === 'zh' ? sectionsZh : sectionsEn
  const pagePath = toolPath || `/${toolKey}`

  const schema = useMemo(() => {
    const schemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: `TapCrop — ${title}`,
        description: desc,
        url: `https://www.tapcrop.com${pagePath}`,
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Web Browser',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      },
    ]
    if (faq && faq.length > 0) {
      schemas.push(buildFAQSchema(faq))
    }
    if (steps && steps.length > 0) {
      schemas.push(buildHowToSchema(title, desc, steps))
    }
    return schemas
  }, [title, desc, pagePath, faq, steps])

  useSEO({
    title: `${title} | TapCrop`,
    description: desc,
    path: pagePath,
    schema,
  })

  const ctaText = lang === 'zh' ? '立即免费使用' : 'Start Free — No Signup'
  const howToTitle = lang === 'zh' ? '如何使用' : 'How It Works'
  const faqTitle = lang === 'zh' ? '常见问题' : 'FAQ'
  const whyTitle = lang === 'zh' ? '为什么选择 TapCrop？' : 'Why TapCrop?'

  return (
    <div className="page-layout tool-landing">
      <TopNav />

      {/* Hero */}
      <div className="tl-hero">
        <h1 className="tl-hero-title">{title}</h1>
        <p className="tl-hero-desc">{desc}</p>
        <Link to={`/app?tool=${toolKey}`} className="tl-hero-cta">{ctaText}</Link>
        <div className="tl-trust-row">
          {lang === 'zh' ? (
            <>
              <span className="tl-trust-item">✓ 无需注册</span>
              <span className="tl-trust-item">✓ 完全免费</span>
              <span className="tl-trust-item">✓ 图片不上传</span>
              <span className="tl-trust-item">✓ 无水印</span>
            </>
          ) : (
            <>
              <span className="tl-trust-item">✓ No signup</span>
              <span className="tl-trust-item">✓ 100% free</span>
              <span className="tl-trust-item">✓ No uploads</span>
              <span className="tl-trust-item">✓ No watermarks</span>
            </>
          )}
        </div>
      </div>

      {/* Features */}
      {features && (
        <div className="tl-section">
          <h2 className="tl-section-title">{whyTitle}</h2>
          <div className="tl-features-grid">
            {features.map((f, i) => (
              <div key={i} className="tl-feature-card">
                <h3>{lang === 'zh' ? f.titleZh : f.titleEn}</h3>
                <p>{lang === 'zh' ? f.descZh : f.descEn}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* GEO snippet — quotable paragraph for AI search engines */}
      {geoSnippet && (
        <div className="tl-section tl-geo-section">
          <p className="tl-geo-snippet">{geoSnippet}</p>
        </div>
      )}

      {/* Steps */}
      <div className="tl-section">
        <h2 className="tl-section-title">{howToTitle}</h2>
        <div className="tl-steps">
          {steps.map((step, i) => (
            <div key={i} className="tl-step">
              <div className="tl-step-num">{i + 1}</div>
              <div className="tl-step-body">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA mid-page */}
      <div className="tl-mid-cta">
        <Link to={`/app?tool=${toolKey}`} className="tl-hero-cta">{ctaText}</Link>
      </div>

      {/* Detailed content sections for SEO depth */}
      {sections && sections.length > 0 && (
        <div className="tl-section tl-detailed">
          {sections.map((section, i) => (
            <div key={i} className="tl-detailed-block">
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      )}

      {/* FAQ */}
      {faq && faq.length > 0 && (
        <div className="tl-section">
          <h2 className="tl-section-title">{faqTitle}</h2>
          <div className="tl-faq-list">
            {faq.map((item, i) => (
              <details key={i} className="tl-faq-item">
                <summary className="tl-faq-q">{item.q}</summary>
                <p className="tl-faq-a">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="tl-bottom-cta">
        <h2>{lang === 'zh' ? '准备好了吗？' : 'Ready to get started?'}</h2>
        <p>{lang === 'zh'
          ? 'TapCrop 是一款免费在线工具，直接在浏览器中运行。无需注册，无需下载，无水印。'
          : 'TapCrop is a free online tool that runs entirely in your browser. No signup, no downloads, no watermarks.'
        }</p>
        <Link to={`/app?tool=${toolKey}`} className="tl-hero-cta">{ctaText}</Link>
      </div>

      <footer className="page-footer">
        <span>&copy; {new Date().getFullYear()} TapCrop</span>
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
      </footer>
    </div>
  )
}
