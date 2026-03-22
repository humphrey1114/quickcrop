import GuidePage from './GuidePage'

export default function YouTubeGuide() {
  return (
    <GuidePage
      title="How to Make YouTube Thumbnails"
      description="Learn the ideal YouTube thumbnail size, design best practices, and how to create eye-catching thumbnails that boost your click-through rate."
    >
      <p>
        Your YouTube thumbnail is the single most important factor in whether someone clicks on your video. According to YouTube's own creator resources, 90% of the best-performing videos on the platform use custom thumbnails. A well-designed thumbnail can dramatically increase your click-through rate (CTR), which directly impacts how YouTube's algorithm recommends your content.
      </p>

      <h2>YouTube Thumbnail Specifications</h2>

      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Requirement</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Recommended Size</td>
            <td>1280 x 720 pixels</td>
          </tr>
          <tr>
            <td>Minimum Width</td>
            <td>640 pixels</td>
          </tr>
          <tr>
            <td>Aspect Ratio</td>
            <td>16:9</td>
          </tr>
          <tr>
            <td>Max File Size</td>
            <td>2 MB</td>
          </tr>
          <tr>
            <td>Accepted Formats</td>
            <td>JPG, GIF, PNG</td>
          </tr>
        </tbody>
      </table>

      <p>
        Always design at the full 1280 x 720 resolution even though thumbnails display at much smaller sizes in search results and suggested videos. The extra resolution ensures your thumbnail looks sharp on large screens, TVs, and high-DPI displays.
      </p>

      <h2>Anatomy of a High-Performing Thumbnail</h2>
      <p>
        Effective YouTube thumbnails share several common characteristics. Understanding these elements will help you design thumbnails that consistently attract clicks.
      </p>

      <h3>Faces and Emotion</h3>
      <p>
        Thumbnails featuring human faces with expressive emotions perform significantly better than those without. Our brains are wired to notice and respond to facial expressions, especially surprise, excitement, or curiosity. If your video features a presenter, capture a frame that shows a clear, exaggerated emotion relevant to the content.
      </p>

      <h3>Bold, Readable Text</h3>
      <p>
        Adding a short text overlay (3 to 5 words maximum) that complements your video title can boost CTR. Use thick, sans-serif fonts with strong outlines or drop shadows so the text remains readable at small sizes. The text should add context that the title alone does not convey — do not simply repeat the video title on the thumbnail.
      </p>

      <h3>High Contrast and Bright Colors</h3>
      <p>
        YouTube's interface uses a white or dark background, so thumbnails with vibrant, saturated colors stand out in both light and dark modes. Avoid dark, low-contrast images that blend into the page. Yellow, red, and blue tend to grab attention the most, but the best choice depends on your brand and niche.
      </p>

      <h3>Clean Composition</h3>
      <p>
        Keep the layout simple and uncluttered. A thumbnail is displayed at roughly 320 x 180 pixels in most contexts, so fine details will be invisible. One subject, a few words of text, and a clear background is the formula that works at thumbnail scale.
      </p>

      <h2>YouTube Thumbnail Design Tips</h2>
      <ul>
        <li><strong>Follow the rule of thirds.</strong> Place your subject off-center for a more dynamic, visually interesting composition.</li>
        <li><strong>Maintain brand consistency.</strong> Use the same font, color palette, and layout style across your thumbnails so viewers recognize your content instantly in their feed.</li>
        <li><strong>Avoid misleading thumbnails.</strong> Clickbait thumbnails may get initial clicks but lead to high bounce rates, which hurt your video's performance in the algorithm long term.</li>
        <li><strong>Test at small sizes.</strong> Before uploading, shrink your thumbnail to 160 x 90 pixels and check if it is still readable and recognizable. This is the actual size viewers will see in many placements.</li>
        <li><strong>Use the bottom-right corner wisely.</strong> YouTube overlays the video duration in the bottom-right corner of every thumbnail. Do not place important text or visuals in that area.</li>
        <li><strong>A/B test your thumbnails.</strong> YouTube now offers thumbnail testing for many creators. Take advantage of this feature to learn what works for your specific audience.</li>
      </ul>

      <h2>Other YouTube Image Sizes</h2>
      <table>
        <thead>
          <tr>
            <th>Element</th>
            <th>Dimensions (px)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Channel Banner (Desktop)</td>
            <td>2560 x 1440</td>
          </tr>
          <tr>
            <td>Channel Profile Picture</td>
            <td>800 x 800</td>
          </tr>
          <tr>
            <td>Video Watermark</td>
            <td>150 x 150</td>
          </tr>
        </tbody>
      </table>

      <h2>How to Make YouTube Thumbnails with TapCrop</h2>
      <p>
        TapCrop streamlines the thumbnail creation workflow. Upload your screenshot or source image, set the crop ratio to 16:9, and adjust the crop area to frame your subject perfectly. Need to prepare thumbnails for a batch of videos? Upload all your source images and crop them in one session. TapCrop processes everything locally in your browser, keeping your unreleased content private and secure.
      </p>
    </GuidePage>
  )
}
