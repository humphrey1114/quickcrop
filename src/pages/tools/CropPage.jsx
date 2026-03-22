import ToolLandingPage from './ToolLandingPage'

const features = [
  {
    icon: '🎯',
    titleEn: 'Custom Focal Point',
    titleZh: '自定义焦点',
    descEn: 'Click anywhere on your image to choose the crop center — keep the part that matters most.',
    descZh: '点击图片任意位置选择裁剪中心，保留最重要的部分。',
  },
  {
    icon: '⚡',
    titleEn: 'Batch Process Hundreds',
    titleZh: '批量处理数百张',
    descEn: 'Upload hundreds of photos and crop them all to the same size in one click.',
    descZh: '上传数百张照片，一键裁剪为统一尺寸。',
  },
  {
    icon: '📐',
    titleEn: '50+ Size Presets',
    titleZh: '50+ 尺寸预设',
    descEn: 'Ready-made presets for Instagram, YouTube, Facebook, Twitter, Etsy, ID photos, and more.',
    descZh: '适用于 Instagram、YouTube、Facebook、Twitter、Etsy、证件照等的预设尺寸。',
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
  { title: 'Upload your images', desc: 'Drag & drop or click to select. Supports JPG, PNG, WebP, HEIC and more.' },
  { title: 'Choose size & focal point', desc: 'Pick a preset or enter custom dimensions. Click on each image to set the crop center.' },
  { title: 'Download instantly', desc: 'Process all images in one click. Download individually or as a ZIP file.' },
]

const stepsZh = [
  { title: '上传图片', desc: '拖拽或点击选择图片。支持 JPG、PNG、WebP、HEIC 等格式。' },
  { title: '选择尺寸和焦点', desc: '选择预设尺寸或输入自定义尺寸，点击图片设置裁剪中心。' },
  { title: '立即下载', desc: '一键处理所有图片，单独下载或打包为 ZIP 文件。' },
]

const faqEn = [
  { q: 'Is TapCrop really free?', a: 'Yes! TapCrop is 100% free to use. No watermarks, no hidden fees, no signup required.' },
  { q: 'Are my images uploaded to a server?', a: 'No. All image processing happens locally in your browser. Your images never leave your device.' },
  { q: 'What image formats are supported?', a: 'TapCrop supports JPG, PNG, WebP, GIF, BMP, TIFF, and HEIC/HEIF formats.' },
  { q: 'How many images can I crop at once?', a: 'There\'s no hard limit. TapCrop can handle hundreds of images in a single batch.' },
  { q: 'Can I set different crop areas for each image?', a: 'Yes! Click on any image to set its individual focal point. You can also set per-image custom sizes.' },
]

const faqZh = [
  { q: 'TapCrop 真的免费吗？', a: '是的！TapCrop 完全免费使用，没有水印、没有隐藏费用、不需要注册。' },
  { q: '我的图片会上传到服务器吗？', a: '不会。所有图片处理都在你的浏览器本地完成，图片永远不会离开你的设备。' },
  { q: '支持什么图片格式？', a: 'TapCrop 支持 JPG、PNG、WebP、GIF、BMP、TIFF 和 HEIC/HEIF 格式。' },
  { q: '一次可以裁剪多少张图片？', a: '没有硬性限制。TapCrop 可以在一个批次中处理数百张图片。' },
  { q: '可以为每张图片设置不同的裁剪区域吗？', a: '可以！点击任何图片设置其独立的焦点位置，还可以为单张图片设置自定义尺寸。' },
]

export default function CropPage() {
  return (
    <ToolLandingPage
      toolKey="crop"
      icon="✂️"
      titleEn="Free Online Batch Image Cropper"
      titleZh="免费在线批量图片裁剪工具"
      descEn="Crop and resize hundreds of images at once — right in your browser. Set custom focal points, pick from 50+ presets, and download instantly. No signup, no uploads."
      descZh="直接在浏览器中批量裁剪和调整数百张图片。自定义焦点、50+ 预设尺寸、即时下载。无需注册，图片不上传。"
      features={features}
      stepsEn={stepsEn}
      stepsZh={stepsZh}
      faqEn={faqEn}
      faqZh={faqZh}
    />
  )
}
