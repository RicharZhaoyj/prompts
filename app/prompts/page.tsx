import Link from 'next/link'
import { Search, Filter, Star } from 'lucide-react'
import { getPrompts, getCategories } from '@/lib/prompts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '浏览AI提示词 - PromptMarket',
  description: '浏览超过10,000+高质量的AI提示词，覆盖写作、编程、图像生成、营销等多个领域。',
  keywords: 'AI提示词列表, ChatGPT提示词库, Midjourney提示词, 提示词大全',
  openGraph: {
    title: '浏览AI提示词 - PromptMarket',
    description: '浏览超过10,000+高质量的AI提示词。',
    type: 'website',
  },
}

export default async function PromptsPage({
  searchParams,
}: {
  searchParams?: { category?: string; search?: string }
}) {
  const category = searchParams?.category
  const search = searchParams?.search
  const prompts = await getPrompts(category, search)
  const categories = await getCategories()

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
                      {cat.name}
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
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
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

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-12">
              <button className="px-4 py-2 border rounded-md text-sm font-medium hover:bg-accent disabled:opacity-50" disabled>
                Previous
              </button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium">
                1
              </button>
              <button className="px-4 py-2 border rounded-md text-sm font-medium hover:bg-accent">
                2
              </button>
              <button className="px-4 py-2 border rounded-md text-sm font-medium hover:bg-accent">
                3
              </button>
              <span className="px-2">...</span>
              <button className="px-4 py-2 border rounded-md text-sm font-medium hover:bg-accent">
                102
              </button>
              <button className="px-4 py-2 border rounded-md text-sm font-medium hover:bg-accent">
                Next
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
