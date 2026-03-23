import ToolLandingPage from './ToolLandingPage'

const features = [
  {
    titleEn: 'Resize to Exact KB',
    titleZh: '精确调整到指定 KB',
    descEn: 'Set a target file size in KB and TapCrop will automatically compress your image to match — perfect for form uploads with size limits.',
    descZh: '设置目标文件大小（KB），TapCrop 自动压缩图片以达到要求——适用于有文件大小限制的表单上传。',
  },
  {
    titleEn: 'Batch Resize in KB',
    titleZh: '批量调整 KB 大小',
    descEn: 'Resize hundreds of images to a specific file size at once. No more editing one by one.',
    descZh: '一次将数百张图片调整为指定文件大小，无需逐张操作。',
  },
  {
    titleEn: 'Keep Visual Quality',
    titleZh: '保持画质',
    descEn: 'Smart compression finds the best quality level for your target size — no unnecessary quality loss.',
    descZh: '智能压缩为你的目标大小找到最佳画质——不会有不必要的质量损失。',
  },
  {
    titleEn: '100% Private',
    titleZh: '100% 隐私安全',
    descEn: 'Images never leave your device. All processing happens in your browser — nothing gets uploaded.',
    descZh: '图片不会离开你的设备，所有处理都在浏览器中完成。',
  },
]

const stepsEn = [
  { title: 'Upload your images', desc: 'Drag & drop or click to select. Supports JPG, PNG, WebP, and more.' },
  { title: 'Set target size in KB', desc: 'Enter the maximum file size you need — e.g., 100 KB, 200 KB, 500 KB.' },
  { title: 'Download resized images', desc: 'Process all images in one click. Download individually or as a ZIP.' },
]

const stepsZh = [
  { title: '上传图片', desc: '拖拽或点击选择图片。支持 JPG、PNG、WebP 等格式。' },
  { title: '设置目标 KB 大小', desc: '输入你需要的最大文件大小——如 100 KB、200 KB、500 KB。' },
  { title: '下载调整后的图片', desc: '一键处理所有图片，单独下载或打包为 ZIP 文件。' },
]

const faqEn = [
  { q: 'How do I resize an image to a specific KB size?', a: 'Upload your image, set the target file size in KB using the compression slider, and TapCrop will automatically adjust the quality to meet your target size.' },
  { q: 'Can I resize an image to 100 KB or 200 KB?', a: 'Yes! You can resize images to any target KB size — 50 KB, 100 KB, 200 KB, 500 KB, or any custom value.' },
  { q: 'Does resizing in KB reduce image quality?', a: 'TapCrop uses smart compression to find the highest quality possible at your target file size. For small targets, some quality reduction is unavoidable, but TapCrop minimizes it.' },
  { q: 'What image formats support KB resizing?', a: 'You can resize JPG, PNG, and WebP images to a specific KB size. JPG typically achieves the best compression ratio.' },
  { q: 'Is this tool free?', a: 'Yes, 100% free with no signup required. Your images are processed entirely in your browser — nothing gets uploaded.' },
]

const faqZh = [
  { q: '如何将图片调整到指定 KB 大小？', a: '上传图片后，使用压缩滑块设置目标文件大小，TapCrop 会自动调整画质以满足你的目标大小。' },
  { q: '可以将图片调整到 100 KB 或 200 KB 吗？', a: '可以！你可以将图片调整为任意目标大小——50 KB、100 KB、200 KB、500 KB 或其他自定义值。' },
  { q: '按 KB 调整会降低图片质量吗？', a: 'TapCrop 使用智能压缩，在你的目标大小下找到最高画质。对于很小的目标，一些质量降低不可避免，但 TapCrop 会尽量减少。' },
  { q: '哪些图片格式支持 KB 调整？', a: '可以将 JPG、PNG 和 WebP 图片调整到指定 KB 大小。JPG 通常能达到最好的压缩比。' },
  { q: '这个工具免费吗？', a: '完全免费，无需注册。你的图片完全在浏览器中处理，不会上传到任何服务器。' },
]

export default function ResizeKbPage() {
  return (
    <ToolLandingPage
      toolKey="compress"
      titleEn="Resize Image in KB — Free Online Image KB Resizer"
      titleZh="按 KB 调整图片大小 — 免费在线工具"
      descEn="Resize image in KB online free. Reduce image to 100 KB, 200 KB, or any target file size. Batch resize photos in KB — no signup, no uploads, 100% browser processing."
      descZh="免费在线按 KB 调整图片大小。将图片缩小至 100 KB、200 KB 或任意目标大小。批量处理，无需注册。"
      features={features}
      stepsEn={stepsEn}
      stepsZh={stepsZh}
      faqEn={faqEn}
      faqZh={faqZh}
    />
  )
}
