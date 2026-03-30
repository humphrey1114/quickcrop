import { useEffect } from 'react'

const SITE_URL = 'https://www.tapcrop.com'
const SITE_NAME = 'TapCrop'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

/**
 * Manage all <head> SEO tags for a page.
 *
 * @param {object} opts
 * @param {string} opts.title        - Page <title>
 * @param {string} opts.description  - Meta description
 * @param {string} opts.path         - Canonical path, e.g. '/crop' (no trailing slash except '/')
 * @param {string} [opts.ogTitle]    - OG title override (defaults to title)
 * @param {string} [opts.ogDescription] - OG description override
 * @param {string} [opts.ogImage]    - OG image URL override
 * @param {object} [opts.schema]     - JSON-LD structured data object (will be serialized)
 */
export default function useSEO({ title, description, path, ogTitle, ogDescription, ogImage, schema }) {
  useEffect(() => {
    // Title
    if (title) document.title = title

    // Canonical
    const canonicalUrl = path === '/' ? SITE_URL + '/' : SITE_URL + path
    let canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl)
    } else {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      canonical.href = canonicalUrl
      document.head.appendChild(canonical)
    }

    // Meta description
    setMeta('description', description)

    // OG tags
    setMetaProperty('og:title', ogTitle || title)
    setMetaProperty('og:description', ogDescription || description)
    setMetaProperty('og:url', canonicalUrl)
    setMetaProperty('og:image', ogImage || DEFAULT_OG_IMAGE)
    setMetaProperty('og:site_name', SITE_NAME)
    setMetaProperty('og:type', 'website')

    // Twitter tags
    setMeta('twitter:title', ogTitle || title, 'name')
    setMeta('twitter:description', ogDescription || description, 'name')
    setMeta('twitter:image', ogImage || DEFAULT_OG_IMAGE, 'name')

    // Schema.org structured data (supports single object or array)
    // Clean up previous schemas first
    document.querySelectorAll('script[data-page-schema]').forEach(el => el.remove())

    if (schema) {
      const schemas = Array.isArray(schema) ? schema : [schema]
      schemas.forEach((s, i) => {
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.setAttribute('data-page-schema', `${i}`)
        script.textContent = JSON.stringify(s)
        document.head.appendChild(script)
      })
    }

    return () => {
      document.querySelectorAll('script[data-page-schema]').forEach(el => el.remove())
    }
  }, [title, description, path, ogTitle, ogDescription, ogImage, schema])
}

function setMeta(name, content, attr = 'name') {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (el) {
    el.setAttribute('content', content)
  } else {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    el.content = content
    document.head.appendChild(el)
  }
}

function setMetaProperty(property, content) {
  if (!content) return
  let el = document.querySelector(`meta[property="${property}"]`)
  if (el) {
    el.setAttribute('content', content)
  } else {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    el.content = content
    document.head.appendChild(el)
  }
}

/**
 * Build a FAQPage schema from an array of { q, a } items.
 */
export function buildFAQSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

/**
 * Build a HowTo schema from title, description, and steps array.
 */
export function buildHowToSchema(name, description, steps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.title,
      text: step.desc,
    })),
  }
}
