import crypto from 'crypto'

const DEFAULT_PRO_PRODUCT_ID = 'prod_443SQW7gVPLY8Gjx6vhk7x'

function compactObject(input) {
  return Object.fromEntries(
    Object.entries(input).filter(([, value]) => value !== undefined && value !== null && value !== '')
  )
}

export function getSiteUrl(req) {
  if (process.env.PUBLIC_SITE_URL) {
    return process.env.PUBLIC_SITE_URL.replace(/\/$/, '')
  }

  const host = req.headers['x-forwarded-host'] || req.headers.host || 'www.tapcrop.com'
  const proto = req.headers['x-forwarded-proto'] || 'https'
  return `${proto}://${host}`
}

export function getProProductId() {
  return process.env.CREEM_PRO_PRODUCT_ID || process.env.CREEM_PRODUCT_ID || DEFAULT_PRO_PRODUCT_ID
}

export function buildLegacyCheckoutUrl({ userId, email }) {
  const params = new URLSearchParams({
    client_reference_id: userId,
    prefilled_email: email || '',
  })

  return `https://www.creem.io/payment/${getProProductId()}?${params}`
}

export function verifyCreemSignature(rawBody, signature) {
  const secret = process.env.CREEM_WEBHOOK_SECRET
  if (!secret || !signature) {
    return false
  }

  const expected = crypto.createHmac('sha256', secret).update(rawBody).digest('hex')
  const normalizedSignature = Array.isArray(signature)
    ? String(signature[0] || '').trim()
    : String(signature).trim()

  try {
    return crypto.timingSafeEqual(
      Buffer.from(expected, 'hex'),
      Buffer.from(normalizedSignature, 'hex'),
    )
  } catch {
    return false
  }
}

export async function createCreemCheckout({ req, userId, email, locale }) {
  const apiKey = process.env.CREEM_API_KEY
  if (!apiKey) {
    const error = new Error('Creem checkout is not configured')
    error.statusCode = 503
    error.fallbackUrl = buildLegacyCheckoutUrl({ userId, email })
    throw error
  }

  const siteUrl = getSiteUrl(req)
  const payload = compactObject({
    product_id: getProProductId(),
    request_id: `tapcrop-pro-${userId}-${Date.now()}`,
    success_url: `${siteUrl}/pricing?checkout=success`,
    customer: email ? { email } : undefined,
    metadata: {
      firebaseUid: userId,
      referenceId: userId,
      plan: 'pro',
      source: 'pricing-page',
      locale: locale || 'en',
    },
  })

  const response = await fetch('https://api.creem.io/v1/checkouts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    },
    body: JSON.stringify(payload),
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok || !data.checkout_url) {
    const error = new Error(data.message || 'Failed to create checkout session')
    error.statusCode = response.status || 502
    error.details = data
    throw error
  }

  return data
}

export function parseWebhookEvent(req) {
  const rawBody = typeof req.body === 'string'
    ? req.body
    : JSON.stringify(req.body || {})
  const event = typeof req.body === 'string'
    ? JSON.parse(req.body)
    : (req.body || {})

  return { rawBody, event }
}
