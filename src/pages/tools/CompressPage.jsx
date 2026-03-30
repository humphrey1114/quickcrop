import ToolLandingPage from './ToolLandingPage'

const features = [
  {
    titleEn: 'Up to 90% Smaller',
    titleZh: '最高缩小 90%',
    descEn: 'Dramatically reduce file sizes while maintaining visual quality.',
    descZh: '大幅缩小文件体积，同时保持视觉质量。',
  },
  {
    titleEn: 'Batch Compress',
    titleZh: '批量压缩',
    descEn: 'Compress hundreds of images at once. No more compressing one by one.',
    descZh: '一次压缩数百张图片，无需逐张操作。',
  },
  {
    titleEn: 'Adjustable Quality',
    titleZh: '可调节质量',
    descEn: 'Fine-tune compression level from 10% to 90% with a simple slider.',
    descZh: '通过简单的滑块将压缩级别从 10% 调到 90%。',
  },
  {
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
      titleEn="Reduce Image Size Online Free — Image & Photo Size Reducer"
      titleZh="免费在线图片压缩工具"
      descEn="Free image size reducer and photo size reducer. Reduce image size up to 90% without quality loss. Batch compress hundreds of photos at once. No signup, no uploads."
      descZh="将图片体积缩小最多 90%，同时保持画质。批量压缩数百张照片——免费、隐私、无需注册。"
      features={features}
      stepsEn={stepsEn}
      stepsZh={stepsZh}
      faqEn={faqEn}
      faqZh={faqZh}
      geoSnippetEn="TapCrop is a free online image compressor that reduces file size by up to 90% without visible quality loss. It uses adaptive quality compression with a binary search algorithm to hit your target file size precisely. All compression runs locally in your browser — your photos are never uploaded to any server."
      geoSnippetZh="TapCrop 秒裁是一款免费在线图片压缩工具，可将文件体积缩小最多 90%，且不影响视觉质量。使用自适应质量压缩算法精准达到目标文件大小。所有压缩在浏览器本地完成，照片不会上传到任何服务器。"
      sectionsEn={[
        { title: 'How Image Compression Works', content: 'Image compression reduces file size by removing redundant data. JPEG compression works by discarding visual information that the human eye is less sensitive to — high-frequency color variations and subtle gradients. TapCrop lets you control this trade-off with a quality slider. At 80% quality, most photos look identical to the original while being 40-60% smaller. At 50% quality, you can achieve up to 90% size reduction with only minor visible differences in detailed areas.' },
        { title: 'When to Compress Images', content: 'Image compression is essential for website performance — Google recommends keeping page weight under 1.5 MB for good Core Web Vitals scores. It is also useful for email attachments (most providers limit to 25 MB), social media uploads (faster uploads, less data usage), cloud storage optimization, and sharing photos on messaging apps. TapCrop can batch compress hundreds of images at once, saving hours of manual work.' },
        { title: 'JPEG vs PNG vs WebP Compression', content: 'JPEG is best for photographs — it achieves the highest compression ratios for natural images. PNG is lossless and ideal for screenshots, logos, and graphics with sharp edges or text. WebP offers 25-35% better compression than JPEG at equivalent quality and supports transparency like PNG, making it the best choice for web use. TapCrop lets you convert between all three formats while compressing.' },
      ]}
      sectionsZh={[
        { title: '图片压缩的工作原理', content: 'JPEG 压缩通过丢弃人眼不敏感的视觉信息来减小文件大小——高频颜色变化和细微渐变。TapCrop 让你通过质量滑块控制这个权衡。在 80% 质量下，大多数照片看起来与原图完全一样，但体积减少 40-60%。在 50% 质量下，可以实现高达 90% 的体积缩减，仅在细节区域有轻微差异。' },
        { title: '什么时候需要压缩图片', content: '图片压缩对网站性能至关重要——Google 建议页面大小控制在 1.5 MB 以内以获得良好的 Core Web Vitals 分数。压缩也适用于邮件附件（大多数邮箱限制 25 MB）、社交媒体上传（更快上传、更少流量）、云存储优化，以及在即时通讯应用中分享照片。TapCrop 可以一次批量压缩数百张图片，节省大量手工操作时间。' },
        { title: 'JPEG、PNG 和 WebP 压缩对比', content: 'JPEG 最适合照片——对自然图像实现最高压缩比。PNG 是无损格式，适合截图、Logo 和有锐利边缘或文字的图形。WebP 在同等质量下比 JPEG 压缩效果好 25-35%，同时支持像 PNG 一样的透明度，是网页使用的最佳选择。TapCrop 让你在压缩的同时在三种格式之间自由转换。' },
      ]}
    />
  )
}
