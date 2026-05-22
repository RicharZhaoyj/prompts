import Link from "next/link"
import { Github, Mail } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 py-12 px-4">
      <div className="max-w-md w-full bg-background border rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block text-2xl font-bold text-primary mb-4">
            PromptMarket
          </Link>
          <h1 className="text-2xl font-bold">欢迎回来</h1>
          <p className="text-muted-foreground mt-2">选择一种方式登录或注册</p>
        </div>

        <div className="space-y-4">
          <button
            className="w-full flex items-center justify-center gap-3 py-3 border rounded-lg hover:bg-muted transition-colors"
          >
            <Github className="w-5 h-5" />
            继续使用 GitHub
          </button>

          <button
            className="w-full flex items-center justify-center gap-3 py-3 border rounded-lg hover:bg-muted transition-colors"
          >
            <Mail className="w-5 h-5" />
            继续使用 Google
          </button>
        </div>

        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            登录功能即将上线
          </p>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <Link href="/" className="text-primary font-medium hover:underline">
            浏览提示词
          </Link>
        </div>
      </div>
    </div>
  )
}
