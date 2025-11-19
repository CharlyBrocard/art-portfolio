import { useState } from 'react'
import styles from './ProtectedImage.module.css'

interface ProtectedImageProps {
  src: string
  alt: string
  className?: string
  watermarkText?: string
}

const ProtectedImage = ({ src, alt, className, watermarkText = '© Chouchou' }: ProtectedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    return false
  }

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault()
    return false
  }

  return (
    <div className={styles.imageWrapper}>
      <img
        src={src}
        alt={alt}
        className={`${styles.protectedImage} ${className || ''} ${isLoaded ? styles.loaded : ''}`}
        onContextMenu={handleContextMenu}
        onDragStart={handleDragStart}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
        draggable="false"
      />
      {/* Overlay de protection */}
      <div className={styles.protectionOverlay} onContextMenu={handleContextMenu} />

      {/* Watermark subtil */}
      <div className={styles.watermark}>{watermarkText}</div>
    </div>
  )
}

export default ProtectedImage
