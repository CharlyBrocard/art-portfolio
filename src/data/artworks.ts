import type { Artwork } from '@/types'

/**
 * Collection d'œuvres de l'artiste
 */

export const artworks: Artwork[] = [
  // Character Design
  {
    id: '1',
    title: 'Kira - Chasseuse Céleste',
    category: 'character-design',
    description:
      "Concept pour un RPG fantasy. Kira est une archère nomade qui tire son pouvoir des constellations. Design inspiré des armures mongoles avec des motifs célestes luminescents. Palette : bleus nuit, or et blanc.",
    imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&h=1000&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=500&fit=crop',
    year: 2024,
    dimensions: '3000x4000px',
    materials: ['Procreate', 'Photoshop', 'Concept Art'],
    featured: true,
  },
  {
    id: '2',
    title: 'Nyx - Mage de l\'Ombre',
    category: 'character-design',
    description:
      "Antagoniste principal d'une série animée. Nyx manipule les ténèbres et les illusions. Silhouette élancée, cape fluide, masque vénitien. Contraste fort entre zones sombres et éclats violets.",
    imageUrl: 'https://images.unsplash.com/photo-1601513445506-2ab0d4fb4229?w=800&h=1000&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1601513445506-2ab0d4fb4229?w=400&h=500&fit=crop',
    year: 2024,
    dimensions: '2500x3500px',
    materials: ['Clip Studio Paint', 'Character Sheet'],
    featured: true,
  },
  {
    id: '3',
    title: 'Zephyr - Mécanicien Cyberpunk',
    category: 'character-design',
    description:
      "Design pour jeu vidéo cyberpunk. Mécanicien underground avec prothèses bioniques custom. Style streetwear futuriste, néons orange et cyan, détails techniques. Multiple variations : casual, combat, workshop.",
    imageUrl: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&h=1000&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&h=500&fit=crop',
    year: 2024,
    dimensions: '3500x4500px',
    materials: ['Photoshop', 'Blender (prothèses 3D)', 'Keyshot'],
    featured: true,
  },
  {
    id: '4',
    title: 'Lumina - Esprit Gardien',
    category: 'character-design',
    description:
      "Créature éthérée pour projet narratif. Gardienne de sanctuaire ancien, forme semi-transparente, inspiration méduse/plante bioluminescente. Mouvements fluides, palette jade et or pâle.",
    imageUrl: 'https://images.unsplash.com/photo-1620503374956-c942862f0372?w=800&h=1000&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1620503374956-c942862f0372?w=400&h=500&fit=crop',
    year: 2023,
    dimensions: '2800x3800px',
    materials: ['Procreate', 'After Effects (tests animation)'],
    featured: false,
  },

  // Bande Dessinée
  {
    id: '5',
    title: 'Les Chroniques de Luna - Planche 1',
    category: 'comic',
    description:
      "Première planche d'une série BD fantasy. Luna découvre un monde parallèle caché dans les ombres de la ville. Encrage traditionnel et colorisation numérique.",
    imageUrl: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800&h=1000&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=500&fit=crop',
    year: 2024,
    dimensions: 'A4',
    materials: ['Encre de Chine', 'Colorisation numérique'],
    featured: true,
  },
  {
    id: '6',
    title: 'Rêves Urbains - Page 5',
    category: 'comic',
    description:
      "Extrait d'une histoire courte sur la vie nocturne en métropole. Jeux de lumières et d'ombres pour capturer l'atmosphère unique de la nuit en ville.",
    imageUrl: 'https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?w=800&h=1000&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?w=400&h=500&fit=crop',
    year: 2024,
    dimensions: 'A4',
    materials: ['Aquarelle', 'Encre', 'Retouches numériques'],
    featured: true,
  },
  {
    id: '7',
    title: 'Le Dernier Voyageur - Cover',
    category: 'comic',
    description:
      "Couverture pour une BD de science-fiction. Un voyageur solitaire face à l'immensité de l'espace, entre espoir et mélancolie.",
    imageUrl: 'https://images.unsplash.com/photo-1635241161466-541f065683ba?w=800&h=1000&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1635241161466-541f065683ba?w=400&h=500&fit=crop',
    year: 2023,
    dimensions: 'A4',
    materials: ['Digital painting', 'Photoshop'],
    featured: true,
  },
  {
    id: '8',
    title: 'Mémoires d\'Enfance - Strip',
    category: 'comic',
    description:
      "Strip humoristique inspiré de souvenirs d'enfance. Un style léger et expressif qui capture les petits moments du quotidien avec tendresse.",
    imageUrl: 'https://images.unsplash.com/photo-1611250282021-10f90d878e65?w=800&h=1000&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1611250282021-10f90d878e65?w=400&h=500&fit=crop',
    year: 2024,
    dimensions: '30x10 cm',
    materials: ['Encre', 'Aquarelle'],
    featured: false,
  },

  // Tatouage
  {
    id: '9',
    title: 'Serpent Cosmique',
    category: 'tattoo',
    description:
      "Design de tatouage inspiré de la mythologie orientale. Le serpent s'enroule autour de motifs géométriques et célestes, symbolisant la transformation et l'infini.",
    imageUrl: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=800&h=1000&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=400&h=500&fit=crop',
    year: 2024,
    dimensions: 'Avant-bras',
    materials: ['Encre noire', 'Ombrages'],
    featured: true,
  },
  {
    id: '10',
    title: 'Fleur de Lotus Mandala',
    category: 'tattoo',
    description:
      "Mandala détaillé centré sur une fleur de lotus. Design qui combine spiritualité et esthétique géométrique, représentant l'équilibre et la renaissance.",
    imageUrl: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=800&h=1000&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=400&h=500&fit=crop',
    year: 2024,
    dimensions: 'Dos',
    materials: ['Encre noire', 'Dotwork'],
    featured: true,
  },
  {
    id: '11',
    title: 'Lune et Phases',
    category: 'tattoo',
    description:
      "Design minimaliste représentant les phases lunaires. Un tatouage délicat qui évoque les cycles naturels et le temps qui passe.",
    imageUrl: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&h=1000&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&h=500&fit=crop',
    year: 2024,
    dimensions: 'Poignet / Clavicule',
    materials: ['Fineline', 'Encre noire'],
    featured: true,
  },
  {
    id: '12',
    title: 'Phoenix Renaissant',
    category: 'tattoo',
    description:
      "Phoenix stylisé dans un style néo-traditionnel. Les flammes et les plumes s'entremêlent dans une composition dynamique symbolisant la renaissance et la résilience.",
    imageUrl: 'https://images.unsplash.com/photo-1590246814883-57c511ea349f?w=800&h=1000&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1590246814883-57c511ea349f?w=400&h=500&fit=crop',
    year: 2023,
    dimensions: 'Cuisse / Épaule',
    materials: ['Encre couleur', 'Ombrages traditionnels'],
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
