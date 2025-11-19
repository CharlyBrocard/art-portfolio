import type { Artwork } from '@/types'

/**
 * Example artwork data structure
 * Copy this file to artworks.ts and populate with real data
 */

export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Sunset Dreams',
    category: 'painting',
    description: 'Une exploration des couleurs chaudes et des émotions du crépuscule',
    imageUrl: '/images/artworks/sunset-dreams.jpg',
    thumbnailUrl: '/images/artworks/thumbs/sunset-dreams-thumb.jpg',
    year: 2024,
    dimensions: '80x60 cm',
    materials: ['Huile sur toile'],
    featured: true,
  },
  {
    id: '2',
    title: 'Ocean Waves',
    category: 'watercolor',
    description: "L'essence fluide de l'océan capturée à l'aquarelle",
    imageUrl: '/images/artworks/ocean-waves.jpg',
    thumbnailUrl: '/images/artworks/thumbs/ocean-waves-thumb.jpg',
    year: 2024,
    dimensions: '30x40 cm',
    materials: ['Aquarelle', 'Papier Arches'],
    featured: true,
  },
  {
    id: '3',
    title: 'Abstract Form',
    category: 'sculpture',
    description: 'Une sculpture contemporaine explorant les formes organiques',
    imageUrl: '/images/artworks/abstract-form.jpg',
    thumbnailUrl: '/images/artworks/thumbs/abstract-form-thumb.jpg',
    year: 2023,
    dimensions: '45x30x25 cm',
    materials: ['Argile', 'Émaillage'],
    featured: false,
  },
  {
    id: '4',
    title: 'Fantasy Character',
    category: 'character-design',
    description: 'Design de personnage pour projet de jeu vidéo',
    imageUrl: '/images/artworks/fantasy-character.jpg',
    thumbnailUrl: '/images/artworks/thumbs/fantasy-character-thumb.jpg',
    year: 2024,
    dimensions: 'Digital',
    materials: ['Illustration numérique', 'Procreate'],
    featured: true,
  },
]

// Helper function to get featured artworks
export const getFeaturedArtworks = (): Artwork[] => {
  return artworks.filter(artwork => artwork.featured)
}

// Helper function to get artworks by category
export const getArtworksByCategory = (category: Artwork['category']): Artwork[] => {
  return artworks.filter(artwork => artwork.category === category)
}

// Helper function to get artwork by ID
export const getArtworkById = (id: string): Artwork | undefined => {
  return artworks.find(artwork => artwork.id === id)
}
