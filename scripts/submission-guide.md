# TapCrop — 手动提交与推广指南

> 部署后逐步执行以下操作，确保所有搜索引擎和目录收录 TapCrop。

---

## 一、Google Search Console (GSC)

### 1. 验证网站所有权
- 打开 https://search.google.com/search-console
- 添加属性 → 选择 "URL 前缀" → 输入 `https://www.tapcrop.com`
- 验证方式推荐：HTML 文件上传（下载验证文件放到 `public/` 目录后重新部署）

### 2. 提交 Sitemap
- 左侧菜单 → Sitemaps → 输入 `https://www.tapcrop.com/sitemap.xml` → 提交

### 3. 手动请求索引（逐个提交）
在 GSC 顶部搜索栏粘贴 URL → 点击 "请求编入索引"。

**必须提交的核心页面（24个）：**

```
https://www.tapcrop.com/
https://www.tapcrop.com/app
https://www.tapcrop.com/crop
https://www.tapcrop.com/resize
https://www.tapcrop.com/compress
https://www.tapcrop.com/convert
https://www.tapcrop.com/watermark
https://www.tapcrop.com/heic-to-jpg
https://www.tapcrop.com/webp-to-png
https://www.tapcrop.com/resize-jpg
https://www.tapcrop.com/resize-png
https://www.tapcrop.com/compress-jpg
https://www.tapcrop.com/png-to-jpg
https://www.tapcrop.com/jpg-to-png
https://www.tapcrop.com/svg-to-png
https://www.tapcrop.com/gif-to-mp4
https://www.tapcrop.com/image-to-pdf
https://www.tapcrop.com/passport-photo
https://www.tapcrop.com/smart-crop
https://www.tapcrop.com/guides/instagram
https://www.tapcrop.com/guides/youtube
https://www.tapcrop.com/guides/twitter
https://www.tapcrop.com/guides/batch-crop
https://www.tapcrop.com/privacy
https://www.tapcrop.com/terms
https://www.tapcrop.com/faq
```

> ⏱ GSC 每天有请求索引配额限制（约 10-20 次），分 2 天提交完。

### 4. 监控收录状态
- 左侧 → 页面 → 查看"已编入索引"数量
- 1-2 周后检查是否所有页面都已收录

---

## 二、Bing Webmaster Tools

### 1. 验证网站
- 打开 https://www.bing.com/webmasters
- 可通过 GSC 导入自动验证，最快

### 2. 提交 Sitemap
- 左侧 → Sitemaps → 提交 `https://www.tapcrop.com/sitemap.xml`

### 3. IndexNow（已自动化）
- 项目内运行 `npm run indexnow` 自动推送所有 URL 到 Bing 和 Yandex
- 每次部署后都应运行一次

---

## 三、百度搜索资源平台

### 1. 验证网站
- 打开 https://ziyuan.baidu.com/
- 用户中心 → 站点管理 → 添加站点 → `www.tapcrop.com`
- 验证方式：CNAME 或文件验证

### 2. 提交 Sitemap
- 搜索服务 → 链接提交 → sitemap → `https://www.tapcrop.com/sitemap.xml`

### 3. 主动推送 API
- 搜索服务 → 链接提交 → 主动推送
- 获取你的推送接口 token
- 运行推送（项目已有 indexnow 脚本，百度需单独 curl）：

```bash
curl -H 'Content-Type:text/plain' --data-binary @urls.txt \
  "http://data.zz.baidu.com/urls?site=https://www.tapcrop.com&token=YOUR_TOKEN"
```

其中 `urls.txt` 每行一个 URL。

---

## 四、工具目录提交

### Product Hunt
- 网址：https://www.producthunt.com/posts/new
- 标题：`TapCrop — Free Online Batch Image Cropper & Resizer`
- Tagline：`Crop, resize, compress & convert multiple images at once — free, no signup`
- 描述要点：
  - 100% browser-based, no file uploads
  - Batch processing (crop, resize, compress, convert, watermark)
  - Smart crop with AI face detection
  - Bilingual (English + Chinese)
  - No signup, no watermarks, completely free
- 截图：准备 3-5 张产品截图（App 主界面、裁剪操作、批量导出等）
- 最佳发布时间：太平洋时间周二至周四凌晨 00:01

### AlternativeTo
- 网址：https://alternativeto.net/manage/add-app/
- 名称：TapCrop
- 描述：Free online batch image tool for cropping, resizing, compressing, and converting. Runs 100% in the browser.
- 设置为 "Alternative to"：Canva, TinyPNG, iLoveIMG, Squoosh
- 标签：image-cropper, batch-processing, image-resizer, online-tool, free

### Toolify.ai
- 网址：https://www.toolify.ai/submit
- 提交 TapCrop 链接和描述

### 其他目录
| 目录 | 提交链接 |
|------|----------|
| SaaSHub | https://www.saashub.com/submit |
| There's An AI For That | https://theresanaiforthat.com/submit/ |
| ToolPilot | https://www.toolpilot.ai/submit |
| 独立开发者导航 | https://www.indiehackers.com/ |
| Web App Store | https://webappstore.org/submit |

---

## 五、社交媒体推广

### Twitter/X
```
🖼️ TapCrop — free online batch image tool

✅ Crop, resize, compress & convert
✅ 100% in browser — no uploads
✅ Smart crop with face detection
✅ No signup, no watermarks

Try it free 👉 https://www.tapcrop.com

#ImageEditor #FreeTools #WebApp #BatchProcessing
```

### Reddit
推荐发布到以下 subreddits：
- r/webdev — "Show Reddit: I built a free browser-based batch image tool"
- r/SideProject — 分享项目故事
- r/InternetIsBeautiful — "TapCrop: Free batch image cropper that works 100% in your browser"
- r/photography — 如果社区允许工具分享

帖子模板：
```
Title: I built a free batch image tool that runs 100% in your browser

Hey everyone! I made TapCrop, a free online tool for batch cropping,
resizing, compressing, and converting images.

Key features:
- Process multiple images at once
- Smart crop with face detection
- HEIC to JPG, WebP to PNG, and more
- No signup, no uploads to servers, no watermarks
- Works entirely in your browser (privacy-first)

Would love your feedback! https://www.tapcrop.com
```

### 小红书
```
标题：免费批量裁图神器！TapCrop 在线秒裁图片🔥

正文：
找了好久终于找到一个好用的在线批量裁图工具！

✅ 批量裁剪、缩放、压缩、格式转换
✅ 智能裁剪，自动识别人脸
✅ 完全免费，无需注册
✅ 图片不上传服务器，保护隐私
✅ 支持 HEIC 转 JPG、WebP 转 PNG

特别适合：
📸 小红书/Instagram 批量出图
🛒 电商产品图批量处理
📱 证件照裁剪

网址：tapcrop.com

#裁图工具 #图片处理 #免费工具 #批量裁剪 #在线工具
```

---

## 六、执行清单

按优先级排序：

- [ ] **Day 1**：GSC 验证 + 提交 sitemap + 请求索引前 10 个页面
- [ ] **Day 1**：Bing Webmaster 验证 + 提交 sitemap
- [ ] **Day 1**：运行 `npm run indexnow`
- [ ] **Day 2**：GSC 请求索引剩余页面
- [ ] **Day 2**：百度搜索资源平台验证 + 提交 sitemap
- [ ] **Week 1**：Product Hunt 准备（截图、描述）
- [ ] **Week 1**：AlternativeTo + Toolify.ai 提交
- [ ] **Week 1**：发布 Twitter + Reddit 帖子
- [ ] **Week 1**：发布小红书帖子
- [ ] **Week 2**：检查 GSC 收录情况，补提未收录页面
- [ ] **Week 2**：提交其他工具目录（SaaSHub 等）
- [ ] **Monthly**：检查搜索排名，优化排名低的页面内容
