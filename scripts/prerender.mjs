/**
 * Post-build prerender script.
 * Uses puppeteer-core + @sparticuz/chromium to work on both
 * local machines and Vercel/Lambda build environments.
 *
 * FAULT-TOLERANT: If browser fails to launch, the script exits
 * gracefully — the site works fine as a normal SPA.
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

function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let url = req.url.split('?')[0]
      let filePath = join(DIST, url)

      if (!existsSync(filePath) || !filePath.includes('.')) {
        const htmlPath = join(DIST, url, 'index.html')
        filePath = existsSync(htmlPath) ? htmlPath : join(DIST, 'index.html')
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

async function getBrowser() {
  const puppeteer = (await import('puppeteer-core')).default

  // Try @sparticuz/chromium first (works on Vercel/Lambda)
  try {
    const chromium = (await import('@sparticuz/chromium')).default
    chromium.setHeadlessMode = true
    chromium.setGraphicsMode = false
    const executablePath = await chromium.executablePath()
    return await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath,
      headless: true,
    })
  } catch {
    // Fallback: try local Chrome/Chromium
    const paths = [
      // Windows
      'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
      process.env.LOCALAPPDATA + '\\Google\\Chrome\\Application\\chrome.exe',
      // macOS
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      // Linux
      '/usr/bin/google-chrome',
      '/usr/bin/chromium-browser',
      '/usr/bin/chromium',
    ]

    for (const p of paths) {
      if (p && existsSync(p)) {
        return await puppeteer.launch({
          executablePath: p,
          headless: true,
          args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
        })
      }
    }

    throw new Error('No Chrome/Chromium found')
  }
}

async function prerender() {
  console.log('\n🔍 Prerendering routes for SEO...\n')

  let server, browser
  try {
    server = await startServer()
    browser = await getBrowser()
  } catch (err) {
    console.log(`\n⏭️  Cannot launch browser — skipping prerender: ${err.message}`)
    console.log('   Site will work fine as a normal SPA.\n')
    server?.close()
    process.exit(0)
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
      await page.waitForFunction(() => document.querySelector('h1') !== null, { timeout: 5000 }).catch(() => {})

      const html = await page.content()
      await page.close()

      const outDir = route === '/' ? DIST : join(DIST, route)
      if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })
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

prerender().catch((err) => {
  console.log(`\n⏭️  Prerender error (non-fatal): ${err.message}\n`)
  process.exit(0)
})
