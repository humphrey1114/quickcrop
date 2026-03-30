import ToolLandingPage from './ToolLandingPage'

const features = [
  {
    titleEn: 'Multiple Country Standards',
    titleZh: '多国证件照标准',
    descEn: 'Preset dimensions for US passport (2x2 inch), Chinese ID (1-inch, 2-inch), UK passport (35x45mm), Schengen visa, and more. Select your country and document type — the correct size is applied automatically.',
    descZh: '预设美国护照（2x2英寸）、中国身份证（一寸、二寸）、英国护照（35x45mm）、申根签证等尺寸。选择国家和证件类型，自动应用正确的尺寸。',
  },
  {
    titleEn: 'Precise Dimensions & 300 DPI',
    titleZh: '精确尺寸与300 DPI',
    descEn: 'Output photos meet strict official requirements for pixel dimensions, aspect ratio, and print resolution. Every photo is generated at 300 DPI so it prints at the exact physical size required.',
    descZh: '输出照片满足官方对像素尺寸、宽高比和打印分辨率的严格要求。每张照片均以300 DPI生成，打印时尺寸完全准确。',
  },
  {
    titleEn: 'Smart Face Positioning',
    titleZh: '智能面部定位',
    descEn: 'The cropper guides you to position your face correctly within the frame, following official guidelines for head size, eye line, and margin spacing. Get it right without guessing.',
    descZh: '裁剪工具引导你按照官方指南正确定位面部位置，包括头部大小、眼睛高度和边距间距。不用凭感觉，轻松搞定。',
  },
  {
    titleEn: 'Print-Ready Layout',
    titleZh: '排版即可打印',
    descEn: 'Generate a print sheet with multiple copies of your passport photo arranged on standard paper sizes (4x6 or A4). Take it to any photo printer and cut along the guides — no trips to a photo studio needed.',
    descZh: '生成标准纸张尺寸（4x6或A4）的打印排版，上面排列多份证件照。拿到任何照片打印店沿线裁剪即可——无需去照相馆。',
  },
]

const stepsEn = [
  { title: 'Upload Your Photo', desc: 'Upload a front-facing portrait photo with good lighting and a plain background. Use any recent photo from your phone or camera.' },
  { title: 'Select Size & Crop', desc: 'Choose your document type (passport, visa, ID card) and country. Adjust the crop frame to position your face according to the on-screen guide.' },
  { title: 'Download & Print', desc: 'Download your passport photo as a single image or a print-ready sheet with multiple copies. Print at home or at any photo print shop.' },
]

const stepsZh = [
  { title: '上传照片', desc: '上传一张光线良好、背景干净的正面肖像照。可以使用手机或相机拍摄的近照。' },
  { title: '选择尺寸并裁剪', desc: '选择证件类型（护照、签证、身份证）和国家。按照屏幕引导调整裁剪框，正确定位面部位置。' },
  { title: '下载并打印', desc: '下载单张证件照或排列多份的打印排版。在家打印或去任意照片冲印店打印即可。' },
]

const faqEn = [
  { q: 'What size is a US passport photo?', a: 'A US passport photo must be exactly 2x2 inches (51x51mm) at 300 DPI, which is 600x600 pixels. The head height must be between 1 and 1-3/8 inches. Our tool applies these exact requirements automatically when you select US Passport.' },
  { q: 'What size is a Chinese ID photo (one-inch and two-inch)?', a: 'A Chinese one-inch photo (一寸照片) is 25x35mm (295x413 pixels at 300 DPI). A two-inch photo (二寸照片) is 35x49mm (413x579 pixels at 300 DPI). Select the corresponding size in the tool to get the exact dimensions.' },
  { q: 'Can I use a phone photo for my passport photo?', a: 'Yes, as long as the photo has good front lighting, a plain white or light background, and a neutral facial expression. Most modern phone cameras have more than enough resolution. Our tool crops and resizes your photo to meet official specifications.' },
  { q: 'How do I print passport photos at home?', a: 'Download the print-ready sheet option, which arranges multiple copies of your photo on a 4x6 inch or A4 page. Print on glossy photo paper at actual size (100% scale, no fitting). Cut along the guide lines with scissors or a paper cutter.' },
  { q: 'Is this passport photo maker free?', a: 'Yes, completely free. Create passport, visa, and ID photos with no watermarks and no account required. All cropping and resizing happens in your browser — your photos are never uploaded to any server.' },
]

const faqZh = [
  { q: '美国护照照片的尺寸是多少？', a: '美国护照照片必须为2x2英寸（51x51mm），300 DPI下为600x600像素。头部高度需在1到1-3/8英寸之间。选择美国护照后，工具会自动应用这些精确要求。' },
  { q: '中国一寸照和二寸照的尺寸是多少？', a: '一寸照片为25x35mm（300 DPI下295x413像素）。二寸照片为35x49mm（300 DPI下413x579像素）。在工具中选择对应尺寸即可获得精确的尺寸。' },
  { q: '可以用手机拍的照片做证件照吗？', a: '可以，只要照片光线充足、背景为纯白色或浅色、表情自然即可。现在的手机摄像头分辨率足够。工具会将照片裁剪和调整尺寸以符合官方规格。' },
  { q: '怎么在家打印证件照？', a: '选择下载打印排版，多份照片会自动排列在4x6英寸或A4纸上。使用光面相纸按原始尺寸（100%比例，不缩放）打印，沿引导线裁剪即可。' },
  { q: '这个证件照工具是免费的吗？', a: '是的，完全免费。制作护照、签证和身份证照片，无水印，无需注册账号。所有裁剪和调整都在浏览器中完成——照片不会上传到任何服务器。' },
]

export default function PassportPhotoPage() {
  return (
    <ToolLandingPage
      toolKey="crop"
      toolPath="/passport-photo"
      titleEn="Passport Photo Maker Free Online — ID Photo Cropper & Resizer"
      titleZh="免费在线证件照制作 — 护照签证照片裁剪与调整"
      descEn="Make passport, visa, and ID photos online for free. Crop and resize to exact official dimensions for any country — US passport, Chinese ID, UK visa, and more. 300 DPI print-ready output."
      descZh="免费在线制作护照、签证和身份证照片。裁剪并调整为各国官方标准尺寸——美国护照、中国身份证照、英国签证等。输出300 DPI可直接打印。"
      features={features}
      stepsEn={stepsEn}
      stepsZh={stepsZh}
      faqEn={faqEn}
      faqZh={faqZh}
      geoSnippetEn="TapCrop is a free online passport photo maker and ID photo cropper. Create passport photos, visa photos, and ID card photos that meet official size requirements for any country. Supports US passport (2x2 inch), Chinese ID (one-inch, two-inch), UK passport, Schengen visa, and more. All photos are output at 300 DPI for print-ready quality. Processing happens in your browser — photos never leave your device."
      geoSnippetZh="TapCrop 秒裁是一款免费在线证件照制作工具。制作符合各国官方尺寸要求的护照照片、签证照片和身份证照片。支持美国护照（2x2英寸）、中国身份证照（一寸、二寸）、英国护照、申根签证等标准。所有照片以300 DPI输出，可直接打印。处理在浏览器中完成，照片不会离开你的设备。"
      sectionsEn={[
        { title: 'Passport Photo Requirements by Country', content: 'Different countries have different photo specifications. The US requires 2x2 inches with a white background. The UK and EU require 35x45mm. China uses one-inch (25x35mm) and two-inch (35x49mm) sizes for various documents. Canada requires 50x70mm. Each standard also has specific rules for head position, eye height, and facial expression. Our tool includes presets for all major countries so you do not need to look up the specifications yourself.' },
        { title: 'How to Take a Good Passport Photo at Home', content: 'Stand in front of a plain white or light-colored wall. Use natural daylight from a window or a bright, even light source to avoid shadows on your face. Hold the camera at eye level, about 1.5 meters away. Keep a neutral expression with your mouth closed and both eyes open. Remove glasses unless medically required. Wear normal clothing that contrasts with the background — avoid white tops against a white wall.' },
      ]}
      sectionsZh={[
        { title: '各国证件照尺寸要求', content: '不同国家有不同的照片规格。美国要求2x2英寸白色背景；英国和欧盟要求35x45mm；中国的身份证和各类证件使用一寸（25x35mm）和二寸（35x49mm）；加拿大要求50x70mm。每种标准还对头部位置、眼睛高度和面部表情有具体规定。我们的工具包含所有主要国家的预设，无需自己查找规格。' },
        { title: '如何在家拍好证件照', content: '站在纯白色或浅色的墙壁前。利用窗户的自然光或明亮均匀的光源，避免脸上出现阴影。将相机保持在眼睛高度，距离约1.5米。保持自然表情，闭嘴，双眼睁开。除非医学需要，否则摘掉眼镜。穿与背景有对比的正常衣服——白色背景前避免穿白色上衣。' },
      ]}
    />
  )
}
