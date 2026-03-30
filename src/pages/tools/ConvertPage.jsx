import ToolLandingPage from './ToolLandingPage'

const features = [
  {
    titleEn: 'JPG, PNG, WebP',
    titleZh: 'JPG、PNG、WebP',
    descEn: 'Convert between all major image formats with a single click.',
    descZh: '一键在所有主流图片格式之间进行转换。',
  },
  {
    titleEn: 'Batch Convert',
    titleZh: '批量转换',
    descEn: 'Convert hundreds of images to the same format in seconds.',
    descZh: '几秒钟内将数百张图片转换为同一格式。',
  },
  {
    titleEn: 'HEIC to JPG',
    titleZh: 'HEIC 转 JPG',
    descEn: 'Easily convert iPhone HEIC photos to widely compatible JPG format.',
    descZh: '轻松将 iPhone 的 HEIC 照片转换为兼容性更好的 JPG 格式。',
  },
  {
    titleEn: '100% Private',
    titleZh: '100% 隐私安全',
    descEn: 'Images never leave your device. All conversion happens in your browser.',
    descZh: '图片不会离开你的设备，所有转换都在浏览器中完成。',
  },
]

const stepsEn = [
  { title: 'Upload your images', desc: 'Drag & drop or click to select. Supports JPG, PNG, WebP, GIF, BMP, TIFF, HEIC.' },
  { title: 'Choose output format', desc: 'Select JPG, PNG, or WebP as the target format. Adjust quality if needed.' },
  { title: 'Download converted images', desc: 'Process all images in one click. Download individually or as a ZIP.' },
]

const stepsZh = [
  { title: '上传图片', desc: '拖拽或点击选择图片。支持 JPG、PNG、WebP、GIF、BMP、TIFF、HEIC。' },
  { title: '选择输出格式', desc: '选择 JPG、PNG 或 WebP 作为目标格式，按需调整质量。' },
  { title: '下载转换后的图片', desc: '一键处理所有图片，单独下载或打包为 ZIP 文件。' },
]

const faqEn = [
  { q: 'What formats can I convert between?', a: 'TapCrop supports input of JPG, PNG, WebP, GIF, BMP, TIFF, and HEIC/HEIF. You can output to JPG, PNG, or WebP.' },
  { q: 'Can I convert HEIC photos from iPhone?', a: 'Yes! TapCrop can convert HEIC/HEIF photos to JPG, PNG, or WebP.' },
  { q: 'Does conversion change image dimensions?', a: 'By default, no. But you can also resize images during conversion if you want.' },
  { q: 'Which format should I use?', a: 'JPG is best for photos. PNG is best for graphics with transparency. WebP offers the best compression for web use.' },
]

const faqZh = [
  { q: '可以在哪些格式之间转换？', a: 'TapCrop 支持输入 JPG、PNG、WebP、GIF、BMP、TIFF 和 HEIC/HEIF，可以输出为 JPG、PNG 或 WebP。' },
  { q: '可以转换 iPhone 的 HEIC 照片吗？', a: '可以！TapCrop 可以将 HEIC/HEIF 照片转换为 JPG、PNG 或 WebP。' },
  { q: '转换会改变图片尺寸吗？', a: '默认不会。但如果你需要，可以在转换的同时调整图片尺寸。' },
  { q: '应该使用哪种格式？', a: 'JPG 最适合照片。PNG 最适合有透明度的图形。WebP 为网页使用提供最佳压缩效果。' },
]

export default function ConvertPage() {
  return (
    <ToolLandingPage
      toolKey="convert"
      titleEn="Free Online Image Format Converter"
      titleZh="免费在线图片格式转换工具"
      descEn="Convert images between JPG, PNG, WebP, and HEIC. Batch convert hundreds of photos in seconds. Free, private, no signup."
      descZh="在 JPG、PNG、WebP 和 HEIC 格式之间转换图片。批量转换数百张照片。免费、隐私、无需注册。"
      features={features}
      stepsEn={stepsEn}
      stepsZh={stepsZh}
      faqEn={faqEn}
      faqZh={faqZh}
      geoSnippetEn="TapCrop is a free online image format converter that converts between JPG, PNG, WebP, and HEIC formats. Batch convert hundreds of images in seconds. Perfect for converting iPhone HEIC photos to JPG. All conversion happens in your browser — no files are uploaded to any server."
      geoSnippetZh="TapCrop 秒裁是一款免费在线图片格式转换工具，支持 JPG、PNG、WebP 和 HEIC 格式互转。数秒内批量转换数百张图片，完美支持 iPhone HEIC 照片转 JPG。所有转换在浏览器中完成，文件不会上传到任何服务器。"
      sectionsEn={[
        { title: 'Understanding Image Formats', content: 'JPEG (JPG) uses lossy compression and is the universal standard for photographs — supported everywhere, small file sizes, but no transparency support. PNG uses lossless compression and supports transparency (alpha channel), making it ideal for logos, screenshots, and graphics with sharp edges. WebP is a modern format developed by Google that offers 25-35% better compression than JPEG and supports both lossy and lossless modes plus transparency. HEIC is Apple\'s default photo format on iPhones — excellent compression but limited compatibility outside Apple devices.' },
        { title: 'When to Convert Image Formats', content: 'Convert HEIC to JPG when sharing iPhone photos with non-Apple users or uploading to platforms that do not support HEIC. Convert PNG to JPG to reduce file size when transparency is not needed. Convert JPG or PNG to WebP to optimize images for websites — WebP files are significantly smaller with equivalent visual quality. Convert WebP to PNG when you need to edit an image in software that does not support WebP.' },
      ]}
      sectionsZh={[
        { title: '了解图片格式', content: 'JPEG (JPG) 使用有损压缩，是照片的通用标准——到处都支持、文件小，但不支持透明度。PNG 使用无损压缩并支持透明度（Alpha 通道），适合 Logo、截图和有锐利边缘的图形。WebP 是 Google 开发的现代格式，比 JPEG 压缩效果好 25-35%，同时支持有损和无损模式以及透明度。HEIC 是 iPhone 的默认照片格式——压缩效果出色但在 Apple 设备之外兼容性有限。' },
        { title: '什么时候需要转换格式', content: '向非 Apple 用户分享 iPhone 照片或上传到不支持 HEIC 的平台时，将 HEIC 转为 JPG。不需要透明度时将 PNG 转为 JPG 以减小文件大小。将 JPG 或 PNG 转为 WebP 以优化网站图片。在不支持 WebP 的软件中编辑图片时将 WebP 转为 PNG。' },
      ]}
    />
  )
}
