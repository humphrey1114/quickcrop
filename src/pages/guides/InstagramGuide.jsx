import GuidePage from './GuidePage'

export default function InstagramGuide() {
  return (
    <GuidePage
      title="How to Crop Images for Instagram"
      description="Learn the exact image sizes for Instagram posts, stories, reels, and profile pictures. Crop and resize your photos to fit Instagram perfectly with TapCrop."
    >
      <p>
        Getting your images sized correctly for Instagram is essential for making your content look polished and professional. Poorly cropped photos get cut off in the feed, lose important details, or appear blurry when stretched. This guide covers every Instagram image dimension you need to know, along with practical tips to make your content stand out.
      </p>

      <h2>Instagram Image Size Guide</h2>
      <p>
        Instagram supports several different image formats, each with its own recommended dimensions. Using the correct size ensures your photos display exactly as intended, without awkward cropping or compression artifacts.
      </p>

      <table>
        <thead>
          <tr>
            <th>Format</th>
            <th>Dimensions (px)</th>
            <th>Aspect Ratio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Square Post</td>
            <td>1080 x 1080</td>
            <td>1:1</td>
          </tr>
          <tr>
            <td>Portrait Post</td>
            <td>1080 x 1350</td>
            <td>4:5</td>
          </tr>
          <tr>
            <td>Landscape Post</td>
            <td>1080 x 566</td>
            <td>1.91:1</td>
          </tr>
          <tr>
            <td>Story / Reels</td>
            <td>1080 x 1920</td>
            <td>9:16</td>
          </tr>
          <tr>
            <td>Profile Picture</td>
            <td>320 x 320</td>
            <td>1:1</td>
          </tr>
        </tbody>
      </table>

      <h2>Square Posts (1080 x 1080)</h2>
      <p>
        The classic Instagram format. Square posts are clean, symmetrical, and work well for product shots, quotes, and graphic designs. They display consistently across both grid view and the feed, making them a safe default choice for most content types.
      </p>
      <p>
        When cropping for square, pay attention to your subject placement. Center-weighted compositions work best. If your original photo is landscape or portrait, consider which part of the image carries the most visual weight and crop around that area.
      </p>

      <h2>Portrait Posts (1080 x 1350)</h2>
      <p>
        Portrait-oriented posts at 4:5 ratio take up the most vertical screen space in the Instagram feed, which means more visibility and engagement. This format is ideal for full-body fashion shots, tall food photography, and any content where you want maximum presence in the scroll.
      </p>
      <p>
        Many social media marketers prefer 4:5 portrait posts because they occupy roughly 20% more screen area than square posts, giving your content a natural advantage in capturing attention.
      </p>

      <h2>Instagram Stories and Reels (1080 x 1920)</h2>
      <p>
        Stories and Reels use a full-screen 9:16 vertical format. This is the same aspect ratio as most modern smartphone screens, so photos taken in portrait mode on your phone will fit naturally. For landscape source images, you will need to either crop significantly or add background padding.
      </p>
      <p>
        Keep important content away from the top and bottom 250 pixels of your story images. Instagram overlays your profile name at the top and interaction buttons at the bottom, which can obscure text or key visual elements placed too close to the edges.
      </p>

      <h2>Profile Picture (320 x 320)</h2>
      <p>
        Instagram profile photos are displayed as a circle, so your image will be automatically cropped into a round shape. Upload a square image at least 320 x 320 pixels and make sure the important content (usually a face or logo) is centered. Avoid placing text or details near the corners since they will be clipped.
      </p>

      <h2>Tips for Better Instagram Images</h2>
      <ul>
        <li><strong>Always upload at 1080px width minimum.</strong> Instagram compresses images below this resolution, resulting in noticeable quality loss.</li>
        <li><strong>Use JPEG or PNG format.</strong> JPEG is best for photographs, while PNG preserves sharp text and graphics.</li>
        <li><strong>Batch crop for carousel posts.</strong> If you are creating a multi-image carousel, all slides should share the same aspect ratio for a consistent viewer experience.</li>
        <li><strong>Preview your grid layout.</strong> Before posting, consider how the image thumbnail will appear in your 3-column profile grid alongside your existing content.</li>
        <li><strong>Avoid heavy text overlays.</strong> Instagram may reduce the reach of images that contain too much text according to their ad guidelines.</li>
      </ul>

      <h2>How to Crop Images for Instagram with TapCrop</h2>
      <p>
        TapCrop makes it easy to prepare images for Instagram. Simply upload your photos, select a preset aspect ratio like 1:1, 4:5, or 9:16, and crop all your images at once. This is especially useful when preparing carousel posts or batch-processing content for the week ahead. Everything runs in your browser, so your images never leave your device.
      </p>
    </GuidePage>
  )
}
