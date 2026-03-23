import ToolLandingPage from './ToolLandingPage'

const features = [
  {
    titleEn: 'Powerful JPG Compression',
    titleZh: '强大的JPG压缩',
    descEn: 'Reduce JPG image size by up to 80% while maintaining visual quality. Our smart compression algorithm finds the optimal balance between file size and clarity.',
    descZh: '将JPG图片大小缩减高达80%，同时保持视觉质量。智能压缩算法在文件大小和清晰度之间找到最佳平衡。',
  },
  {
    titleEn: 'Batch Size Reducer',
    titleZh: '批量大小缩减',
    descEn: 'Compress multiple JPG images at once. Upload dozens of photos and reduce image size in bulk — perfect for optimizing entire photo galleries or website assets.',
    descZh: '一次压缩多张JPG图片。上传数十张照片并批量减小图片大小——非常适合优化整个照片库或网站素材。',
  },
  {
    titleEn: 'Adjustable Quality Level',
    titleZh: '可调节质量级别',
    descEn: 'Control exactly how much to compress your JPG files. Slide between maximum quality and smallest file size to find your perfect compression setting.',
    descZh: '精确控制JPG文件的压缩程度。在最高质量和最小文件大小之间滑动，找到完美的压缩设置。',
  },
  {
    titleEn: 'No Upload Required',
    titleZh: '无需上传',
    descEn: 'All JPG compression happens in your browser. Your photos stay on your device — nothing is sent to any server. Fast, private, and completely free.',
    descZh: '所有JPG压缩都在浏览器中完成。照片留在您的设备上——不会发送到任何服务器。快速、私密、完全免费。',
  },
]

const stepsEn = [
  { title: 'Upload JPG Files', desc: 'Drag and drop your JPG images or click to browse. Add multiple photos for batch compression.' },
  { title: 'Adjust Compression', desc: 'Use the quality slider to control how much to reduce image size. Preview the result before downloading.' },
  { title: 'Download Compressed JPGs', desc: 'Save your compressed JPG files instantly. See exactly how much file size was reduced for each image.' },
]

const stepsZh = [
  { title: '上传JPG文件', desc: '拖放JPG图片或点击浏览。添加多张照片进行批量压缩。' },
  { title: '调整压缩程度', desc: '使用质量滑块控制图片大小的缩减程度。下载前预览效果。' },
  { title: '下载压缩后的JPG', desc: '即时保存压缩后的JPG文件。查看每张图片的文件大小缩减量。' },
]

const faqEn = [
  { q: 'How do I reduce the size of a JPG image?', a: 'Upload your JPG file, adjust the compression quality slider, and download the smaller file. Our tool can reduce image size by up to 80% with minimal visible quality loss, making it an effective JPG size reducer.' },
  { q: 'How much can I compress a JPG file?', a: 'Typical JPG compression reduces file size by 40-80% depending on the image content and quality setting you choose. Photos with lots of detail compress less than simpler images. You can preview the result before downloading.' },
  { q: 'Does compressing JPG reduce image quality?', a: 'JPG compression is lossy, meaning some data is discarded. At moderate settings, the quality loss is nearly invisible to the human eye. Our tool lets you preview the compressed image so you can verify it looks good before saving.' },
  { q: 'Can I compress JPG images for free?', a: 'Yes. Our JPG compressor is 100% free — no limits on the number of images, no watermarks, and no registration required. All processing happens locally in your browser.' },
  { q: 'Is this tool safe to use for reducing image size?', a: 'Absolutely. Your JPG files are processed entirely in your browser and are never uploaded to any server. No one else can access your images. It is the safest way to reduce image size online.' },
]

const faqZh = [
  { q: '如何减小JPG图片的大小？', a: '上传您的JPG文件，调整压缩质量滑块，然后下载更小的文件。我们的工具可以将图片大小缩减高达80%，且视觉质量损失极小。' },
  { q: 'JPG文件可以压缩多少？', a: '通常JPG压缩可以减少40-80%的文件大小，具体取决于图片内容和您选择的质量设置。细节丰富的照片压缩比例较小。您可以在下载前预览效果。' },
  { q: '压缩JPG会降低图片质量吗？', a: 'JPG压缩是有损的，意味着部分数据会被丢弃。在适中的设置下，质量损失几乎肉眼不可见。我们的工具让您在保存前预览压缩后的图片。' },
  { q: '可以免费压缩JPG图片吗？', a: '可以。我们的JPG压缩工具100%免费——不限制图片数量、无水印、无需注册。所有处理都在浏览器本地完成。' },
]

export default function CompressJpgPage() {
  return (
    <ToolLandingPage
      toolKey="compress"
      titleEn="Compress JPG & Reduce Image Size Online Free"
      titleZh="免费在线压缩JPG和减小图片大小"
      descEn="Compress JPG images and reduce image size online for free. Powerful JPG size reducer with batch processing, adjustable quality, and instant downloads — all in your browser."
      descZh="免费在线压缩JPG图片并减小图片大小。强大的JPG大小缩减工具，支持批量处理、可调质量和即时下载——全部在浏览器中完成。"
      features={features}
      stepsEn={stepsEn}
      stepsZh={stepsZh}
      faqEn={faqEn}
      faqZh={faqZh}
    />
  )
}
