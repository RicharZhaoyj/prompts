import Link from 'next/link'
import { Search, Filter, Star } from 'lucide-react'
import { getPrompts, getCategories } from '@/lib/prompts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI提示词库：ChatGPT、Midjourney、Claude模板',
  description: '浏览可直接复制的AI提示词库，覆盖ChatGPT、Claude、Midjourney、编程、写作、营销和图像生成，按场景筛选免费与付费Prompt模板。',
  keywords: 'AI提示词库, ChatGPT提示词, Midjourney提示词, Claude提示词, 提示词模板, 免费Prompt',
  alternates: {
    canonical: 'https://prompts.link.cn/prompts',
  },
  openGraph: {
    title: 'AI提示词库：ChatGPT、Midjourney、Claude模板',
    description: '按写作、编程、营销和图像生成场景浏览可复制的免费与付费Prompt模板。',
    url: 'https://prompts.link.cn/prompts',
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
          <h1 className="text-3xl font-bold mb-4">浏览AI提示词</h1>
          <p className="text-muted-foreground">
            发现精选高质量提示词，适用于ChatGPT、Midjourney、Claude等主流AI工具
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-background border rounded-lg p-6 sticky top-4">
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">搜索</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="搜索提示词..."
                    className="w-full pl-10 pr-4 py-2 border rounded-md text-sm"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">分类</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" />
                    全部
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
                <label className="text-sm font-medium mb-2 block">价格范围</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" />
                    免费
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" />
                    $10 以下
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" />
                    $10 - $50
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" />
                    $50 以上
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">评分</label>
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
                应用筛选
              </button>
            </div>

            {/* 姊妹站点联动卡片 */}
            <div className="mt-8 space-y-3">
              <h3 className="text-sm font-semibold mb-3">🔗 更多AI资源</h3>
              <a
                href="https://tools.link.cn"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-blue-50 border border-blue-100 rounded-lg hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">🛠️</span>
                  <span className="font-semibold text-gray-900 text-sm group-hover:text-blue-700">AI工具推荐</span>
                </div>
                <p className="text-xs text-gray-600">精选有评测的AI工具</p>
                <span className="mt-2 text-xs text-blue-600 font-medium">访问 tools.link.cn ↗</span>
              </a>

              <a
                href="https://ai.link.cn"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-purple-50 border border-purple-100 rounded-lg hover:border-purple-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">📰</span>
                  <span className="font-semibold text-gray-900 text-sm group-hover:text-purple-700">AI热点资讯</span>
                </div>
                <p className="text-xs text-gray-600">了解最新行业动态</p>
                <span className="mt-2 text-xs text-purple-600 font-medium">访问 ai.link.cn ↗</span>
              </a>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Sort & Results */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">显示 {prompts.length} 个结果</p>
              <div className="flex items-center gap-2">
                <span className="text-sm">排序:</span>
                <select className="border rounded-md px-3 py-1 text-sm">
                  <option>热门</option>
                  <option>最新</option>
                  <option>价格: 低到高</option>
                  <option>价格: 高到低</option>
                  <option>评分</option>
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
                      <span className="text-sm text-muted-foreground">({prompt.reviews} 条评价)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold">${prompt.price}</span>
                        <span className="text-sm text-muted-foreground ml-2">已售 {prompt.sales}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">作者: {prompt.author_name}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-12">
              <button className="px-4 py-2 border rounded-md text-sm font-medium hover:bg-accent disabled:opacity-50" disabled>
                上一页
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
                下一页
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
