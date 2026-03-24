import crypto from 'crypto'

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

export function parseWebhookEvent(req) {
  const rawBody = Buffer.isBuffer(req.body)
    ? req.body.toString('utf8')
    : typeof req.body === 'string'
      ? req.body
      : JSON.stringify(req.body || {})

  const event = typeof req.body === 'string' || Buffer.isBuffer(req.body)
    ? JSON.parse(rawBody || '{}')
    : (req.body || {})

  return { rawBody, event }
}
