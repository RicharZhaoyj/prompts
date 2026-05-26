import Link from 'next/link'
import { User, Settings, TrendingUp, Package, Heart, Edit, Plus } from 'lucide-react'
import { SAMPLE_PROMPTS } from '@/lib/prompts'

export default function ProfilePage() {
  const userPrompts = SAMPLE_PROMPTS.slice(0, 3)
  const totalViews = userPrompts.reduce((sum, p) => sum + p.sales, 0)

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-background border rounded-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-3xl">U</span>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-2">创作者中心</h1>
              <p className="text-muted-foreground mb-4">欢迎加入PromptMarket社区！</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/prompts"
                  className="px-4 py-2 border rounded-md hover:bg-accent text-sm"
                >
                  浏览提示词
                </Link>
                <Link
                  href="/submit"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 text-sm flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  分享提示词
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-background border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-muted-foreground text-sm">分享提示词</span>
            </div>
            <div className="text-3xl font-bold">{userPrompts.length}</div>
          </div>
          <div className="bg-background border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-muted-foreground text-sm">查看次数</span>
            </div>
            <div className="text-3xl font-bold">{totalViews}</div>
          </div>
          <div className="bg-background border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-yellow-600" />
              </div>
              <span className="text-muted-foreground text-sm">收藏数</span>
            </div>
            <div className="text-3xl font-bold">--</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Settings Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-background border rounded-xl p-4">
              <h3 className="font-semibold mb-4">导航</h3>
              <nav className="space-y-1">
                <Link
                  href="/profile"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary"
                >
                  <User className="w-4 h-4" />
                  我的资料
                </Link>
                <Link
                  href="/submit"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent"
                >
                  <Plus className="w-4 h-4" />
                  分享提示词
                </Link>
                <Link
                  href="/prompts"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent"
                >
                  <Package className="w-4 h-4" />
                  浏览提示词
                </Link>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* My Prompts */}
            <div className="bg-background border rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">我分享的提示词</h2>
                <Link
                  href="/submit"
                  className="text-primary hover:underline text-sm flex items-center gap-1"
                >
                  <Plus className="w-4 h-4" />
                  分享新提示词
                </Link>
              </div>

              {userPrompts.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <Package className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>还没有分享提示词</p>
                  <Link
                    href="/submit"
                    className="text-primary hover:underline mt-2 inline-block"
                  >
                    分享你的第一个提示词
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {userPrompts.map(prompt => (
                    <div key={prompt.id} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-muted/50">
                      <div className="w-20 h-20 bg-muted rounded-lg flex-shrink-0 overflow-hidden">
                        <img
                          src={prompt.image_url}
                          alt={prompt.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <Link href={`/prompt/${prompt.id}`} className="font-medium hover:text-primary">
                              {prompt.title}
                            </Link>
                            <p className="text-sm text-muted-foreground">{prompt.category}</p>
                          </div>
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">免费</span>
                        </div>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span>{prompt.sales} 次查看</span>
                          <span>⭐ {prompt.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="bg-background border rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">快速操作</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/submit"
                  className="p-4 border rounded-lg hover:bg-muted/50 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Plus className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">分享提示词</h3>
                    <p className="text-sm text-muted-foreground">帮助更多人</p>
                  </div>
                </Link>
                <Link
                  href="/blog"
                  className="p-4 border rounded-lg hover:bg-muted/50 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Edit className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">学习教程</h3>
                    <p className="text-sm text-muted-foreground">提升提示词技巧</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Community Info */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-3">加入创作者社区</h2>
              <p className="text-muted-foreground mb-4">
                分享你的AI提示词，帮助更多人提升效率。内测期间，积极贡献的创作者将获得优先权益！
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span>展示你的专业能力</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-primary" />
                  <span>获得社区认可</span>
                </div>
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-primary" />
                  <span>优先体验新功能</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
