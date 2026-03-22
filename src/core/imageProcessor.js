import { detectFocalPoint } from './smartCrop'

/**
 * Load an image from a File object and return an HTMLImageElement.
 */
function loadImage(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      URL.revokeObjectURL(url)
      resolve(img)
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error('Failed to load image'))
    }
    img.src = url
  })
}

/**
 * Apply rotation and flip transforms to an image.
 * Returns a canvas with the transformed image.
 */
function applyTransform(img, rotation = 0, flipH = false, flipV = false) {
  if (rotation === 0 && !flipH && !flipV) return null // no transform needed

  const swap = rotation === 90 || rotation === 270
  const w = swap ? img.naturalHeight : img.naturalWidth
  const h = swap ? img.naturalWidth : img.naturalHeight

  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext('2d')

  ctx.translate(w / 2, h / 2)
  if (rotation) ctx.rotate((rotation * Math.PI) / 180)
  if (flipH) ctx.scale(-1, 1)
  if (flipV) ctx.scale(1, -1)
  ctx.drawImage(img, -img.naturalWidth / 2, -img.naturalHeight / 2)

  return canvas
}

/**
 * Calculate the crop region based on target dimensions and focal point.
 */
function calculateCropRegion(srcW, srcH, targetW, targetH, focalPoint) {
  const targetRatio = targetW / targetH
  const srcRatio = srcW / srcH
  let cropX, cropY, cropW, cropH

  if (srcRatio > targetRatio) {
    // Source is wider: crop horizontal
    cropH = srcH
    cropW = Math.round(srcH * targetRatio)
    cropY = 0
    const fx = focalPoint ? focalPoint.x : 0.5
    cropX = Math.round((srcW - cropW) * fx)
  } else {
    // Source is taller: crop vertical
    cropW = srcW
    cropH = Math.round(srcW / targetRatio)
    cropX = 0
    const fy = focalPoint ? focalPoint.y : 0.5
    cropY = Math.round((srcH - cropH) * fy)
  }

  // Clamp
  cropX = Math.max(0, Math.min(cropX, srcW - cropW))
  cropY = Math.max(0, Math.min(cropY, srcH - cropH))

  return { cropX, cropY, cropW, cropH }
}

/**
 * Add watermark to canvas context.
 */
function applyWatermark(ctx, canvasW, canvasH, settings) {
  if (!settings.watermarkEnabled || !settings.watermarkText) return

  // Scale font size relative to canvas size (base: 1000px width)
  const scale = Math.max(canvasW, canvasH) / 1000
  const fontSize = Math.round(settings.watermarkFontSize * scale)
  ctx.save()
  ctx.font = `${fontSize}px Arial, sans-serif`
  ctx.fillStyle = settings.watermarkColor
  ctx.globalAlpha = settings.watermarkOpacity / 100
  ctx.textBaseline = 'middle'

  const text = settings.watermarkText
  const metrics = ctx.measureText(text)
  const textW = metrics.width
  const textH = fontSize
  const pad = 20

  let x, y
  switch (settings.watermarkPosition) {
    case 'top-left':
      x = pad; y = pad + textH / 2; break
    case 'top-center':
      x = (canvasW - textW) / 2; y = pad + textH / 2; break
    case 'top-right':
      x = canvasW - textW - pad; y = pad + textH / 2; break
    case 'center':
      x = (canvasW - textW) / 2; y = canvasH / 2; break
    case 'bottom-left':
      x = pad; y = canvasH - pad - textH / 2; break
    case 'bottom-center':
      x = (canvasW - textW) / 2; y = canvasH - pad - textH / 2; break
    case 'bottom-right':
    default:
      x = canvasW - textW - pad; y = canvasH - pad - textH / 2; break
  }

  // Optional shadow for readability
  ctx.shadowColor = 'rgba(0,0,0,0.5)'
  ctx.shadowBlur = 4
  ctx.shadowOffsetX = 1
  ctx.shadowOffsetY = 1
  ctx.fillText(text, x, y)
  ctx.restore()
}

/**
 * Add border to canvas. Returns a new canvas with border applied.
 */
function applyBorder(sourceCanvas, borderSize, borderColor) {
  if (!borderSize || borderSize <= 0) return sourceCanvas

  const newW = sourceCanvas.width + borderSize * 2
  const newH = sourceCanvas.height + borderSize * 2
  const canvas = document.createElement('canvas')
  canvas.width = newW
  canvas.height = newH
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = borderColor
  ctx.fillRect(0, 0, newW, newH)
  ctx.drawImage(sourceCanvas, borderSize, borderSize)

  return canvas
}

/**
 * Process a single image file with given settings.
 * Returns { blob, url }
 */
export async function processImage(file, settings) {
  const img = await loadImage(file)

  // Apply rotation/flip transform
  const transformed = applyTransform(img, settings.rotation, settings.flipH, settings.flipV)
  const srcW = transformed ? transformed.width : img.naturalWidth
  const srcH = transformed ? transformed.height : img.naturalHeight
  const drawSource = transformed || img

  let outW, outH, cropX, cropY, cropW, cropH

  if (settings.doNotResize) {
    // No resize, just export with watermark/border if enabled
    outW = srcW
    outH = srcH
    cropX = 0
    cropY = 0
    cropW = srcW
    cropH = srcH
  } else if (settings.autoWidth && settings.autoHeight) {
    // No crop, just keep original
    outW = srcW
    outH = srcH
    cropX = 0
    cropY = 0
    cropW = srcW
    cropH = srcH
  } else if (settings.autoWidth) {
    // Fixed height, auto width
    const ratio = srcW / srcH
    outH = settings.height
    outW = Math.round(outH * ratio)
    cropX = 0
    cropY = 0
    cropW = srcW
    cropH = srcH
  } else if (settings.autoHeight) {
    // Fixed width, auto height
    const ratio = srcW / srcH
    outW = settings.width
    outH = Math.round(outW / ratio)
    cropX = 0
    cropY = 0
    cropW = srcW
    cropH = srcH
  } else {
    // Fixed width & height: need to crop
    let focalPoint = settings.focalPoint
    if (!focalPoint && settings.autoDetectFocal) {
      try {
        focalPoint = await detectFocalPoint(img, settings.width, settings.height)
      } catch {
        focalPoint = { x: 0.5, y: 0.5 }
      }
    }
    if (!focalPoint) focalPoint = { x: 0.5, y: 0.5 }

    outW = settings.width
    outH = settings.height
    const region = calculateCropRegion(srcW, srcH, outW, outH, focalPoint)
    cropX = region.cropX
    cropY = region.cropY
    cropW = region.cropW
    cropH = region.cropH
  }

  // Draw to canvas
  let canvas = document.createElement('canvas')
  canvas.width = outW
  canvas.height = outH
  const ctx = canvas.getContext('2d')

  if (settings.highQualityResize) {
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'
  }

  ctx.drawImage(drawSource, cropX, cropY, cropW, cropH, 0, 0, outW, outH)

  // Apply brightness/contrast/saturation adjustments
  if (settings.adjustEnabled &&
      (settings.adjustBrightness !== 0 || settings.adjustContrast !== 0 || settings.adjustSaturation !== 0)) {
    const tempCanvas = document.createElement('canvas')
    tempCanvas.width = outW
    tempCanvas.height = outH
    const tempCtx = tempCanvas.getContext('2d')
    tempCtx.drawImage(canvas, 0, 0)

    ctx.clearRect(0, 0, outW, outH)
    ctx.filter = `brightness(${1 + settings.adjustBrightness / 100}) contrast(${1 + settings.adjustContrast / 100}) saturate(${1 + settings.adjustSaturation / 100})`
    ctx.drawImage(tempCanvas, 0, 0)
    ctx.filter = 'none'
  }

  // Apply watermark
  applyWatermark(ctx, outW, outH, settings)

  // Apply border
  if (settings.borderEnabled && settings.borderSize > 0) {
    canvas = applyBorder(canvas, settings.borderSize, settings.borderColor)
  }

  // Export
  const mimeType = settings.format === 'png' ? 'image/png'
    : settings.format === 'webp' ? 'image/webp'
    : 'image/jpeg'
  const quality = settings.format === 'png' ? undefined : settings.quality / 100

  let blob = await new Promise(resolve => {
    canvas.toBlob(resolve, mimeType, quality)
  })

  // Compress to percentage of original size (binary search on quality)
  if (settings.compressEnabled && settings.compressPercent > 0 && settings.format !== 'png') {
    const targetBytes = Math.round(blob.size * settings.compressPercent / 100)
    if (blob.size > targetBytes) {
      let lo = 0.05, hi = (quality || 0.92), bestBlob = blob
      for (let i = 0; i < 10; i++) {
        const mid = (lo + hi) / 2
        const tryBlob = await new Promise(resolve => {
          canvas.toBlob(resolve, mimeType, mid)
        })
        if (tryBlob.size > targetBytes) {
          hi = mid
        } else {
          lo = mid
          bestBlob = tryBlob
        }
        if (Math.abs(tryBlob.size - targetBytes) / targetBytes < 0.05) {
          bestBlob = tryBlob
          break
        }
      }
      blob = bestBlob
    }
  }

  return { blob }
}
