import ImageCard from './ImageCard'
import './PreviewGrid.css'

export default function PreviewGrid({ images, settings, onUpdateFocalPoint, onRemoveImage }) {
  if (images.length === 0) return null

  return (
    <div className="preview-grid">
      {images.map(img => (
        <ImageCard
          key={img.id}
          image={img}
          settings={settings}
          onUpdateFocalPoint={onUpdateFocalPoint}
          onRemoveImage={onRemoveImage}
        />
      ))}
    </div>
  )
}
