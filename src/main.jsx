import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import { AuthProvider } from './contexts/AuthContext'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import './index.css'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import Tutorial from './pages/Tutorial.jsx'
import FAQ from './pages/FAQ.jsx'
import Changelog from './pages/Changelog.jsx'
import Feedback from './pages/Feedback.jsx'
import About from './pages/About.jsx'
import InstagramGuide from './pages/guides/InstagramGuide.jsx'
import TwitterGuide from './pages/guides/TwitterGuide.jsx'
import YouTubeGuide from './pages/guides/YouTubeGuide.jsx'
import BatchCropGuide from './pages/guides/BatchCropGuide.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import CropPage from './pages/tools/CropPage.jsx'
import CompressPage from './pages/tools/CompressPage.jsx'
import ResizePage from './pages/tools/ResizePage.jsx'
import WatermarkPage from './pages/tools/WatermarkPage.jsx'
import ConvertPage from './pages/tools/ConvertPage.jsx'
import NotFound from './pages/NotFound.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
    <AuthProvider>
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/app" element={<App />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/about" element={<About />} />
          <Route path="/guides/instagram" element={<InstagramGuide />} />
          <Route path="/guides/twitter" element={<TwitterGuide />} />
          <Route path="/guides/youtube" element={<YouTubeGuide />} />
          <Route path="/guides/batch-crop" element={<BatchCropGuide />} />
          <Route path="/crop" element={<CropPage />} />
          <Route path="/compress" element={<CompressPage />} />
          <Route path="/resize" element={<ResizePage />} />
          <Route path="/watermark" element={<WatermarkPage />} />
          <Route path="/convert" element={<ConvertPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
      <SpeedInsights />
    </LanguageProvider>
    </AuthProvider>
    </ErrorBoundary>
  </StrictMode>,
)
