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
        <p><strong>最后更新：</strong>2026年3月22日</p>

        <h2>1. 条款接受</h2>
        <p>访问和使用 TapCrop (www.tapcrop.com) 即表示您同意受这些服务条款和我们的<Link to="/privacy">隐私政策</Link>约束。如果您不同意这些条款，请勿使用本服务。</p>

        <h2>2. 服务说明</h2>
        <p>TapCrop 是一款免费的在线批量图片裁剪工具。所有图片处理完全在您的浏览器中进行，不会上传或存储到我们的服务器。本服务按"现有状态"提供。</p>

        <h2>3. 使用资格</h2>
        <p>您必须年满 13 周岁才能使用 TapCrop。使用本服务即表示您声明并保证您符合此要求。如果您未满 18 周岁，请确认您已获得父母或法定监护人的同意。</p>

        <h2>4. 用户账户</h2>
        <p>您可以选择创建账户以跨设备同步裁剪模板。账户数据通过 Firebase 安全存储。您有责任维护账户凭证的保密性，并对账户下发生的所有活动负责。如发现未经授权的使用，请立即通知我们。</p>

        <h2>5. 可接受的使用</h2>
        <p>您同意不会将 TapCrop 用于：</p>
        <ul>
          <li>处理违反任何适用法律或法规的图片</li>
          <li>侵犯他人的知识产权</li>
          <li>试图干扰、破坏或中断本服务</li>
          <li>未经事先书面许可，使用自动化系统（机器人、爬虫）访问本服务</li>
          <li>处理非法、有害、威胁性、侮辱性或其他不当内容</li>
        </ul>

        <h2>6. 隐私和数据处理</h2>
        <p>您的隐私对我们非常重要。TapCrop 不会收集、存储或传输您的图片。所有图片处理完全在您的浏览器中进行。我们使用 Vercel Analytics 收集匿名的、无 Cookie 的使用统计数据。详情请参阅我们的<Link to="/privacy">隐私政策</Link>。</p>

        <h2>7. 打赏与支付</h2>
        <p>TapCrop 的核心功能免费使用。自愿打赏通过第三方支付处理商 Creem 处理。我们保留在未来推出高级功能或付费计划的权利。打赏即表示您确认：</p>
        <ul>
          <li>打赏是自愿的，不会解锁额外功能</li>
          <li>除适用法律要求外，打赏不可退款</li>
          <li>支付由 Creem 处理，我们不存储您的支付信息</li>
          <li>在您确认付款前，价格会清晰显示</li>
        </ul>

        <h2>8. 退款政策</h2>
        <p>由于打赏属于自愿捐助，不构成购买商品或服务，一般不予退款。但如果您认为扣款有误，请联系 <a href="mailto:feedback294@163.com">feedback294@163.com</a>，我们将审核您的请求。适用消费者保护法律（包括欧盟/英国远程销售法规）要求的退款将予以执行。</p>

        <h2>9. 知识产权</h2>
        <p>TapCrop 及其原创内容、功能、品牌和源代码均为 TapCrop 的财产，受国际版权、商标和其他知识产权法律保护。您保留对您图片的所有权利，我们绝不访问、存储或主张对您内容的任何权利。</p>

        <h2>10. DMCA / 版权政策</h2>
        <p>我们尊重他人的知识产权。如果您认为 TapCrop 上的任何内容侵犯了您的版权，请联系 <a href="mailto:feedback294@163.com">feedback294@163.com</a> 并提供相关信息。</p>

        <h2>11. 免责声明</h2>
        <p>TapCrop 按"现有状态"和"可用状态"提供，不提供任何明示或暗示的保证，包括但不限于对适销性、特定用途适用性和非侵权性的暗示保证。我们不保证服务不会中断、安全或无错误。</p>

        <h2>12. 责任限制</h2>
        <p>在适用法律允许的最大范围内，TapCrop 及其运营者不对因使用本服务而产生的任何间接、附带、特殊、后果性或惩罚性损害，或任何利润、数据、使用或商誉损失承担责任。</p>

        <h2>13. 赔偿</h2>
        <p>您同意就因您使用本服务或违反这些条款而产生的任何索赔、损害、损失、责任和费用（包括合理的法律费用），为 TapCrop 及其运营者进行辩护、赔偿并使其免受损害。</p>

        <h2>14. 第三方服务</h2>
        <p>TapCrop 可能包含第三方服务的链接或集成（如 Creem 用于支付、Firebase 用于认证、Vercel 用于托管）。我们不对这些第三方服务的内容、隐私政策或做法负责。</p>

        <h2>15. 适用法律</h2>
        <p>这些条款应受 TapCrop 运营所在司法管辖区法律的管辖和解释。对于欧盟或英国用户，这些条款中的任何内容均不影响您的法定消费者权利。</p>

        <h2>16. 可分割性</h2>
        <p>如果这些条款的任何条款被认定为不可执行或无效，该条款应在必要的最小范围内受到限制或删除，其余条款将继续完全有效。</p>

        <h2>17. 条款变更</h2>
        <p>我们保留随时更新这些条款的权利。重大变更将通过更新页面顶部的"最后更新"日期来指示。在变更发布后继续使用 TapCrop 即构成接受修订后的条款。</p>

        <h2>18. 联系方式</h2>
        <p>如对服务条款有任何疑问，请联系 <a href="mailto:feedback294@163.com">feedback294@163.com</a>。</p>
      </PageLayout>
    )
  }

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
