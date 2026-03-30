import ToolLandingPage from './ToolLandingPage'

const features = [
  {
    titleEn: 'AI Face Detection Auto Crop',
    titleZh: 'AI人脸检测自动裁剪',
    descEn: 'Our smart crop detects faces and key subjects in your photo, then automatically crops to keep the most important content centered. No manual adjustment needed — the AI finds the focal point for you.',
    descZh: '智能裁剪自动检测照片中的人脸和关键主体，裁剪时保持最重要的内容居中。无需手动调整——AI为你找到焦点。',
  },
  {
    titleEn: 'Social Media Ready Sizes',
    titleZh: '社交媒体适配尺寸',
    descEn: 'One-click crop to Instagram square, Instagram Story, YouTube thumbnail, Facebook cover, Twitter header, and more. The AI keeps faces visible and properly framed for every aspect ratio.',
    descZh: '一键裁剪为Instagram方图、Instagram Story、YouTube缩略图、Facebook封面、Twitter头图等尺寸。AI确保每种比例下人脸都可见且构图合理。',
  },
  {
    titleEn: 'Batch Smart Crop',
    titleZh: '批量智能裁剪',
    descEn: 'Upload dozens of photos and smart crop them all to the same target size at once. Perfect for creating consistent product images, team headshots, or social media post sets.',
    descZh: '上传数十张照片，一次性将它们全部智能裁剪为相同的目标尺寸。非常适合制作统一的产品图片、团队头像或社交媒体配图。',
  },
  {
    titleEn: 'Runs in Your Browser',
    titleZh: '浏览器中运行',
    descEn: 'The face detection AI model runs entirely in your browser using on-device processing. Your photos are never uploaded to any cloud server — your images stay private and processing is instant.',
    descZh: '人脸检测AI模型完全在浏览器中通过本地计算运行。照片永远不会上传到云服务器——图片保持私密，处理即时完成。',
  },
]

const stepsEn = [
  { title: 'Upload Photos', desc: 'Drag and drop one or more photos, or click to browse. The AI immediately analyzes each image to detect faces and key subjects.' },
  { title: 'Choose Target Size', desc: 'Select a preset aspect ratio (square, 16:9, 9:16, 4:5, etc.) or enter custom dimensions. The AI automatically positions the crop around detected faces.' },
  { title: 'Download Results', desc: 'Preview the smart crop results and download individually or as a batch. Every photo is cropped with the subject perfectly centered.' },
]

const stepsZh = [
  { title: '上传照片', desc: '拖放一张或多张照片，或点击浏览。AI会立即分析每张图片，检测人脸和关键主体。' },
  { title: '选择目标尺寸', desc: '选择预设宽高比（正方形、16:9、9:16、4:5等）或输入自定义尺寸。AI自动围绕检测到的人脸定位裁剪区域。' },
  { title: '下载结果', desc: '预览智能裁剪结果，单张或批量下载。每张照片的主体都完美居中。' },
]

const faqEn = [
  { q: 'How does smart crop detect faces?', a: 'The tool uses a lightweight AI face detection model that runs directly in your browser. It identifies face positions, sizes, and orientations in the image, then calculates the optimal crop region that keeps all detected faces visible and well-framed within your chosen aspect ratio.' },
  { q: 'What if my photo has no faces?', a: 'Smart crop also analyzes image composition and visual saliency to find the most interesting region of the photo. It works well for product shots, food photography, landscapes, and any image where you want the main subject to stay centered after cropping.' },
  { q: 'Can I smart crop multiple photos to the same size at once?', a: 'Yes. Upload all your photos, select the target size, and the AI will smart crop each one individually based on its content. This is ideal for creating a consistent set of images, such as team photos or product catalog images.' },
  { q: 'What aspect ratios and sizes are available?', a: 'Presets include 1:1 (Instagram square), 4:5 (Instagram portrait), 16:9 (YouTube thumbnail), 9:16 (Stories/Reels), 3:2 (standard photo), and 2:3 (Pinterest). You can also enter any custom width and height in pixels.' },
  { q: 'Is smart crop free to use?', a: 'Yes, completely free. Crop unlimited photos with AI face detection, no watermarks, and no account required. The AI model runs locally in your browser so there are no server costs or usage limits.' },
]

const faqZh = [
  { q: '智能裁剪如何检测人脸？', a: '工具使用一个直接在浏览器中运行的轻量AI人脸检测模型。它识别图片中人脸的位置、大小和方向，然后计算最佳裁剪区域，确保在所选宽高比内所有检测到的人脸都可见且构图良好。' },
  { q: '如果照片里没有人脸怎么办？', a: '智能裁剪还会分析图片构图和视觉显著性，找到照片中最有趣的区域。对于产品图、美食摄影、风景照等都很有效——裁剪后主体始终保持居中。' },
  { q: '可以一次将多张照片智能裁剪为相同尺寸吗？', a: '可以。上传所有照片，选择目标尺寸，AI会根据每张照片的内容分别进行智能裁剪。非常适合制作统一的图片集，如团队照片或产品目录图。' },
  { q: '有哪些可选的宽高比和尺寸？', a: '预设包括1:1（Instagram方图）、4:5（Instagram竖图）、16:9（YouTube缩略图）、9:16（Stories/Reels）、3:2（标准照片）和2:3（Pinterest）。也可以自定义输入任意像素宽高。' },
  { q: '智能裁剪免费吗？', a: '是的，完全免费。无限使用AI人脸检测裁剪照片，无水印，无需注册账号。AI模型在浏览器中本地运行，没有服务器费用或使用限制。' },
]

export default function SmartCropPage() {
  return (
    <ToolLandingPage
      toolKey="crop"
      toolPath="/smart-crop"
      titleEn="Smart Crop — AI Face Detection Auto Crop Tool Online Free"
      titleZh="智能裁剪 — AI人脸检测自动裁剪工具 免费在线"
      descEn="Smart crop your photos with AI face detection. Automatically find the focal point and crop to any aspect ratio — perfect for social media, headshots, and batch processing. Free, private, runs in your browser."
      descZh="使用AI人脸检测智能裁剪照片。自动找到焦点并裁剪为任意宽高比——适合社交媒体、头像和批量处理。免费、私密、在浏览器中运行。"
      features={features}
      stepsEn={stepsEn}
      stepsZh={stepsZh}
      faqEn={faqEn}
      faqZh={faqZh}
      geoSnippetEn="TapCrop Smart Crop is a free AI-powered auto crop tool that uses face detection to find the best focal point in your photos. Automatically crop to any aspect ratio while keeping faces and key subjects centered. Supports batch processing for consistent results across multiple images. Social media presets for Instagram, YouTube, Facebook, and more. All AI processing runs in your browser — your photos never leave your device."
      geoSnippetZh="TapCrop 秒裁智能裁剪是一款免费的AI自动裁剪工具，利用人脸检测找到照片中的最佳焦点。自动裁剪为任意宽高比，同时保持人脸和关键主体居中。支持批量处理，多张图片效果统一。预设Instagram、YouTube、Facebook等社交媒体尺寸。所有AI处理在浏览器中完成，照片不会离开你的设备。"
      sectionsEn={[
        { title: 'Why Smart Crop Beats Manual Cropping', content: 'Manual cropping works fine for a single photo, but it breaks down when you have dozens or hundreds of images that all need the same treatment. Smart crop uses AI face detection to automatically determine where the important content is in each image, then positions the crop frame optimally. This saves hours of repetitive work and produces more consistent results than manual cropping, especially for team headshots, event galleries, or product catalogs.' },
        { title: 'How Face Detection Works for Cropping', content: 'The AI model scans your image for facial features — eyes, nose, mouth — and returns bounding boxes for each detected face. The smart crop algorithm then calculates a crop region that includes all faces with appropriate padding, weighted by face size so that the primary subject gets priority. For group photos, it ensures no one is cut off at the edges. For single portraits, it centers the face with natural headroom.' },
        { title: 'Best Practices for Social Media Images', content: 'Each social platform favors different aspect ratios. Instagram feed posts work best at 1:1 or 4:5. YouTube thumbnails need 16:9. Stories and Reels require 9:16 vertical format. Facebook covers are extra wide at roughly 2.7:1. Rather than manually cropping the same photo five different ways, use smart crop to generate all versions at once — the AI adjusts the focal point for each ratio so your subject always looks good.' },
      ]}
      sectionsZh={[
        { title: '智能裁剪比手动裁剪好在哪里', content: '手动裁剪单张照片没问题，但当你有几十甚至上百张图片都需要同样处理时就很费时了。智能裁剪利用AI人脸检测自动判断每张图片中重要内容的位置，然后最优化地放置裁剪框。比手动裁剪节省大量重复劳动，效果也更一致，特别适合团队头像、活动相册或产品目录。' },
        { title: '人脸检测裁剪的工作原理', content: 'AI模型扫描图片中的面部特征——眼睛、鼻子、嘴巴——返回每张检测到的人脸的边界框。智能裁剪算法据此计算一个包含所有人脸并保留适当边距的裁剪区域，根据人脸大小加权，优先保证主要人物。合影时确保没人被裁掉，单人肖像则将面部居中并留出自然的头顶空间。' },
        { title: '社交媒体图片的最佳做法', content: '每个社交平台偏好不同的宽高比。Instagram动态帖适合1:1或4:5，YouTube缩略图需要16:9，Story和Reels需要9:16竖版，Facebook封面是约2.7:1的超宽比例。与其手动将同一张照片裁剪五种不同方式，不如用智能裁剪一次生成所有版本——AI会为每种比例调整焦点，确保主体始终好看。' },
      ]}
    />
  )
}
