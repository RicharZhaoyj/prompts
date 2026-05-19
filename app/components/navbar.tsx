import Link from "next/link"
import { auth, signOut } from "@/lib/auth"
import { User, LogOut, Menu, X } from "lucide-react"

export async function Navbar() {
  const session = await auth()
  const user = session?.user

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold">P</span>
          </div>
          <span className="text-xl font-bold">PromptMarket</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">首页</Link>
          <Link href="/prompts" className="text-sm font-medium hover:text-primary">浏览</Link>
          <Link href="/submit" className="text-sm font-medium hover:text-primary">提交</Link>
          <Link href="/docs" className="text-sm font-medium hover:text-primary">文档</Link>
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <User className="w-4 h-4" />
                仪表盘
              </Link>
              <form
                action={async () => {
                  "use server"
                  await signOut()
                }}
              >
                <button
                  type="submit"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border hover:bg-accent"
                >
                  <LogOut className="w-4 h-4" />
                  退出
                </button>
              </form>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-medium rounded-md border hover:bg-accent"
              >
                登录
              </Link>
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
              >
                开始使用
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
