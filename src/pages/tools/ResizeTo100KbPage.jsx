import ToolLandingPage from './ToolLandingPage'

const features = [
  {
    titleEn: 'Precise 100 KB Target',
    titleZh: '精确100KB目标',
    descEn: 'Reduce your photo to exactly 100 KB or under. Automatic compression finds the right quality level to hit your target file size without manual guesswork.',
    descZh: '将照片精确缩减到100KB或以下。自动压缩找到合适的质量级别以达到目标文件大小，无需手动猜测。',
  },
  {
    titleEn: 'High Visual Quality',
    titleZh: '高视觉质量',
    descEn: 'At 100 KB, your images retain excellent visual clarity. Ideal for profile photos, email attachments, and web uploads where quality matters but file size is limited.',
    descZh: '在100KB下，图片保持出色的视觉清晰度。非常适合需要质量但文件大小有限的头像照片、电子邮件附件和网络上传。',
  },
  {
    titleEn: 'Multiple Format Support',
    titleZh: '多格式支持',
    descEn: 'Upload JPG, PNG, WebP, or other image formats and resize them to 100 KB. The output is automatically optimized for the smallest file size at the best quality.',
    descZh: '上传JPG、PNG、WebP或其他图片格式并将其调整为100KB。输出自动优化，在最佳质量下实现最小文件大小。',
  },
  {
    titleEn: 'Browser-Based & Secure',
    titleZh: '基于浏览器且安全',
    descEn: 'Your photos never leave your device. All compression to 100 KB runs locally in your browser — no server uploads, completely private and free to use.',
    descZh: '照片永远不会离开您的设备。所有100KB压缩都在浏览器本地运行——无需服务器上传，完全私密且免费使用。',
  },
]

const stepsEn = [
  { title: 'Upload Your Image', desc: 'Select or drag and drop the photo you want to resize to 100 KB. Works with JPG, PNG, and most image formats.' },
  { title: 'Set 100 KB Target', desc: 'Choose 100 KB as your maximum file size. The compressor automatically adjusts quality to meet the target.' },
  { title: 'Download Resized Photo', desc: 'Save your photo reduced to 100 KB or less. Ready for upload to websites, portals, and applications.' },
]

const stepsZh = [
  { title: '上传您的图片', desc: '选择或拖放要调整为100KB的照片。支持JPG、PNG和大多数图片格式。' },
  { title: '设置100KB目标', desc: '选择100KB作为最大文件大小。压缩器自动调整质量以达到目标。' },
  { title: '下载调整后的照片', desc: '保存缩减到100KB或更小的照片。可直接上传到网站、门户和应用程序。' },
]

const faqEn = [
  { q: 'How do I resize an image to 100 KB?', a: 'Upload your image, select 100 KB as the target size, and our tool handles the rest. It automatically adjusts compression quality to produce a file at or under 100 KB while keeping the image looking sharp.' },
  { q: 'Why would I need to resize an image to 100 KB?', a: 'Many websites, email providers, and online forms set file size limits for uploads. Resizing to 100 KB ensures your image meets these limits while keeping excellent visual quality for profile photos, thumbnails, and web content.' },
  { q: 'Can I resize photos in KB for free?', a: 'Yes. Our tool is completely free to resize images to any KB target including 100 KB. No watermarks, no sign-up, and no file limits. All processing happens privately in your browser.' },
  { q: 'Which image formats can I reduce to 100 KB?', a: 'You can upload JPG, JPEG, PNG, WebP, BMP, and other common formats. The tool compresses them to a JPG output optimized for the 100 KB target size.' },
  { q: 'Will my photo lose quality when resized to 100 KB?', a: 'At 100 KB, most photos retain excellent quality that is suitable for web use, profile pictures, and document uploads. The quality loss is minimal and usually imperceptible for everyday use.' },
]

const faqZh = [
  { q: '如何将图片调整为100KB？', a: '上传图片，选择100KB作为目标大小，工具会自动处理其余部分。它自动调整压缩质量，生成100KB或以下的文件，同时保持图片清晰。' },
  { q: '为什么需要将图片调整为100KB？', a: '许多网站、邮箱和在线表单对上传文件大小有限制。调整为100KB可确保图片满足这些限制，同时保持头像、缩略图和网页内容的出色视觉质量。' },
  { q: '可以免费将照片调整为KB级别吗？', a: '可以。我们的工具完全免费，可将图片调整为任何KB目标（包括100KB）。无水印、无需注册、无文件限制。所有处理都在浏览器中私密完成。' },
  { q: '调整为100KB会损失照片质量吗？', a: '在100KB下，大多数照片保持出色的质量，适合网络使用、头像和文件上传。质量损失极小，日常使用通常不可察觉。' },
]

export default function ResizeTo100KbPage() {
  return (
    <ToolLandingPage
      toolKey="compress"
      titleEn="Resize Image to 100 KB Online Free — Reduce Photo Size"
      titleZh="免费在线将图片调整为100KB — 减小照片大小"
      descEn="Resize any image to 100 KB online for free. Reduce photo file size while keeping excellent quality — perfect for web uploads, profiles, and application forms."
      descZh="免费在线将任何图片调整为100KB。减小照片文件大小同时保持出色质量——完美适用于网络上传、头像和申请表格。"
      features={features}
      stepsEn={stepsEn}
      stepsZh={stepsZh}
      faqEn={faqEn}
      faqZh={faqZh}
    />
  )
}
