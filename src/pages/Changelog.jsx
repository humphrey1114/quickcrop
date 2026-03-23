import PageLayout from './PageLayout'
import { useLanguage } from '../i18n/LanguageContext'

export default function Changelog() {
  const { t } = useLanguage()

  const LOGS = [
    {
      version: 'v1.1.0',
      date: '2026-03-23',
      changes: [
        t('changelog.v1.1.0.0'),
        t('changelog.v1.1.0.1'),
        t('changelog.v1.1.0.2'),
        t('changelog.v1.1.0.3'),
        t('changelog.v1.1.0.4'),
        t('changelog.v1.1.0.5'),
        t('changelog.v1.1.0.6'),
      ],
    },
    {
      version: 'v1.0.0',
      date: '2026-03-20',
      changes: [
        t('changelog.v1.0.0.0'),
        t('changelog.v1.0.0.1'),
        t('changelog.v1.0.0.2'),
        t('changelog.v1.0.0.3'),
        t('changelog.v1.0.0.4'),
        t('changelog.v1.0.0.5'),
        t('changelog.v1.0.0.6'),
        t('changelog.v1.0.0.7'),
        t('changelog.v1.0.0.8'),
        t('changelog.v1.0.0.9'),
        t('changelog.v1.0.0.10'),
        t('changelog.v1.0.0.11'),
      ],
    },
  ]

  return (
    <PageLayout title={t('changelog.title')}>
      <p>{t('changelog.intro')}</p>

      {LOGS.map((log, i) => (
        <div key={i} className="changelog-item">
          <div className="changelog-version">
            <span className="changelog-tag">{log.version}</span>
            <span className="changelog-date">{log.date}</span>
          </div>
          <ul>
            {log.changes.map((c, j) => (
              <li key={j}>{c}</li>
            ))}
          </ul>
        </div>
      ))}
    </PageLayout>
  )
}
