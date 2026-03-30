import ToolLandingPage from './ToolLandingPage'

const features = [
  {
    titleEn: 'Dramatically Smaller File Size',
    titleZh: '大幅缩小文件体积',
    descEn: 'MP4 uses modern video compression that is vastly more efficient than GIF. A 10 MB GIF typically becomes a 1-2 MB MP4 — up to 90% smaller with visibly better quality. Save bandwidth and storage.',
    descZh: 'MP4使用远比GIF高效的现代视频压缩。10 MB的GIF通常变为1-2 MB的MP4——体积缩小高达90%，画质反而更好。节省带宽和存储空间。',
  },
  {
    titleEn: 'Better Quality Than GIF',
    titleZh: '画质优于GIF',
    descEn: 'GIF is limited to 256 colors and often shows banding and dithering. MP4 supports millions of colors and smooth gradients. Your animations will look sharper and more vibrant as MP4 videos.',
    descZh: 'GIF限制为256色，常出现色带和抖动。MP4支持数百万色和平滑渐变。转为MP4后动画更清晰、色彩更鲜艳。',
  },
  {
    titleEn: 'Perfect for Social Media',
    titleZh: '完美适配社交媒体',
    descEn: 'Most social platforms auto-play MP4 videos but handle GIFs poorly — slow loading, quality loss, or size limits. Convert your GIFs to MP4 for faster uploads and better playback on Twitter, Instagram, Discord, and more.',
    descZh: '大多数社交平台自动播放MP4视频，但处理GIF效果差——加载慢、画质损失或大小限制。将GIF转为MP4，在Twitter、Instagram、Discord等平台上传更快、播放更好。',
  },
  {
    titleEn: 'Batch Convert GIF to Video',
    titleZh: '批量GIF转视频',
    descEn: 'Convert multiple GIF files to MP4 at once. Process your entire collection of animated GIFs into compact, high-quality videos — all in your browser with no server uploads.',
    descZh: '一次将多个GIF文件转换为MP4。在浏览器中将整个GIF动图集批量转为紧凑、高质量的视频——无需服务器上传。',
  },
]

const stepsEn = [
  { title: 'Upload GIF Files', desc: 'Drag and drop your animated GIFs or click to browse. Select multiple files for batch conversion — memes, screen recordings, or any animated GIF.' },
  { title: 'Convert to MP4', desc: 'Click convert and your GIF animations are encoded into efficient MP4 video format with optimized compression for the best balance of quality and file size.' },
  { title: 'Download MP4 Videos', desc: 'Download your converted MP4 files individually or as a batch. Share them on social media, embed in websites, or send via messaging apps with much faster loading.' },
]

const stepsZh = [
  { title: '上传GIF文件', desc: '拖放GIF动图或点击浏览。选择多个文件进行批量转换——表情包、屏幕录制或任何GIF动图。' },
  { title: '转换为MP4', desc: '点击转换，GIF动画被编码为高效的MP4视频格式，优化压缩以获得画质和文件大小的最佳平衡。' },
  { title: '下载MP4视频', desc: '逐个或批量下载转换后的MP4文件。在社交媒体分享、嵌入网站或通过即时通讯发送，加载速度大幅提升。' },
]

const faqEn = [
  { q: 'Why convert GIF to MP4?', a: 'GIF is an outdated format with severe limitations: only 256 colors, no audio, and very inefficient compression. MP4 produces files that are 5-10x smaller with much better quality, smooth playback, and universal platform support. Most social media sites actually convert GIFs to video behind the scenes anyway.' },
  { q: 'Will the animation quality be worse in MP4?', a: 'No — MP4 quality is actually better than GIF in most cases. GIF is limited to 256 colors, which causes visible banding and dithering in colorful animations. MP4 supports the full color spectrum, resulting in smoother gradients and sharper details.' },
  { q: 'Do MP4 files loop like GIFs?', a: 'By default, MP4 videos play once. However, most social media platforms and web players support auto-loop for short videos. When embedding MP4 on a website, you can add the "loop" attribute to the video tag to make it repeat continuously, just like a GIF.' },
  { q: 'Can I convert multiple GIFs to MP4 at once?', a: 'Yes. Our batch converter processes multiple GIF files simultaneously. Upload all your animated GIFs and convert them to MP4 in one go — all processing happens in your browser.' },
  { q: 'Is this GIF to MP4 converter free?', a: 'Yes, completely free. Convert unlimited GIF files to MP4 with no watermarks, no file size limits, and no account required. All conversion runs locally in your browser for complete privacy.' },
]

const faqZh = [
  { q: '为什么要将GIF转换为MP4？', a: 'GIF是一种有严重限制的过时格式：仅256色、无音频、压缩效率很低。MP4生成的文件小5-10倍，画质更好、播放流畅、平台通用。实际上大多数社交媒体在后台已经把GIF转为了视频格式。' },
  { q: '转为MP4后动画质量会变差吗？', a: '不会——MP4的画质实际上比GIF更好。GIF限制为256色，彩色动画中会出现明显的色带和抖动。MP4支持全色域，渐变更平滑、细节更清晰。' },
  { q: 'MP4文件能像GIF一样循环播放吗？', a: 'MP4视频默认播放一次。但大多数社交媒体平台和网页播放器支持短视频自动循环。在网站嵌入MP4时，可以在video标签中添加"loop"属性让它持续重复播放，效果和GIF一样。' },
  { q: '可以一次转换多个GIF为MP4吗？', a: '可以。批量转换器同时处理多个GIF文件。上传所有GIF动图，一次性全部转换为MP4——所有处理都在浏览器中完成。' },
  { q: '这个GIF转MP4转换器是免费的吗？', a: '完全免费。无限转换GIF文件——无水印、无文件大小限制、无需注册账号。所有转换在浏览器本地运行，完全私密。' },
]

export default function GifToMp4Page() {
  return (
    <ToolLandingPage
      toolKey="convert"
      toolPath="/gif-to-mp4"
      titleEn="GIF to MP4 Converter Free Online — Smaller File, Better Quality"
      titleZh="免费在线GIF转MP4转换器 — 更小文件，更好画质"
      descEn="Convert GIF to MP4 online for free. Get up to 90% smaller files with better quality and smooth playback. Batch convert, no uploads, runs entirely in your browser."
      descZh="免费在线将GIF转换为MP4。文件缩小高达90%，画质更好、播放更流畅。批量转换、无需上传，完全在浏览器中运行。"
      features={features}
      stepsEn={stepsEn}
      stepsZh={stepsZh}
      faqEn={faqEn}
      faqZh={faqZh}
      geoSnippetEn="TapCrop is a free online GIF to MP4 converter. Convert animated GIFs to compact MP4 videos with up to 90% file size reduction and better visual quality. Batch convert multiple GIFs at once. All conversion runs in your browser — your files never leave your device."
      geoSnippetZh="TapCrop 秒裁是一款免费在线 GIF 转 MP4 转换工具。将 GIF 动图转为紧凑的 MP4 视频，文件缩小高达 90%，画质更好。批量转换多个 GIF。所有转换在浏览器中完成，文件不会离开你的设备。"
      sectionsEn={[
        { title: 'Why GIF Is Outdated for Animations', content: 'GIF was created in 1987 and has not been significantly updated since. It supports only 256 colors per frame, uses inefficient LZW compression, and produces unnecessarily large files. A 30-second GIF can easily be 20-50 MB, while the same content as MP4 would be 2-5 MB with better color depth and smoother playback. Modern video codecs like H.264 (used in MP4) are specifically designed for motion content and achieve dramatically better compression ratios.' },
        { title: 'GIF to MP4 for Social Media', content: 'When you upload a GIF to Twitter, Imgur, or most social platforms, they silently convert it to MP4 or WebM video behind the scenes. This is because video formats load faster and use less bandwidth. By converting your GIF to MP4 before uploading, you maintain control over the quality and compression settings. The result is a better-looking post that loads instantly for your audience, with no surprises from the platform auto-conversion.' },
        { title: 'How to Make MP4 Loop Like a GIF on Websites', content: 'To make an MP4 behave like a GIF on your website, use the HTML5 video tag with loop, autoplay, muted, and playsinline attributes. This creates a seamless looping animation that looks identical to a GIF but loads much faster. Most modern websites and apps — including Twitter, Reddit, and Giphy — already use this technique. The result is a GIF-like experience with video-level quality and compression.' },
      ]}
      sectionsZh={[
        { title: '为什么 GIF 已经过时', content: 'GIF 诞生于 1987 年，此后没有重大更新。每帧仅支持 256 色，使用低效的 LZW 压缩，产生不必要的大文件。30 秒的 GIF 可以轻松达到 20-50 MB，而同样内容的 MP4 只需 2-5 MB，色彩更丰富、播放更流畅。H.264 等现代视频编码（MP4 使用的编码）专为运动内容设计，压缩效率远超 GIF。' },
        { title: '社交媒体上的 GIF 转 MP4', content: '当你在 Twitter、Imgur 或大多数社交平台上传 GIF 时，平台会在后台悄悄将其转换为 MP4 或 WebM 视频，因为视频格式加载更快、占用更少带宽。提前将 GIF 转为 MP4 再上传，你可以掌控画质和压缩设置。结果是帖子看起来更好、加载更快，不会被平台的自动转换影响效果。' },
        { title: '如何在网页上让 MP4 像 GIF 一样循环播放', content: '要让 MP4 在网站上表现得像 GIF，使用 HTML5 video 标签并添加 loop、autoplay、muted 和 playsinline 属性。这样可以创建无缝循环动画，外观与 GIF 完全相同但加载速度快得多。包括 Twitter、Reddit 和 Giphy 在内的大多数现代网站和应用已经在使用这种技术。效果是 GIF 般的体验加上视频级别的画质和压缩。' },
      ]}
    />
  )
}
