import ToolLandingPage from './ToolLandingPage'

const features = [
  {
    titleEn: 'Batch JPG Resize',
    titleZh: '批量调整JPG大小',
    descEn: 'Resize multiple JPG and JPEG images at once. Set exact pixel dimensions or scale by percentage — process hundreds of photos in seconds.',
    descZh: '一次调整多张JPG和JPEG图片的大小。设置精确的像素尺寸或按百分比缩放，几秒钟内处理数百张照片。',
  },
  {
    titleEn: 'Smart Quality Control',
    titleZh: '智能质量控制',
    descEn: 'Fine-tune JPEG compression quality when you resize. Balance file size and visual clarity so your resized JPG images look sharp at any dimension.',
    descZh: '调整大小时精细控制JPEG压缩质量。平衡文件大小和视觉清晰度，让调整后的JPG图片在任何尺寸下都保持锐利。',
  },
  {
    titleEn: 'EXIF Data Handling',
    titleZh: 'EXIF数据处理',
    descEn: 'Choose to preserve or strip EXIF metadata when resizing JPEG files. Keep camera info for archives or remove it to reduce file size and protect privacy.',
    descZh: '调整JPEG文件大小时可选择保留或去除EXIF元数据。保留相机信息用于存档，或去除以减小文件大小并保护隐私。',
  },
  {
    titleEn: '100% Browser-Based',
    titleZh: '100%浏览器端处理',
    descEn: 'Your JPG files never leave your device. All resizing happens locally in your browser — no uploads, no servers, completely private and secure.',
    descZh: '您的JPG文件永远不会离开您的设备。所有调整大小操作都在浏览器本地完成，无需上传，完全私密安全。',
  },
]

const stepsEn = [
  { title: 'Upload JPG Images', desc: 'Drag and drop your JPG or JPEG files, or click to browse. Add as many images as you need for batch resizing.' },
  { title: 'Set New Dimensions', desc: 'Enter your target width and height in pixels, or choose a percentage to scale your JPEG images up or down.' },
  { title: 'Download Resized JPGs', desc: 'Click resize and download your resized JPG images instantly. All processing happens in your browser.' },
]

const stepsZh = [
  { title: '上传JPG图片', desc: '拖放您的JPG或JPEG文件，或点击浏览。批量调整大小时可添加任意数量的图片。' },
  { title: '设置新尺寸', desc: '输入目标宽度和高度（像素），或选择百分比来放大或缩小JPEG图片。' },
  { title: '下载调整后的JPG', desc: '点击调整大小，即时下载处理后的JPG图片。所有处理都在浏览器中完成。' },
]

const faqEn = [
  { q: 'How do I resize a JPG image without losing quality?', a: 'When you resize JPG images, some quality loss is normal due to JPEG compression. Our tool lets you control the compression level so you can find the best balance between file size and image quality. For best results, avoid resizing the same JPG multiple times.' },
  { q: 'Can I resize JPEG and JPG files at the same time?', a: 'Yes. JPG and JPEG are the same format — just different file extensions. Our batch JPG resizer handles both seamlessly. Upload any mix of .jpg and .jpeg files and resize them all at once.' },
  { q: 'What is the maximum number of JPG images I can resize at once?', a: 'There is no hard limit. Since all resizing happens in your browser, the only constraint is your device memory. Most users can comfortably batch resize dozens of JPG images at a time.' },
  { q: 'Will resizing my JPG remove the EXIF data?', a: 'By default, EXIF metadata such as camera model, date taken, and GPS coordinates is preserved. You can choose to strip EXIF data if you want smaller files or need to remove location information for privacy.' },
  { q: 'Is it free to resize JPG images online?', a: 'Yes, our JPG resizer is completely free with no limits, no watermarks, and no sign-up required. Your images are processed locally and never uploaded to any server.' },
]

const faqZh = [
  { q: '如何在不损失质量的情况下调整JPG图片大小？', a: '由于JPEG压缩的特性，调整JPG图片大小时会有一定的质量损失。我们的工具允许您控制压缩级别，以便在文件大小和图片质量之间找到最佳平衡。为获得最佳效果，避免多次调整同一张JPG图片的大小。' },
  { q: '可以同时调整JPEG和JPG文件的大小吗？', a: '可以。JPG和JPEG是同一种格式，只是文件扩展名不同。我们的批量JPG调整工具可以无缝处理两者。上传任意组合的.jpg和.jpeg文件，一次性完成调整。' },
  { q: '一次最多可以调整多少张JPG图片？', a: '没有硬性限制。由于所有调整都在浏览器中进行，唯一的限制是设备内存。大多数用户可以轻松地一次批量调整数十张JPG图片。' },
  { q: '调整JPG大小会删除EXIF数据吗？', a: '默认情况下，相机型号、拍摄日期和GPS坐标等EXIF元数据会被保留。如果您想要更小的文件或需要出于隐私目的删除位置信息，可以选择去除EXIF数据。' },
]

export default function ResizeJpgPage() {
  return (
    <ToolLandingPage
      toolKey="resize"
      titleEn="Resize JPG & JPEG Images Online Free — Batch JPG Resizer"
      titleZh="免费在线调整JPG和JPEG图片大小 — 批量JPG调整工具"
      descEn="Resize JPG and JPEG images online for free. Batch resize multiple photos, control quality, and handle EXIF data — all in your browser with no uploads required."
      descZh="免费在线调整JPG和JPEG图片大小。批量调整多张照片，控制质量，处理EXIF数据——全部在浏览器中完成，无需上传。"
      features={features}
      stepsEn={stepsEn}
      stepsZh={stepsZh}
      faqEn={faqEn}
      faqZh={faqZh}
    />
  )
}
