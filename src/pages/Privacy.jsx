import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import PageLayout from './PageLayout'

export default function Privacy() {
  const { lang } = useLanguage()
  const isZh = lang === 'zh'

  useEffect(() => {
    document.title = isZh ? '隐私政策 | TapCrop' : 'Privacy Policy | TapCrop'
  }, [isZh])

  if (isZh) {
    return (
      <PageLayout title="隐私政策">
        <p><strong>最后更新：</strong>2026年3月22日</p>

        <h2>1. 概述</h2>
        <p>TapCrop (www.tapcrop.com) 致力于保护您的隐私。本隐私政策解释了我们收集哪些数据、如何使用这些数据，以及您对个人信息的权利。</p>

        <h2>2. 图片处理</h2>
        <p>TapCrop 的所有图片处理<strong>完全在您的浏览器中</strong>进行。您的图片不会上传到我们的服务器。我们不收集、存储、访问或传输您使用本工具处理的任何图片。</p>

        <h2>3. 我们收集的数据</h2>
        <h3>3.1 分析数据</h3>
        <p>我们使用 Vercel Analytics 和 Vercel Speed Insights 收集匿名的使用统计数据，包括：</p>
        <ul>
          <li>页面浏览量和导航模式</li>
          <li>浏览器类型和版本</li>
          <li>设备类型和屏幕尺寸</li>
          <li>国家/地区（大致位置）</li>
          <li>页面加载性能指标</li>
        </ul>
        <p>这些数据是聚合的和匿名的，无法用于识别个人用户。</p>

        <h3>3.2 账户数据</h3>
        <p>如果您选择创建账户，我们会存储：</p>
        <ul>
          <li>您的邮箱地址</li>
          <li>您的裁剪模板偏好设置</li>
        </ul>
        <p>账户数据通过 Firebase Authentication 和 Firestore 安全存储。创建账户是可选的，核心功能无需账户即可使用。</p>

        <h3>3.3 本地存储</h3>
        <p>我们使用浏览器的本地存储来保存您的设置偏好（裁剪尺寸、格式、质量等），以便在会话之间保持。这些数据保留在您的设备上，不会发送到我们的服务器。</p>

        <h2>4. 支付</h2>
        <p>自愿打赏通过第三方支付处理商 Creem 处理。我们不存储您的支付信息。有关 Creem 如何处理支付数据的详情，请参阅 Creem 的隐私政策。</p>

        <h2>5. Cookie</h2>
        <p>TapCrop 不使用 Cookie 进行跟踪。Vercel Analytics 不使用 Cookie。如果您创建了账户，Firebase 可能会出于认证目的使用 Cookie。</p>

        <h2>6. 第三方服务</h2>
        <p>我们使用以下第三方服务：</p>
        <ul>
          <li><strong>Vercel</strong> — 托管和分析</li>
          <li><strong>Firebase</strong> — 认证和数据存储（可选账户）</li>
          <li><strong>Creem</strong> — 支付处理（自愿打赏）</li>
        </ul>

        <h2>7. 数据保留</h2>
        <p>分析数据根据 Vercel 的数据保留政策保留。如果您有账户，您的数据将保留到您删除账户为止。本地存储数据保留到您清除浏览器数据为止。</p>

        <h2>8. 您的权利</h2>
        <p>您有权：</p>
        <ul>
          <li>无需创建账户即可使用 TapCrop</li>
          <li>请求删除您的账户及相关数据</li>
          <li>随时通过浏览器设置清除本地存储数据</li>
        </ul>

        <h2>9. 儿童隐私</h2>
        <p>TapCrop 不会故意收集 13 岁以下儿童的个人信息。如果您认为我们收集了此类信息，请立即联系我们。</p>

        <h2>10. 政策变更</h2>
        <p>我们可能会不时更新本隐私政策。变更将通过页面顶部的"最后更新"日期反映。</p>

        <h2>11. 联系方式</h2>
        <p>如对本隐私政策有任何疑问，请联系 <a href="mailto:humphrey1114@gmail.com">humphrey1114@gmail.com</a>。</p>
      </PageLayout>
    )
  }

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
      <p>For questions about this Privacy Policy, please contact us at <a href="mailto:humphrey1114@gmail.com">humphrey1114@gmail.com</a>.</p>
    </PageLayout>
  )
}
