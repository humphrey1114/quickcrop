import ToolLandingPage from './ToolLandingPage'

const features = [
  {
    icon: '✍️',
    titleEn: 'Custom Text Watermark',
    titleZh: '自定义文字水印',
    descEn: 'Add any text as a watermark with full control over font size, color, and opacity.',
    descZh: '添加任意文字作为水印，完全控制字体大小、颜色和透明度。',
  },
  {
    icon: '📍',
    titleEn: 'Flexible Positioning',
    titleZh: '灵活定位',
    descEn: 'Place your watermark in any corner or in the center of your images.',
    descZh: '将水印放置在图片的任何角落或中心位置。',
  },
  {
    icon: '⚡',
    titleEn: 'Batch Watermark',
    titleZh: '批量加水印',
    descEn: 'Apply the same watermark to hundreds of images in one click.',
    descZh: '一键为数百张图片添加相同的水印。',
  },
  {
    icon: '🔒',
    titleEn: '100% Private',
    titleZh: '100% 隐私安全',
    descEn: 'Images never leave your device. All processing happens in your browser.',
    descZh: '图片不会离开你的设备，所有处理都在浏览器中完成。',
  },
]

const stepsEn = [
  { title: 'Upload your images', desc: 'Drag & drop or click to select. Supports JPG, PNG, WebP and more.' },
  { title: 'Customize your watermark', desc: 'Enter watermark text, adjust font size, color, opacity, and position.' },
  { title: 'Download watermarked images', desc: 'Process all images in one click. Download individually or as a ZIP.' },
]

const stepsZh = [
  { title: '上传图片', desc: '拖拽或点击选择图片。支持 JPG、PNG、WebP 等格式。' },
  { title: '自定义水印', desc: '输入水印文字，调整字体大小、颜色、透明度和位置。' },
  { title: '下载添加水印后的图片', desc: '一键处理所有图片，单独下载或打包为 ZIP 文件。' },
]

const faqEn = [
  { q: 'Can I adjust watermark opacity?', a: 'Yes! You can set opacity from 0% (invisible) to 100% (fully opaque) using a simple slider.' },
  { q: 'Where can I place the watermark?', a: 'You can place it in any of the four corners or in the center of the image.' },
  { q: 'Can I watermark and crop at the same time?', a: 'Yes! TapCrop lets you crop, resize, compress, add watermarks, and adjust images all in one go.' },
  { q: 'Does the watermark affect image quality?', a: 'No. The watermark is rendered directly onto the image at full quality.' },
]

const faqZh = [
  { q: '可以调整水印透明度吗？', a: '可以！你可以通过简单的滑块将透明度从 0%（不可见）调到 100%（完全不透明）。' },
  { q: '水印可以放在哪里？', a: '可以放在四个角落的任何位置，也可以放在图片中心。' },
  { q: '可以同时加水印和裁剪吗？', a: '可以！TapCrop 让你一次完成裁剪、缩放、压缩、加水印和图片调整。' },
  { q: '水印会影响图片质量吗？', a: '不会。水印以完整质量直接渲染到图片上。' },
]

export default function WatermarkPage() {
  return (
    <ToolLandingPage
      toolKey="watermark"
      icon="💧"
      titleEn="Free Online Batch Watermark Tool"
      titleZh="免费在线批量加水印工具"
      descEn="Add text watermarks to hundreds of images at once. Customize font size, color, opacity, and position. Free, private, no signup."
      descZh="一次为数百张图片添加文字水印。自定义字体大小、颜色、透明度和位置。免费、隐私、无需注册。"
      features={features}
      stepsEn={stepsEn}
      stepsZh={stepsZh}
      faqEn={faqEn}
      faqZh={faqZh}
    />
  )
}
