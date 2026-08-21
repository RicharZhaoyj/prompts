import Link from "next/link"
import { LayoutDashboard, FileText, Settings, Heart, Download } from "lucide-react"
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { getSupabaseServer, isSupabaseServerConfigured } from '@/lib/supabase-server'

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  const userId = (session?.user as { id?: string } | undefined)?.id
  let purchases: Array<{
    id: string
    prompt_id: string
    amount: number
    currency: string
    status: string
    created_at: string
  }> = []
  let purchaseMessage = ''

  if (!session?.user) {
    purchaseMessage = '登录后可以查看你的购买记录。'
  } else if (!userId) {
    purchaseMessage = '当前账户缺少可用身份标识。'
  } else if (!isSupabaseServerConfigured()) {
    purchaseMessage = '购买记录功能正在配置中。'
  } else {
    const result = await getSupabaseServer()
      .from('purchases')
      .select('id, prompt_id, amount, currency, status, created_at')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (result.error) {
      console.error('Unable to load dashboard purchases:', result.error)
      purchaseMessage = '暂时无法读取购买记录，请稍后再试。'
    } else {
      purchases = result.data ?? []
    }
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">欢迎回来！</h1>
          <p className="text-muted-foreground mt-2">管理你的账户和提示词</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-background border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-xl">U</span>
                </div>
                <div>
                  <p className="font-medium">用户</p>
                  <p className="text-sm text-muted-foreground">user@example.com</p>
                </div>
              </div>
              
              <nav className="space-y-2">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium"
                >
                  <LayoutDashboard className="w-5 h-5" />
                  仪表盘
                </Link>
                <Link
                  href="/prompts"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground"
                >
                  <FileText className="w-5 h-5" />
                  浏览提示词
                </Link>
                <Link
                  href="/submit"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground"
                >
                  <Download className="w-5 h-5" />
                  提交提示词
                </Link>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-background border rounded-lg p-6">
                <h3 className="text-muted-foreground text-sm mb-2">我的提示词</h3>
                <p className="text-3xl font-bold">0</p>
                <p className="text-sm text-muted-foreground mt-1">创建并分享</p>
              </div>
              <div className="bg-background border rounded-lg p-6">
                <h3 className="text-muted-foreground text-sm mb-2">已购买</h3>
                <p className="text-3xl font-bold">0</p>
                <p className="text-sm text-muted-foreground mt-1">提示词和资源</p>
              </div>
              <div className="bg-background border rounded-lg p-6">
                <h3 className="text-muted-foreground text-sm mb-2">收藏夹</h3>
                <p className="text-3xl font-bold">0</p>
                <p className="text-sm text-muted-foreground mt-1">保存的项目</p>
              </div>
            </div>

            <div className="bg-background border rounded-lg p-6 mb-8">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-xl font-semibold">我的购买</h2>
                  <p className="text-sm text-muted-foreground mt-1">已购买的提示词会显示在这里</p>
                </div>
                <Link href="/prompts" className="text-sm text-primary hover:underline">
                  继续浏览
                </Link>
              </div>

              {purchaseMessage ? (
                <p className="text-sm text-muted-foreground rounded-md bg-muted/50 p-4">
                  {purchaseMessage}
                </p>
              ) : purchases.length === 0 ? (
                <p className="text-sm text-muted-foreground rounded-md bg-muted/50 p-4">
                  还没有已完成的购买记录。
                </p>
              ) : (
                <div className="space-y-3">
                  {purchases.map((purchase) => (
                    <div key={purchase.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border rounded-md p-4">
                      <div>
                        <Link href={`/prompt/${purchase.prompt_id}`} className="font-medium hover:text-primary">
                          提示词 #{purchase.prompt_id}
                        </Link>
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(purchase.created_at).toLocaleString('zh-CN')}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="font-medium">
                          {(purchase.amount / 100).toFixed(2)} {purchase.currency.toUpperCase()}
                        </span>
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                          {purchase.status === 'paid' ? '已完成' : purchase.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-background border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">快速开始</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/submit"
                  className="p-4 border rounded-lg hover:bg-muted transition-colors"
                >
                  <h3 className="font-medium mb-1">提交你的第一个提示词</h3>
                  <p className="text-sm text-muted-foreground">分享知识，开始赚钱</p>
                </Link>
                <Link
                  href="/prompts"
                  className="p-4 border rounded-lg hover:bg-muted transition-colors"
                >
                  <h3 className="font-medium mb-1">浏览提示词商店</h3>
                  <p className="text-sm text-muted-foreground">发现优质资源</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
