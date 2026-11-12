export interface WordPressPost {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media?: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
    'author'?: Array<{
      name: string;
      avatar_urls?: Record<string, string>;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
  };
  // Fallback direct properties for easy rendering
  featuredImageUrl?: string;
  categoryName?: string;
  readTimeMinutes?: number;
  authorName?: string;
}

export interface WordPressFetchResult {
  posts: WordPressPost[];
  totalPages: number;
  totalPosts: number;
  isFallback: boolean;
  error?: string;
}
