import { useMemo } from 'react'
import PageLayout from './PageLayout'
import { useLanguage } from '../i18n/LanguageContext'
import useSEO, { buildFAQSchema } from '../hooks/useSEO'

export default function FAQ() {
  const { t, lang } = useLanguage()

  const FAQS = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
    { q: t('faq.q6'), a: t('faq.a6') },
    { q: t('faq.q7'), a: t('faq.a7') },
    { q: t('faq.q8'), a: t('faq.a8') },
    { q: t('faq.q9'), a: t('faq.a9') },
    { q: t('faq.q10'), a: t('faq.a10') },
    { q: t('faq.q11'), a: t('faq.a11') },
    { q: t('faq.q12'), a: t('faq.a12') },
  ]

  const faqSchema = useMemo(() => buildFAQSchema(FAQS), [lang]) // eslint-disable-line react-hooks/exhaustive-deps

  useSEO({
    title: lang === 'zh' ? '常见问题 | TapCrop 秒裁' : 'FAQ | TapCrop — Free Image Resizer',
    description: lang === 'zh'
      ? 'TapCrop 常见问题解答：支持格式、隐私安全、批量处理、水印、压缩等。'
      : 'TapCrop FAQ: supported formats, privacy, batch processing, watermarks, compression, and more.',
    path: '/faq',
    schema: faqSchema,
  })

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
