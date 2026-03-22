import { useState } from 'react'
import PageLayout from './PageLayout'
import { useLanguage } from '../i18n/LanguageContext'

export default function Feedback() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', type: 'bug', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const updateField = (key, value) => setForm(prev => ({ ...prev, [key]: value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return

    setStatus('sending')
    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', type: 'bug', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <PageLayout title={t('feedback.title')}>
      <p>{t('feedback.intro')}</p>

      <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="fb-row">
          <div className="fb-field">
            <label className="fb-label">{t('feedback.form.name')}</label>
            <input
              type="text"
              className="fb-input"
              placeholder={t('feedback.form.namePlaceholder')}
              value={form.name}
              onChange={e => updateField('name', e.target.value)}
              maxLength={100}
              required
            />
          </div>
          <div className="fb-field">
            <label className="fb-label">{t('feedback.form.email')}</label>
            <input
              type="email"
              className="fb-input"
              placeholder={t('feedback.form.emailPlaceholder')}
              value={form.email}
              onChange={e => updateField('email', e.target.value)}
              maxLength={200}
              required
            />
          </div>
        </div>

        <div className="fb-field">
          <label className="fb-label">{t('feedback.form.type')}</label>
          <div className="fb-type-bar">
            {['bug', 'feature', 'ux', 'preset', 'other'].map(type => (
              <button
                key={type}
                type="button"
                className={`fb-type-btn ${form.type === type ? 'active' : ''}`}
                onClick={() => updateField('type', type)}
              >
                {t(`feedback.form.type.${type}`)}
              </button>
            ))}
          </div>
        </div>

        <div className="fb-field">
          <label className="fb-label">{t('feedback.form.message')}</label>
          <textarea
            className="fb-textarea"
            placeholder={t('feedback.form.messagePlaceholder')}
            value={form.message}
            onChange={e => updateField('message', e.target.value)}
            rows={6}
            maxLength={5000}
            required
          />
        </div>

        <button
          type="submit"
          className="fb-submit"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? t('feedback.form.sending') : t('feedback.form.submit')}
        </button>

        {status === 'success' && (
          <div className="fb-msg fb-success">{t('feedback.form.success')}</div>
        )}
        {status === 'error' && (
          <div className="fb-msg fb-error">{t('feedback.form.error')}</div>
        )}
      </form>

      <h2>{t('feedback.noteTitle')}</h2>
      <p>{t('feedback.note1')}</p>
      <p>{t('feedback.note2')}</p>
    </PageLayout>
  )
}
