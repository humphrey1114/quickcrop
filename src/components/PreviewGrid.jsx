import { useState, useRef, useCallback } from 'react'
import ImageCard from './ImageCard'
import './PreviewGrid.css'

export default function PreviewGrid({ images, settings, onUpdateFocalPoint, onRemoveImage, onReorder, onTransform, onUpdateImageSettings }) {
  const [dragOverId, setDragOverId] = useState(null)
  const dragIdRef = useRef(null)

  const handleDragStart = useCallback((e, id) => {
    dragIdRef.current = id
    e.dataTransfer.effectAllowed = 'move'
    e.currentTarget.classList.add('dragging')
  }, [])

  const handleDragEnd = useCallback((e) => {
    e.currentTarget.classList.remove('dragging')
    dragIdRef.current = null
    setDragOverId(null)
  }, [])

  const handleDragOver = useCallback((e, id) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    if (id !== dragIdRef.current) {
      setDragOverId(id)
    }
  }, [])

  const handleDrop = useCallback((e, toId) => {
    e.preventDefault()
    const fromId = dragIdRef.current
    if (fromId != null && fromId !== toId) {
      onReorder(fromId, toId)
    }
    dragIdRef.current = null
    setDragOverId(null)
  }, [onReorder])

  const handleDragLeave = useCallback(() => {
    setDragOverId(null)
  }, [])

  if (images.length === 0) return null

  return (
    <div className="preview-grid">
      {images.map(img => (
        <div
          key={img.id}
          className={`drag-wrapper${dragOverId === img.id ? ' drag-over' : ''}`}
          draggable
          onDragStart={(e) => handleDragStart(e, img.id)}
          onDragEnd={handleDragEnd}
          onDragOver={(e) => handleDragOver(e, img.id)}
          onDrop={(e) => handleDrop(e, img.id)}
          onDragLeave={handleDragLeave}
        >
          <ImageCard
            image={img}
            settings={settings}
            onUpdateFocalPoint={onUpdateFocalPoint}
            onRemoveImage={onRemoveImage}
            onTransform={onTransform}
            onUpdateImageSettings={onUpdateImageSettings}
          />
        </div>
      ))}
    </div>
  )
}
