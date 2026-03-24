import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import PageLayout from './PageLayout'

export default function Terms() {
  const { lang } = useLanguage()
  const isZh = lang === 'zh'

  useEffect(() => {
    document.title = isZh ? '服务条款 | TapCrop' : 'Terms of Service | TapCrop'
  }, [isZh])

  if (isZh) {
    return (
      <PageLayout title="服务条款">
        <p><strong>最后更新：</strong>2026 年 3 月 24 日</p>

        <h2>1. 接受条款</h2>
        <p>访问或使用 TapCrop（www.tapcrop.com），即表示你同意受本服务条款以及我们的 <Link to="/privacy">隐私政策</Link> 约束。如果你不同意这些条款，请不要继续使用本服务。</p>

        <h2>2. 服务说明</h2>
        <p>TapCrop 是一款浏览器内运行的批量图片处理工具，提供免费功能与 Pro 订阅功能。除明确说明外，所有图片处理都在你的浏览器中完成，不会上传到我们的服务器。</p>

        <h2>3. 使用资格</h2>
        <p>你必须年满 13 周岁才能使用 TapCrop。如果你未满 18 周岁，你确认已获得父母或法定监护人的同意。</p>

        <h2>4. 账户</h2>
        <p>你可以选择创建账户，以便同步模板和偏好设置。你有责任保护好自己的账户凭据，并对账户下发生的活动负责。</p>

        <h2>5. 可接受使用</h2>
        <p>你同意不会使用 TapCrop：</p>
        <ul>
          <li>处理违反法律法规的内容</li>
          <li>侵犯他人的知识产权、隐私权或其他合法权利</li>
          <li>试图干扰、破坏或中断服务的正常运行</li>
          <li>未经许可使用自动化脚本、机器人或爬虫滥用本服务</li>
        </ul>

        <h2>6. 隐私与数据处理</h2>
        <p>你的图片不会被我们收集、存储或传输。匿名站点分析由 Vercel Analytics 和 Vercel Speed Insights 提供。更详细的信息请参阅我们的 <Link to="/privacy">隐私政策</Link>。</p>

        <h2>7. Pro 订阅与自愿支持</h2>
        <p>TapCrop 提供 Pro 订阅功能，订阅付款由 Creem 处理；自愿支持由 Buy Me a Coffee 处理。不同服务的账单、支付、取消和退款规则，以对应第三方支付平台的条款及适用法律为准。</p>

        <h2>8. 取消与退款</h2>
        <p>如果你订阅了 TapCrop Pro，你通常可以在下一个计费周期开始前取消后续续费。退款是否适用，将根据支付平台条款以及适用消费者保护法律判断。自愿支持通常不解锁额外功能，也通常不支持退款，除非法律另有要求。</p>

        <h2>9. 知识产权</h2>
        <p>TapCrop 的品牌、界面、代码和原创内容受适用的知识产权法律保护。你保留自己上传和处理图片的全部权利，我们不会主张这些图片的所有权。</p>

        <h2>10. 免责声明</h2>
        <p>TapCrop 按“现状”和“可用性”提供。我们不保证服务始终不中断、无错误或完全满足你的特定需求。</p>

        <h2>11. 责任限制</h2>
        <p>在适用法律允许的最大范围内，TapCrop 及其运营者不对因使用本服务而产生的间接、附带、特殊或后果性损失承担责任。</p>

        <h2>12. 第三方服务</h2>
        <p>TapCrop 依赖第三方服务，包括 Vercel、Firebase、Creem 和 Buy Me a Coffee。你对这些第三方服务的使用，仍受其各自条款和隐私政策约束。</p>

        <h2>13. 条款更新</h2>
        <p>我们可能会更新这些服务条款。重大变更会通过本页面的“最后更新”日期体现。你在条款更新后继续使用 TapCrop，即表示接受更新后的条款。</p>

        <h2>14. 联系方式</h2>
        <p>如对本服务条款有任何问题，请联系 <a href="mailto:humphrey1114@gmail.com">humphrey1114@gmail.com</a>。</p>
      </PageLayout>
    )
  }

  return (
    <PageLayout title="Terms of Service">
      <p><strong>Last updated:</strong> March 24, 2026</p>

      <h2>1. Acceptance of Terms</h2>
      <p>By accessing or using TapCrop (www.tapcrop.com), you agree to be bound by these Terms of Service and our <Link to="/privacy">Privacy Policy</Link>. If you do not agree, please do not use the service.</p>

      <h2>2. Description of Service</h2>
      <p>TapCrop is a browser-based batch image editing tool with both free and Pro features. Unless explicitly stated otherwise, all image processing takes place locally in your browser and images are not uploaded to our servers.</p>

      <h2>3. Eligibility</h2>
      <p>You must be at least 13 years old to use TapCrop. If you are under 18, you confirm that you have permission from a parent or legal guardian.</p>

      <h2>4. Accounts</h2>
      <p>You may create an account to sync templates and preferences. You are responsible for keeping your account credentials secure and for activity that occurs under your account.</p>

      <h2>5. Acceptable Use</h2>
      <p>You agree not to use TapCrop to:</p>
      <ul>
        <li>Process content that violates applicable laws or regulations</li>
        <li>Infringe the intellectual property, privacy, or other rights of others</li>
        <li>Interfere with, damage, or disrupt the normal operation of the service</li>
        <li>Use bots, scripts, or scrapers to abuse the service without permission</li>
      </ul>

      <h2>6. Privacy and Data Handling</h2>
      <p>Your images are not collected, stored, or transmitted by us. Anonymous site analytics are provided through Vercel Analytics and Vercel Speed Insights. For more detail, please review our <Link to="/privacy">Privacy Policy</Link>.</p>

      <h2>7. Pro Subscriptions and Voluntary Support</h2>
      <p>TapCrop offers Pro subscriptions, which are billed through Creem, and voluntary support payments, which are handled through Buy Me a Coffee. Billing, payment, cancellation, and refund handling are subject to the relevant payment provider&apos;s terms and applicable law.</p>

      <h2>8. Cancellation and Refunds</h2>
      <p>If you subscribe to TapCrop Pro, you can generally cancel future renewals before the next billing period begins. Refund eligibility, if any, depends on the payment provider&apos;s policies and applicable consumer protection laws. Voluntary support payments do not normally unlock extra features and are generally non-refundable unless required by law.</p>

      <h2>9. Intellectual Property</h2>
      <p>TapCrop&apos;s brand, interface, code, and original content are protected by applicable intellectual property laws. You retain all rights to the images you upload and process, and we do not claim ownership over them.</p>

      <h2>10. Disclaimer</h2>
      <p>TapCrop is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We do not guarantee that the service will always be uninterrupted, error-free, or fit for every specific use case.</p>

      <h2>11. Limitation of Liability</h2>
      <p>To the maximum extent permitted by law, TapCrop and its operators will not be liable for indirect, incidental, special, or consequential damages arising from your use of the service.</p>

      <h2>12. Third-Party Services</h2>
      <p>TapCrop relies on third-party services including Vercel, Firebase, Creem, and Buy Me a Coffee. Your use of those services remains subject to their own terms and privacy policies.</p>

      <h2>13. Updates to These Terms</h2>
      <p>We may update these Terms of Service from time to time. Material changes will be reflected by the &quot;Last updated&quot; date on this page. Continuing to use TapCrop after an update means you accept the revised terms.</p>

      <h2>14. Contact</h2>
      <p>If you have any questions about these Terms of Service, contact <a href="mailto:humphrey1114@gmail.com">humphrey1114@gmail.com</a>.</p>
    </PageLayout>
  )
}
