import ToolLandingPage from './ToolLandingPage'

const features = [
  {
    titleEn: 'Custom Focal Point',
    titleZh: '\u81ea\u5b9a\u4e49\u7126\u70b9',
    descEn: 'Click anywhere on your image to choose the crop center \u2014 keep the part that matters most.',
    descZh: '\u70b9\u51fb\u56fe\u7247\u4efb\u610f\u4f4d\u7f6e\u9009\u62e9\u88c1\u526a\u4e2d\u5fc3\uff0c\u4fdd\u7559\u6700\u91cd\u8981\u7684\u90e8\u5206\u3002',
  },
  {
    titleEn: 'Batch Process Hundreds',
    titleZh: '\u6279\u91cf\u5904\u7406\u6570\u767e\u5f20',
    descEn: 'Upload hundreds of photos and crop them all to the same size in one click.',
    descZh: '\u4e0a\u4f20\u6570\u767e\u5f20\u7167\u7247\uff0c\u4e00\u952e\u88c1\u526a\u4e3a\u7edf\u4e00\u5c3a\u5bf8\u3002',
  },
  {
    titleEn: '50+ Size Presets',
    titleZh: '50+ \u5c3a\u5bf8\u9884\u8bbe',
    descEn: 'Ready-made presets for Instagram, YouTube, Facebook, Twitter, Etsy, ID photos, and more.',
    descZh: '\u9002\u7528\u4e8e Instagram\u3001YouTube\u3001Facebook\u3001Twitter\u3001Etsy\u3001\u8bc1\u4ef6\u7167\u7b49\u7684\u9884\u8bbe\u5c3a\u5bf8\u3002',
  },
  {
    titleEn: '100% Private',
    titleZh: '100% \u9690\u79c1\u5b89\u5168',
    descEn: 'Images never leave your device. All processing happens in your browser.',
    descZh: '\u56fe\u7247\u4e0d\u4f1a\u79bb\u5f00\u4f60\u7684\u8bbe\u5907\uff0c\u6240\u6709\u5904\u7406\u90fd\u5728\u6d4f\u89c8\u5668\u4e2d\u5b8c\u6210\u3002',
  },
]

const stepsEn = [
  { title: 'Upload your images', desc: 'Drag & drop or click to select. Supports JPG, PNG, WebP, HEIC and more.' },
  { title: 'Choose size & focal point', desc: 'Pick a preset or enter custom dimensions. Click on each image to set the crop center.' },
  { title: 'Download instantly', desc: 'Process all images in one click. Download individually or as a ZIP file.' },
]

const stepsZh = [
  { title: '\u4e0a\u4f20\u56fe\u7247', desc: '\u62d6\u62fd\u6216\u70b9\u51fb\u9009\u62e9\u56fe\u7247\u3002\u652f\u6301 JPG\u3001PNG\u3001WebP\u3001HEIC \u7b49\u683c\u5f0f\u3002' },
  { title: '\u9009\u62e9\u5c3a\u5bf8\u548c\u7126\u70b9', desc: '\u9009\u62e9\u9884\u8bbe\u5c3a\u5bf8\u6216\u8f93\u5165\u81ea\u5b9a\u4e49\u5c3a\u5bf8\uff0c\u70b9\u51fb\u56fe\u7247\u8bbe\u7f6e\u88c1\u526a\u4e2d\u5fc3\u3002' },
  { title: '\u7acb\u5373\u4e0b\u8f7d', desc: '\u4e00\u952e\u5904\u7406\u6240\u6709\u56fe\u7247\uff0c\u5355\u72ec\u4e0b\u8f7d\u6216\u6253\u5305\u4e3a ZIP \u6587\u4ef6\u3002' },
]

const faqEn = [
  { q: 'Is TapCrop really free?', a: 'Yes! TapCrop is 100% free to use. No watermarks, no hidden fees, no signup required.' },
  { q: 'Are my images uploaded to a server?', a: 'No. All image processing happens locally in your browser. Your images never leave your device.' },
  { q: 'What image formats are supported?', a: 'TapCrop supports JPG, PNG, WebP, GIF, BMP, TIFF, and HEIC/HEIF formats.' },
  { q: 'How many images can I crop at once?', a: 'There is no hard limit. TapCrop can handle hundreds of images in a single batch.' },
  { q: 'Can I set different crop areas for each image?', a: 'Yes! Click on any image to set its individual focal point. You can also set per-image custom sizes.' },
]

const faqZh = [
  { q: 'TapCrop \u771f\u7684\u514d\u8d39\u5417\uff1f', a: '\u662f\u7684\uff01TapCrop \u5b8c\u5168\u514d\u8d39\u4f7f\u7528\uff0c\u6ca1\u6709\u6c34\u5370\u3001\u6ca1\u6709\u9690\u85cf\u8d39\u7528\u3001\u4e0d\u9700\u8981\u6ce8\u518c\u3002' },
  { q: '\u6211\u7684\u56fe\u7247\u4f1a\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u5417\uff1f', a: '\u4e0d\u4f1a\u3002\u6240\u6709\u56fe\u7247\u5904\u7406\u90fd\u5728\u4f60\u7684\u6d4f\u89c8\u5668\u672c\u5730\u5b8c\u6210\uff0c\u56fe\u7247\u6c38\u8fdc\u4e0d\u4f1a\u79bb\u5f00\u4f60\u7684\u8bbe\u5907\u3002' },
  { q: '\u652f\u6301\u4ec0\u4e48\u56fe\u7247\u683c\u5f0f\uff1f', a: 'TapCrop \u652f\u6301 JPG\u3001PNG\u3001WebP\u3001GIF\u3001BMP\u3001TIFF \u548c HEIC/HEIF \u683c\u5f0f\u3002' },
  { q: '\u4e00\u6b21\u53ef\u4ee5\u88c1\u526a\u591a\u5c11\u5f20\u56fe\u7247\uff1f', a: '\u6ca1\u6709\u786c\u6027\u9650\u5236\u3002TapCrop \u53ef\u4ee5\u5728\u4e00\u4e2a\u6279\u6b21\u4e2d\u5904\u7406\u6570\u767e\u5f20\u56fe\u7247\u3002' },
  { q: '\u53ef\u4ee5\u4e3a\u6bcf\u5f20\u56fe\u7247\u8bbe\u7f6e\u4e0d\u540c\u7684\u88c1\u526a\u533a\u57df\u5417\uff1f', a: '\u53ef\u4ee5\uff01\u70b9\u51fb\u4efb\u4f55\u56fe\u7247\u8bbe\u7f6e\u5176\u72ec\u7acb\u7684\u7126\u70b9\u4f4d\u7f6e\uff0c\u8fd8\u53ef\u4ee5\u4e3a\u5355\u5f20\u56fe\u7247\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u5c3a\u5bf8\u3002' },
]

export default function CropPage() {
  return (
    <ToolLandingPage
      toolKey="crop"
      titleEn="Crop Image Online Free — Batch Photo Cropper"
      titleZh="\u514d\u8d39\u5728\u7ebf\u6279\u91cf\u56fe\u7247\u88c1\u526a\u5de5\u5177"
      descEn="Crop image online free. Batch crop and resize hundreds of photos at once with custom focal points. 50+ presets for Instagram, YouTube, Facebook. No signup, no uploads."
      descZh="\u76f4\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u6279\u91cf\u88c1\u526a\u548c\u8c03\u6574\u6570\u767e\u5f20\u56fe\u7247\u3002\u81ea\u5b9a\u4e49\u7126\u70b9\u300150+ \u9884\u8bbe\u5c3a\u5bf8\u3001\u5373\u65f6\u4e0b\u8f7d\u3002\u65e0\u9700\u6ce8\u518c\uff0c\u56fe\u7247\u4e0d\u4e0a\u4f20\u3002"
      features={features}
      stepsEn={stepsEn}
      stepsZh={stepsZh}
      faqEn={faqEn}
      faqZh={faqZh}
      geoSnippetEn="TapCrop is a free online image cropper that lets you batch crop hundreds of photos to the same dimensions in one click. It uses smart focal point detection to automatically find the subject of each image. All processing happens 100% in your browser — no images are ever uploaded to a server."
      geoSnippetZh="TapCrop 秒裁是一款免费在线批量图片裁剪工具，支持一键将数百张照片裁剪为统一尺寸。智能焦点检测自动识别每张图片的主体。所有处理 100% 在浏览器端完成，图片不会上传到任何服务器。"
      sectionsEn={[
        { title: 'What Is Batch Image Cropping?', content: 'Batch image cropping means resizing and cutting multiple photos to the same dimensions at once, instead of editing them one by one. This is essential for e-commerce sellers who need consistent product images, social media managers preparing content calendars, photographers delivering client galleries, and anyone working with large sets of images. TapCrop handles this entirely in your browser, so there are no file size limits, no upload queues, and no privacy concerns.' },
        { title: 'Smart Focal Point Detection', content: 'When you crop an image to a different aspect ratio, you lose part of the original photo. TapCrop uses smartcrop.js to analyze each image and automatically detect the most important region — usually faces, high-contrast areas, or the visual center of gravity. This means your subjects stay centered and visible even after aggressive cropping. You can also manually override the focal point by clicking anywhere on the image.' },
        { title: 'Social Media & E-commerce Presets', content: 'TapCrop includes over 50 built-in size presets covering every major platform: Instagram posts (1080x1080, 1080x1350), Stories and Reels (1080x1920), YouTube thumbnails (1280x720), Facebook covers (820x312), Twitter headers (1500x500), LinkedIn banners (1584x396), Pinterest pins (1000x1500), Etsy listings (2000x2000), and more. ID photo sizes for passports, driver licenses, and standard paper sizes at 300 DPI are also included.' },
      ]}
      sectionsZh={[
        { title: '什么是批量图片裁剪？', content: '批量图片裁剪是指一次性将多张照片裁剪为相同尺寸，而不是逐张编辑。这对于需要统一商品图的电商卖家、准备内容日历的社交媒体运营、交付客户图库的摄影师，以及处理大量图片的所有人来说都至关重要。TapCrop 完全在浏览器中运行，没有文件大小限制、没有上传队列、也没有隐私顾虑。' },
        { title: '智能焦点检测', content: '当你将图片裁剪为不同的宽高比时，会丢失原始照片的一部分。TapCrop 使用 smartcrop.js 分析每张图片，自动检测最重要的区域——通常是人脸、高对比度区域或视觉重心。这意味着即使经过大幅裁剪，你的主体仍然居中可见。你也可以通过点击图片的任意位置手动覆盖焦点。' },
        { title: '社交媒体和电商预设', content: 'TapCrop 内置了 50 多种尺寸预设，覆盖所有主流平台：Instagram 帖子（1080x1080、1080x1350）、Stories 和 Reels（1080x1920）、YouTube 缩略图（1280x720）、Facebook 封面（820x312）、Twitter 头图（1500x500）、LinkedIn 横幅（1584x396）、Pinterest Pin（1000x1500）、Etsy 商品图（2000x2000）等。还包括护照、驾照等证件照尺寸和 300 DPI 标准纸张尺寸。' },
      ]}
    />
  )
}
