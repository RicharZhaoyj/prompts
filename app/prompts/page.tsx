import Link from 'next/link'
import { Search, Filter, Star } from 'lucide-react'

const prompts = [
  {
    id: '1',
    title: 'Ultimate Blog Writer Pro',
    description: 'Generate SEO-optimized blog posts that rank on Google',
    category: 'Writing',
    price: 9.99,
    rating: 4.8,
    reviews: 234,
    sales: 1234,
    author: 'Sarah Chen',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop',
  },
  {
    id: '2',
    title: 'React Component Generator',
    description: 'Create production-ready React components with TypeScript',
    category: 'Coding',
    price: 14.99,
    rating: 4.9,
    reviews: 156,
    sales: 856,
    author: 'Alex Kim',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
  },
  {
    id: '3',
    title: 'Portrait Photography Prompt',
    description: 'Create stunning portrait photos with cinematic lighting',
    category: 'Image Generation',
    price: 7.99,
    rating: 4.7,
    reviews: 342,
    sales: 2341,
    author: 'Emma Wong',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
  },
  {
    id: '4',
    title: 'Email Marketing Campaigns',
    description: 'Write high-converting email sequences for any niche',
    category: 'Marketing',
    price: 12.99,
    rating: 4.6,
    reviews: 89,
    sales: 567,
    author: 'Michael Brown',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop',
  },
  {
    id: '5',
    title: 'Business Plan Generator',
    description: 'Create comprehensive business plans for startups',
    category: 'Business',
    price: 19.99,
    rating: 4.8,
    reviews: 178,
    sales: 923,
    author: 'Lisa Johnson',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
  },
  {
    id: '6',
    title: 'Product Description Writer',
    description: 'Write compelling product descriptions that sell',
    category: 'Marketing',
    price: 8.99,
    rating: 4.5,
    reviews: 123,
    sales: 789,
    author: 'David Lee',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
  },
  {
    id: '7',
    title: 'Landscape Art Generator',
    description: 'Create breathtaking landscape images with depth',
    category: 'Image Generation',
    price: 6.99,
    rating: 4.8,
    reviews: 267,
    sales: 1456,
    author: 'Anna Zhang',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
  },
  {
    id: '8',
    title: 'Code Debug Assistant',
    description: 'Find and fix bugs in your code instantly',
    category: 'Coding',
    price: 11.99,
    rating: 4.7,
    reviews: 145,
    sales: 634,
    author: 'James Wilson',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop',
  },
]

const categories = ['All', 'Writing', 'Coding', 'Image Generation', 'Marketing', 'Business', 'Education', 'Creative']

export default function PromptsPage() {
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
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded" />
                      {cat}
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
              <p className="text-sm text-muted-foreground">Showing 1-12 of 1,234 results</p>
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
                      src={prompt.image}
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
                      <span className="text-xs text-muted-foreground">by {prompt.author}</span>
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
