import Link from 'next/link'
import { User, Settings, Shield, Bell, Edit, Plus, TrendingUp, DollarSign, Package } from 'lucide-react'
import { SAMPLE_PROMPTS } from '@/lib/prompts'

export default function ProfilePage() {
  const userPrompts = SAMPLE_PROMPTS.slice(0, 3)
  const totalSales = userPrompts.reduce((sum, p) => sum + p.sales, 0)
  const totalRevenue = userPrompts.reduce((sum, p) => sum + (p.sales * p.price * 0.8), 0)

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
              <h1 className="text-2xl font-bold mb-2">用户</h1>
              <p className="text-muted-foreground mb-4">user@example.com</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/dashboard"
                  className="px-4 py-2 border rounded-md hover:bg-accent text-sm"
                >
                  查看仪表盘
                </Link>
                <Link
                  href="/submit"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 text-sm flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  新提示词
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
              <span className="text-muted-foreground text-sm">提示词</span>
            </div>
            <div className="text-3xl font-bold">{userPrompts.length}</div>
          </div>
          <div className="bg-background border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-muted-foreground text-sm">销售</span>
            </div>
            <div className="text-3xl font-bold">{totalSales}</div>
          </div>
          <div className="bg-background border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-yellow-600" />
              </div>
              <span className="text-muted-foreground text-sm">收入</span>
            </div>
            <div className="text-3xl font-bold">${totalRevenue.toFixed(2)}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Settings Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-background border rounded-xl p-4">
              <h3 className="font-semibold mb-4">账户</h3>
              <nav className="space-y-1">
                <Link
                  href="/profile"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary"
                >
                  <User className="w-4 h-4" />
                  个人资料
                </Link>
                <Link
                  href="/prompts"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent"
                >
                  <Settings className="w-4 h-4" />
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
                <h2 className="text-xl font-bold">我的提示词</h2>
                <Link
                  href="/submit"
                  className="text-primary hover:underline text-sm"
                >
                  + 添加新
                </Link>
              </div>

              {userPrompts.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <Package className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>还没有提示词</p>
                  <Link
                    href="/submit"
                    className="text-primary hover:underline mt-2 inline-block"
                  >
                    创建你的第一个提示词
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {userPrompts.map(prompt => (
                    <div key={prompt.id} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-muted/50">
                      <div className="w-20 h-20 bg-muted rounded-lg flex-shrink-0 overflow-hidden">
                        <img
                          src={prompt.image_url}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-medium truncate">{prompt.title}</h3>
                            <p className="text-sm text-muted-foreground">{prompt.category}</p>
                          </div>
                          <span className="font-bold">${prompt.price}</span>
                        </div>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span>{prompt.sales} 售出</span>
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
                    <h3 className="font-medium">创建提示词</h3>
                    <p className="text-sm text-muted-foreground">分享你的知识</p>
                  </div>
                </Link>
                <Link
                  href="/prompts"
                  className="p-4 border rounded-lg hover:bg-muted/50 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Edit className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">浏览市场</h3>
                    <p className="text-sm text-muted-foreground">寻找灵感</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
