import { buildLegacyCheckoutUrl, createCreemCheckout } from './_lib/creem.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { userId, email, locale } = req.body || {}

  if (!userId) {
    return res.status(400).json({ error: 'Missing required userId' })
  }

  try {
    const checkout = await createCreemCheckout({ req, userId, email, locale })
    return res.status(200).json({
      checkoutId: checkout.id,
      checkoutUrl: checkout.checkout_url,
    })
  } catch (error) {
    if (error.statusCode === 503) {
      return res.status(503).json({
        error: error.message,
        fallbackUrl: buildLegacyCheckoutUrl({ userId, email }),
      })
    }

    console.error('Creem checkout error:', error)
    return res.status(error.statusCode || 500).json({
      error: error.message || 'Failed to create checkout session',
      fallbackUrl: buildLegacyCheckoutUrl({ userId, email }),
    })
  }
}
