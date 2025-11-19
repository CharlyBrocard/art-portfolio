import { useState } from 'react'
import type { Artwork } from '@/types'
import ProtectedImage from '@components/common/ProtectedImage'
import styles from './ArtworkCard.module.css'

interface ArtworkCardProps {
  artwork: Artwork
}

const ArtworkCard = ({ artwork }: ArtworkCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const categoryLabels = {
    painting: 'Peinture',
    watercolor: 'Aquarelle',
    sculpture: 'Sculpture',
    'character-design': 'Character Design',
  }

  return (
    <div
      className={styles.cardContainer}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}>
        {/* Recto - Image */}
        <div className={styles.cardFront}>
          <div className={styles.imageContainer}>
            <ProtectedImage
              src={artwork.imageUrl}
              alt={artwork.title}
              className={styles.image}
              watermarkText={`© ${artwork.year}`}
            />
            <div className={styles.overlay}>
              <span className={styles.category}>{categoryLabels[artwork.category]}</span>
            </div>
          </div>
          <div className={styles.frontTitle}>
            <h3>{artwork.title}</h3>
            <span className={styles.year}>{artwork.year}</span>
          </div>
        </div>

        {/* Verso - Description */}
        <div className={styles.cardBack}>
          <div className={styles.backContent}>
            <h3 className={styles.backTitle}>{artwork.title}</h3>
            <span className={styles.backCategory}>{categoryLabels[artwork.category]}</span>

            <p className={styles.description}>{artwork.description}</p>

            <div className={styles.details}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Année</span>
                <span className={styles.detailValue}>{artwork.year}</span>
              </div>
              {artwork.dimensions && (
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Dimensions</span>
                  <span className={styles.detailValue}>{artwork.dimensions}</span>
                </div>
              )}
              {artwork.materials && artwork.materials.length > 0 && (
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Matériaux</span>
                  <span className={styles.detailValue}>{artwork.materials.join(', ')}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtworkCard
