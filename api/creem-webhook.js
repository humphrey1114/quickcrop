import { getAdminDb } from './_lib/firebaseAdmin.js'
import { parseWebhookEvent, verifyCreemSignature } from './_lib/creem.js'

function getDateFromCandidates(...values) {
  for (const value of values) {
    if (!value) continue

    if (value instanceof Date && !Number.isNaN(value.getTime())) {
      return value
    }

    if (typeof value === 'number') {
      const date = new Date(value > 1e12 ? value : value * 1000)
      if (!Number.isNaN(date.getTime())) return date
    }

    if (typeof value === 'string') {
      const asNumber = Number(value)
      if (!Number.isNaN(asNumber) && value.trim() !== '') {
        const date = new Date(asNumber > 1e12 ? asNumber : asNumber * 1000)
        if (!Number.isNaN(date.getTime())) return date
      }

      const date = new Date(value)
      if (!Number.isNaN(date.getTime())) return date
    }
  }

  return null
}

function getMetadata(object) {
  return object?.metadata || object?.checkout?.metadata || {}
}

function getEmail(object) {
  return (
    object?.customer?.email ||
    object?.checkout?.customer?.email ||
    object?.email ||
    object?.customer_email ||
    null
  )
}

function getCustomerId(object) {
  return object?.customer?.id || object?.customer_id || null
}

function getProductId(object) {
  if (typeof object?.product === 'string') return object.product
  return object?.product?.id || object?.product_id || object?.checkout?.product?.id || null
}

function getSubscriptionId(object) {
  return object?.id || object?.subscription_id || object?.subscription?.id || null
}

function hasSubscriptionAccess(data) {
  const status = data?.status || 'free'
  const expiresAt = data?.expiresAt?.toDate ? data.expiresAt.toDate() : data?.expiresAt
  const notExpired = !expiresAt || expiresAt > new Date()
  return data?.plan === 'pro' && notExpired && !['expired', 'paused'].includes(status)
}

async function findUserIdByEmail(db, email) {
  if (!email) return null
  const usersSnap = await db.collection('users').where('email', '==', email).limit(1).get()
  return usersSnap.empty ? null : usersSnap.docs[0].id
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const signature = req.headers['creem-signature']
    const { rawBody, event } = parseWebhookEvent(req)

    if (!process.env.CREEM_WEBHOOK_SECRET) {
      throw new Error('CREEM_WEBHOOK_SECRET is not configured')
    }

    if (!verifyCreemSignature(rawBody, signature)) {
      return res.status(401).json({ error: 'Invalid signature' })
    }

    const db = getAdminDb()
    const eventType = event?.eventType || event?.event_type || event?.type
    const object = event?.object || event?.data || event || {}
    const metadata = getMetadata(object)
    const email = getEmail(object)

    let uid = metadata.firebaseUid || metadata.firebase_uid || metadata.referenceId || metadata.userId || null
    if (!uid) {
      uid = await findUserIdByEmail(db, email)
    }

    if (!uid) {
      console.log('Creem webhook ignored: no matching user', { eventType, email })
      return res.status(200).json({ received: true, ignored: true })
    }

    const subRef = db.doc(`users/${uid}/subscription/status`)
    const existingSnap = await subRef.get()
    const existingData = existingSnap.exists ? existingSnap.data() : null
    const expiresAt = getDateFromCandidates(
      object?.current_period_end_date,
      object?.current_period_end,
      object?.next_transaction_date,
      object?.expires_at,
      object?.subscription?.current_period_end_date,
      object?.subscription?.expires_at,
      existingData?.expiresAt,
    )

    const commonPayload = {
      email,
      customerId: getCustomerId(object),
      productId: getProductId(object),
      subscriptionId: getSubscriptionId(object),
      updatedAt: new Date(),
      lastEventType: eventType,
    }

    if (['checkout.completed', 'subscription.active', 'subscription.trialing', 'subscription.paid'].includes(eventType)) {
      await subRef.set({
        ...commonPayload,
        plan: 'pro',
        status: object?.status || 'active',
        cancelAtPeriodEnd: false,
        activatedAt: existingData?.activatedAt || new Date(),
        expiresAt: expiresAt || null,
      }, { merge: true })

      return res.status(200).json({ received: true, access: 'granted' })
    }

    if (['subscription.canceled', 'subscription.unpaid'].includes(eventType)) {
      await subRef.set({
        ...commonPayload,
        plan: 'pro',
        status: eventType === 'subscription.canceled' ? 'canceled' : 'unpaid',
        cancelAtPeriodEnd: eventType === 'subscription.canceled',
        expiresAt: expiresAt || existingData?.expiresAt || null,
      }, { merge: true })

      return res.status(200).json({ received: true, access: hasSubscriptionAccess({
        ...existingData,
        plan: 'pro',
        status: eventType === 'subscription.canceled' ? 'canceled' : 'unpaid',
        expiresAt: expiresAt || existingData?.expiresAt || null,
      }) ? 'retained' : 'pending-expiry' })
    }

    if (['subscription.expired', 'subscription.paused'].includes(eventType)) {
      await subRef.set({
        ...commonPayload,
        plan: 'free',
        status: eventType === 'subscription.paused' ? 'paused' : 'expired',
        cancelAtPeriodEnd: false,
        expiresAt: expiresAt || new Date(),
        revokedAt: new Date(),
      }, { merge: true })

      return res.status(200).json({ received: true, access: 'revoked' })
    }

    console.log('Unhandled Creem webhook event:', eventType)
    return res.status(200).json({ received: true, ignored: true })
  } catch (error) {
    console.error('Creem webhook error:', error)
    return res.status(500).json({ error: error.message || 'Webhook processing failed' })
  }
}
