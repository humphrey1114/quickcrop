import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from './PageLayout'

export default function Terms() {
  useEffect(() => {
    document.title = 'Terms of Service | TapCrop'
  }, [])

  return (
    <PageLayout title="Terms of Service">
      <p><strong>Last updated:</strong> March 22, 2026</p>

      <h2>1. Acceptance of Terms</h2>
      <p>By accessing and using TapCrop (www.tapcrop.com), you agree to be bound by these Terms of Service and our <Link to="/privacy">Privacy Policy</Link>. If you do not agree to these terms, please do not use the service.</p>

      <h2>2. Description of Service</h2>
      <p>TapCrop is a free online batch image cropping tool. All image processing is performed entirely in your browser — no images are uploaded to or stored on our servers. The service is provided on an "as available" basis.</p>

      <h2>3. Eligibility</h2>
      <p>You must be at least 13 years of age to use TapCrop. By using the service, you represent and warrant that you meet this requirement. If you are under 18, you confirm that you have the consent of a parent or legal guardian.</p>

      <h2>4. User Accounts</h2>
      <p>You may optionally create an account to sync crop templates across devices. Account data is stored securely using Firebase Authentication. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to notify us immediately of any unauthorized use of your account.</p>

      <h2>5. Acceptable Use</h2>
      <p>You agree not to use TapCrop to:</p>
      <ul>
        <li>Process images that violate any applicable law or regulation</li>
        <li>Infringe upon the intellectual property rights of others</li>
        <li>Attempt to interfere with, compromise, or disrupt the service</li>
        <li>Use automated systems (bots, scrapers) to access the service without prior written permission</li>
        <li>Process content that is unlawful, harmful, threatening, abusive, or otherwise objectionable</li>
      </ul>

      <h2>6. Privacy and Data Processing</h2>
      <p>Your privacy is important to us. TapCrop does not collect, store, or transmit your images. All image processing happens entirely in your browser. We use Vercel Analytics to collect anonymous, cookie-free usage statistics. For full details, please see our <Link to="/privacy">Privacy Policy</Link>.</p>

      <h2>7. Donations and Payments</h2>
      <p>TapCrop's core features are free to use. Voluntary donations are processed through Creem, a third-party payment processor. We reserve the right to introduce premium features or paid plans in the future. By making a donation, you acknowledge that:</p>
      <ul>
        <li>Donations are voluntary and do not unlock additional features</li>
        <li>Donations are non-refundable unless required by applicable law</li>
        <li>Payment processing is handled by Creem — we do not store your payment information</li>
        <li>Prices are displayed clearly before you confirm any payment</li>
      </ul>

      <h2>8. Refund Policy</h2>
      <p>As donations are voluntary contributions and do not constitute a purchase of goods or services, they are generally non-refundable. However, if you believe a charge was made in error, please contact us at <a href="mailto:feedback294@163.com">feedback294@163.com</a> and we will review your request. Refunds required by applicable consumer protection law (including EU/UK distance selling regulations) will be honored.</p>

      <h2>9. Intellectual Property</h2>
      <p>TapCrop and its original content, features, functionality, branding, and source code are the property of TapCrop and are protected by international copyright, trademark, and other intellectual property laws. You retain all rights to your images — we never access, store, or claim any rights to your content.</p>

      <h2>10. DMCA / Copyright Policy</h2>
      <p>We respect the intellectual property rights of others. If you believe that any content on TapCrop infringes your copyright, please contact us at <a href="mailto:feedback294@163.com">feedback294@163.com</a> with the following information:</p>
      <ul>
        <li>A description of the copyrighted work you claim has been infringed</li>
        <li>The URL or location of the allegedly infringing material</li>
        <li>Your contact information (name, email, address)</li>
        <li>A statement that you have a good faith belief that the use is not authorized</li>
        <li>A statement, under penalty of perjury, that the information is accurate and you are the copyright owner or authorized to act on behalf of one</li>
      </ul>

      <h2>11. Disclaimer of Warranties</h2>
      <p>TAPCROP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, OR THAT DEFECTS WILL BE CORRECTED.</p>

      <h2>12. Limitation of Liability</h2>
      <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, TAPCROP AND ITS OPERATORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY.</p>

      <h2>13. Indemnification</h2>
      <p>You agree to defend, indemnify, and hold harmless TapCrop and its operators from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising out of your use of the service or violation of these terms.</p>

      <h2>14. Third-Party Services</h2>
      <p>TapCrop may contain links to or integrate with third-party services (such as Creem for payments, Firebase for authentication, and Vercel for hosting). We are not responsible for the content, privacy policies, or practices of these third-party services. Your use of such services is governed by their respective terms and policies.</p>

      <h2>15. Governing Law</h2>
      <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which TapCrop operates, without regard to conflict of law provisions. For users in the European Union or United Kingdom, nothing in these terms affects your statutory consumer rights.</p>

      <h2>16. Severability</h2>
      <p>If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.</p>

      <h2>17. Changes to Terms</h2>
      <p>We reserve the right to update these Terms at any time. Material changes will be indicated by updating the "Last updated" date at the top of this page. Your continued use of TapCrop after changes are posted constitutes acceptance of the revised terms.</p>

      <h2>18. Contact</h2>
      <p>For questions about these Terms of Service, please contact us at <a href="mailto:feedback294@163.com">feedback294@163.com</a>.</p>
    </PageLayout>
  )
}
