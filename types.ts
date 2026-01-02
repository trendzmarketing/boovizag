export interface DiaryEntry {
  id: string;
  name: string;
  area: string;
  bestTime: string;
  note: string;
  tags: string[];
  category: 'coffee' | 'food' | 'beach' | 'quiet' | 'outskirts';
  image: string;
}

export interface TripIdea {
  id: string;
  title: string;
  forWho: string;
  pace: 'Slow' | 'Relaxed' | 'Active';
  description: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[]; // Array of paragraphs
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}