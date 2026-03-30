/**
 * Convert og-image.svg to og-image.png (1200x630) using puppeteer.
 * Called during build: node scripts/generate-og-png.mjs
 * FAULT-TOLERANT: If browser fails, SVG remains as fallback.
 */
import { existsSync, readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SVG_PATH = join(__dirname, '..', 'public', 'og-image.svg')
const PNG_PATH = join(__dirname, '..', 'public', 'og-image.png')

// Skip if PNG already exists and is newer than SVG
if (existsSync(PNG_PATH)) {
  console.log('  og-image.png already exists, skipping generation')
  process.exit(0)
}

async function generate() {
  const puppeteer = (await import('puppeteer-core')).default

  let browser
  try {
    // Try @sparticuz/chromium first
    const chromium = (await import('@sparticuz/chromium')).default
    chromium.setHeadlessMode = true
    chromium.setGraphicsMode = false
    browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: { width: 1200, height: 630 },
      executablePath: await chromium.executablePath(),
      headless: true,
    })
  } catch {
    // Fallback: local Chrome
    const paths = [
      'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
      process.env.LOCALAPPDATA + '\\Google\\Chrome\\Application\\chrome.exe',
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      '/usr/bin/google-chrome',
      '/usr/bin/chromium-browser',
    ]
    const found = paths.find(p => p && existsSync(p))
    if (!found) {
      console.log('  No Chrome found — skipping OG PNG generation')
      process.exit(0)
    }
    browser = await puppeteer.launch({
      executablePath: found,
      headless: true,
      defaultViewport: { width: 1200, height: 630 },
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
    })
  }

  const page = await browser.newPage()
  const svgContent = readFileSync(SVG_PATH, 'utf-8')
  const html = `<!DOCTYPE html><html><head><style>body{margin:0;padding:0;}</style></head><body>${svgContent}</body></html>`
  await page.setContent(html, { waitUntil: 'networkidle0' })
  const buf = await page.screenshot({ type: 'png', clip: { x: 0, y: 0, width: 1200, height: 630 } })
  writeFileSync(PNG_PATH, buf)
  await browser.close()
  console.log('  og-image.png generated (1200x630)')
}

generate().catch(err => {
  console.log(`  OG PNG generation failed (non-fatal): ${err.message}`)
  process.exit(0)
})
