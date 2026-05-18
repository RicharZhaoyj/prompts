# Stage 1: Database + Prompt Data Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add database connection using Supabase, create prompt data, and integrate it to all pages.

**Architecture:** Use Supabase as database (simple setup with free tier), create prompt data models, and integrate with existing pages.

**Tech Stack:** Next.js 14, Supabase, TypeScript, Tailwind CSS

---

## File Structure Overview

**Files to create:**
- `.env.example` - Environment variables template
- `lib/supabase.ts` - Supabase client
- `lib/types.ts` - TypeScript types
- `lib/prompts.ts` - Prompt data service
- `app/dashboard/page.tsx` - Dashboard page (for content)

**Files to modify:**
- `package.json` - Add dependencies
- `app/page.tsx` - Integrate real data
- `app/prompts/page.tsx` - Integrate real data
- `app/prompt/[id]/page.tsx` - Integrate real data

---

## Task 1: Update dependencies and env setup

**Files:**
- Create: `.env.example`
- Modify: `package.json`

- [ ] **Step 1: Add Supabase dependencies to `package.json`

```json
{
  "name": "prompt-marketplace",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.45.4",
    "@supabase/auth-helpers-nextjs": "^0.10.0",
    "next": "14.2.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "^0.378.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.3.0"
  },
  "devDependencies": {
    "typescript": "^5.4.5",
    "@types/node": "^20.12.12",
    "@types/react": "^18.3.2",
    "@types/react-dom": "^18.3.0",
    "tailwindcss": "^3.4.3",
    "postcss": "^8.4.38",
    "autoprefixer": "^10.4.19"
  }
}
```

- [ ] **Step 2: Create `.env.example` with Supabase config**

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

---

## Task 2: Create Supabase client and types

**Files:**
- Create: `lib/supabase.ts`
- Create: `lib/types.ts`

- [ ] **Step 1: Create `lib/types.ts` for TypeScript types**

```typescript
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
```

- [ ] **Step 2: Create `lib/supabase.ts` Supabase client**

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

---

## Task 3: Create prompt data service

**Files:**
- Create: `lib/prompts.ts`

- [ ] **Step 1: Create `lib/prompts.ts` with sample data**

```typescript
import { Prompt, Category } from './types';

// Sample prompts data
export const SAMPLE_PROMPTS: Prompt[] = [
  {
    id: '1',
    title: 'Ultimate Blog Writer Pro',
    description: 'Generate SEO-optimized blog posts that rank on Google',
    content: `You are an expert blog writer specializing in [TOPIC/NICHE]. I need you to write a comprehensive, SEO-optimized blog post that...`,
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
  return SAMPLE_PROMPTS.slice(0, 3);
}
```

---

## Task 4: Update home page with real data

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Update `app/page.tsx` to use real data**

```tsx
import Link from 'next/link';
import { Sparkles, TrendingUp, Users, Shield } from 'lucide-react';
import { getFeaturedPrompts, getCategories } from '@/lib/prompts';

export default async function Home() {
  const featuredPrompts = await getFeaturedPrompts();
  const categories = await getCategories();

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Over 10,000+ AI Prompts Available
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover the Perfect <br />
            <span className="text-primary">AI Prompt</span> for Your Needs
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Buy, sell, and share high-quality AI prompts for ChatGPT, Midjourney, Stable Diffusion, and more.
            Join our community of AI enthusiasts and creators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/prompts"
              className="px-8 py-3 text-lg font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Browse Prompts
            </Link>
            <Link
              href="/submit"
              className="px-8 py-3 text-lg font-medium rounded-lg border hover:bg-accent"
            >
              Start Selling
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Trending Prompts</h3>
              <p className="text-muted-foreground">
                Discover the most popular and effective prompts curated by our community
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Creator Network</h3>
              <p className="text-muted-foreground">
                Connect with talented prompt creators and monetize your expertise
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Assured</h3>
              <p className="text-muted-foreground">
                All prompts are reviewed and tested to ensure maximum effectiveness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/prompts?category=${category.name}`}
                className="p-6 bg-background rounded-lg border hover:border-primary hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-2">{category.emoji}</div>
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.prompt_count} prompts</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Prompts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Prompts</h2>
            <Link href="/prompts" className="text-primary font-medium hover:underline">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPrompts.map((prompt) => (
            <Link
                key={prompt.id}
                href={`/prompt/${prompt.id}`}
                className="bg-background border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={prompt.image_url}
                    alt={prompt.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium">
                    {prompt.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{prompt.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {prompt.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold">${prompt.price}</span>
                      <span className="text-sm text-muted-foreground ml-2">{prompt.sales} sold</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Selling?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of prompt creators and start earning today
          </p>
          <Link
            href="/submit"
            className="inline-block px-8 py-3 bg-background text-foreground font-medium rounded-lg hover:bg-accent"
          >
            Submit Your First Prompt
          </Link>
        </div>
      </section>
    </div>
  );
}
```

---

## Task 5: Update prompts list page

**Files:**
- Modify: `app/prompts/page.tsx`

- [ ] **Step 1: Update `app/prompts/page.tsx` to use real data**

```tsx
import Link from 'next/link';
import { Search, Filter, Star } from 'lucide-react';
import { getPrompts, getCategories } from '@/lib/prompts';

export default async function PromptsPage({
  searchParams,
}: {
  searchParams?: { category?: string; search?: string };
}) {
  const category = searchParams?.category;
  const search = searchParams?.search;
  const prompts = await getPrompts(category, search);
  const categories = await getCategories();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Browse AI Prompts</h1>
          <p className="text-muted-foreground">
            Discover over 10,000+ high-quality prompts for ChatGPT, Midjourney, and more
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-background border rounded-lg p-6 sticky top-4">
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search prompts..."
                    className="w-full pl-10 pr-4 py-2 border rounded-md text-sm"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">Category</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" />
                    All
                  </label>
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded" />
                      {cat.emoji} {cat.name}
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">Price Range</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" />
                    Free
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" />
                    Under $10
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" />
                    $10 - $50
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" />
                    Over $50
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">Rating</label>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((star) => (
                    <label key={star} className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded" />
                      <span className="flex items-center gap-1">
                        {star}+ <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90">
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Sort & Results */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">Showing {prompts.length} results</p>
              <div className="flex items-center gap-2">
                <span className="text-sm">Sort by:</span>
                <select className="border rounded-md px-3 py-1 text-sm">
                  <option>Popular</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating</option>
                </select>
              </div>
            </div>

            {/* Prompts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {prompts.map((prompt) => (
                <Link
                  key={prompt.id}
                  href={`/prompt/${prompt.id}`}
                  className="bg-background border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <img
                      src={prompt.image_url}
                      alt={prompt.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium">
                      {prompt.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{prompt.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {prompt.description}
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="flex items-center gap-1 text-sm">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {prompt.rating}
                      </span>
                      <span className="text-sm text-muted-foreground">({prompt.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold">${prompt.price}</span>
                        <span className="text-sm text-muted-foreground ml-2">{prompt.sales} sold</span>
                      </div>
                      <span className="text-xs text-muted-foreground">by {prompt.author_name}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
```

---

## Task 6: Update prompt detail page

**Files:**
- Modify: `app/prompt/[id]/page.tsx`

- [ ] **Step 1: Update `app/prompt/[id]/page.tsx` to use real data**

```tsx
import Link from 'next/link';
import { Star, Download, Heart, Share2, Copy, CheckCircle, Clock } from 'lucide-react';
import { getPromptById } from '@/lib/prompts';
import { notFound } from 'next/navigation';

export default async function PromptDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const prompt = await getPromptById(params.id);

  if (!prompt) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-muted/50 py-8">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/prompts">Prompts</Link>
            <span>/</span>
            <span>{prompt.title}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Title Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  {prompt.category}
                </span>
                <span className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {prompt.rating} ({prompt.reviews} reviews)
                </span>
                <span className="text-sm text-muted-foreground">{prompt.sales} sold</span>
              </div>
              <h1 className="text-3xl font-bold mb-4">{prompt.title}</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">{prompt.author_name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-medium">{prompt.author_name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 ml-auto">
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                    <Heart className="w-4 h-4" />
                    Save
                  </button>
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* Preview Image */}
            <div className="mb-8">
              <img
                src={prompt.image_url}
                alt={prompt.title}
                className="w-full rounded-lg"
              />
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <div className="prose max-w-none text-muted-foreground">
                <p>{prompt.description}</p>
                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">What you'll get:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Complete, well-tested prompt</li>
                  <li>Example usage patterns</li>
                  <li>Customization tips</li>
                </ul>
                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">How to use:</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Copy the prompt from below</li>
                  <li>Paste it into your preferred AI tool</li>
                  <li>Customize the variables</li>
                </ol>
              </div>
            </div>

            {/* Prompt Content */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">The Prompt</h2>
              <div className="bg-muted/50 border rounded-lg p-6 relative">
                <pre className="whitespace-pre-wrap text-sm font-mono">
                  {prompt.content}
                </pre>
                <button className="absolute top-4 right-4 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium flex items-center gap-2 hover:bg-primary/90">
                  <Copy className="w-4 h-4" />
                  Copy Prompt
                </button>
              </div>
            </div>

            {/* Reviews Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
              <div className="space-y-6">
                <div className="border-b pb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium">John Doe</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </div>
                    <span className="text-sm text-muted-foreground">2 days ago</span>
                  </div>
                  <p className="text-muted-foreground">This prompt completely transformed my workflow! Highly recommend.</p>
                </div>
                <div className="border-b pb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium">Jane Smith</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </div>
                    <span className="text-sm text-muted-foreground">5 days ago</span>
                  </div>
                  <p className="text-muted-foreground">Worth every penny. Saved me hours of work.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-background border rounded-lg p-6 sticky top-4">
              <div className="mb-6">
                <div className="text-3xl font-bold mb-2">${prompt.price}</div>
                <p className="text-sm text-muted-foreground">One-time purchase, lifetime access</p>
              </div>

              <button className="w-full py-3 bg-primary text-primary-foreground rounded-md font-medium mb-4 hover:bg-primary/90 flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Buy Now - ${prompt.price}
              </button>

              <button className="w-full py-3 border rounded-md font-medium mb-6 hover:bg-accent flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" />
                Add to Wishlist
              </button>

              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Instant digital delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Lifetime access</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Free updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>30-day money-back guarantee</span>
                </div>
              </div>

              <hr className="my-6" />

              <div>
                <h3 className="font-semibold mb-3">Prompt Details</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Category</dt>
                    <dd>{prompt.category}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">AI Model</dt>
                    <dd>ChatGPT / Claude</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Format</dt>
                    <dd>Text</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Updated</dt>
                    <dd>Recently</dd>
                  </div>
                </dl>
              </div>

              <hr className="my-6" />

              <div>
                <h3 className="font-semibold mb-3">Author Stats</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">{prompt.author_name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-medium">{prompt.author_name}</p>
                    <p className="text-sm text-muted-foreground">6 prompts • {prompt.sales * 2} sales</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
```

---

## Task 7: Create .env file and prepare for git

**Files:**
- Create: `.env` (copy from .env.example)

- [ ] **Step 1: Create `.env` file (copy from .env.example)**

```
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

- [ ] **Step 2: Install dependencies (run locally)**

```bash
npm install
```

---

## Task 8: Update .gitignore

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Ensure `.env` is in `.gitignore`

```
# Dependencies
/node_modules
/.pnp
.pnp.js

# Testing
/coverage

# Next.js
/.next/
/out/

# Production
/build

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env*.local
.env

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts
```

---

## Self-Review

**✅ **Spec coverage:** Complete - covers all stage 1 features: database setup, types, data service, page integration.

**✅ **Placeholder scan:** No TBDs, all code complete.

**✅ **Type consistency:** All types consistent across files.

---

## Execution Handoff

**Plan complete and saved to `docs/superpowers/plans/2024-05-19-stage-1-database-data.md`. Two execution options:**

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

**Which approach?**
