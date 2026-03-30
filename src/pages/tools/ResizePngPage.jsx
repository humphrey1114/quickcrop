import ToolLandingPage from './ToolLandingPage'

const features = [
  {
    titleEn: 'Preserve Transparency',
    titleZh: '保留透明背景',
    descEn: 'Resize PNG images while keeping the alpha channel intact. Your transparent backgrounds, logos, and overlays stay perfectly clear at any new size.',
    descZh: '调整PNG图片大小时保持Alpha通道完整。透明背景、Logo和叠加层在任何新尺寸下都保持完美清晰。',
  },
  {
    titleEn: 'Lossless PNG Resizing',
    titleZh: '无损PNG调整',
    descEn: 'PNG is a lossless format, so resizing your PNG images maintains pixel-perfect clarity. No compression artifacts — what you see is what you get.',
    descZh: 'PNG是无损格式，调整PNG图片大小时保持像素级的清晰度。没有压缩伪影——所见即所得。',
  },
  {
    titleEn: 'Batch PNG Resizer',
    titleZh: '批量PNG调整工具',
    descEn: 'Resize multiple PNG files simultaneously. Perfect for preparing icon sets, app assets, or social media graphics at consistent dimensions.',
    descZh: '同时调整多个PNG文件的大小。非常适合准备图标集、应用素材或社交媒体图形的统一尺寸。',
  },
  {
    titleEn: 'Private & Secure',
    titleZh: '私密且安全',
    descEn: 'All PNG resizing runs locally in your browser. Your files are never uploaded to a server — your images stay on your device at all times.',
    descZh: '所有PNG调整操作都在浏览器本地运行。文件永远不会上传到服务器——图片始终留在您的设备上。',
  },
]

const stepsEn = [
  { title: 'Add PNG Files', desc: 'Drag and drop your PNG images or click to select files. Upload multiple PNGs at once for batch resizing.' },
  { title: 'Choose Target Size', desc: 'Set your desired width and height in pixels or use a percentage scale. Aspect ratio is maintained by default.' },
  { title: 'Save Resized PNGs', desc: 'Download your resized PNG images with transparency preserved. Instant processing, no waiting.' },
]

const stepsZh = [
  { title: '添加PNG文件', desc: '拖放PNG图片或点击选择文件。可同时上传多个PNG进行批量调整。' },
  { title: '选择目标尺寸', desc: '设置所需的宽度和高度（像素）或使用百分比缩放。默认保持宽高比。' },
  { title: '保存调整后的PNG', desc: '下载保留透明度的调整后PNG图片。即时处理，无需等待。' },
]

const faqEn = [
  { q: 'Will resizing a PNG keep the transparent background?', a: 'Yes. Our PNG resizer fully preserves the alpha channel, so transparent backgrounds remain intact after resizing. This is essential for logos, icons, and design assets.' },
  { q: 'Does resizing a PNG reduce image quality?', a: 'PNG is a lossless format, so resizing does not introduce compression artifacts like JPEG. However, upscaling a small PNG can cause pixelation. For best results, start with the highest resolution source available.' },
  { q: 'Can I resize PNG images for free?', a: 'Absolutely. Our online PNG resizer is free to use with no limits, no watermarks, and no account needed. Process as many images as you want.' },
  { q: 'What is the difference between resizing PNG and JPG?', a: 'PNG supports transparency and uses lossless compression, making it ideal for graphics, logos, and screenshots. JPG uses lossy compression and is better for photographs. Our tool handles both formats and preserves their unique properties.' },
  { q: 'Can I resize a PNG to exact pixel dimensions?', a: 'Yes. Enter the exact width and height you need. You can lock the aspect ratio to prevent stretching or unlock it for custom proportions.' },
]

const faqZh = [
  { q: '调整PNG大小会保留透明背景吗？', a: '会的。我们的PNG调整工具完全保留Alpha通道，因此透明背景在调整大小后保持不变。这对Logo、图标和设计素材至关重要。' },
  { q: '调整PNG大小会降低图片质量吗？', a: 'PNG是无损格式，调整大小不会像JPEG那样引入压缩伪影。但是，将小尺寸PNG放大可能会出现像素化。为获得最佳效果，请使用最高分辨率的源文件。' },
  { q: '可以免费调整PNG图片大小吗？', a: '当然可以。我们的在线PNG调整工具完全免费，无限制、无水印、无需注册。处理任意数量的图片。' },
  { q: '调整PNG和JPG大小有什么区别？', a: 'PNG支持透明度并使用无损压缩，非常适合图形、Logo和截图。JPG使用有损压缩，更适合照片。我们的工具处理两种格式并保留各自的特性。' },
]

export default function ResizePngPage() {
  return (
    <ToolLandingPage
      toolKey="resize"
      toolPath="/resize-png"
      titleEn="Resize PNG Images Online Free — Keep Transparency"
      titleZh="免费在线调整PNG图片大小 — 保留透明背景"
      descEn="Resize PNG images online for free while preserving transparency. Lossless quality, batch processing, and instant downloads — no uploads, fully browser-based."
      descZh="免费在线调整PNG图片大小，同时保留透明背景。无损质量、批量处理、即时下载——无需上传，完全基于浏览器。"
      features={features}
      stepsEn={stepsEn}
      stepsZh={stepsZh}
      faqEn={faqEn}
      faqZh={faqZh}
      geoSnippetEn="TapCrop is a free online PNG resizer that resizes PNG images while fully preserving transparency. Batch resize multiple PNG files at once with lossless quality. Perfect for icons, logos, and design assets. All processing happens in your browser — no files uploaded."
      geoSnippetZh="TapCrop 秒裁是一款免费在线 PNG 缩放工具，缩放 PNG 图片时完全保留透明度。批量无损缩放多个 PNG 文件，适合图标、Logo 和设计素材。所有处理在浏览器中完成，文件不会上传。"
      sectionsEn={[
        { title: 'Why PNG Transparency Matters', content: 'PNG transparency (the alpha channel) allows parts of an image to be see-through. This is crucial for logos placed on different colored backgrounds, app icons, UI elements, product photos with removed backgrounds, and overlay graphics. When resizing PNG images, it is essential to use a tool that preserves the alpha channel — some resizers convert transparent areas to white or black. TapCrop keeps transparency perfectly intact at any size.' },
        { title: 'PNG for Web vs Print', content: 'For web use, resize PNG images to the exact display size to minimize page load time — a 200x200 icon should not be served as a 2000x2000 file. For print, maintain at least 300 DPI resolution. TapCrop includes paper size presets (A4, A3, Letter, etc.) at 300 DPI to help you prepare print-ready PNG files.' },
      ]}
      sectionsZh={[
        { title: '为什么 PNG 透明度很重要', content: 'PNG 透明度（Alpha 通道）让图片的某些部分可以是透明的。这对于放在不同色彩背景上的 Logo、应用图标、UI 元素、去除背景的产品图和叠加图形至关重要。缩放 PNG 时，必须使用保留 Alpha 通道的工具——有些缩放工具会将透明区域转为白色或黑色。TapCrop 在任何尺寸下都能完美保留透明度。' },
        { title: '网页和印刷用 PNG', content: '网页使用时，将 PNG 缩放到实际显示尺寸以最小化页面加载时间——200x200 的图标不应该用 2000x2000 的文件。印刷用途需要至少 300 DPI 分辨率。TapCrop 包含 A4、A3、Letter 等纸张尺寸的 300 DPI 预设，帮你准备印刷级 PNG 文件。' },
      ]}
    />
  )
}
