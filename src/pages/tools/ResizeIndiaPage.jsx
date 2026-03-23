import ToolLandingPage from './ToolLandingPage'

const features = [
  {
    titleEn: 'PAN Card Photo Resize',
    titleZh: 'PAN 卡照片调整',
    descEn: 'Resize photos to exact PAN card specifications — 3.5 cm × 2.5 cm at 300 DPI (413 × 295 pixels). File size under 20 KB to 50 KB as required.',
    descZh: '将照片调整为 PAN 卡所需规格——3.5 cm × 2.5 cm，300 DPI（413 × 295 像素）。',
  },
  {
    titleEn: 'Signature Resize',
    titleZh: '签名调整',
    descEn: 'Resize signature images for NSDL, DSSSB, and other Indian government portals. Supports all required pixel dimensions and KB limits.',
    descZh: '为 NSDL、DSSSB 等印度政府门户调整签名图片大小。支持所有要求的像素尺寸和 KB 限制。',
  },
  {
    titleEn: 'Resize to Specific KB',
    titleZh: '调整到指定 KB',
    descEn: 'Many Indian government forms require photos under 20 KB, 50 KB, or 100 KB. TapCrop compresses your photos to the exact KB limit.',
    descZh: '许多印度政府表单要求照片小于 20 KB、50 KB 或 100 KB。TapCrop 将照片精确压缩到 KB 限制。',
  },
  {
    titleEn: '100% Private & Free',
    titleZh: '100% 隐私安全且免费',
    descEn: 'Your photos never leave your device. All resizing happens in your browser — no uploads, no signup, completely free.',
    descZh: '你的照片不会离开设备，所有处理都在浏览器中完成——不上传、不注册、完全免费。',
  },
]

const stepsEn = [
  { title: 'Upload your photo', desc: 'Drag & drop or click to select. Supports JPG, PNG, WebP, HEIC and more.' },
  { title: 'Choose preset or custom size', desc: 'Select a preset for PAN card, passport, DSSSB, or enter custom pixel dimensions and KB limit.' },
  { title: 'Download resized photo', desc: 'Get your perfectly sized photo instantly. Download individually or as a ZIP for batch processing.' },
]

const stepsZh = [
  { title: '上传照片', desc: '拖拽或点击选择照片。支持 JPG、PNG、WebP、HEIC 等格式。' },
  { title: '选择预设或自定义尺寸', desc: '选择 PAN 卡、护照、DSSSB 预设，或输入自定义像素尺寸和 KB 限制。' },
  { title: '下载调整后的照片', desc: '立即获得完美尺寸的照片。单独下载或批量打包为 ZIP 文件。' },
]

const faqEn = [
  { q: 'How do I resize a photo for PAN card?', a: 'Upload your photo, select the PAN card preset (413 × 295 px), and set the KB limit as required by your form (usually 20-50 KB). TapCrop handles the rest.' },
  { q: 'Can I resize a signature for NSDL or DSSSB?', a: 'Yes! Upload your signature image and resize it to the exact pixel dimensions and file size required by NSDL, DSSSB, or any other portal.' },
  { q: 'How do I resize an image to 20 KB or 50 KB?', a: 'Upload your image, use the compression slider to set the target KB size, and TapCrop will automatically compress to your target.' },
  { q: 'What size is required for Indian passport photos?', a: 'Indian passport photos are typically 3.5 cm × 3.5 cm (413 × 413 pixels) at 300 DPI. TapCrop has presets for this.' },
  { q: 'Is this tool free to use?', a: 'Yes, 100% free. No signup, no uploads — everything runs in your browser.' },
]

const faqZh = [
  { q: '如何为 PAN 卡调整照片大小？', a: '上传照片，选择 PAN 卡预设（413 × 295 像素），并按表单要求设置 KB 限制（通常 20-50 KB）。TapCrop 会自动处理。' },
  { q: '可以为 NSDL 或 DSSSB 调整签名图片吗？', a: '可以！上传签名图片，将其调整为 NSDL、DSSSB 或其他门户要求的像素尺寸和文件大小。' },
  { q: '如何将图片调整到 20 KB 或 50 KB？', a: '上传图片，使用压缩滑块设置目标 KB 大小，TapCrop 会自动压缩到你的目标值。' },
  { q: '印度护照照片需要什么尺寸？', a: '印度护照照片通常为 3.5 cm × 3.5 cm（413 × 413 像素），300 DPI。TapCrop 有此预设。' },
  { q: '这个工具免费吗？', a: '完全免费。无需注册，不上传——一切在浏览器中完成。' },
]

export default function ResizeIndiaPage() {
  return (
    <ToolLandingPage
      toolKey="resize"
      titleEn="PAN Card Photo Resize & Signature Resize — Free Online Tool"
      titleZh="PAN 卡照片调整和签名调整 — 免费在线工具"
      descEn="Resize photo for PAN card, NSDL, DSSSB, and Indian government forms. Resize images to specific KB — 20 KB, 50 KB, 100 KB. Free online, no signup, no uploads."
      descZh="为 PAN 卡、NSDL、DSSSB 和印度政府表单调整照片大小。将图片压缩到指定 KB——20 KB、50 KB、100 KB。免费在线工具，无需注册。"
      features={features}
      stepsEn={stepsEn}
      stepsZh={stepsZh}
      faqEn={faqEn}
      faqZh={faqZh}
    />
  )
}
