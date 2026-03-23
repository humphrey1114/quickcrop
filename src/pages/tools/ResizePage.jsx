import ToolLandingPage from './ToolLandingPage'

const features = [
  {
    titleEn: '50+ Size Presets',
    titleZh: '50+ 尺寸预设',
    descEn: 'One-click presets for social media, e-commerce, ID photos, and paper sizes.',
    descZh: '社交媒体、电商、证件照和纸张尺寸的一键预设。',
  },
  {
    titleEn: 'Batch Resize',
    titleZh: '批量缩放',
    descEn: 'Resize hundreds of images to the exact same dimensions in seconds.',
    descZh: '几秒钟内将数百张图片缩放为完全相同的尺寸。',
  },
  {
    titleEn: 'Lock Aspect Ratio',
    titleZh: '锁定宽高比',
    descEn: 'Maintain proportions automatically or set a custom aspect ratio.',
    descZh: '自动保持比例或设置自定义宽高比。',
  },
  {
    titleEn: '100% Private',
    titleZh: '100% 隐私安全',
    descEn: 'Images never leave your device. All resizing happens in your browser.',
    descZh: '图片不会离开你的设备，所有缩放都在浏览器中完成。',
  },
]

const stepsEn = [
  { title: 'Upload your images', desc: 'Drag & drop or click to select. Supports JPG, PNG, WebP, HEIC and more.' },
  { title: 'Set the target size', desc: 'Enter exact pixel dimensions, pick a preset, or use an aspect ratio.' },
  { title: 'Download resized images', desc: 'Process all images in one click. Download individually or as a ZIP.' },
]

const stepsZh = [
  { title: '上传图片', desc: '拖拽或点击选择图片。支持 JPG、PNG、WebP、HEIC 等格式。' },
  { title: '设置目标尺寸', desc: '输入精确像素尺寸、选择预设或使用宽高比。' },
  { title: '下载缩放后的图片', desc: '一键处理所有图片，单独下载或打包为 ZIP 文件。' },
]

const faqEn = [
  { q: 'Can I resize without cropping?', a: 'Yes! Enable "auto width" or "auto height" to scale images proportionally without cutting anything.' },
  { q: 'What size presets are available?', a: 'TapCrop includes presets for Instagram, Facebook, Twitter/X, YouTube, LinkedIn, Pinterest, Etsy, ID photos, and standard paper sizes.' },
  { q: 'Can I resize each image to a different size?', a: 'Yes! You can set per-image custom dimensions using the size override feature on each image card.' },
  { q: 'Will resizing reduce quality?', a: 'TapCrop uses high-quality bicubic resampling by default to maintain sharp, clear images.' },
]

const faqZh = [
  { q: '可以只缩放不裁剪吗？', a: '可以！启用"自动宽度"或"自动高度"即可按比例缩放图片，不会裁切任何内容。' },
  { q: '有哪些尺寸预设？', a: 'TapCrop 包含 Instagram、Facebook、Twitter/X、YouTube、LinkedIn、Pinterest、Etsy、证件照和标准纸张尺寸的预设。' },
  { q: '可以将每张图片缩放为不同的尺寸吗？', a: '可以！你可以使用每张图片卡片上的尺寸覆盖功能设置独立的自定义尺寸。' },
  { q: '缩放会降低质量吗？', a: 'TapCrop 默认使用高质量双三次重采样，保持清晰锐利的图片效果。' },
]

export default function ResizePage() {
  return (
    <ToolLandingPage
      toolKey="resize"
      titleEn="Free Image Resizer Online — Resize Images & Photos in Bulk"
      titleZh="免费在线批量图片缩放工具"
      descEn="Free online image resizer and photo resizer. Resize image to exact pixel dimensions, reduce image size, bulk resize photos. 50+ presets for social media and e-commerce. No signup, no uploads."
      descZh="几秒钟内将数百张图片缩放为精确尺寸。50+ 社交媒体、电商和打印预设。免费、隐私、无需注册。"
      features={features}
      stepsEn={stepsEn}
      stepsZh={stepsZh}
      faqEn={faqEn}
      faqZh={faqZh}
    />
  )
}
