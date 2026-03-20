import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import { AuthProvider } from './contexts/AuthContext'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import './index.css'
import App from './App.jsx'
import Tutorial from './pages/Tutorial.jsx'
import FAQ from './pages/FAQ.jsx'
import Changelog from './pages/Changelog.jsx'
import Feedback from './pages/Feedback.jsx'
import About from './pages/About.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
      <SpeedInsights />
    </LanguageProvider>
    </AuthProvider>
  </StrictMode>,
)
