import { Prompt, Category } from './types';

// Sample prompts data
export const SAMPLE_PROMPTS: Prompt[] = [
  {
    id: '1',
    title: 'Ultimate Blog Writer Pro',
    description: 'Generate SEO-optimized blog posts that rank on Google',
    content: `You are an expert blog writer specializing in [TOPIC/NICHE]. I need you to write a comprehensive, SEO-optimized blog post that:

1. **Title:** Create a compelling, keyword-rich title that hooks readers
2. **Meta Description:** Write a 150-160 character meta description
3. **Introduction:** Start with a powerful hook that addresses [PAIN_POINT/AUDIENCE_CHALLENGE]
4. **Main Content:** Cover these key points:
   - Point 1: [KEY_MESSAGE]
   - Point 2: [SUPPORTING_DETAIL]
   - Point 3: [ACTIONABLE_TIP]
5. **Conclusion:** Summarize and include a clear call-to-action

**Style Requirements:**
- Tone: [FRIENDLY/PROFESSIONAL/CASUAL]
- Length: [SHORT/MEDIUM/LONG - specify word count]
- Include subheadings for scannability
- Add bullet points where appropriate
- Maintain conversational flow

**SEO Requirements:**
- Primary keyword: [KEYWORD]
- Secondary keywords: [RELATED_KEYWORDS]
- Include internal linking suggestions
- Optimize for featured snippets where possible

Let's start writing!`,
    category: 'Writing',
    price: 9.99,
    rating: 4.8,
    reviews: 234,
    sales: 1234,
    author_id: 'user-1',
    author_name: 'Sarah Chen',
    image_url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop',
    tags: ['SEO', 'blog', 'content', 'marketing'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'React Component Generator',
    description: 'Create production-ready React components with TypeScript',
    content: 'You are a senior React engineer. I need you to create a production-ready React component that...',
    category: 'Coding',
    price: 14.99,
    rating: 4.9,
    reviews: 156,
    sales: 856,
    author_id: 'user-2',
    author_name: 'Alex Kim',
    image_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    tags: ['React', 'TypeScript', 'components', 'frontend'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Portrait Photography Prompt',
    description: 'Create stunning portrait images with cinematic lighting',
    content: 'A professional portrait photograph, cinematic lighting, depth of field, 85mm lens, f/1.8...',
    category: 'Image Generation',
    price: 7.99,
    rating: 4.7,
    reviews: 342,
    sales: 2341,
    author_id: 'user-3',
    author_name: 'Emma Wong',
    image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    tags: ['portrait', 'Midjourney', 'photography', 'art'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Email Marketing Campaigns',
    description: 'Write high-converting email sequences for any niche',
    content: 'You are an email marketing expert. I need you to write a 7-day email sequence that...',
    category: 'Marketing',
    price: 12.99,
    rating: 4.6,
    reviews: 89,
    sales: 567,
    author_id: 'user-4',
    author_name: 'Michael Brown',
    image_url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop',
    tags: ['email', 'marketing', 'sales', 'conversion'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '5',
    title: 'Business Plan Generator',
    description: 'Create comprehensive business plans for startups',
    content: 'You are a business consultant. I need you to create a comprehensive business plan for a startup in...',
    category: 'Business',
    price: 19.99,
    rating: 4.8,
    reviews: 178,
    sales: 923,
    author_id: 'user-5',
    author_name: 'Lisa Johnson',
    image_url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    tags: ['business', 'startup', 'plan', 'strategy'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '6',
    title: 'Product Description Writer',
    description: 'Write compelling product descriptions that sell',
    content: 'You are a copywriting expert. I need you to write a compelling product description for...',
    category: 'Marketing',
    price: 8.99,
    rating: 4.5,
    reviews: 123,
    sales: 789,
    author_id: 'user-6',
    author_name: 'David Lee',
    image_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    tags: ['copywriting', 'product', 'ecommerce', 'sales'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '7',
    title: 'Midjourney Landscape Master',
    description: 'Generate breathtaking landscape and nature images',
    content: 'An epic landscape photograph, golden hour, dramatic sky, [LOCATION_SCENE], 24mm wide-angle lens, National Geographic style, award-winning photography, 8K, ultra-detailed...',
    category: 'Image Generation',
    price: 9.99,
    rating: 4.9,
    reviews: 521,
    sales: 3124,
    author_id: 'user-7',
    author_name: 'Mia Rodriguez',
    image_url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop',
    tags: ['Midjourney', 'landscape', 'nature', 'photography'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '8',
    title: 'Python Code Debugger Pro',
    description: 'Debug and optimize Python code like a senior engineer',
    content: 'You are a senior Python engineer with 10+ years of experience. Analyze the following Python code, identify bugs, suggest optimizations, and provide clean, production-ready fixes...',
    category: 'Coding',
    price: 11.99,
    rating: 4.7,
    reviews: 287,
    sales: 1456,
    author_id: 'user-8',
    author_name: 'James Wilson',
    image_url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    tags: ['Python', 'debugging', 'optimization', 'backend'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '9',
    title: 'Social Media Content Creator',
    description: 'Viral-worthy posts for Instagram, Twitter, LinkedIn',
    content: 'You are a social media strategist who has grown accounts from 0 to 100K+ followers. Create engaging content for [PLATFORM] about [TOPIC]...',
    category: 'Marketing',
    price: 10.99,
    rating: 4.8,
    reviews: 412,
    sales: 2234,
    author_id: 'user-9',
    author_name: 'Jessica Taylor',
    image_url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
    tags: ['social media', 'Instagram', 'LinkedIn', 'viral'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '10',
    title: 'Math Problem Solver & Tutor',
    description: 'Learn and solve math problems with step-by-step explanations',
    content: 'You are an experienced math tutor with a Ph.D. in Mathematics. Explain how to solve this problem in simple, clear steps...',
    category: 'Education',
    price: 6.99,
    rating: 4.9,
    reviews: 623,
    sales: 4567,
    author_id: 'user-10',
    author_name: 'Dr. Robert Park',
    image_url: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=300&fit=crop',
    tags: ['math', 'tutor', 'education', 'learning'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '11',
    title: 'Creative Story Generator',
    description: 'Write engaging fiction and creative stories in any genre',
    content: 'You are an award-winning fiction author. Write a compelling story with these elements: [GENRE], [CHARACTER], [SETTING], [PLOT_TWIST]...',
    category: 'Creative',
    price: 8.99,
    rating: 4.7,
    reviews: 345,
    sales: 1876,
    author_id: 'user-11',
    author_name: 'Emma Stone',
    image_url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    tags: ['fiction', 'story', 'creative', 'writing'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '12',
    title: 'Daily Productivity Coach',
    description: 'Transform your productivity and achieve your goals',
    content: 'You are a productivity coach who has helped thousands of people double their output. Analyze my current routine and provide a personalized plan...',
    category: 'Productivity',
    price: 7.99,
    rating: 4.8,
    reviews: 267,
    sales: 1345,
    author_id: 'user-12',
    author_name: 'Chris Anderson',
    image_url: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=300&fit=crop',
    tags: ['productivity', 'time management', 'goals', 'habits'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export const CATEGORIES: Category[] = [
  { id: 'writing', name: 'Writing', emoji: '✍️', prompt_count: 2340 },
  { id: 'coding', name: 'Coding', emoji: '💻', prompt_count: 1890 },
  { id: 'image', name: 'Image Generation', emoji: '🎨', prompt_count: 3200 },
  { id: 'marketing', name: 'Marketing', emoji: '📊', prompt_count: 1560 },
  { id: 'business', name: 'Business', emoji: '💼', prompt_count: 1120 },
  { id: 'education', name: 'Education', emoji: '📚', prompt_count: 980 },
  { id: 'creative', name: 'Creative', emoji: '✨', prompt_count: 2780 },
  { id: 'productivity', name: 'Productivity', emoji: '⚡', prompt_count: 1450 },
];

// Get all prompts
export async function getPrompts(category?: string, search?: string): Promise<Prompt[]> {
  // For now, use sample data - later will connect to Supabase
  let prompts = [...SAMPLE_PROMPTS];
  
  if (category && category !== 'All') {
    prompts = prompts.filter(p => p.category === category);
  }
  
  if (search) {
    const searchLower = search.toLowerCase();
    prompts = prompts.filter(
      p => p.title.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower)
    );
  }
  
  return prompts;
}

// Get prompt by id
export async function getPromptById(id: string): Promise<Prompt | undefined> {
  return SAMPLE_PROMPTS.find(p => p.id === id);
}

// Get all categories
export async function getCategories(): Promise<Category[]> {
  return CATEGORIES;
}

// Get featured prompts
export async function getFeaturedPrompts(): Promise<Prompt[]> {
  return SAMPLE_PROMPTS.slice(0, 6);
}

// Get trending prompts (by sales)
export async function getTrendingPrompts(limit: number = 5): Promise<Prompt[]> {
  return [...SAMPLE_PROMPTS]
    .sort((a, b) => b.sales - a.sales)
    .slice(0, limit);
}
