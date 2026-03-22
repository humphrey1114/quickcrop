import { useEffect } from 'react'
import PageLayout from './PageLayout'

export default function Privacy() {
  useEffect(() => {
    document.title = 'Privacy Policy | TapCrop'
  }, [])

  return (
    <PageLayout title="Privacy Policy">
      <p><strong>Last updated:</strong> March 22, 2026</p>

      <h2>1. Overview</h2>
      <p>TapCrop (www.tapcrop.com) is committed to protecting your privacy. This Privacy Policy explains what data we collect, how we use it, and your rights regarding your information.</p>

      <h2>2. Image Processing</h2>
      <p>All image processing in TapCrop happens <strong>entirely in your browser</strong>. Your images are never uploaded to our servers. We do not collect, store, access, or transmit any images you process using our tool.</p>

      <h2>3. Data We Collect</h2>
      <h3>3.1 Analytics Data</h3>
      <p>We use Vercel Analytics and Vercel Speed Insights to collect anonymous usage statistics, including:</p>
      <ul>
        <li>Page views and navigation patterns</li>
        <li>Browser type and version</li>
        <li>Device type and screen size</li>
        <li>Country/region (approximate)</li>
        <li>Page load performance metrics</li>
      </ul>
      <p>This data is aggregated and anonymous — it cannot be used to identify individual users.</p>

      <h3>3.2 Account Data</h3>
      <p>If you choose to create an account, we store:</p>
      <ul>
        <li>Your email address</li>
        <li>Your crop template preferences</li>
      </ul>
      <p>Account data is stored securely using Firebase Authentication and Firestore. Account creation is optional — core features are available without an account.</p>

      <h3>3.3 Local Storage</h3>
      <p>We use your browser's local storage to save your settings preferences (crop dimensions, format, quality, etc.) so they persist between sessions. This data stays on your device and is never sent to our servers.</p>

      <h2>4. Payments</h2>
      <p>Voluntary donations are processed through Creem, a third-party payment processor. We do not store your payment information. Please refer to Creem's privacy policy for details on how they handle payment data.</p>

      <h2>5. Cookies</h2>
      <p>TapCrop does not use cookies for tracking. Vercel Analytics is cookie-free. Firebase may use cookies for authentication purposes if you create an account.</p>

      <h2>6. Third-Party Services</h2>
      <p>We use the following third-party services:</p>
      <ul>
        <li><strong>Vercel</strong> — Hosting and analytics</li>
        <li><strong>Firebase</strong> — Authentication and data storage (optional accounts)</li>
        <li><strong>Creem</strong> — Payment processing (voluntary donations)</li>
      </ul>

      <h2>7. Data Retention</h2>
      <p>Analytics data is retained according to Vercel's data retention policies. If you have an account, your data is retained until you delete your account. Local storage data persists until you clear your browser data.</p>

      <h2>8. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Use TapCrop without creating an account</li>
        <li>Request deletion of your account and associated data</li>
        <li>Clear local storage data at any time through your browser settings</li>
      </ul>

      <h2>9. Children's Privacy</h2>
      <p>TapCrop does not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.</p>

      <h2>10. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. Changes will be reflected by the "Last updated" date at the top of this page.</p>

      <h2>11. Contact</h2>
      <p>For questions about this Privacy Policy, please contact us at <a href="mailto:feedback294@163.com">feedback294@163.com</a>.</p>
    </PageLayout>
  )
}
