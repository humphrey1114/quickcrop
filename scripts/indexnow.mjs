/**
 * IndexNow submission script.
 * Run after deployment to notify Bing/Yandex of new or updated URLs.
 * Usage: node scripts/indexnow.mjs
 */

const KEY = '1e2ba818594a48c7bc3f01bc173fb938'
const HOST = 'www.tapcrop.com'

const URLS = [
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

async function submitIndexNow() {
  const body = JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: URLS.map(u => `https://${HOST}${u}`),
  })

  console.log(`\n📡 Submitting ${URLS.length} URLs to IndexNow...\n`)

  // Submit to both Bing and Yandex
  const engines = [
    { name: 'Bing', url: 'https://api.indexnow.org/IndexNow' },
    { name: 'Yandex', url: 'https://yandex.com/indexnow' },
  ]

  for (const engine of engines) {
    try {
      const res = await fetch(engine.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body,
      })
      console.log(`  ${res.ok ? '✅' : '❌'} ${engine.name}: ${res.status} ${res.statusText}`)
    } catch (err) {
      console.log(`  ❌ ${engine.name}: ${err.message}`)
    }
  }

  console.log('\n  Done!\n')
}

submitIndexNow()
