export type Prompt = {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  sales: number;
  author_id: string;
  author_name: string;
  image_url?: string;
  tags?: string[];
  created_at: string;
  updated_at: string;
};

export type Category = {
  id: string;
  name: string;
  emoji: string;
  prompt_count: number;
};

export type User = {
  id: string;
  email: string;
  name: string;
  avatar_url?: string;
};
