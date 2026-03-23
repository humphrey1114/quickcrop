import { initializeApp, cert, getApps } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

// Initialize Firebase Admin (only once)
if (getApps().length === 0) {
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    }),
  })
}

const db = getFirestore()

export default async function handler(req, res) {
  // Only accept POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const event = req.body

    // Creem sends webhook events for subscription lifecycle
    // Event types: checkout.completed, subscription.active, subscription.canceled, etc.
    const eventType = event.event_type || event.type
    const data = event.data || event

    // Extract customer/user info
    const customerId = data.customer_id || data.metadata?.firebase_uid
    const email = data.customer_email || data.email

    if (!customerId && !email) {
      console.log('Webhook received but no user identifier found:', eventType)
      return res.status(200).json({ received: true })
    }

    // Find Firebase user by email if no direct UID
    let uid = customerId
    if (!uid && email) {
      // Look up by email in users collection
      const usersSnap = await db.collection('users').where('email', '==', email).limit(1).get()
      if (!usersSnap.empty) {
        uid = usersSnap.docs[0].id
      }
    }

    if (!uid) {
      console.log('Could not find user for webhook:', email)
      return res.status(200).json({ received: true })
    }

    const subRef = db.doc(`users/${uid}/subscription/status`)

    switch (eventType) {
      case 'checkout.completed':
      case 'subscription.active':
      case 'subscription.renewed': {
        // Activate Pro
        const expiresAt = data.current_period_end
          ? new Date(data.current_period_end * 1000)
          : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // default 30 days

        await subRef.set({
          plan: 'pro',
          status: 'active',
          customerId: data.customer_id || null,
          subscriptionId: data.subscription_id || data.id || null,
          email: email || null,
          activatedAt: new Date(),
          expiresAt: expiresAt,
          updatedAt: new Date(),
        }, { merge: true })

        console.log(`Pro activated for user ${uid}`)
        break
      }

      case 'subscription.canceled':
      case 'subscription.expired': {
        // Deactivate Pro
        await subRef.set({
          plan: 'free',
          status: 'canceled',
          canceledAt: new Date(),
          updatedAt: new Date(),
        }, { merge: true })

        console.log(`Pro canceled for user ${uid}`)
        break
      }

      default:
        console.log('Unhandled webhook event:', eventType)
    }

    return res.status(200).json({ received: true })
  } catch (err) {
    console.error('Webhook error:', err)
    // Always return 200 to prevent Creem from retrying
    return res.status(200).json({ received: true, error: err.message })
  }
}
