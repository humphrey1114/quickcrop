import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from './PageLayout'
import { useLanguage } from '../i18n/LanguageContext'

function TutorialSection({ icon, title, children }) {
  return (
    <div className="tutorial-section">
      <h2 className="tutorial-section-title">
        <span className="tutorial-section-icon">{icon}</span>
        {title}
      </h2>
      {children}
    </div>
  )
}

function StepCard({ num, title, desc }) {
  return (
    <div className="step-card">
      <div className="step-num">{num}</div>
      <div className="step-body">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}

function FeatureCard({ title, desc }) {
  return (
    <div className="tutorial-feature-card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default function Tutorial() {
  const { t, lang } = useLanguage()

  useEffect(() => {
    document.title = lang === 'zh'
      ? '使用教程 — 秒裁在线图片编辑器指南 | TapCrop'
      : 'Tutorial — How to Use TapCrop Image Editor'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', lang === 'zh'
        ? '秒裁使用教程：学习如何批量裁剪、压缩、加水印、转换格式、调整亮度对比度。支持50+社交媒体预设尺寸，100%浏览器端处理。'
        : 'Learn how to use TapCrop: batch crop, resize, compress, watermark, convert formats, adjust brightness & contrast. 50+ social media presets. Free, private, browser-based.'
      )
    }
  }, [lang])

  return (
    <PageLayout title={t('tutorial.title')}>
      <p className="tutorial-intro">{t('tutorial.intro')}</p>

      <div className="tutorial-cta-bar">
        <Link to="/app" className="tutorial-cta">
          {lang === 'zh' ? '立即使用秒裁' : 'Open TapCrop Now'}
        </Link>
      </div>

      {/* Getting Started */}
      <TutorialSection icon="🚀" title={t('tutorial.section.start')}>
        <StepCard num={1} title={t('tutorial.step1.title')} desc={t('tutorial.step1.desc')} />
        <StepCard num={2} title={t('tutorial.step2.title')} desc={t('tutorial.step2.desc')} />
        <StepCard num={3} title={t('tutorial.step3.title')} desc={t('tutorial.step3.desc')} />
        <StepCard num={4} title={t('tutorial.step4.title')} desc={t('tutorial.step4.desc')} />
      </TutorialSection>

      {/* Compress */}
      <TutorialSection icon="📦" title={t('tutorial.section.compress')}>
        <FeatureCard title={t('tutorial.compress.title')} desc={t('tutorial.compress.desc')} />
      </TutorialSection>

      {/* Watermark */}
      <TutorialSection icon="💧" title={t('tutorial.section.watermark')}>
        <FeatureCard title={t('tutorial.watermark.title')} desc={t('tutorial.watermark.desc')} />
      </TutorialSection>

      {/* Format Conversion */}
      <TutorialSection icon="🔄" title={t('tutorial.section.convert')}>
        <FeatureCard title={t('tutorial.convert.title')} desc={t('tutorial.convert.desc')} />
      </TutorialSection>

      {/* Adjustments */}
      <TutorialSection icon="🎨" title={t('tutorial.section.adjust')}>
        <FeatureCard title={t('tutorial.adjust.title')} desc={t('tutorial.adjust.desc')} />
      </TutorialSection>

      {/* Border */}
      <TutorialSection icon="🖼️" title={t('tutorial.section.border')}>
        <FeatureCard title={t('tutorial.border.title')} desc={t('tutorial.border.desc')} />
      </TutorialSection>

      {/* Advanced Features */}
      <TutorialSection icon="⚙️" title={t('tutorial.section.advanced')}>
        <div className="tutorial-advanced-grid">
          <FeatureCard title={t('tutorial.advanced.rename.title')} desc={t('tutorial.advanced.rename.desc')} />
          <FeatureCard title={t('tutorial.advanced.rotate.title')} desc={t('tutorial.advanced.rotate.desc')} />
          <FeatureCard title={t('tutorial.advanced.customsize.title')} desc={t('tutorial.advanced.customsize.desc')} />
          <FeatureCard title={t('tutorial.advanced.presets.title')} desc={t('tutorial.advanced.presets.desc')} />
          <FeatureCard title={t('tutorial.advanced.keyboard.title')} desc={t('tutorial.advanced.keyboard.desc')} />
          <FeatureCard title={t('tutorial.advanced.dragdrop.title')} desc={t('tutorial.advanced.dragdrop.desc')} />
        </div>
      </TutorialSection>

      {/* Tips */}
      <TutorialSection icon="💡" title={t('tutorial.tips')}>
        <ul className="tutorial-tips-list">
          <li>{t('tutorial.tip1')}</li>
          <li>{t('tutorial.tip2')}</li>
          <li>{t('tutorial.tip3')}</li>
          <li>{t('tutorial.tip4')}</li>
          <li>{t('tutorial.tip5')}</li>
          <li>{t('tutorial.tip6')}</li>
        </ul>
      </TutorialSection>

      <div className="tutorial-cta-bar tutorial-cta-bottom">
        <Link to="/app" className="tutorial-cta">
          {lang === 'zh' ? '开始使用秒裁' : 'Start Using TapCrop'}
        </Link>
        <Link to="/faq" className="tutorial-cta-secondary">
          {lang === 'zh' ? '查看常见问题' : 'Read FAQ'}
        </Link>
      </div>
    </PageLayout>
  )
}
