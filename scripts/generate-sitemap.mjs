/**
 * Auto-generate sitemap.xml with current date as lastmod.
 * Called during build: node scripts/generate-sitemap.mjs
 */
import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, '..', 'public', 'sitemap.xml')
const SITE = 'https://www.tapcrop.com'
const TODAY = new Date().toISOString().split('T')[0]

const routes = [
  { path: '/', priority: '1.0', freq: 'weekly' },
  { path: '/app', priority: '0.9', freq: 'weekly' },
  { path: '/crop', priority: '0.9', freq: 'weekly' },
  { path: '/compress', priority: '0.9', freq: 'weekly' },
  { path: '/resize', priority: '0.9', freq: 'weekly' },
  { path: '/watermark', priority: '0.9', freq: 'weekly' },
  { path: '/convert', priority: '0.9', freq: 'weekly' },
  { path: '/webp-to-png', priority: '0.9', freq: 'weekly' },
  { path: '/resize-jpg', priority: '0.9', freq: 'weekly' },
  { path: '/resize-png', priority: '0.9', freq: 'weekly' },
  { path: '/compress-jpg', priority: '0.9', freq: 'weekly' },
  { path: '/heic-to-jpg', priority: '0.9', freq: 'weekly' },
  { path: '/tutorial', priority: '0.8', freq: 'monthly' },
  { path: '/faq', priority: '0.7', freq: 'monthly' },
  { path: '/about', priority: '0.5', freq: 'monthly' },
  { path: '/pricing', priority: '0.7', freq: 'monthly' },
  { path: '/feedback', priority: '0.4', freq: 'monthly' },
  { path: '/guides/instagram', priority: '0.8', freq: 'monthly' },
  { path: '/guides/twitter', priority: '0.8', freq: 'monthly' },
  { path: '/guides/youtube', priority: '0.8', freq: 'monthly' },
  { path: '/guides/batch-crop', priority: '0.8', freq: 'monthly' },
  { path: '/changelog', priority: '0.5', freq: 'monthly' },
  { path: '/privacy', priority: '0.3', freq: 'yearly' },
  { path: '/terms', priority: '0.3', freq: 'yearly' },
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url>
    <loc>${SITE}${r.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${r.freq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>
`

writeFileSync(OUT, xml)
console.log(`  Sitemap generated with lastmod=${TODAY} (${routes.length} URLs)`)
