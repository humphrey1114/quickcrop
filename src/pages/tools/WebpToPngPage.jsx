import ToolLandingPage from './ToolLandingPage'

const features = [
  {
    titleEn: 'WebP to PNG in One Click',
    titleZh: '一键 WebP 转 PNG',
    descEn: 'Convert WebP images to PNG format instantly — preserves transparency and full quality.',
    descZh: '即时将 WebP 图片转换为 PNG 格式——保留透明度和完整画质。',
  },
  {
    titleEn: 'PNG to JPG & More',
    titleZh: 'PNG 转 JPG 及更多',
    descEn: 'Also convert PNG to JPG, JPG to PNG, JPG to WebP, and HEIC to JPG — all formats supported.',
    descZh: '还支持 PNG 转 JPG、JPG 转 PNG、JPG 转 WebP、HEIC 转 JPG——所有格式互转。',
  },
  {
    titleEn: 'Batch Convert',
    titleZh: '批量转换',
    descEn: 'Convert hundreds of images at once. Upload all your WebP files and get PNG files back in seconds.',
    descZh: '一次转换数百张图片。上传所有 WebP 文件，几秒钟后获得 PNG 文件。',
  },
  {
    titleEn: '100% Private',
    titleZh: '100% 隐私安全',
    descEn: 'Images never leave your device. All conversion happens in your browser — nothing gets uploaded.',
    descZh: '图片不会离开你的设备，所有转换都在浏览器中完成。',
  },
]

const stepsEn = [
  { title: 'Upload WebP images', desc: 'Drag & drop or click to select your WebP files. Also supports JPG, PNG, HEIC, GIF, BMP, TIFF.' },
  { title: 'Choose output format', desc: 'Select PNG, JPG, or WebP as the target format. Adjust quality if needed.' },
  { title: 'Download converted images', desc: 'Process all images in one click. Download individually or as a ZIP.' },
]

const stepsZh = [
  { title: '上传 WebP 图片', desc: '拖拽或点击选择 WebP 文件。也支持 JPG、PNG、HEIC、GIF、BMP、TIFF。' },
  { title: '选择输出格式', desc: '选择 PNG、JPG 或 WebP 作为目标格式，按需调整质量。' },
  { title: '下载转换后的图片', desc: '一键处理所有图片，单独下载或打包为 ZIP 文件。' },
]

const faqEn = [
  { q: 'How do I convert WebP to PNG?', a: 'Upload your WebP files, select PNG as the output format, and click process. Your PNG files will be ready to download in seconds.' },
  { q: 'Can I convert PNG to JPG?', a: 'Yes! TapCrop supports all common conversions: PNG to JPG, JPG to PNG, WebP to PNG, WebP to JPG, HEIC to JPG, and more.' },
  { q: 'Does converting WebP to PNG lose quality?', a: 'No. PNG is a lossless format, so converting to PNG preserves full image quality. Converting to JPG may have slight quality reduction due to JPG compression.' },
  { q: 'Can I convert HEIC photos from iPhone?', a: 'Yes! Upload your iPhone HEIC/HEIF photos and convert them to JPG, PNG, or WebP.' },
  { q: 'Is there a limit on how many images I can convert?', a: 'No limit. Since everything runs in your browser, you can convert as many images as you want — free, no signup required.' },
]

const faqZh = [
  { q: '如何将 WebP 转换为 PNG？', a: '上传你的 WebP 文件，选择 PNG 作为输出格式，点击处理。几秒钟后你的 PNG 文件就准备好了。' },
  { q: '可以将 PNG 转换为 JPG 吗？', a: '可以！TapCrop 支持所有常见转换：PNG 转 JPG、JPG 转 PNG、WebP 转 PNG、WebP 转 JPG、HEIC 转 JPG 等等。' },
  { q: 'WebP 转 PNG 会损失画质吗？', a: '不会。PNG 是无损格式，转换为 PNG 会保留完整画质。转换为 JPG 可能会有轻微质量降低，因为 JPG 使用有损压缩。' },
  { q: '可以转换 iPhone 的 HEIC 照片吗？', a: '可以！上传你 iPhone 的 HEIC/HEIF 照片，转换为 JPG、PNG 或 WebP。' },
  { q: '可以转换多少张图片？', a: '没有限制。由于一切都在浏览器中运行，你可以转换任意多的图片——免费，无需注册。' },
]

export default function WebpToPngPage() {
  return (
    <ToolLandingPage
      toolKey="convert"
      toolPath="/webp-to-png"
      titleEn="WebP to PNG Converter — Free Online | Also PNG to JPG, HEIC to JPG"
      titleZh="WebP 转 PNG 在线转换器 | 也支持 PNG 转 JPG、HEIC 转 JPG"
      descEn="Convert WebP to PNG online free. Also convert PNG to JPG, JPG to PNG, HEIC to JPG, and more. Batch convert hundreds of images at once. No signup, no uploads."
      descZh="免费在线将 WebP 转换为 PNG。也支持 PNG 转 JPG、JPG 转 PNG、HEIC 转 JPG 等。批量转换数百张图片，无需注册。"
      features={features}
      stepsEn={stepsEn}
      stepsZh={stepsZh}
      faqEn={faqEn}
      faqZh={faqZh}
      geoSnippetEn="TapCrop is a free online WebP to PNG converter. Convert WebP images to PNG with full quality preserved, or convert between PNG, JPG, and HEIC formats. Batch convert hundreds of images at once. All conversion happens in your browser — no files are uploaded to any server."
      geoSnippetZh="TapCrop 秒裁是一款免费在线 WebP 转 PNG 转换工具。将 WebP 图片转换为 PNG 并保留完整质量，也支持 PNG、JPG 和 HEIC 格式互转。批量转换数百张图片。所有转换在浏览器中完成，文件不会上传到任何服务器。"
      sectionsEn={[
        { title: 'Why Convert WebP to PNG?', content: 'WebP is a modern image format that offers excellent compression, but not all software supports it. Older versions of Photoshop, many print services, some content management systems, and certain email clients cannot open WebP files. Converting WebP to PNG gives you a universally compatible file that preserves transparency and full image quality. PNG is lossless, so the conversion introduces zero quality loss.' },
        { title: 'WebP vs PNG vs JPG: Which to Use?', content: 'Use WebP for websites — it offers the smallest file size with excellent quality and transparency support. Use PNG when you need universal compatibility, lossless quality, or you are working in design software. Use JPG for photographs that do not need transparency — it is supported everywhere and produces smaller files than PNG for photos. TapCrop lets you convert freely between all three formats.' },
      ]}
      sectionsZh={[
        { title: '为什么要将 WebP 转为 PNG？', content: 'WebP 是一种现代图片格式，压缩效果出色，但并非所有软件都支持它。旧版 Photoshop、许多打印服务、某些内容管理系统和部分邮件客户端无法打开 WebP 文件。将 WebP 转为 PNG 可获得通用兼容的文件，保留透明度和完整画质。PNG 是无损格式，转换不会造成任何质量损失。' },
        { title: 'WebP、PNG 和 JPG：该用哪个？', content: '网站使用 WebP——文件最小，画质优秀且支持透明度。需要通用兼容性、无损质量或在设计软件中工作时使用 PNG。不需要透明度的照片使用 JPG——到处都支持，照片文件比 PNG 更小。TapCrop 让你在三种格式之间自由转换。' },
      ]}
    />
  )
}
