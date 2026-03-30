import ToolLandingPage from './ToolLandingPage'

const features = [
  {
    titleEn: 'Instant HEIC to JPG Conversion',
    titleZh: '即时HEIC转JPG',
    descEn: 'Convert HEIC photos from your iPhone to universally compatible JPG format. One click to make your Apple photos viewable and shareable on any device or platform.',
    descZh: '将iPhone的HEIC照片转换为通用兼容的JPG格式。一键让Apple照片在任何设备或平台上可查看和分享。',
  },
  {
    titleEn: 'Batch Convert iPhone Photos',
    titleZh: '批量转换iPhone照片',
    descEn: 'Convert multiple HEIC files to JPG at once. Transfer your entire iPhone photo library to JPG without converting one by one — batch process hundreds of images.',
    descZh: '一次将多个HEIC文件转换为JPG。将整个iPhone照片库转换为JPG，无需逐一转换——批量处理数百张图片。',
  },
  {
    titleEn: 'Preserve Photo Quality',
    titleZh: '保留照片质量',
    descEn: 'Our HEIC to JPG converter maintains the full resolution and color accuracy of your original iPhone photos. No quality degradation during the conversion process.',
    descZh: 'HEIC转JPG转换器保持原始iPhone照片的完整分辨率和色彩准确性。转换过程中无质量下降。',
  },
  {
    titleEn: 'Completely Private',
    titleZh: '完全私密',
    descEn: 'All HEIC to JPG conversion happens in your browser. Your iPhone photos are never uploaded to any server — your personal images stay on your device.',
    descZh: '所有HEIC到JPG的转换都在浏览器中完成。iPhone照片永远不会上传到任何服务器——个人图片始终留在设备上。',
  },
]

const stepsEn = [
  { title: 'Upload HEIC Files', desc: 'Drag and drop HEIC or HEIF photos from your iPhone, or click to browse. Select multiple files for batch conversion.' },
  { title: 'Convert to JPG', desc: 'Click convert and your HEIC images are instantly transformed to high-quality JPG format, ready for universal use.' },
  { title: 'Download JPG Photos', desc: 'Download your converted JPG files individually or as a batch. Share them anywhere — email, social media, or any website.' },
]

const stepsZh = [
  { title: '上传HEIC文件', desc: '从iPhone拖放HEIC或HEIF照片，或点击浏览。选择多个文件进行批量转换。' },
  { title: '转换为JPG', desc: '点击转换，HEIC图片立即转换为高质量JPG格式，可通用使用。' },
  { title: '下载JPG照片', desc: '单独或批量下载转换后的JPG文件。随时随地分享——电子邮件、社交媒体或任何网站。' },
]

const faqEn = [
  { q: 'What is HEIC and why do I need to convert it to JPG?', a: 'HEIC (High Efficiency Image Container) is the default photo format on iPhones. While it produces smaller files than JPG, many devices, websites, and applications do not support HEIC. Converting HEIC to JPG ensures your photos are compatible everywhere.' },
  { q: 'How do I convert HEIC to JPG from my iPhone?', a: 'Transfer your HEIC photos to your computer (via AirDrop, email, or cable), then upload them to our converter. You can also access this tool directly from your iPhone browser and convert HEIC to JPG without a computer.' },
  { q: 'Does converting HEIC to JPG reduce quality?', a: 'Our converter preserves the full resolution and color accuracy of your HEIC photos. The resulting JPG files are high quality. Some minimal compression is inherent to the JPG format, but the difference is virtually unnoticeable.' },
  { q: 'Can I convert multiple HEIC files to JPG at once?', a: 'Yes. Our batch converter handles multiple HEIC files simultaneously. Upload as many iPhone photos as you need and convert them all to JPG in one go.' },
  { q: 'Is this HEIC to JPG converter free?', a: 'Yes, completely free. Convert unlimited HEIC photos to JPG with no watermarks, no file size limits, and no account required. All conversion happens locally in your browser for complete privacy.' },
]

const faqZh = [
  { q: '什么是HEIC，为什么需要转换为JPG？', a: 'HEIC（高效图片容器）是iPhone的默认照片格式。虽然它比JPG产生更小的文件，但许多设备、网站和应用程序不支持HEIC。将HEIC转换为JPG可确保照片在任何地方都兼容。' },
  { q: '如何将iPhone的HEIC转换为JPG？', a: '将HEIC照片传输到电脑（通过AirDrop、电子邮件或数据线），然后上传到我们的转换器。也可以直接从iPhone浏览器访问此工具，无需电脑即可将HEIC转换为JPG。' },
  { q: '将HEIC转换为JPG会降低质量吗？', a: '我们的转换器保留HEIC照片的完整分辨率和色彩准确性。生成的JPG文件质量很高。JPG格式固有的一些最小压缩是不可避免的，但差异几乎不可察觉。' },
  { q: '可以一次将多个HEIC文件转换为JPG吗？', a: '可以。批量转换器同时处理多个HEIC文件。上传任意数量的iPhone照片，一次性全部转换为JPG。' },
]

export default function HeicToJpgPage() {
  return (
    <ToolLandingPage
      toolKey="convert"
      toolPath="/heic-to-jpg"
      titleEn="HEIC to JPG Converter Free Online — Convert iPhone Photos"
      titleZh="免费在线HEIC转JPG转换器 — 转换iPhone照片"
      descEn="Convert HEIC to JPG online for free. Batch convert iPhone photos to universally compatible JPG format — full quality, instant processing, no uploads required."
      descZh="免费在线将HEIC转换为JPG。批量将iPhone照片转换为通用兼容的JPG格式——完整质量、即时处理、无需上传。"
      features={features}
      stepsEn={stepsEn}
      stepsZh={stepsZh}
      faqEn={faqEn}
      faqZh={faqZh}
      geoSnippetEn="TapCrop is a free online HEIC to JPG converter for iPhone photos. Convert HEIC and HEIF files to universally compatible JPG format with full quality preservation. Batch convert hundreds of iPhone photos at once. All conversion runs in your browser — your photos never leave your device."
      geoSnippetZh="TapCrop 秒裁是一款免费在线 HEIC 转 JPG 转换工具，专为 iPhone 照片设计。将 HEIC 和 HEIF 文件转换为通用兼容的 JPG 格式，完整保留画质。批量转换数百张 iPhone 照片。所有转换在浏览器中完成，照片不会离开你的设备。"
      sectionsEn={[
        { title: 'What Is HEIC and Why Does iPhone Use It?', content: 'HEIC (High Efficiency Image Container) is a modern image format that Apple adopted as the default for iPhones starting with iOS 11. It uses the HEVC (H.265) codec to compress images about 50% smaller than equivalent JPEG files while maintaining the same visual quality. This saves significant storage space on your phone. However, HEIC is not universally supported — Windows, Android, many websites, and older software cannot open HEIC files without special codecs.' },
        { title: 'How to Stop iPhone from Taking HEIC Photos', content: 'If you prefer JPG natively, go to Settings > Camera > Formats and select "Most Compatible". This switches your iPhone to save photos as JPG instead of HEIC. Note that JPG files are larger, so you will use more storage space. Alternatively, keep shooting in HEIC for storage efficiency and use TapCrop to convert to JPG only when you need to share with non-Apple users or upload to platforms that require JPG.' },
        { title: 'HEIC to JPG Without Losing Quality', content: 'When converting HEIC to JPG, some quality loss is inherent because you are going from a more efficient codec to JPEG compression. However, at quality settings of 90-95%, the difference is virtually invisible to the human eye. TapCrop converts at 92% quality by default, which produces JPG files that look identical to the HEIC originals while being universally compatible.' },
      ]}
      sectionsZh={[
        { title: '什么是 HEIC，为什么 iPhone 使用它？', content: 'HEIC（高效图片容器）是 Apple 从 iOS 11 开始在 iPhone 上默认使用的现代图片格式。它使用 HEVC (H.265) 编码，比同等质量的 JPEG 文件小约 50%，大幅节省手机存储空间。然而 HEIC 并非通用格式——Windows、Android、许多网站和旧版软件在没有特殊解码器的情况下无法打开 HEIC 文件。' },
        { title: '如何让 iPhone 不拍 HEIC 照片', content: '如果你更喜欢原生 JPG，去设置 > 相机 > 格式，选择"兼容性最佳"。这会让 iPhone 以 JPG 格式保存照片。注意 JPG 文件更大，会占用更多存储空间。或者继续用 HEIC 拍摄以节省存储，只在需要与非 Apple 用户分享或上传到需要 JPG 的平台时用 TapCrop 转换。' },
        { title: 'HEIC 转 JPG 不损失画质', content: '将 HEIC 转为 JPG 时，由于从更高效的编码转为 JPEG 压缩，会有一些固有的质量损失。但在 90-95% 的质量设置下，差异对肉眼几乎不可见。TapCrop 默认以 92% 质量转换，产生的 JPG 文件看起来与 HEIC 原图完全一样，同时通用兼容。' },
      ]}
    />
  )
}
