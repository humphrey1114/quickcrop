import TopNav from '../../components/TopNav'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import '../PageLayout.css'
import './GuidePage.css'

export default function GuidePage({ title, description, children }) {
  useEffect(() => {
    document.title = `${title} | TapCrop`
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', description)
    } else {
      const newMeta = document.createElement('meta')
      newMeta.name = 'description'
      newMeta.content = description
      document.head.appendChild(newMeta)
    }
  }, [title, description])

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
