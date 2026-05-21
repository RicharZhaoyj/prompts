import Link from 'next/link'
import { Metadata } from 'next'
import { Home, Search, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: '404 - 页面未找到 | PromptMarket',
  description: '抱歉，您访问的页面不存在。返回首页或浏览我们的提示词库。',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary/10">404</h1>
          <h2 className="text-3xl font-bold mb-4 -mt-8">页面未找到</h2>
        </div>
        
        <p className="text-xl text-muted-foreground mb-8">
          抱歉，您访问的页面不存在或已被移除。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Home className="w-5 h-5" />
            返回首页
          </Link>
          <Link
            href="/prompts"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border rounded-lg font-medium hover:bg-accent transition-colors"
          >
            <Search className="w-5 h-5" />
            浏览提示词
          </Link>
        </div>

        <div className="bg-muted/50 rounded-lg p-6">
          <h3 className="font-semibold mb-2">您可以尝试：</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• 检查URL是否正确</li>
            <li>• 使用搜索功能查找提示词</li>
            <li>• 浏览我们的热门提示词</li>
            <li>• 联系我们的支持团队</li>
          </ul>
        </div>

        <div className="mt-8">
          <Link
            href="javascript:history.back()"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回上一页
          </Link>
        </div>
      </div>
    </div>
  )
}