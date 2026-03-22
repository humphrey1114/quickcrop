import GuidePage from './GuidePage'

export default function TwitterGuide() {
  return (
    <GuidePage
      title="How to Resize Images for Twitter / X"
      description="Complete guide to Twitter (X) image sizes for headers, profile pictures, posts, and cards. Learn the best dimensions to make your images look perfect on Twitter."
    >
      <p>
        Twitter (now X) displays images differently depending on where they appear — your profile header, timeline posts, and link preview cards each have distinct size requirements. Using incorrectly sized images leads to awkward cropping, blurry thumbnails, and a less professional appearance. This guide covers every image dimension you need for a polished Twitter presence.
      </p>

      <h2>Twitter / X Image Size Reference</h2>

      <table>
        <thead>
          <tr>
            <th>Placement</th>
            <th>Dimensions (px)</th>
            <th>Aspect Ratio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Profile Picture</td>
            <td>400 x 400</td>
            <td>1:1</td>
          </tr>
          <tr>
            <td>Header / Banner</td>
            <td>1500 x 500</td>
            <td>3:1</td>
          </tr>
          <tr>
            <td>Single Image Post</td>
            <td>1200 x 675</td>
            <td>16:9</td>
          </tr>
          <tr>
            <td>Two-Image Post</td>
            <td>700 x 800 each</td>
            <td>7:8</td>
          </tr>
          <tr>
            <td>Link Preview Card</td>
            <td>1200 x 628</td>
            <td>1.91:1</td>
          </tr>
          <tr>
            <td>In-Stream Photo</td>
            <td>1600 x 900 (max)</td>
            <td>16:9</td>
          </tr>
        </tbody>
      </table>

      <h2>Profile Picture (400 x 400)</h2>
      <p>
        Your Twitter profile picture appears as a circle throughout the platform — next to your tweets, in search results, and on your profile page. Upload a square image of at least 400 x 400 pixels with the subject centered. Logos should have sufficient padding around the edges so nothing gets clipped by the circular mask.
      </p>
      <p>
        The profile photo displays at various sizes depending on context (smaller in the timeline, larger on your profile page), so make sure it is recognizable even at thumbnail scale.
      </p>

      <h2>Header / Banner Image (1500 x 500)</h2>
      <p>
        The header banner spans the top of your profile page and is one of the first things visitors see. At 1500 x 500 pixels, this is a wide, thin format that can be tricky to design for. Your profile picture overlaps the bottom-left portion of the header on desktop, so avoid placing important content in that area.
      </p>
      <p>
        The header also displays differently on mobile versus desktop. On mobile devices, the image is cropped closer to the center. Keep essential information (text, logos, key visuals) in the center 60% of the image to ensure it looks good across all screen sizes.
      </p>

      <h2>Single Image Posts (1200 x 675)</h2>
      <p>
        When you attach a single image to a tweet, Twitter displays it in the timeline at a 16:9 aspect ratio. Images with different proportions will be auto-cropped, and the cropping algorithm may not always center on the most important part of your photo. For predictable results, pre-crop your images to 1200 x 675 pixels before uploading.
      </p>
      <p>
        Twitter supports JPEG, PNG, and GIF formats for image posts. The maximum file size is 5 MB for static images and 15 MB for GIFs. For best quality, stay under these limits while keeping the resolution at 1200px wide or larger.
      </p>

      <h2>Multi-Image Posts</h2>
      <p>
        When you attach multiple images to a tweet, Twitter arranges them in a grid layout. Two images are shown side by side at roughly 7:8 ratio each. Three images show one large image on the left and two stacked on the right. Four images form a 2x2 grid. To avoid unexpected crops in these layouts, pre-crop each image to match the expected ratio for its position.
      </p>

      <h2>Link Preview Cards (1200 x 628)</h2>
      <p>
        When you share a URL in a tweet, Twitter generates a card preview with a thumbnail image pulled from the page's Open Graph meta tags. The recommended image size for these cards is 1200 x 628 pixels (approximately 1.91:1 ratio). If you control the website being shared, set the og:image tag to an image with these exact dimensions for the cleanest preview appearance.
      </p>

      <h2>Best Practices for Twitter Images</h2>
      <ul>
        <li><strong>Test on mobile first.</strong> Most Twitter users browse on their phones. Check how your images appear on a small screen before posting.</li>
        <li><strong>Use high contrast.</strong> Twitter's feed moves fast. Bold, high-contrast images stop the scroll more effectively than subtle, low-contrast ones.</li>
        <li><strong>Add alt text.</strong> Twitter supports image alt text for accessibility. Describe the content of your image so screen reader users can engage with your posts.</li>
        <li><strong>Keep text minimal.</strong> If your image contains text, use large, legible fonts. Small text becomes unreadable in the compressed timeline view.</li>
        <li><strong>Optimize file size.</strong> Large files take longer to load on slow connections. Compress your images to under 1 MB when possible without sacrificing visible quality.</li>
      </ul>

      <h2>How to Resize Images for Twitter with TapCrop</h2>
      <p>
        With TapCrop, you can batch resize images for Twitter in seconds. Upload multiple photos, set the aspect ratio to 16:9 for timeline posts or 3:1 for header banners, then crop and download them all at once. Whether you are preparing a week of social content or updating your brand assets, TapCrop handles the work directly in your browser with no account required.
      </p>
    </GuidePage>
  )
}
