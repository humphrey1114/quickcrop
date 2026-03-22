import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import PageLayout from './PageLayout'

export default function NotFound() {
  const { lang } = useLanguage()
  const isZh = lang === 'zh'

  return (
    <PageLayout title={isZh ? '页面未找到' : 'Page Not Found'}>
      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <div style={{ fontSize: '72px', fontWeight: 700, color: 'var(--text-3)', marginBottom: '16px' }}>404</div>
        <p style={{ fontSize: '15px', color: 'var(--text-2)', marginBottom: '24px' }}>
          {isZh ? '你访问的页面不存在或已被移除。' : 'The page you are looking for does not exist or has been removed.'}
        </p>
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '10px 24px',
            background: 'var(--primary)',
            color: '#fff',
            borderRadius: 'var(--r-pill)',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          {isZh ? '返回首页' : 'Back to Home'}
        </Link>
      </div>
    </PageLayout>
  )
}
