# Phase 3: Distribution & Backlink Checklist

## Tool Directories (Submit Manually)

### High Priority
- [ ] **Product Hunt** — https://www.producthunt.com/posts/new
  - Title: "TapCrop — Free batch image cropper that runs in your browser"
  - Tagline: "Crop, resize, compress hundreds of photos at once. 100% private."
  - Topics: Productivity, Design Tools, Photography
  - Best to launch on Tuesday-Thursday, 12:01 AM PST

- [ ] **AlternativeTo** — https://alternativeto.net/manage-app/
  - List as alternative to: Canva, Photoshop, Bulk Resize Photos, iLoveIMG
  - Category: Image Editing

- [ ] **Toolify.ai** — https://www.toolify.ai/submit
  - Category: Image Processing

- [ ] **There's An AI For That** — https://theresanaiforthat.com/submit/
  - Note: TapCrop isn't AI-powered, but the smart focal point detection qualifies

- [ ] **Uneed** — https://www.uneed.best/submit
- [ ] **SaaS Hub** — https://www.saashub.com/submit
- [ ] **BetaList** — https://betalist.com/submit

### Medium Priority
- [ ] **Free Online Tools** directories — Google "submit free online tool" for niche directories
- [ ] **GitHub Awesome Lists** — Find and PR into relevant awesome-image-tools lists

## Social Media Posts

### Reddit
Post in these subreddits (follow each sub's self-promotion rules):
- [ ] r/webdev — "I built a free batch image cropper that runs 100% in your browser"
- [ ] r/SideProject — "Show r/SideProject: TapCrop — batch crop hundreds of photos at once"
- [ ] r/InternetIsBeautiful — "A free tool to batch crop and resize images without uploading them"
- [ ] r/photography — Share as a useful tool, not self-promotion
- [ ] r/ecommerce — "Free tool for batch-resizing product images"

### Twitter / X
- [ ] Post launch thread:
  1. "I built TapCrop — a free tool to batch crop hundreds of photos at once, right in your browser. No uploads, no signup. Here's how it works: [thread]"
  2. Show screenshot of batch processing
  3. Mention smart focal point detection
  4. Link to tapcrop.com

### 小红书 (Xiaohongshu)
- [ ] Post with title: "免费批量裁剪图片神器！不用注册不用上传"
- [ ] Include before/after screenshots
- [ ] Tag: #效率工具 #图片处理 #免费工具 #批量裁剪

## Google Search Console

Run these commands after deploying:
```bash
# Resubmit sitemap
npm run indexnow

# Manual steps in GSC:
# 1. Go to https://search.google.com/search-console
# 2. Select tapcrop.com property
# 3. Sitemaps → Add sitemap → "sitemap.xml" → Submit
# 4. URL Inspection → Inspect each new URL → Request Indexing
```

Key URLs to manually request indexing for:
- https://www.tapcrop.com/
- https://www.tapcrop.com/crop
- https://www.tapcrop.com/compress
- https://www.tapcrop.com/resize
- https://www.tapcrop.com/guides/instagram
- https://www.tapcrop.com/guides/youtube
- https://www.tapcrop.com/guides/twitter
- https://www.tapcrop.com/guides/batch-crop

## IndexNow (Automated)
Already configured — run after each deploy:
```bash
npm run indexnow
```
This notifies Bing, Yandex, and other IndexNow-supporting engines immediately.
