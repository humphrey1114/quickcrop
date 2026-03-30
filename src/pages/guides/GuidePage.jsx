import { useMemo } from 'react'
import TopNav from '../../components/TopNav'
import { Link, useLocation } from 'react-router-dom'
import useSEO, { buildBreadcrumbSchema } from '../../hooks/useSEO'
import '../PageLayout.css'
import './GuidePage.css'

export default function GuidePage({ title, description, children }) {
  const location = useLocation()

  const schema = useMemo(() => [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description,
      url: `https://www.tapcrop.com${location.pathname}`,
      author: { '@type': 'Organization', name: 'TapCrop' },
      publisher: { '@type': 'Organization', name: 'TapCrop', url: 'https://www.tapcrop.com' },
      datePublished: '2026-03-23',
      dateModified: '2026-03-30',
    },
    buildBreadcrumbSchema([
      { name: 'TapCrop', path: '/' },
      { name: 'Guides', path: '/guides/instagram' },
      { name: title, path: location.pathname },
    ]),
  ], [title, description, location.pathname])

  useSEO({
    title: `${title} | TapCrop`,
    description,
    path: location.pathname,
    schema,
  })

  return (
    <div className="page-layout">
      <TopNav />
      <div className="page-container">
        <h1 className="page-title">{title}</h1>
        <div className="page-content guide-content">
          {children}
          {/* Related Guides & Tools */}
          <div className="guide-related">
            <h3>More Guides</h3>
            <div className="guide-related-links">
              {[
                { path: '/guides/instagram', label: 'Instagram Image Size Guide' },
                { path: '/guides/youtube', label: 'YouTube Thumbnail Guide' },
                { path: '/guides/twitter', label: 'Twitter Image Size Guide' },
                { path: '/guides/batch-crop', label: 'Batch Cropping Guide' },
              ].filter(g => g.path !== location.pathname).map(g => (
                <Link key={g.path} to={g.path}>{g.label}</Link>
              ))}
            </div>
            <h3>Related Tools</h3>
            <div className="guide-related-links">
              <Link to="/crop">Crop Images</Link>
              <Link to="/resize">Resize Images</Link>
              <Link to="/compress">Compress Images</Link>
              <Link to="/convert">Convert Format</Link>
              <Link to="/heic-to-jpg">HEIC to JPG</Link>
            </div>
          </div>

          <div className="guide-cta">
            <h2>Ready to Start Cropping?</h2>
            <p>TapCrop is a free online tool that lets you crop and resize multiple images at once — right in your browser. No signup, no downloads, no watermarks.</p>
            <Link to="/app" className="guide-cta-btn">Try TapCrop Free</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
