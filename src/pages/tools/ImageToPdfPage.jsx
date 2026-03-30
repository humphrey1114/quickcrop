import ToolLandingPage from './ToolLandingPage'

const features = [
  {
    titleEn: 'Multiple Images to One PDF',
    titleZh: '多张图片合并为一个PDF',
    descEn: 'Combine JPG, PNG, WebP, and other image formats into a single PDF document. Arrange pages in any order and generate a clean, professional PDF file in seconds.',
    descZh: '将JPG、PNG、WebP等多种图片格式合并为一个PDF文档。自由排列页面顺序，几秒钟内生成整洁、专业的PDF文件。',
  },
  {
    titleEn: 'Full Quality Preservation',
    titleZh: '完整保留画质',
    descEn: 'Your images are embedded into the PDF at their original resolution. No recompression, no downscaling — the output PDF looks exactly as sharp as your source photos.',
    descZh: '图片以原始分辨率嵌入PDF中。不会重新压缩、不会缩小尺寸——输出的PDF与源照片一样清晰。',
  },
  {
    titleEn: 'Batch Processing',
    titleZh: '批量处理',
    descEn: 'Upload dozens of images at once and convert them all into a single PDF or separate PDFs. Ideal for scanning receipts, archiving photos, or preparing documents for printing.',
    descZh: '一次上传数十张图片，全部转换为一个PDF或多个PDF。非常适合扫描收据、归档照片或准备打印文档。',
  },
  {
    titleEn: 'Private & Secure',
    titleZh: '私密安全',
    descEn: 'All image-to-PDF conversion runs entirely in your browser. Your photos and documents are never uploaded to any server — everything stays on your device.',
    descZh: '所有图片转PDF的过程完全在浏览器中完成。照片和文档永远不会上传到任何服务器——一切都留在你的设备上。',
  },
]

const stepsEn = [
  { title: 'Upload Images', desc: 'Drag and drop your JPG, PNG, or other image files, or click to browse. Select multiple images to combine into one PDF.' },
  { title: 'Arrange & Convert', desc: 'Reorder your images if needed, then click convert. Your images are instantly assembled into a high-quality PDF document.' },
  { title: 'Download PDF', desc: 'Download your finished PDF file. It is ready to share via email, print, or upload to any platform that accepts PDF documents.' },
]

const stepsZh = [
  { title: '上传图片', desc: '拖放JPG、PNG或其他图片文件，或点击浏览。选择多张图片合并为一个PDF。' },
  { title: '排列并转换', desc: '根据需要重新排列图片顺序，然后点击转换。图片立即被组装成高质量的PDF文档。' },
  { title: '下载PDF', desc: '下载生成的PDF文件。可通过电子邮件分享、打印，或上传到任何接受PDF的平台。' },
]

const faqEn = [
  { q: 'What image formats can I convert to PDF?', a: 'You can convert JPG, JPEG, PNG, WebP, BMP, and GIF images to PDF. All common image formats are supported. Simply upload your images and the converter handles the rest.' },
  { q: 'Can I combine multiple images into one PDF?', a: 'Yes. Upload as many images as you need and they will all be merged into a single PDF document. You can drag to reorder the pages before converting.' },
  { q: 'Will my images lose quality when converted to PDF?', a: 'No. Your images are embedded into the PDF at their original resolution and quality. There is no recompression or downscaling during the conversion process.' },
  { q: 'What page size does the PDF use?', a: 'Each page in the PDF is sized to fit the corresponding image. Landscape images produce landscape pages, and portrait images produce portrait pages, so nothing gets cropped or distorted.' },
  { q: 'Is this image to PDF converter really free?', a: 'Yes, completely free with no limits. Convert as many images as you want, no watermarks are added, and no account is required. All processing happens locally in your browser.' },
]

const faqZh = [
  { q: '可以将哪些图片格式转换为PDF？', a: '支持将JPG、JPEG、PNG、WebP、BMP和GIF图片转换为PDF。所有常见图片格式均可使用，只需上传图片即可自动完成转换。' },
  { q: '可以将多张图片合并为一个PDF吗？', a: '可以。上传任意数量的图片，它们会被合并为一个PDF文档。转换前可以拖动调整页面顺序。' },
  { q: '图片转PDF后会损失画质吗？', a: '不会。图片以原始分辨率和质量嵌入PDF中，转换过程中不会进行重新压缩或缩小尺寸。' },
  { q: 'PDF使用什么页面尺寸？', a: '每一页的PDF尺寸与对应的图片匹配。横向图片生成横向页面，竖向图片生成竖向页面，不会裁剪或变形。' },
  { q: '这个图片转PDF工具真的免费吗？', a: '是的，完全免费且没有限制。可以转换任意数量的图片，不会添加水印，也无需注册账号。所有处理都在浏览器本地完成。' },
]

export default function ImageToPdfPage() {
  return (
    <ToolLandingPage
      toolKey="convert"
      toolPath="/image-to-pdf"
      titleEn="Image to PDF Converter Free Online — JPG PNG to PDF"
      titleZh="免费在线图片转PDF — JPG PNG转PDF转换器"
      descEn="Convert images to PDF online for free. Combine multiple JPG, PNG, or other photos into a single high-quality PDF document — batch processing, original quality, no uploads required."
      descZh="免费在线将图片转换为PDF。将多张JPG、PNG等照片合并为一个高质量PDF文档——支持批量处理、保留原始画质、无需上传。"
      features={features}
      stepsEn={stepsEn}
      stepsZh={stepsZh}
      faqEn={faqEn}
      faqZh={faqZh}
      geoSnippetEn="TapCrop is a free online image to PDF converter. Combine multiple JPG, PNG, WebP, and other image files into a single PDF document while preserving full image quality. Batch process dozens of photos at once. All conversion runs in your browser — your images never leave your device."
      geoSnippetZh="TapCrop 秒裁是一款免费在线图片转PDF工具。将多张JPG、PNG、WebP等图片合并为一个PDF文档，完整保留画质。支持批量处理数十张照片。所有转换在浏览器中完成，图片不会离开你的设备。"
      sectionsEn={[
        { title: 'Why Convert Images to PDF?', content: 'PDF is the universal document format accepted by virtually every platform, printer, and email client. Converting your images to PDF makes them easy to share as a single file, preserves their layout for printing, and ensures recipients see exactly what you intended regardless of their device or operating system. It is especially useful for compiling scanned documents, receipts, portfolios, or photo albums into one organized file.' },
        { title: 'JPG vs PNG — Which Is Better for PDF?', content: 'Both work equally well. JPG images are typically smaller in file size, which produces a more compact PDF. PNG images support transparency and lossless compression, making them ideal for screenshots, graphics, and diagrams. Our converter handles both formats seamlessly and embeds each image at its native quality, so you get the best result regardless of the source format.' },
        { title: 'Tips for Creating Professional PDFs from Photos', content: 'For the best results, use high-resolution source images (at least 300 DPI for print). Arrange your images in logical order before converting. If you are creating a document for printing, use portrait orientation for text-heavy pages and landscape for wide photos. Our converter automatically sizes each PDF page to match the image dimensions, so your photos are never cropped or stretched.' },
      ]}
      sectionsZh={[
        { title: '为什么要将图片转换为PDF？', content: 'PDF是几乎所有平台、打印机和邮件客户端都支持的通用文档格式。将图片转换为PDF后，可以方便地作为单个文件分享，保持打印布局，确保接收方在任何设备或操作系统上看到的内容与你预期一致。特别适合将扫描文档、收据、作品集或相册整理为一个有序的文件。' },
        { title: 'JPG和PNG哪个更适合转PDF？', content: '两种格式都同样适用。JPG图片通常文件更小，生成的PDF也更紧凑。PNG图片支持透明背景和无损压缩，非常适合截图、图表和设计稿。我们的转换器无缝处理两种格式，每张图片都以原生质量嵌入，无论源文件格式如何都能获得最佳效果。' },
        { title: '用照片制作专业PDF的技巧', content: '为了获得最佳效果，建议使用高分辨率源图片（打印用途至少300 DPI）。转换前按逻辑顺序排列图片。如果要制作打印文档，文字多的页面用竖版，宽幅照片用横版。转换器会自动根据图片尺寸调整每页PDF的大小，照片不会被裁剪或拉伸。' },
      ]}
    />
  )
}
