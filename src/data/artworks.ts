import type { Artwork } from '@/types'

/**
 * Collection d'œuvres de l'artiste
 */

export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Rêverie Nocturne',
    category: 'painting',
    description:
      "Une exploration des émotions du crépuscule, où les couleurs chaudes se mêlent aux ombres de la nuit. Cette pièce capture l'essence de la transition entre le jour et la nuit, un moment de contemplation.",
    imageUrl: 'https://images.unsplash.com/photo-1578301978162-7aae4d755744?w=800&h=1000&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1578301978162-7aae4d755744?w=400&h=500&fit=crop',
    year: 2024,
    dimensions: '100x80 cm',
    materials: ['Huile sur toile'],
    featured: true,
  },
  {
    id: '2',
    title: "L'Éveil des Vagues",
    category: 'watercolor',
    description:
      "L'océan dans toute sa splendeur, capturé à l'aquarelle. Les nuances de bleu dansent sur le papier, évoquant le mouvement perpétuel des vagues et la puissance tranquille de la mer.",
    imageUrl: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&h=1000&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=400&h=500&fit=crop',
    year: 2024,
    dimensions: '40x30 cm',
    materials: ['Aquarelle', 'Papier Arches 300g'],
    featured: true,
  },
  {
    id: '3',
    title: 'Forme Organique',
    category: 'sculpture',
    description:
      "Une sculpture contemporaine qui explore la relation entre la forme naturelle et l'abstraction. Inspirée par les courbes fluides de la nature, cette pièce invite à la contemplation tactile et visuelle.",
    imageUrl: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&h=1000&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=400&h=500&fit=crop',
    year: 2023,
    dimensions: '50x35x30 cm',
    materials: ['Grès', 'Émaillage céladon'],
    featured: false,
  },
  {
    id: '4',
    title: 'Gardienne des Forêts',
    category: 'character-design',
    description:
      "Personnage créé pour un univers fantastique. Cette gardienne mystérieuse veille sur les secrets de la forêt ancienne. Design mêlant éléments naturels et touches magiques.",
    imageUrl: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&h=1000&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=400&h=500&fit=crop',
    year: 2024,
    dimensions: 'Digital',
    materials: ['Illustration numérique', 'Procreate'],
    featured: true,
  },
  {
    id: '5',
    title: 'Horizons Infinis',
    category: 'painting',
    description:
      "Un paysage abstrait qui évoque l'immensité et la liberté. Les couches de peinture créent une profondeur qui invite le regard à se perdre dans ces horizons imaginaires.",
    imageUrl: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&h=1000&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1549887534-1541e9326642?w=400&h=500&fit=crop',
    year: 2024,
    dimensions: '120x90 cm',
    materials: ['Acrylique sur toile'],
    featured: true,
  },
  {
    id: '6',
    title: 'Fleurs Éphémères',
    category: 'watercolor',
    description:
      "Étude botanique à l'aquarelle célébrant la beauté fragile des fleurs sauvages. Chaque pétale est une méditation sur l'impermanence et la délicatesse de la nature.",
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=1000&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=500&fit=crop',
    year: 2023,
    dimensions: '35x25 cm',
    materials: ['Aquarelle', 'Encre de Chine'],
    featured: false,
  },
  {
    id: '7',
    title: 'Équilibre Fragile',
    category: 'sculpture',
    description:
      "Cette sculpture joue sur la notion d'équilibre et de tension. Les formes semblent défier la gravité, créant un dialogue entre le poids et la légèreté, le solide et le vide.",
    imageUrl: 'https://images.unsplash.com/photo-1551628951-29f0c13c7f87?w=800&h=1000&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1551628951-29f0c13c7f87?w=400&h=500&fit=crop',
    year: 2024,
    dimensions: '60x40x25 cm',
    materials: ['Bronze patiné'],
    featured: true,
  },
  {
    id: '8',
    title: 'Le Voyageur Stellaire',
    category: 'character-design',
    description:
      "Explorateur d'univers lointains, ce personnage combine science-fiction et éléments organiques. Conçu pour une aventure narrative où la découverte et l'émerveillement sont au cœur du récit.",
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=1000&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=500&fit=crop',
    year: 2024,
    dimensions: 'Digital',
    materials: ['Photoshop', 'Illustration numérique'],
    featured: false,
  },
]

export const getFeaturedArtworks = (): Artwork[] => {
  return artworks.filter(artwork => artwork.featured)
}

export const getArtworksByCategory = (category: Artwork['category']): Artwork[] => {
  return artworks.filter(artwork => artwork.category === category)
}

export const getArtworkById = (id: string): Artwork | undefined => {
  return artworks.find(artwork => artwork.id === id)
}
