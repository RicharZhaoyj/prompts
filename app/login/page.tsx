
'use client'

import Link from "next/link"
import { useSession, signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Github, Mail } from "lucide-react"
import { useEffect } from "react"

export default function LoginPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.push("/dashboard")
    }
  }, [session, router])

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

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
            onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
            className="w-full flex items-center justify-center gap-3 py-3 border rounded-lg hover:bg-muted transition-colors"
          >
            <Github className="w-5 h-5" />
            继续使用 GitHub
          </button>

          <button
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="w-full flex items-center justify-center gap-3 py-3 border rounded-lg hover:bg-muted transition-colors"
          >
            <Mail className="w-5 h-5" />
            继续使用 Google
          </button>
        </div>

        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            首次登录即自动创建账户，无需单独注册
          </p>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <Link href="/docs" className="text-primary font-medium hover:underline">
            了解更多关于账户的信息
          </Link>
        </div>
      </div>
    </div>
  )
}
