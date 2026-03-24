import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import { AuthProvider } from './contexts/AuthContext'
import { ProProvider } from './contexts/ProContext'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import './index.css'
import ErrorBoundary from './components/ErrorBoundary.jsx'

const App = lazy(() => import('./App.jsx'))
const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const Tutorial = lazy(() => import('./pages/Tutorial.jsx'))
const FAQ = lazy(() => import('./pages/FAQ.jsx'))
const Changelog = lazy(() => import('./pages/Changelog.jsx'))
const Feedback = lazy(() => import('./pages/Feedback.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const InstagramGuide = lazy(() => import('./pages/guides/InstagramGuide.jsx'))
const TwitterGuide = lazy(() => import('./pages/guides/TwitterGuide.jsx'))
const YouTubeGuide = lazy(() => import('./pages/guides/YouTubeGuide.jsx'))
const BatchCropGuide = lazy(() => import('./pages/guides/BatchCropGuide.jsx'))
const Privacy = lazy(() => import('./pages/Privacy.jsx'))
const Terms = lazy(() => import('./pages/Terms.jsx'))
const CropPage = lazy(() => import('./pages/tools/CropPage.jsx'))
const CompressPage = lazy(() => import('./pages/tools/CompressPage.jsx'))
const ResizePage = lazy(() => import('./pages/tools/ResizePage.jsx'))
const WatermarkPage = lazy(() => import('./pages/tools/WatermarkPage.jsx'))
const ConvertPage = lazy(() => import('./pages/tools/ConvertPage.jsx'))
const WebpToPngPage = lazy(() => import('./pages/tools/WebpToPngPage.jsx'))
const ResizeJpgPage = lazy(() => import('./pages/tools/ResizeJpgPage.jsx'))
const ResizePngPage = lazy(() => import('./pages/tools/ResizePngPage.jsx'))
const CompressJpgPage = lazy(() => import('./pages/tools/CompressJpgPage.jsx'))
const HeicToJpgPage = lazy(() => import('./pages/tools/HeicToJpgPage.jsx'))
const Pricing = lazy(() => import('./pages/Pricing.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

function RouteFallback() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      padding: '24px',
      color: 'var(--text-secondary)',
      background: 'var(--bg-primary)',
      fontSize: '14px',
    }}>
      Loading...
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <ProProvider>
          <LanguageProvider>
            <BrowserRouter>
              <Suspense fallback={<RouteFallback />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/app" element={<App />} />
                  <Route path="/tutorial" element={<Tutorial />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/changelog" element={<Changelog />} />
                  <Route path="/feedback" element={<Feedback />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/guides/instagram" element={<InstagramGuide />} />
                  <Route path="/guides/twitter" element={<TwitterGuide />} />
                  <Route path="/guides/youtube" element={<YouTubeGuide />} />
                  <Route path="/guides/batch-crop" element={<BatchCropGuide />} />
                  <Route path="/crop" element={<CropPage />} />
                  <Route path="/compress" element={<CompressPage />} />
                  <Route path="/resize" element={<ResizePage />} />
                  <Route path="/watermark" element={<WatermarkPage />} />
                  <Route path="/convert" element={<ConvertPage />} />
                  <Route path="/webp-to-png" element={<WebpToPngPage />} />
                  <Route path="/resize-jpg" element={<ResizeJpgPage />} />
                  <Route path="/resize-png" element={<ResizePngPage />} />
                  <Route path="/compress-jpg" element={<CompressJpgPage />} />
                  <Route path="/heic-to-jpg" element={<HeicToJpgPage />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
            <Analytics />
            <SpeedInsights />
          </LanguageProvider>
        </ProProvider>
      </AuthProvider>
    </ErrorBoundary>
  </StrictMode>,
)

document.dispatchEvent(new Event('prerender-ready'))
