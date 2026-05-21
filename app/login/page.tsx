import Link from "next/link"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Github, Mail } from "lucide-react"
import { Metadata } from "next"
import { handleSignIn } from "./actions"

export const metadata: Metadata = {
  title: '登录 - PromptMarket | AI提示词商店',
  description: '登录PromptMarket，浏览和购买高质量的AI提示词，或提交您的提示词开始赚钱。',
  keywords: '登录PromptMarket, AI提示词账户, 提示词卖家登录',
  robots: {
    index: false,
    follow: true,
  },
}

export default async function LoginPage() {
  const session = await auth()
  if (session) {
    redirect("/dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 py-12 px-4">
      <div className="max-w-md w-full bg-background border rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block text-2xl font-bold text-primary mb-4">
            PromptMarket
          </Link>
          <h1 className="text-2xl font-bold">欢迎回来</h1>
          <p className="text-muted-foreground mt-2">选择一种方式登录</p>
        </div>

        <div className="space-y-4">
          <form action={() => handleSignIn("github")}>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-3 border rounded-lg hover:bg-muted transition-colors"
            >
              <Github className="w-5 h-5" />
              继续使用 GitHub
            </button>
          </form>

          <form action={() => handleSignIn("google")}>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-3 border rounded-lg hover:bg-muted transition-colors"
            >
              <Mail className="w-5 h-5" />
              继续使用 Google
            </button>
          </form>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          还没有账号？
          <Link href="/login" className="text-primary font-medium hover:underline ml-1">
            立即注册
          </Link>
        </div>
      </div>
    </div>
  )
}