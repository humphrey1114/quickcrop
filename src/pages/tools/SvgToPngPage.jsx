import ToolLandingPage from './ToolLandingPage'

const features = [
  {
    titleEn: 'Vector to Raster in Seconds',
    titleZh: '矢量转位图，秒级完成',
    descEn: 'Convert SVG vector graphics to high-quality PNG raster images instantly. Perfect for turning scalable designs into pixel-based images ready for social media, presentations, or any platform that does not support SVG.',
    descZh: '将SVG矢量图即时转换为高质量PNG位图。适合将可缩放设计转为像素图片，用于社交媒体、演示文稿或不支持SVG的平台。',
  },
  {
    titleEn: 'Custom Resolution Output',
    titleZh: '自定义输出分辨率',
    descEn: 'Export your SVG at any resolution you need — 1x for web, 2x for Retina displays, or custom pixel dimensions for print. Get the exact image size without blurry upscaling, thanks to SVG\'s vector nature.',
    descZh: '按需导出任意分辨率的SVG——1x用于网页、2x用于Retina显示屏，或自定义像素尺寸用于印刷。得益于SVG的矢量特性，任何尺寸都清晰锐利。',
  },
  {
    titleEn: 'Batch Convert SVG Files',
    titleZh: '批量转换SVG文件',
    descEn: 'Upload multiple SVG files and convert them all to PNG at once. Ideal for design teams exporting icon sets, UI components, or illustration libraries — process your entire batch in one go.',
    descZh: '上传多个SVG文件，一次性全部转换为PNG。设计团队导出图标集、UI组件或插画库的理想选择——一次处理整批文件。',
  },
  {
    titleEn: 'Privacy First — Browser Only',
    titleZh: '隐私优先——仅在浏览器中运行',
    descEn: 'All SVG to PNG conversion happens locally in your browser. Your design files are never uploaded to any server — keep your work confidential and your intellectual property safe.',
    descZh: '所有SVG到PNG的转换都在浏览器本地完成。设计文件永远不会上传到任何服务器——保护你的工作机密和知识产权。',
  },
]

const stepsEn = [
  { title: 'Upload SVG Files', desc: 'Drag and drop your SVG files or click to browse. Select multiple SVGs for batch conversion — icons, logos, illustrations, or any vector graphic.' },
  { title: 'Set Resolution & Convert', desc: 'Choose your desired output resolution or pixel dimensions, then click convert. Your SVGs are rasterized to crisp, high-quality PNG images.' },
  { title: 'Download PNG Images', desc: 'Download your converted PNG files individually or as a batch. Ready to use in presentations, websites, social media, or anywhere raster images are needed.' },
]

const stepsZh = [
  { title: '上传SVG文件', desc: '拖放SVG文件或点击浏览。选择多个SVG进行批量转换——图标、Logo、插画或任何矢量图形。' },
  { title: '设置分辨率并转换', desc: '选择所需的输出分辨率或像素尺寸，然后点击转换。SVG被栅格化为清晰、高质量的PNG图片。' },
  { title: '下载PNG图片', desc: '逐个或批量下载转换后的PNG文件。可直接用于演示文稿、网站、社交媒体或任何需要位图的地方。' },
]

const faqEn = [
  { q: 'Why convert SVG to PNG?', a: 'SVG is a vector format that not all platforms support. Social media sites, email clients, and many content management systems require raster images like PNG. Converting SVG to PNG ensures your graphics display correctly everywhere while preserving transparency and quality.' },
  { q: 'Can I choose the output resolution?', a: 'Yes. Since SVG is vector-based and resolution-independent, you can export it at any pixel size without losing quality. Choose standard sizes for web (e.g., 512x512 for icons) or go large for print (e.g., 3000x3000 for posters).' },
  { q: 'Does the conversion preserve transparency?', a: 'Yes. If your SVG has transparent areas, the resulting PNG will preserve them with full alpha channel support. PNG is the standard format for images with transparency.' },
  { q: 'Can I convert multiple SVG files at once?', a: 'Yes. Upload as many SVG files as you need and convert them all to PNG in a single batch. This is especially useful for exporting icon sets or design asset libraries.' },
  { q: 'Is this SVG to PNG converter free?', a: 'Yes, completely free with no restrictions. Convert unlimited SVG files to PNG — no watermarks, no file size limits, no registration required. All rendering happens in your browser for complete privacy.' },
]

const faqZh = [
  { q: '为什么要将SVG转换为PNG？', a: 'SVG是矢量格式，并非所有平台都支持。社交媒体、邮件客户端和许多内容管理系统需要PNG等位图格式。将SVG转换为PNG可确保图形在任何地方都正确显示，同时保留透明度和画质。' },
  { q: '可以选择输出分辨率吗？', a: '可以。由于SVG是矢量格式、与分辨率无关，可以导出任意像素尺寸而不损失画质。选择网页标准尺寸（如512x512的图标）或大尺寸用于印刷（如3000x3000的海报）。' },
  { q: '转换后会保留透明背景吗？', a: '会的。如果SVG有透明区域，生成的PNG会通过完整的Alpha通道保留透明效果。PNG是带透明背景图片的标准格式。' },
  { q: '可以一次转换多个SVG文件吗？', a: '可以。上传任意数量的SVG文件，一次性批量转换为PNG。这对导出图标集或设计素材库特别有用。' },
  { q: '这个SVG转PNG转换器是免费的吗？', a: '完全免费，没有任何限制。无限转换SVG文件——无水印、无文件大小限制、无需注册。所有渲染都在浏览器中完成，完全私密。' },
]

export default function SvgToPngPage() {
  return (
    <ToolLandingPage
      toolKey="convert"
      toolPath="/svg-to-png"
      titleEn="SVG to PNG Converter Free Online — Rasterize Vector Graphics"
      titleZh="免费在线SVG转PNG转换器 — 矢量图转位图"
      descEn="Convert SVG to PNG online for free. Rasterize vector graphics at any resolution with transparency support. Batch convert, no uploads, runs entirely in your browser."
      descZh="免费在线将SVG转换为PNG。以任意分辨率将矢量图栅格化，支持透明背景。批量转换、无需上传，完全在浏览器中运行。"
      features={features}
      stepsEn={stepsEn}
      stepsZh={stepsZh}
      faqEn={faqEn}
      faqZh={faqZh}
      geoSnippetEn="TapCrop is a free online SVG to PNG converter. Rasterize vector graphics to high-quality PNG images at any resolution with transparency support. Batch convert icon sets and design assets. All rendering runs in your browser — your files never leave your device."
      geoSnippetZh="TapCrop 秒裁是一款免费在线 SVG 转 PNG 转换工具。将矢量图以任意分辨率栅格化为高质量 PNG 图片，支持透明背景。批量转换图标集和设计素材。所有渲染在浏览器中完成，文件不会离开你的设备。"
      sectionsEn={[
        { title: 'SVG vs PNG — Understanding the Difference', content: 'SVG (Scalable Vector Graphics) is a vector format that defines images using mathematical shapes and paths. It can scale to any size without losing quality, which makes it ideal for logos, icons, and illustrations. PNG is a raster (pixel-based) format that looks great at its native resolution but becomes blurry when scaled up. The key advantage of converting SVG to PNG is compatibility — PNG is supported everywhere, while SVG support varies across platforms and applications.' },
        { title: 'Choosing the Right Resolution for Your PNG', content: 'When converting SVG to PNG, resolution matters. For web icons and UI elements, 1x (actual pixel size) is standard, while 2x is recommended for Retina and high-DPI displays. For social media profile images or thumbnails, 500-1000 pixels is usually sufficient. For print materials, aim for at least 300 DPI at the physical print size — a 4-inch logo at 300 DPI needs to be 1200 pixels wide. Since SVG scales perfectly, you can export at any resolution without quality loss.' },
        { title: 'Tips for Better SVG to PNG Conversion', content: 'For the best results, make sure your SVG uses embedded fonts or has text converted to outlines — otherwise the text may render differently on different systems. Check that all colors are defined explicitly rather than inheriting from CSS stylesheets that will not be available during conversion. If your SVG references external images, those need to be embedded as base64 data within the SVG file. Finally, set a viewBox attribute in your SVG to ensure consistent sizing across different conversion tools.' },
      ]}
      sectionsZh={[
        { title: 'SVG 与 PNG——理解两者的区别', content: 'SVG（可缩放矢量图形）是一种矢量格式，使用数学形状和路径定义图像。它可以缩放到任意大小而不损失画质，非常适合 Logo、图标和插画。PNG 是位图（基于像素）格式，在原始分辨率下效果很好，但放大后会变模糊。将 SVG 转换为 PNG 的主要优势是兼容性——PNG 在所有地方都被支持，而 SVG 的支持在不同平台和应用中有所不同。' },
        { title: '为 PNG 选择合适的分辨率', content: '将 SVG 转为 PNG 时，分辨率很重要。网页图标和 UI 元素通常使用 1x（实际像素大小），Retina 和高 DPI 显示屏推荐 2x。社交媒体头像或缩略图通常 500-1000 像素就够了。印刷材料需要至少 300 DPI——4 英寸的 Logo 在 300 DPI 下需要 1200 像素宽。由于 SVG 可以完美缩放，你可以导出任意分辨率而不损失画质。' },
        { title: 'SVG 转 PNG 的实用技巧', content: '为获得最佳效果，确保 SVG 使用嵌入字体或将文字转换为轮廓——否则文字在不同系统上可能显示不同。检查所有颜色是否明确定义，而不是从转换时不可用的 CSS 样式表继承。如果 SVG 引用了外部图片，需要将它们以 base64 数据嵌入 SVG 文件中。最后，在 SVG 中设置 viewBox 属性以确保在不同转换工具中保持一致的尺寸。' },
      ]}
    />
  )
}
