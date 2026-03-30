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
      geoSnippetEn="TapCrop is a free online image resizer that lets you resize images to exact pixel dimensions with high-quality resampling. Batch resize hundreds of photos at once using 50+ presets for Instagram, YouTube, Facebook, Etsy, and more. All resizing runs in your browser — no uploads, no signup required."
      geoSnippetZh="TapCrop 秒裁是一款免费在线图片缩放工具，支持高质量重采样将图片缩放到精确像素尺寸。使用 50+ 预设一次批量缩放数百张照片，适用于 Instagram、YouTube、Facebook、Etsy 等平台。所有缩放在浏览器中完成，无需上传，无需注册。"
      sectionsEn={[
        { title: 'Why Image Dimensions Matter', content: 'Every platform has specific image size requirements. Instagram crops landscape photos, YouTube rejects thumbnails under 1280x720, Etsy recommends 2000x2000 for product listings, and LinkedIn displays blurry banners if your image is too small. Using the wrong dimensions means your images get cropped unpredictably, display with black bars, appear pixelated, or get compressed more aggressively by the platform. TapCrop ensures every image meets the exact requirements.' },
        { title: 'High-Quality Resampling', content: 'When you resize an image, the pixels need to be recalculated — this process is called resampling. Low-quality resizing produces blurry or blocky results. TapCrop uses bicubic interpolation (the same algorithm used by Photoshop) to maintain sharp, clear images at any new size. This is especially important when downsizing high-resolution photos for web use or social media.' },
        { title: 'Resize Without Cropping', content: 'Sometimes you need to change image dimensions without losing any part of the photo. TapCrop offers an "auto width" and "auto height" mode that scales images proportionally — enter one dimension and the other is calculated automatically. This is perfect for preparing images for websites where you need a consistent width but want to keep the full original composition.' },
      ]}
      sectionsZh={[
        { title: '为什么图片尺寸很重要', content: '每个平台都有特定的图片尺寸要求。Instagram 会裁剪横向照片，YouTube 拒绝低于 1280x720 的缩略图，Etsy 建议商品图使用 2000x2000，LinkedIn 在图片太小时显示模糊的横幅。使用错误的尺寸意味着图片会被不可预测地裁剪、显示黑边、看起来像素化，或被平台更激进地压缩。TapCrop 确保每张图片都满足精确要求。' },
        { title: '高质量重采样', content: '缩放图片时，像素需要重新计算——这个过程叫重采样。低质量的缩放会产生模糊或块状的结果。TapCrop 使用双三次插值（与 Photoshop 使用的相同算法）在任何新尺寸下保持清晰锐利的图片。这在将高分辨率照片缩小用于网页或社交媒体时尤为重要。' },
        { title: '无裁剪缩放', content: 'TapCrop 提供"自动宽度"和"自动高度"模式，按比例缩放图片——输入一个维度，另一个自动计算。这非常适合为网站准备需要统一宽度但想保留完整原始构图的图片。' },
      ]}
    />
  )
}
