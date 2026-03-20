import smartcrop from 'smartcrop'

/**
 * Detect the best focal point for cropping using smartcrop.js.
 * Returns { x, y } where values are 0-1 normalized.
 */
export async function detectFocalPoint(img, targetWidth, targetHeight) {
  const result = await smartcrop.crop(img, {
    width: targetWidth,
    height: targetHeight,
  })

  const crop = result.topCrop
  // Convert crop center to normalized 0-1 coordinates
  const centerX = (crop.x + crop.width / 2) / img.naturalWidth
  const centerY = (crop.y + crop.height / 2) / img.naturalHeight

  return {
    x: Math.max(0, Math.min(1, centerX)),
    y: Math.max(0, Math.min(1, centerY)),
  }
}
