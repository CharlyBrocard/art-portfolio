import type { Artwork } from '@/types'

/**
 * Example artwork data structure
 * Copy this file to artworks.ts and populate with real data
 */

export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Fantasy Character',
    category: 'character-design',
    description: 'Design de personnage pour un univers fantastique',
    imageUrl: '/images/artworks/fantasy-character.jpg',
    thumbnailUrl: '/images/artworks/thumbs/fantasy-character-thumb.jpg',
    year: 2024,
    dimensions: 'Digital',
    materials: ['Illustration numérique', 'Procreate'],
    featured: true,
  },
  {
    id: '2',
    title: 'Comic Page',
    category: 'comic',
    description: 'Planche de bande dessinée - histoire originale',
    imageUrl: '/images/artworks/comic-page.jpg',
    thumbnailUrl: '/images/artworks/thumbs/comic-page-thumb.jpg',
    year: 2024,
    dimensions: 'A4',
    materials: ['Encre de Chine', 'Colorisation numérique'],
    featured: true,
  },
  {
    id: '3',
    title: 'Tattoo Design - Dragon',
    category: 'tattoo',
    description: 'Design de tatouage - dragon asiatique',
    imageUrl: '/images/artworks/tattoo-dragon.jpg',
    thumbnailUrl: '/images/artworks/thumbs/tattoo-dragon-thumb.jpg',
    year: 2023,
    dimensions: 'Avant-bras',
    materials: ['Encre noire', 'Ombrages'],
    featured: true,
  },
  {
    id: '4',
    title: 'Warrior Character',
    category: 'character-design',
    description: 'Design de personnage guerrier pour jeu vidéo',
    imageUrl: '/images/artworks/warrior.jpg',
    thumbnailUrl: '/images/artworks/thumbs/warrior-thumb.jpg',
    year: 2024,
    dimensions: 'Digital',
    materials: ['Photoshop', 'Illustration numérique'],
    featured: false,
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
