import PageLayout from './PageLayout'
import { useLanguage } from '../i18n/LanguageContext'

export default function Tutorial() {
  const { t } = useLanguage()

  const STEPS = [
    {
      title: t('tutorial.step1.title'),
      desc: t('tutorial.step1.desc'),
    },
    {
      title: t('tutorial.step2.title'),
      desc: t('tutorial.step2.desc'),
    },
    {
      title: t('tutorial.step3.title'),
      desc: t('tutorial.step3.desc'),
    },
    {
      title: t('tutorial.step4.title'),
      desc: t('tutorial.step4.desc'),
    },
    {
      title: t('tutorial.step5.title'),
      desc: t('tutorial.step5.desc'),
    },
  ]

  return (
    <PageLayout title={t('tutorial.title')}>
      <p>{t('tutorial.intro')}</p>

      {STEPS.map((step, i) => (
        <div key={i} className="step-card">
          <div className="step-num">{i + 1}</div>
          <div className="step-body">
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        </div>
      ))}

      <h2>{t('tutorial.tips')}</h2>
      <ul>
        <li>{t('tutorial.tip1')}</li>
        <li>{t('tutorial.tip2')}</li>
        <li>{t('tutorial.tip3')}</li>
        <li>{t('tutorial.tip4')}</li>
      </ul>
    </PageLayout>
  )
}
