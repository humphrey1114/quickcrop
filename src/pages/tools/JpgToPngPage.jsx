import ToolLandingPage from './ToolLandingPage'

const features = [
  {
    titleEn: 'Lossless JPG to PNG Conversion',
    titleZh: '无损JPG转PNG',
    descEn: 'Convert your JPG images to PNG format without any quality loss. PNG uses lossless compression, so your converted images retain every detail from the original — no artifacts, no degradation.',
    descZh: '将JPG图片无损转换为PNG格式。PNG采用无损压缩，转换后的图片保留原图的每一个细节——无伪影、无画质下降。',
  },
  {
    titleEn: 'Transparency Support',
    titleZh: '支持透明背景',
    descEn: 'PNG supports transparent backgrounds, making it ideal for logos, icons, and design assets. Convert your JPG to PNG as a first step toward creating images with transparent areas for web and graphic design.',
    descZh: 'PNG支持透明背景，非常适合Logo、图标和设计素材。将JPG转为PNG是为网页和平面设计创建透明图片的第一步。',
  },
  {
    titleEn: 'Batch Convert Multiple Images',
    titleZh: '批量转换多张图片',
    descEn: 'Upload dozens of JPG files and convert them all to PNG at once. No need to process images one by one — save time with batch conversion for your entire photo collection or design project.',
    descZh: '上传多个JPG文件，一次性全部转换为PNG。无需逐张处理——批量转换节省时间，适合整理照片集或设计项目。',
  },
  {
    titleEn: 'Completely Private — No Upload',
    titleZh: '完全私密——无需上传',
    descEn: 'All JPG to PNG conversion runs entirely in your browser. Your images never leave your device — no server uploads, no cloud storage, no data collection. Your photos stay yours.',
    descZh: '所有JPG到PNG的转换完全在浏览器中完成。图片不会离开你的设备——无服务器上传、无云存储、无数据收集。',
  },
]

const stepsEn = [
  { title: 'Upload JPG Files', desc: 'Drag and drop your JPG or JPEG images, or click to browse your files. Select multiple images for batch conversion.' },
  { title: 'Convert to PNG', desc: 'Click convert and your JPG images are instantly transformed to lossless PNG format with full quality preservation.' },
  { title: 'Download PNG Images', desc: 'Download your converted PNG files individually or all at once. Use them for web design, social media, presentations, or anywhere PNG is needed.' },
]

const stepsZh = [
  { title: '上传JPG文件', desc: '拖放JPG或JPEG图片，或点击浏览文件。选择多张图片进行批量转换。' },
  { title: '转换为PNG', desc: '点击转换，JPG图片立即转换为无损PNG格式，完整保留画质。' },
  { title: '下载PNG图片', desc: '逐个或一次性下载转换后的PNG文件。用于网页设计、社交媒体、演示文稿或任何需要PNG的场景。' },
]

const faqEn = [
  { q: 'Why convert JPG to PNG?', a: 'PNG uses lossless compression, which means no quality is lost when the file is saved or edited. PNG also supports transparency, which JPG does not. If you need crisp images for web design, logos, or screenshots, PNG is the better format.' },
  { q: 'Does converting JPG to PNG improve image quality?', a: 'Converting JPG to PNG preserves the current quality of your image but cannot recover detail already lost by JPG compression. The benefit is that any further edits or saves will not degrade the image further, since PNG compression is lossless.' },
  { q: 'Will the file size increase after converting to PNG?', a: 'Yes, PNG files are typically larger than JPG files because PNG uses lossless compression. A 1 MB JPG might become 3-5 MB as a PNG. The tradeoff is higher quality and support for transparency.' },
  { q: 'Can I convert multiple JPG files to PNG at once?', a: 'Yes. Our batch converter lets you upload and convert as many JPG files as you need simultaneously. All processing happens in your browser, so even large batches are fast and private.' },
  { q: 'Is this JPG to PNG converter free?', a: 'Yes, completely free with no limits. Convert as many JPG images to PNG as you want — no watermarks, no file size restrictions, no account required. Everything runs locally in your browser.' },
]

const faqZh = [
  { q: '为什么要将JPG转换为PNG？', a: 'PNG使用无损压缩，保存或编辑时不会损失画质。PNG还支持透明背景，而JPG不支持。如果需要清晰的网页设计图、Logo或截图，PNG是更好的格式。' },
  { q: 'JPG转PNG能提高画质吗？', a: '转换为PNG会保留图片当前的画质，但无法恢复JPG压缩已丢失的细节。好处是后续编辑或保存不会再降低画质，因为PNG压缩是无损的。' },
  { q: '转换为PNG后文件会变大吗？', a: '会的，PNG文件通常比JPG文件大，因为PNG使用无损压缩。1 MB的JPG可能变成3-5 MB的PNG。代价是获得更高的画质和透明背景支持。' },
  { q: '可以一次转换多个JPG文件吗？', a: '可以。批量转换器让你同时上传和转换任意数量的JPG文件。所有处理都在浏览器中完成，即使大批量也很快且私密。' },
  { q: '这个JPG转PNG转换器是免费的吗？', a: '完全免费，没有任何限制。随意转换任意数量的JPG图片——无水印、无文件大小限制、无需注册账号。一切都在浏览器本地运行。' },
]

export default function JpgToPngPage() {
  return (
    <ToolLandingPage
      toolKey="convert"
      toolPath="/jpg-to-png"
      titleEn="JPG to PNG Converter Free Online — Convert with Transparency"
      titleZh="免费在线JPG转PNG转换器 — 支持透明背景"
      descEn="Convert JPG to PNG online for free. Lossless quality, transparency support, batch processing — all in your browser with no uploads. Fast, private, unlimited."
      descZh="免费在线将JPG转换为PNG。无损画质、支持透明背景、批量处理——全部在浏览器中完成，无需上传。快速、私密、无限制。"
      features={features}
      stepsEn={stepsEn}
      stepsZh={stepsZh}
      faqEn={faqEn}
      faqZh={faqZh}
      geoSnippetEn="TapCrop is a free online JPG to PNG converter. Convert JPEG images to lossless PNG format with transparency support. Batch convert multiple images at once. All conversion runs in your browser — your images never leave your device."
      geoSnippetZh="TapCrop 秒裁是一款免费在线 JPG 转 PNG 转换工具。将 JPEG 图片转换为无损 PNG 格式，支持透明背景。批量转换多张图片。所有转换在浏览器中完成，图片不会离开你的设备。"
      sectionsEn={[
        { title: 'JPG vs PNG — When to Use Which Format', content: 'JPG (JPEG) is best for photographs and complex images where small file size matters. It uses lossy compression, meaning some quality is sacrificed to reduce file size. PNG is best for images that need crisp edges, text, transparency, or will be edited multiple times. PNG uses lossless compression, so no quality is lost on each save. Use JPG for sharing photos online; use PNG for logos, screenshots, graphics, and web design assets.' },
        { title: 'How PNG Transparency Works', content: 'PNG supports an alpha channel, which defines the transparency of each pixel on a scale from fully opaque to fully transparent. This makes PNG the standard format for logos, icons, and overlays in web and graphic design. When you convert a JPG to PNG, the resulting image will have a solid background (since JPG has no transparency). To create transparent areas, you can remove the background in an image editor after converting to PNG.' },
        { title: 'Optimizing PNG File Size', content: 'PNG files are larger than JPGs, but you can reduce their size without losing quality. PNG compression tools like OptiPNG or TinyPNG can shrink files by 20-50% through better compression algorithms. For web use, consider using PNG-8 (256 colors) instead of PNG-24 (millions of colors) if your image does not need a wide color range. This can reduce file size dramatically while keeping the image sharp.' },
      ]}
      sectionsZh={[
        { title: 'JPG 与 PNG——何时使用哪种格式', content: 'JPG (JPEG) 最适合照片和复杂图像，特别是文件大小很重要的场景。它使用有损压缩，牺牲部分画质来减小文件体积。PNG 最适合需要清晰边缘、文字、透明背景或需要多次编辑的图片。PNG 使用无损压缩，每次保存都不会损失画质。分享照片用 JPG，Logo、截图、图形和网页设计素材用 PNG。' },
        { title: 'PNG 透明背景的工作原理', content: 'PNG 支持 Alpha 通道，定义每个像素从完全不透明到完全透明的透明度。这使 PNG 成为网页和平面设计中 Logo、图标和叠加层的标准格式。将 JPG 转换为 PNG 时，图片会保持原有的实心背景（因为 JPG 没有透明信息）。要创建透明区域，可以在转换为 PNG 后用图片编辑器去除背景。' },
        { title: '优化 PNG 文件大小', content: 'PNG 文件比 JPG 大，但可以在不损失画质的情况下减小体积。OptiPNG 或 TinyPNG 等 PNG 压缩工具通过更好的压缩算法可以缩小 20-50% 的文件大小。用于网页时，如果图片不需要丰富的色彩范围，可以考虑使用 PNG-8（256色）代替 PNG-24（数百万色），这能大幅减小文件大小同时保持图片清晰。' },
      ]}
    />
  )
}
