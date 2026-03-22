import ToolLandingPage from './ToolLandingPage'

const features = [
  {
    icon: '📉',
    titleEn: 'Up to 90% Smaller',
    titleZh: '最高缩小 90%',
    descEn: 'Dramatically reduce file sizes while maintaining visual quality.',
    descZh: '大幅缩小文件体积，同时保持视觉质量。',
  },
  {
    icon: '⚡',
    titleEn: 'Batch Compress',
    titleZh: '批量压缩',
    descEn: 'Compress hundreds of images at once. No more compressing one by one.',
    descZh: '一次压缩数百张图片，无需逐张操作。',
  },
  {
    icon: '🎛️',
    titleEn: 'Adjustable Quality',
    titleZh: '可调节质量',
    descEn: 'Fine-tune compression level from 10% to 90% with a simple slider.',
    descZh: '通过简单的滑块将压缩级别从 10% 调到 90%。',
  },
  {
    icon: '🔒',
    titleEn: '100% Private',
    titleZh: '100% 隐私安全',
    descEn: 'Images never leave your device. All compression happens in your browser.',
    descZh: '图片不会离开你的设备，所有压缩都在浏览器中完成。',
  },
]

const stepsEn = [
  { title: 'Upload your images', desc: 'Drag & drop or click to select. Supports JPG, PNG, WebP, and more.' },
  { title: 'Set compression level', desc: 'Use the slider to choose how much to compress — from light to aggressive.' },
  { title: 'Download compressed images', desc: 'Process all images in one click. Download individually or as a ZIP.' },
]

const stepsZh = [
  { title: '上传图片', desc: '拖拽或点击选择图片。支持 JPG、PNG、WebP 等格式。' },
  { title: '设置压缩等级', desc: '使用滑块选择压缩程度——从轻度到高度压缩。' },
  { title: '下载压缩后的图片', desc: '一键处理所有图片，单独下载或打包为 ZIP 文件。' },
]

const faqEn = [
  { q: 'Will compression reduce image quality?', a: 'TapCrop uses smart compression that minimizes visible quality loss. You can adjust the level to find the perfect balance between size and quality.' },
  { q: 'What file formats can I compress?', a: 'You can compress JPG, PNG, and WebP images. You can also convert between formats during compression.' },
  { q: 'Is there a file size limit?', a: 'No. Since everything runs in your browser, there are no upload limits or file size restrictions.' },
  { q: 'Can I compress and crop at the same time?', a: 'Yes! TapCrop lets you crop, resize, compress, add watermarks, and adjust images all in one go.' },
]

const faqZh = [
  { q: '压缩会降低图片质量吗？', a: 'TapCrop 使用智能压缩技术，将可见质量损失降到最低。你可以调整压缩等级，在体积和质量之间找到完美平衡。' },
  { q: '可以压缩什么格式的文件？', a: '可以压缩 JPG、PNG 和 WebP 图片。你还可以在压缩的同时进行格式转换。' },
  { q: '有文件大小限制吗？', a: '没有。由于一切都在你的浏览器中运行，没有上传限制或文件大小限制。' },
  { q: '可以同时压缩和裁剪吗？', a: '可以！TapCrop 让你一次完成裁剪、缩放、压缩、加水印和图片调整。' },
]

export default function CompressPage() {
  return (
    <ToolLandingPage
      toolKey="compress"
      icon="📦"
      titleEn="Free Online Image Compressor"
      titleZh="免费在线图片压缩工具"
      descEn="Compress images by up to 90% without losing quality. Batch compress hundreds of photos at once — free, private, no signup required."
      descZh="将图片体积缩小最多 90%，同时保持画质。批量压缩数百张照片——免费、隐私、无需注册。"
      features={features}
      stepsEn={stepsEn}
      stepsZh={stepsZh}
      faqEn={faqEn}
      faqZh={faqZh}
    />
  )
}
