import Link from "next/link"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { LayoutDashboard, FileText, Settings, Heart, Download } from "lucide-react"

export default async function DashboardPage() {
  const session = await auth()
  if (!session) {
    redirect("/login")
  }

  const user = session.user

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">欢迎回来，{user?.name}！</h1>
          <p className="text-muted-foreground mt-2">管理你的账户和提示词</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-background border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-xl">
                    {user?.name?.charAt(0) || "U"}
                  </span>
                </div>
                <div>
                  <p className="font-medium">{user?.name}</p>
                  <p className="text-sm text-muted-foreground">{user?.email}</p>
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
                  href="/dashboard/prompts"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground"
                >
                  <FileText className="w-5 h-5" />
                  我的提示词
                </Link>
                <Link
                  href="/dashboard/purchases"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground"
                >
                  <Download className="w-5 h-5" />
                  购买记录
                </Link>
                <Link
                  href="/dashboard/saved"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground"
                >
                  <Heart className="w-5 h-5" />
                  收藏夹
                </Link>
                <Link
                  href="/dashboard/settings"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground"
                >
                  <Settings className="w-5 h-5" />
                  设置
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
