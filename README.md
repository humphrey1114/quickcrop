<div align="center">

# TapCrop — 秒裁

**Free Online Batch Image Cropping Tool | 免费在线批量图片裁剪工具**

[English](#english) · [中文](#中文)

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-tapcrop.com-blue?style=for-the-badge)](https://www.tapcrop.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](#license)

</div>

---

<a name="english"></a>

## What is TapCrop?

TapCrop is a **100% browser-based** batch image cropping tool. All processing happens locally — your images never leave your device.

Upload multiple images, set your desired dimensions, and crop them all at once. That's it.

## Features

**Core**
- Batch crop unlimited images with custom width, height, and aspect ratios
- Smart focal point detection — automatically finds the subject of each image
- Manual focal point adjustment via click/drag
- Undo/Redo support (Ctrl+Z / Ctrl+Shift+Z)

**Presets**
- Social media sizes: Xiaohongshu, Douyin, Instagram, Twitter/X, YouTube, Facebook, LinkedIn, Pinterest, and more
- ID photo sizes: 1-inch, 2-inch, passport, driver's license, etc.
- Paper sizes: A0–A6, B0–B5, C0–C4 at 300 DPI
- Common aspect ratios: 16:9, 9:16, 4:3, 1:1, 3:2, 21:9, etc.

**Output**
- Export as JPEG, PNG, or WebP with adjustable quality (10–100%)
- File compression by target size percentage
- Batch rename with custom prefix + auto numbering
- Download as single file, ZIP archive, or save to folder

**Extras**
- Text watermark: custom text, font size, color, opacity, 9 positions
- Border: custom size and color
- HEIC/HEIF auto-conversion (Apple photos)
- Drag-and-drop image reordering
- Save & load setting templates (cloud sync with account)
- Dark / Light theme
- English / 中文 bilingual
- PWA — installable as a standalone app

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + Vite 8 |
| Routing | React Router 7 |
| Auth | Firebase Auth (Email + Google) |
| Cloud Sync | Firestore |
| Focal Detection | smartcrop.js |
| HEIC Support | heic2any |
| ZIP Export | JSZip + FileSaver |
| Hosting | Vercel |
| Analytics | Google Analytics + Vercel Analytics |

## Getting Started

```bash
# Clone
git clone https://github.com/humphrey1114/quickcrop.git
cd quickcrop

# Install
npm install

# Dev
npm run dev

# Build
npm run build
```

## Privacy

All image processing runs **100% in your browser**. No images are uploaded to any server. The only cloud feature is optional template sync for logged-in users.

---

<a name="中文"></a>

## 秒裁是什么？

秒裁是一款 **完全在浏览器端运行** 的批量图片裁剪工具。所有处理都在本地完成，你的图片不会离开你的设备。

上传多张图片，设置尺寸，一键批量裁剪。

## 功能特性

**核心功能**
- 批量裁剪，支持自定义宽高和比例
- 智能焦点检测，自动识别图片主体
- 手动拖拽调整焦点位置
- 撤销/重做 (Ctrl+Z / Ctrl+Shift+Z)

**丰富预设**
- 社交媒体：小红书、抖音、微博、微信、Instagram、Twitter/X、YouTube、Facebook 等
- 证件照：一寸、二寸、护照、驾照等
- 纸张尺寸：A0–A6、B0–B5、C0–C4 (300 DPI)
- 常用比例：16:9、9:16、4:3、1:1、3:2、21:9 等

**导出选项**
- 支持 JPEG、PNG、WebP，可调节品质 (10–100%)
- 按目标大小百分比压缩文件
- 批量重命名：自定义前缀 + 自动编号
- 单文件下载、ZIP 打包、保存到文件夹

**更多功能**
- 文字水印：自定义文字、字号、颜色、透明度、9 个位置
- 边框：自定义大小和颜色
- 自动转换 Apple HEIC/HEIF 格式
- 拖拽排序图片顺序
- 保存/加载配置模板（登录后云端同步）
- 深色/浅色主题切换
- 中英双语
- PWA — 可安装为独立应用

## 本地开发

```bash
# 克隆项目
git clone https://github.com/humphrey1114/quickcrop.git
cd quickcrop

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建
npm run build
```

## 隐私说明

所有图片处理 **100% 在浏览器本地完成**，不会上传任何图片到服务器。唯一的云端功能是登录用户的模板同步。

---

## Contributing

Issues and PRs are welcome! If you find TapCrop useful, please give it a ⭐

## License

MIT

