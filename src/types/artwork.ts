export type ArtworkCategory = 'character-design' | 'comic' | 'tattoo'

export interface Artwork {
  id: string
  title: string
  category: ArtworkCategory
  description?: string
  imageUrl: string
  thumbnailUrl?: string
  year?: number
  dimensions?: string
  materials?: string[]
  featured?: boolean
}

export interface ArtworkFilter {
  category?: ArtworkCategory
  year?: number
  featured?: boolean
}
