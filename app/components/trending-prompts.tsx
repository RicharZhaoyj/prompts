import { getTrendingPrompts } from '@/lib/prompts'
import Link from 'next/link'
import { Trophy, Star, Download } from 'lucide-react'

export async function TrendingPrompts() {
  const trendingPrompts = await getTrendingPrompts(5)

  return (
    <div className="bg-background border rounded-xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="w-5 h-5 text-yellow-500" />
        <h2 className="text-lg font-semibold">热门提示词</h2>
      </div>

      <div className="space-y-4">
        {trendingPrompts.map((prompt, index) => (
          <Link
            key={prompt.id}
            href={`/prompt/${prompt.id}`}
            className="flex items-start gap-3 group"
          >
            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                {index + 1}
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-medium group-hover:text-primary transition-colors truncate">
                {prompt.title}
              </h3>
              <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  {prompt.rating}
                </span>
                <span className="flex items-center gap-1">
                  <Download className="w-3 h-3" />
                  {prompt.sales}
                </span>
              </div>
            </div>

            <div className="flex-shrink-0 font-semibold">
              ${prompt.price}
            </div>
          </Link>
        ))}
      </div>

      <Link
        href="/prompts"
        className="mt-6 block text-center text-sm text-primary hover:underline"
      >
        查看所有提示词 →
      </Link>
    </div>
  )
}
