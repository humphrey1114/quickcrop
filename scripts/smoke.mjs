import { createServer } from 'http'
import { existsSync, readFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const DIST = join(ROOT, 'dist')

function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      const url = (req.url || '/').split('?')[0]

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

async function fetchText(url) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Request failed for ${url}: ${response.status}`)
  }
  return response.text()
}

function assertIncludes(content, needle, label) {
  if (!content.includes(needle)) {
    throw new Error(`Missing ${label}: ${needle}`)
  }
}

async function run() {
  if (!existsSync(join(DIST, 'index.html'))) {
    throw new Error('dist/ is missing. Run `npm run build` before `npm run smoke`.')
  }

  const { server, port } = await startServer()
  const baseUrl = `http://localhost:${port}`

  try {
    const homeHtml = await fetchText(baseUrl)
    assertIncludes(homeHtml, 'home-hero-title', 'home hero markup')
    assertIncludes(homeHtml, 'TapCrop', 'brand name')

    const appHtml = await fetchText(`${baseUrl}/app`)
    assertIncludes(appHtml, 'dropzone-title', 'upload area')
    assertIncludes(appHtml, 'btn-process', 'process button')

    const assetDir = join(DIST, 'assets')
    const bundleContent = readdirSync(assetDir)
      .filter((fileName) => fileName.endsWith('.js'))
      .map((fileName) => readFileSync(join(assetDir, fileName), 'utf8'))
      .join('\n')

    assertIncludes(bundleContent, 'pricing-btn-pro', 'pricing CTA')
    assertIncludes(bundleContent, 'https://www.creem.io/payment/', 'direct Creem payment link')
    if (bundleContent.includes('/api/create-creem-checkout')) {
      throw new Error('Found deprecated /api/create-creem-checkout reference in built assets')
    }

    console.log('Smoke checks passed')
  } finally {
    server.close()
  }
}

run().catch((error) => {
  console.error('Smoke check failed:', error)
  process.exit(1)
})
