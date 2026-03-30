import { useMemo } from 'react'
import TopNav from '../../components/TopNav'
import { Link, useLocation } from 'react-router-dom'
import useSEO from '../../hooks/useSEO'
import '../PageLayout.css'
import './GuidePage.css'

export default function GuidePage({ title, description, children }) {
  const location = useLocation()

  const schema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `https://www.tapcrop.com${location.pathname}`,
    author: { '@type': 'Organization', name: 'TapCrop' },
    publisher: { '@type': 'Organization', name: 'TapCrop', url: 'https://www.tapcrop.com' },
    datePublished: '2026-03-23',
    dateModified: '2026-03-30',
  }), [title, description, location.pathname])

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
          <div className="guide-cta">
            <h2>Ready to Start Cropping?</h2>
            <p>TapCrop is a free online tool that lets you crop and resize multiple images at once — right in your browser. No signup, no downloads, no watermarks.</p>
            <Link to="/" className="guide-cta-btn">Try TapCrop Free</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
