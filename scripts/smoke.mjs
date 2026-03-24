import { createServer } from 'http'
import { existsSync, readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const DIST = join(ROOT, 'dist')
const TEST_IMAGE = join(ROOT, 'public', '192.png')

function createApiResponse(res) {
  return {
    setHeader: (...args) => res.setHeader(...args),
    status(code) {
      res.statusCode = code
      return this
    },
    json(payload) {
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(payload))
    },
    end(payload) {
      res.end(payload)
    },
  }
}

function startServer() {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      const url = req.url.split('?')[0]

      if (url === '/api/create-creem-checkout' && req.method === 'POST') {
        const chunks = []
        req.on('data', chunk => chunks.push(chunk))
        req.on('end', async () => {
          try {
            const body = JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}')
            const { default: handler } = await import('../api/create-creem-checkout.js')
            req.body = body
            await handler(req, createApiResponse(res))
          } catch (error) {
            res.writeHead(500, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ error: error.message }))
          }
        })
        return
      }

      let filePath = join(DIST, url)
      if (!existsSync(filePath) || !filePath.includes('.')) {
        const htmlPath = join(DIST, url, 'index.html')
        filePath = existsSync(htmlPath) ? htmlPath : join(DIST, 'index.html')
      }

      try {
        const content = readFileSync(filePath)
        const ext = filePath.split('.').pop()
        const types = {
          html: 'text/html',
          js: 'application/javascript',
          css: 'text/css',
          svg: 'image/svg+xml',
          png: 'image/png',
          jpg: 'image/jpeg',
          json: 'application/json',
          woff2: 'font/woff2',
        }
        res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' })
        res.end(content)
      } catch {
        res.writeHead(404)
        res.end('Not Found')
      }
    })

    server.listen(0, () => {
      const address = server.address()
      const port = typeof address === 'object' && address ? address.port : 0
      resolve({ server, port })
    })
  })
}

async function getBrowser() {
  const puppeteer = (await import('puppeteer-core')).default

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
    const paths = [
      'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
      process.env.LOCALAPPDATA + '\\Google\\Chrome\\Application\\chrome.exe',
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      '/usr/bin/google-chrome',
      '/usr/bin/chromium-browser',
      '/usr/bin/chromium',
    ]

    for (const path of paths) {
      if (path && existsSync(path)) {
        return await puppeteer.launch({
          executablePath: path,
          headless: true,
          args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
        })
      }
    }

    throw new Error('No Chrome/Chromium found for smoke tests')
  }
}

async function assertCheckoutEndpoint(baseUrl) {
  const response = await fetch(`${baseUrl}/api/create-creem-checkout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: 'smoke-test-user',
      email: 'smoke@example.com',
      locale: 'en',
    }),
  })

  const data = await response.json()
  if (!data.checkoutUrl && !data.fallbackUrl) {
    throw new Error('Checkout endpoint did not return a checkout or fallback URL')
  }
}

async function run() {
  if (!existsSync(join(DIST, 'index.html'))) {
    throw new Error('dist/ is missing. Run `npm run build` before `npm run smoke`.')
  }

  if (!existsSync(TEST_IMAGE)) {
    throw new Error('Smoke test image is missing')
  }

  const { server, port } = await startServer()
  const browser = await getBrowser()
  const baseUrl = `http://localhost:${port}`

  try {
    await assertCheckoutEndpoint(baseUrl)

    const page = await browser.newPage()

    await page.goto(baseUrl, { waitUntil: 'networkidle0', timeout: 15000 })
    await page.waitForSelector('.home-hero-title', { timeout: 15000 })

    await page.goto(`${baseUrl}/pricing`, { waitUntil: 'networkidle0', timeout: 15000 })
    await page.waitForSelector('.pricing-btn-pro', { timeout: 15000 })

    await page.goto(`${baseUrl}/app`, { waitUntil: 'networkidle0', timeout: 15000 })
    const input = await page.waitForSelector('.dropzone input[type="file"]', { timeout: 15000 })
    await input.uploadFile(TEST_IMAGE)

    await page.waitForSelector('.image-card', { timeout: 15000 })
    await page.waitForFunction(() => {
      const button = document.querySelector('.btn-process')
      return button && !button.disabled
    }, { timeout: 15000 })

    await page.click('.btn-process')
    await page.waitForSelector('.btn-download', { timeout: 15000 })
    await page.close()

    console.log('Smoke checks passed')
  } finally {
    await browser.close()
    server.close()
  }
}

run().catch((error) => {
  console.error('Smoke check failed:', error)
  process.exit(1)
})
