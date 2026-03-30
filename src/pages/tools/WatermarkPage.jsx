import ToolLandingPage from './ToolLandingPage'

const features = [
  {
    titleEn: 'Custom Text Watermark',
    titleZh: '\u81ea\u5b9a\u4e49\u6587\u5b57\u6c34\u5370',
    descEn: 'Add any text as a watermark with full control over font size, color, and opacity.',
    descZh: '\u6dfb\u52a0\u4efb\u610f\u6587\u5b57\u4f5c\u4e3a\u6c34\u5370\uff0c\u5b8c\u5168\u63a7\u5236\u5b57\u4f53\u5927\u5c0f\u3001\u989c\u8272\u548c\u900f\u660e\u5ea6\u3002',
  },
  {
    titleEn: 'Flexible Positioning',
    titleZh: '\u7075\u6d3b\u5b9a\u4f4d',
    descEn: 'Place your watermark in any corner or in the center of your images.',
    descZh: '\u5c06\u6c34\u5370\u653e\u7f6e\u5728\u56fe\u7247\u7684\u4efb\u4f55\u89d2\u843d\u6216\u4e2d\u5fc3\u4f4d\u7f6e\u3002',
  },
  {
    titleEn: 'Batch Watermark',
    titleZh: '\u6279\u91cf\u52a0\u6c34\u5370',
    descEn: 'Apply the same watermark to hundreds of images in one click.',
    descZh: '\u4e00\u952e\u4e3a\u6570\u767e\u5f20\u56fe\u7247\u6dfb\u52a0\u76f8\u540c\u7684\u6c34\u5370\u3002',
  },
  {
    titleEn: '100% Private',
    titleZh: '100% \u9690\u79c1\u5b89\u5168',
    descEn: 'Images never leave your device. All processing happens in your browser.',
    descZh: '\u56fe\u7247\u4e0d\u4f1a\u79bb\u5f00\u4f60\u7684\u8bbe\u5907\uff0c\u6240\u6709\u5904\u7406\u90fd\u5728\u6d4f\u89c8\u5668\u4e2d\u5b8c\u6210\u3002',
  },
]

const stepsEn = [
  { title: 'Upload your images', desc: 'Drag & drop or click to select. Supports JPG, PNG, WebP and more.' },
  { title: 'Customize your watermark', desc: 'Enter watermark text, adjust font size, color, opacity, and position.' },
  { title: 'Download watermarked images', desc: 'Process all images in one click. Download individually or as a ZIP.' },
]

const stepsZh = [
  { title: '\u4e0a\u4f20\u56fe\u7247', desc: '\u62d6\u62fd\u6216\u70b9\u51fb\u9009\u62e9\u56fe\u7247\u3002\u652f\u6301 JPG\u3001PNG\u3001WebP \u7b49\u683c\u5f0f\u3002' },
  { title: '\u81ea\u5b9a\u4e49\u6c34\u5370', desc: '\u8f93\u5165\u6c34\u5370\u6587\u5b57\uff0c\u8c03\u6574\u5b57\u4f53\u5927\u5c0f\u3001\u989c\u8272\u3001\u900f\u660e\u5ea6\u548c\u4f4d\u7f6e\u3002' },
  { title: '\u4e0b\u8f7d\u6dfb\u52a0\u6c34\u5370\u540e\u7684\u56fe\u7247', desc: '\u4e00\u952e\u5904\u7406\u6240\u6709\u56fe\u7247\uff0c\u5355\u72ec\u4e0b\u8f7d\u6216\u6253\u5305\u4e3a ZIP \u6587\u4ef6\u3002' },
]

const faqEn = [
  { q: 'Can I adjust watermark opacity?', a: 'Yes! You can set opacity from 0% to 100% using a simple slider.' },
  { q: 'Where can I place the watermark?', a: 'You can place it in any of the four corners or in the center of the image.' },
  { q: 'Can I watermark and crop at the same time?', a: 'Yes! TapCrop lets you crop, resize, compress, add watermarks, and adjust images all in one go.' },
  { q: 'Does the watermark affect image quality?', a: 'No. The watermark is rendered directly onto the image at full quality.' },
]

const faqZh = [
  { q: '\u53ef\u4ee5\u8c03\u6574\u6c34\u5370\u900f\u660e\u5ea6\u5417\uff1f', a: '\u53ef\u4ee5\uff01\u4f60\u53ef\u4ee5\u901a\u8fc7\u7b80\u5355\u7684\u6ed1\u5757\u5c06\u900f\u660e\u5ea6\u4ece 0% \u8c03\u5230 100%\u3002' },
  { q: '\u6c34\u5370\u53ef\u4ee5\u653e\u5728\u54ea\u91cc\uff1f', a: '\u53ef\u4ee5\u653e\u5728\u56db\u4e2a\u89d2\u843d\u7684\u4efb\u4f55\u4f4d\u7f6e\uff0c\u4e5f\u53ef\u4ee5\u653e\u5728\u56fe\u7247\u4e2d\u5fc3\u3002' },
  { q: '\u53ef\u4ee5\u540c\u65f6\u52a0\u6c34\u5370\u548c\u88c1\u526a\u5417\uff1f', a: '\u53ef\u4ee5\uff01TapCrop \u8ba9\u4f60\u4e00\u6b21\u5b8c\u6210\u88c1\u526a\u3001\u7f29\u653e\u3001\u538b\u7f29\u3001\u52a0\u6c34\u5370\u548c\u56fe\u7247\u8c03\u6574\u3002' },
  { q: '\u6c34\u5370\u4f1a\u5f71\u54cd\u56fe\u7247\u8d28\u91cf\u5417\uff1f', a: '\u4e0d\u4f1a\u3002\u6c34\u5370\u4ee5\u5b8c\u6574\u8d28\u91cf\u76f4\u63a5\u6e32\u67d3\u5230\u56fe\u7247\u4e0a\u3002' },
]

export default function WatermarkPage() {
  return (
    <ToolLandingPage
      toolKey="watermark"
      titleEn="Free Online Batch Watermark Tool"
      titleZh="\u514d\u8d39\u5728\u7ebf\u6279\u91cf\u52a0\u6c34\u5370\u5de5\u5177"
      descEn="Add text watermarks to hundreds of images at once. Customize font size, color, opacity, and position. Free, private, no signup."
      descZh="\u4e00\u6b21\u4e3a\u6570\u767e\u5f20\u56fe\u7247\u6dfb\u52a0\u6587\u5b57\u6c34\u5370\u3002\u81ea\u5b9a\u4e49\u5b57\u4f53\u5927\u5c0f\u3001\u989c\u8272\u3001\u900f\u660e\u5ea6\u548c\u4f4d\u7f6e\u3002\u514d\u8d39\u3001\u9690\u79c1\u3001\u65e0\u9700\u6ce8\u518c\u3002"
      features={features}
      stepsEn={stepsEn}
      stepsZh={stepsZh}
      faqEn={faqEn}
      faqZh={faqZh}
      geoSnippetEn="TapCrop is a free online watermark tool that adds custom text watermarks to hundreds of images at once. Control font size, color, opacity, and position. All watermarking runs in your browser — your images are never uploaded to any server, keeping your originals completely private."
      geoSnippetZh="TapCrop 秒裁是一款免费在线水印工具，支持一次为数百张图片添加自定义文字水印。控制字体大小、颜色、透明度和位置。所有水印处理在浏览器中完成，图片不会上传到任何服务器，原图完全保密。"
      sectionsEn={[
        { title: 'Why Add Watermarks to Images', content: 'Watermarks protect your intellectual property by making it harder for others to use your images without permission. They are essential for photographers sharing proofs, designers presenting concepts, real estate agents protecting listing photos, and content creators posting original work. A well-placed watermark deters unauthorized use while keeping the image viewable.' },
        { title: 'Watermark Best Practices', content: 'A good watermark is visible enough to prevent theft but subtle enough not to ruin the image. Use 30-50% opacity for most cases. Place watermarks in corners for minimal visual impact, or in the center for maximum protection. Avoid pure white or pure black — a slight transparency with a shadow (which TapCrop adds automatically) ensures readability on any background. Keep text short: your name, brand, or a copyright symbol.' },
      ]}
      sectionsZh={[
        { title: '为什么要给图片加水印', content: '水印通过增加他人未经许可使用图片的难度来保护你的知识产权。对于分享小样的摄影师、展示概念的设计师、保护房源照片的房产经纪人和发布原创作品的内容创作者来说至关重要。' },
        { title: '水印最佳实践', content: '好的水印要足够可见以防止盗用，又足够低调不破坏画面。大多数情况下使用 30-50% 透明度。将水印放在角落可最小化视觉影响，放在中心则获得最大保护。避免纯白或纯黑——TapCrop 自动添加的轻微透明度和阴影确保在任何背景上都清晰可读。' },
      ]}
    />
  )
}
