import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, type, message } = req.body

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' })
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.163.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const typeLabels = {
    bug: 'Bug 反馈',
    feature: '功能建议',
    ux: '体验优化',
    preset: '平台预设',
    other: '其他',
  }

  const mailOptions = {
    from: `"秒裁反馈" <${process.env.SMTP_USER}>`,
    to: 'feedback294@163.com',
    replyTo: email,
    subject: `[秒裁反馈] ${typeLabels[type] || '反馈'} - ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">秒裁 QuickCrop - 用户反馈</h2>
        <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
          <tr>
            <td style="padding: 8px 12px; background: #f9f9f9; font-weight: bold; width: 80px;">姓名</td>
            <td style="padding: 8px 12px;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; background: #f9f9f9; font-weight: bold;">邮箱</td>
            <td style="padding: 8px 12px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; background: #f9f9f9; font-weight: bold;">类型</td>
            <td style="padding: 8px 12px;">${typeLabels[type] || '其他'}</td>
          </tr>
        </table>
        <div style="padding: 16px; background: #f9f9f9; border-radius: 8px; white-space: pre-wrap; line-height: 1.6;">
          ${escapeHtml(message)}
        </div>
        <p style="color: #999; font-size: 12px; margin-top: 20px;">此邮件由秒裁 QuickCrop 反馈系统自动发送</p>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Send mail error:', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
