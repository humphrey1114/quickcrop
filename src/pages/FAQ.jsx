import { useEffect } from 'react'
import PageLayout from './PageLayout'
import { useLanguage } from '../i18n/LanguageContext'

export default function FAQ() {
  const { t } = useLanguage()

  const FAQS = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
    { q: t('faq.q6'), a: t('faq.a6') },
    { q: t('faq.q7'), a: t('faq.a7') },
    { q: t('faq.q8'), a: t('faq.a8') },
  ]

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'faq-schema'
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': FAQS.map(item => ({
        '@type': 'Question',
        'name': item.q,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': item.a,
        },
      })),
    })
    document.head.appendChild(script)
    return () => {
      const el = document.getElementById('faq-schema')
      if (el) el.remove()
    }
  }, [FAQS])

  return (
    <PageLayout title={t('faq.title')}>
      {FAQS.map((item, i) => (
        <div key={i} className="faq-item">
          <div className="faq-q">{item.q}</div>
          <div className="faq-a">{item.a}</div>
        </div>
      ))}
    </PageLayout>
  )
}
