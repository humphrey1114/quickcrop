import { saveAs } from 'file-saver'
import JSZip from 'jszip'

/**
 * Download a single file.
 */
export function downloadSingle(blob, filename) {
  saveAs(blob, filename)
}

/**
 * Download multiple files as a ZIP archive.
 */
export async function downloadAsZip(files, onProgress) {
  const zip = new JSZip()

  for (const file of files) {
    zip.file(file.filename, file.blob)
  }

  const content = await zip.generateAsync(
    { type: 'blob', compression: 'DEFLATE', compressionOptions: { level: 6 } },
    onProgress ? (metadata) => onProgress(metadata.percent) : undefined
  )

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
  saveAs(content, `cropped_images_${timestamp}.zip`)
}

/**
 * Save files directly to a local folder using File System Access API.
 */
export async function saveToFolder(files) {
  if (!('showDirectoryPicker' in window)) {
    throw new Error('File System Access API not supported')
  }

  const dirHandle = await window.showDirectoryPicker({ mode: 'readwrite' })

  for (const file of files) {
    const fileHandle = await dirHandle.getFileHandle(file.filename, { create: true })
    const writable = await fileHandle.createWritable()
    await writable.write(file.blob)
    await writable.close()
  }
}
