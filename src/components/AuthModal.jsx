import { useState, useRef, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useLanguage } from '../i18n/LanguageContext'
import './AuthModal.css'

export default function AuthModal({ onClose }) {
  const { login, register, loginWithGoogle, resetPassword } = useAuth()
  const { t, lang } = useLanguage()
  const [isLogin, setIsLogin] = useState(true)
  const [isReset, setIsReset] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const modalRef = useRef(null)

  // Focus trap + Escape to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key !== 'Tab' || !modalRef.current) return
      const focusable = modalRef.current.querySelectorAll('button, input, [tabindex]:not([tabindex="-1"])')
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

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

  const handleReset = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    if (!email.trim()) {
      setError(lang === 'zh' ? '请输入邮箱地址' : 'Please enter your email address')
      return
    }
    setLoading(true)
    try {
      await resetPassword(email)
      setSuccess(lang === 'zh' ? '重置密码邮件已发送，请查收邮箱' : 'Password reset email sent. Please check your inbox.')
    } catch (err) {
      if (err.code === 'auth/user-not-found') {
        setError(lang === 'zh' ? '该邮箱未注册' : 'No account found with this email')
      } else if (err.code === 'auth/invalid-email') {
        setError(t('auth.error.invalidEmail'))
      } else {
        setError(t('auth.error.generic'))
      }
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    setError('')
    setLoading(true)
    try {
      await loginWithGoogle()
      onClose()
    } catch (err) {
      if (err.code !== 'auth/popup-closed-by-user') {
        setError(t('auth.error.generic'))
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal" ref={modalRef} role="dialog" aria-modal="true" onClick={e => e.stopPropagation()}>
        <button className="auth-close" onClick={onClose}>×</button>
        {isReset ? (
          <>
            <h2 className="auth-title">
              {lang === 'zh' ? '找回密码' : 'Reset Password'}
            </h2>
            <p className="auth-desc">
              {lang === 'zh' ? '输入你的注册邮箱，我们将发送密码重置链接' : 'Enter your email and we\'ll send you a password reset link'}
            </p>
            <form onSubmit={handleReset} className="auth-form">
              <input
                type="email"
                className="auth-input"
                placeholder={t('auth.email')}
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              {error && <div className="auth-error">{error}</div>}
              {success && <div className="auth-success">{success}</div>}
              <button type="submit" className="auth-submit" disabled={loading}>
                {loading ? t('auth.loading') : (lang === 'zh' ? '发送重置邮件' : 'Send Reset Email')}
              </button>
            </form>
            <div className="auth-switch">
              <button className="auth-switch-btn" onClick={() => { setIsReset(false); setError(''); setSuccess('') }}>
                {lang === 'zh' ? '返回登录' : 'Back to Login'}
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="auth-title">
              {isLogin ? t('auth.login') : t('auth.register')}
            </h2>
            <p className="auth-desc">
              {isLogin ? t('auth.loginDesc') : t('auth.registerDesc')}
            </p>

            <button className="auth-google" onClick={handleGoogleLogin} disabled={loading}>
              <svg width="18" height="18" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              {t('auth.google')}
            </button>

            <div className="auth-divider">
              <span>{t('auth.or')}</span>
            </div>

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

            {isLogin && (
              <button className="auth-forgot" onClick={() => { setIsReset(true); setError(''); setSuccess('') }}>
                {lang === 'zh' ? '忘记密码？' : 'Forgot password?'}
              </button>
            )}

            <div className="auth-switch">
              {isLogin ? t('auth.noAccount') : t('auth.hasAccount')}
              <button className="auth-switch-btn" onClick={() => { setIsLogin(!isLogin); setError('') }}>
                {isLogin ? t('auth.register') : t('auth.login')}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
