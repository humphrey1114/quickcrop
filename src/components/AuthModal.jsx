import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useLanguage } from '../i18n/LanguageContext'
import './AuthModal.css'

export default function AuthModal({ onClose }) {
  const { login, register } = useAuth()
  const { t } = useLanguage()
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      if (isLogin) {
        await login(email, password)
      } else {
        await register(email, password)
      }
      onClose()
    } catch (err) {
      const code = err.code
      if (code === 'auth/email-already-in-use') setError(t('auth.error.emailInUse'))
      else if (code === 'auth/invalid-email') setError(t('auth.error.invalidEmail'))
      else if (code === 'auth/weak-password') setError(t('auth.error.weakPassword'))
      else if (code === 'auth/invalid-credential') setError(t('auth.error.wrongPassword'))
      else setError(t('auth.error.generic'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={e => e.stopPropagation()}>
        <button className="auth-close" onClick={onClose}>×</button>
        <h2 className="auth-title">
          {isLogin ? t('auth.login') : t('auth.register')}
        </h2>
        <p className="auth-desc">
          {isLogin ? t('auth.loginDesc') : t('auth.registerDesc')}
        </p>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="email"
            className="auth-input"
            placeholder={t('auth.email')}
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="auth-input"
            placeholder={t('auth.password')}
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            minLength={6}
          />
          {error && <div className="auth-error">{error}</div>}
          <button type="submit" className="auth-submit" disabled={loading}>
            {loading ? t('auth.loading') : (isLogin ? t('auth.login') : t('auth.register'))}
          </button>
        </form>

        <div className="auth-switch">
          {isLogin ? t('auth.noAccount') : t('auth.hasAccount')}
          <button className="auth-switch-btn" onClick={() => { setIsLogin(!isLogin); setError('') }}>
            {isLogin ? t('auth.register') : t('auth.login')}
          </button>
        </div>
      </div>
    </div>
  )
}
