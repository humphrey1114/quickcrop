/**
 * Post-build prerender script.
 * After `vite build`, this script serves the dist folder,
 * visits each route with Puppeteer, and saves the rendered HTML.
 *
 * FAULT-TOLERANT: If Puppeteer fails (e.g. on Vercel), the script
 * exits gracefully with code 0 — the site works fine as a normal SPA.
 * Prerendering is an SEO enhancement, not a requirement.
 */
import { createServer } from 'http'
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, '..', 'dist')
const PORT = 4173

const ROUTES = [
  '/',
  '/app',
  '/tutorial',
  '/faq',
  '/changelog',
  '/feedback',
  '/about',
  '/crop',
  '/compress',
  '/resize',
  '/watermark',
  '/convert',
  '/webp-to-png',
  '/resize-jpg',
  '/resize-png',
  '/compress-jpg',
  '/heic-to-jpg',
  '/guides/instagram',
  '/guides/twitter',
  '/guides/youtube',
  '/guides/batch-crop',
  '/privacy',
  '/terms',
]

// Simple static file server for the dist folder
function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let url = req.url.split('?')[0]
      let filePath = join(DIST, url)

      if (!existsSync(filePath) || !filePath.includes('.')) {
        const htmlPath = join(DIST, url, 'index.html')
        if (existsSync(htmlPath)) {
          filePath = htmlPath
        } else {
          filePath = join(DIST, 'index.html')
        }
      }

      try {
        const content = readFileSync(filePath)
        const ext = filePath.split('.').pop()
        const types = {
          html: 'text/html', js: 'application/javascript',
          css: 'text/css', svg: 'image/svg+xml',
          png: 'image/png', jpg: 'image/jpeg',
          json: 'application/json', woff2: 'font/woff2',
        }
        res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' })
        res.end(content)
      } catch {
        res.writeHead(404)
        res.end('Not Found')
      }
    })

    server.listen(PORT, () => {
      console.log(`  Static server on http://localhost:${PORT}`)
      resolve(server)
    })
  })
}

async function prerender() {
  // Try to import puppeteer — if it fails, skip prerendering gracefully
  let puppeteer
  try {
    puppeteer = (await import('puppeteer')).default
  } catch {
    console.log('\n⏭️  Puppeteer not available — skipping prerender (site works fine as SPA)\n')
    process.exit(0)
  }

  console.log('\n🔍 Prerendering routes for SEO...\n')

  let server, browser
  try {
    server = await startServer()
    browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] })
  } catch (err) {
    console.log(`\n⏭️  Cannot launch browser — skipping prerender: ${err.message}\n`)
    server?.close()
    process.exit(0) // Exit 0 so build succeeds
  }

  let success = 0
  let failed = 0

  for (const route of ROUTES) {
    try {
      const page = await browser.newPage()
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 15000,
      })

      // Wait for React to render an h1
      await page.waitForFunction(() => document.querySelector('h1') !== null, { timeout: 5000 }).catch(() => {})

      const html = await page.content()
      await page.close()

      const outDir = route === '/' ? DIST : join(DIST, route)
      if (!existsSync(outDir)) {
        mkdirSync(outDir, { recursive: true })
      }
      const outFile = route === '/' ? join(DIST, 'index.html') : join(outDir, 'index.html')
      writeFileSync(outFile, html)

      success++
      console.log(`  ✅ ${route}`)
    } catch (err) {
      failed++
      console.log(`  ❌ ${route} — ${err.message}`)
    }
  }

  await browser.close()
  server.close()

  console.log(`\n  Done: ${success} prerendered, ${failed} failed\n`)
}

// Always exit 0 — prerendering is an enhancement, not a requirement
prerender().catch((err) => {
  console.log(`\n⏭️  Prerender error (non-fatal): ${err.message}\n`)
  process.exit(0)
})
