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
    />
  )
}
