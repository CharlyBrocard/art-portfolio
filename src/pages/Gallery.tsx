import { useState } from 'react'
import { motion } from 'framer-motion'
import type { ArtworkCategory } from '@/types'
import styles from './Gallery.module.css'

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<ArtworkCategory | 'all'>('all')

  const categories: Array<{ value: ArtworkCategory | 'all'; label: string }> = [
    { value: 'all', label: 'Tout' },
    { value: 'painting', label: 'Peintures' },
    { value: 'watercolor', label: 'Aquarelles' },
    { value: 'sculpture', label: 'Sculptures' },
    { value: 'character-design', label: 'Character Design' },
  ]

  return (
    <div className={styles.gallery}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>Galerie</h1>
        <p className={styles.description}>
          Découvrez une sélection de mes créations artistiques
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        className={styles.filters}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {categories.map(category => (
          <button
            key={category.value}
            className={`${styles.filterButton} ${activeCategory === category.value ? styles.active : ''}`}
            onClick={() => setActiveCategory(category.value)}
          >
            {category.label}
          </button>
        ))}
      </motion.div>

      {/* Artworks Grid */}
      <div className={styles.grid}>
        <motion.div
          className={styles.placeholder}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>Œuvres à venir...</p>
          <p className={styles.filterInfo}>Catégorie: {activeCategory}</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Gallery
