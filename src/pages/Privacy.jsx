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
        <p><strong>最后更新：</strong>2026 年 3 月 24 日</p>

        <h2>1. 概述</h2>
        <p>TapCrop（www.tapcrop.com）致力于保护你的隐私。本隐私政策说明我们会收集哪些数据、如何使用这些数据，以及你对相关信息享有的权利。</p>

        <h2>2. 图片处理</h2>
        <p>TapCrop 的图片处理完全在你的浏览器中完成。你的图片不会上传到我们的服务器，我们也不会访问、存储或传输你使用 TapCrop 处理的图片内容。</p>

        <h2>3. 我们收集的数据</h2>
        <h3>3.1 匿名分析数据</h3>
        <p>我们使用 Vercel Analytics 和 Vercel Speed Insights 收集匿名的使用与性能数据，例如页面访问、设备类型、浏览器版本、地区级别来源和页面性能指标。这些数据不会直接识别个人身份。</p>

        <h3>3.2 账户数据</h3>
        <p>如果你注册 TapCrop 账户，我们会保存与你账户相关的基础信息，例如邮箱地址，以及你选择同步的模板或偏好设置。这些数据通过 Firebase Authentication 和 Firestore 存储。</p>

        <h3>3.3 本地存储</h3>
        <p>我们会在你的浏览器本地保存部分偏好设置，例如尺寸、格式、质量、主题和语言，以便下次访问时继续使用。这些数据保留在你的设备上，不会自动发送给我们。</p>

        <h2>4. 支付与支持</h2>
        <p>TapCrop Pro 订阅通过 Creem 处理，自愿支持通过 Buy Me a Coffee 处理。我们不会存储你的银行卡或完整支付信息。与支付相关的数据由对应的第三方支付平台根据其隐私政策处理。</p>

        <h2>5. Cookie 与类似技术</h2>
        <p>TapCrop 不使用广告追踪类 Cookie。Vercel Analytics 为无 Cookie 方案。若你登录账户，Firebase 可能会为认证目的使用 Cookie 或本地存储。</p>

        <h2>6. 第三方服务</h2>
        <p>我们目前主要使用以下第三方服务：</p>
        <ul>
          <li><strong>Vercel</strong>：托管、匿名分析和性能监测</li>
          <li><strong>Firebase</strong>：身份认证与账户数据存储</li>
          <li><strong>Creem</strong>：Pro 订阅结算</li>
          <li><strong>Buy Me a Coffee</strong>：自愿支持与打赏</li>
        </ul>

        <h2>7. 数据保留</h2>
        <p>匿名分析数据按 Vercel 的保留策略保存。账户数据会保留到你删除账户或我们根据法律义务需要继续保留为止。本地存储数据会一直保留在你的设备上，直到你主动清除浏览器数据。</p>

        <h2>8. 你的权利</h2>
        <p>你可以：</p>
        <ul>
          <li>在不创建账户的情况下使用 TapCrop 的核心功能</li>
          <li>请求删除你的账户及相关数据</li>
          <li>随时通过浏览器设置清除本地存储数据</li>
        </ul>

        <h2>9. 儿童隐私</h2>
        <p>TapCrop 不会故意收集 13 岁以下儿童的个人信息。如果你认为我们误收集了此类信息，请联系我们。</p>

        <h2>10. 政策更新</h2>
        <p>我们可能会不时更新本隐私政策。更新后的版本会在本页标注新的“最后更新”日期。</p>

        <h2>11. 联系方式</h2>
        <p>如果你对本隐私政策有任何问题，请联系 <a href="mailto:humphrey1114@gmail.com">humphrey1114@gmail.com</a>。</p>
      </PageLayout>
    )
  }

  return (
    <PageLayout title="Privacy Policy">
      <p><strong>Last updated:</strong> March 24, 2026</p>

      <h2>1. Overview</h2>
      <p>TapCrop (www.tapcrop.com) is committed to protecting your privacy. This Privacy Policy explains what data we collect, how we use it, and what rights you have regarding that information.</p>

      <h2>2. Image Processing</h2>
      <p>All image processing in TapCrop happens entirely in your browser. Your images are not uploaded to our servers, and we do not access, store, or transmit the image content you process with TapCrop.</p>

      <h2>3. Data We Collect</h2>
      <h3>3.1 Anonymous Analytics Data</h3>
      <p>We use Vercel Analytics and Vercel Speed Insights to collect anonymous usage and performance information, such as page visits, browser versions, device types, approximate region, and page performance metrics. This data does not directly identify you.</p>

      <h3>3.2 Account Data</h3>
      <p>If you create a TapCrop account, we store basic account information such as your email address, along with any templates or preferences you choose to sync. This data is stored using Firebase Authentication and Firestore.</p>

      <h3>3.3 Local Storage</h3>
      <p>We store certain preferences locally in your browser, such as size settings, export format, quality, theme, and language, so your experience carries across visits. This data stays on your device unless you clear it.</p>

      <h2>4. Payments and Support</h2>
      <p>TapCrop Pro subscriptions are processed by Creem, and voluntary support payments are handled by Buy Me a Coffee. We do not store your card details or full payment credentials. Payment-related data is handled according to the policies of the relevant payment provider.</p>

      <h2>5. Cookies and Similar Technologies</h2>
      <p>TapCrop does not use advertising or tracking cookies. Vercel Analytics is cookie-free. If you sign in, Firebase may use cookies or local storage for authentication and account continuity.</p>

      <h2>6. Third-Party Services</h2>
      <p>We currently rely on the following third-party services:</p>
      <ul>
        <li><strong>Vercel</strong>: hosting, anonymous analytics, and performance monitoring</li>
        <li><strong>Firebase</strong>: authentication and account data storage</li>
        <li><strong>Creem</strong>: Pro subscription billing</li>
        <li><strong>Buy Me a Coffee</strong>: voluntary support payments</li>
      </ul>

      <h2>7. Data Retention</h2>
      <p>Anonymous analytics data is retained according to Vercel&apos;s retention policies. Account data is retained until you delete your account or until we are legally required to keep it longer. Local storage data remains on your device until you clear your browser data.</p>

      <h2>8. Your Rights</h2>
      <p>You may:</p>
      <ul>
        <li>Use TapCrop core features without creating an account</li>
        <li>Request deletion of your account and associated data</li>
        <li>Clear local storage data at any time through your browser settings</li>
      </ul>

      <h2>9. Children&apos;s Privacy</h2>
      <p>TapCrop does not knowingly collect personal information from children under 13. If you believe we have done so in error, please contact us.</p>

      <h2>10. Policy Updates</h2>
      <p>We may update this Privacy Policy from time to time. Any updated version will show a new &quot;Last updated&quot; date on this page.</p>

      <h2>11. Contact</h2>
      <p>If you have any questions about this Privacy Policy, contact <a href="mailto:humphrey1114@gmail.com">humphrey1114@gmail.com</a>.</p>
    </PageLayout>
  )
}
