'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { CheckCircle, ArrowRight, Copy, FileText } from 'lucide-react'
import { useState, useEffect, useRef, Suspense } from 'react'
import { analytics } from '@/app/components/analytics'

interface PurchasedPrompt {
  id: string
  title: string
  content: string
  price: number
  type: string
}

function PurchaseSuccessContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [copied, setCopied] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [prompt, setPrompt] = useState<PurchasedPrompt | null>(null)
  const [error, setError] = useState('')
  const purchaseTracked = useRef(false)

  const sessionId = searchParams.get('session_id')

  useEffect(() => {
    if (!sessionId) {
      setError('缺少支付会话，无法验证购买结果。')
      setIsLoading(false)
      return
    }

    fetch(`/api/checkout/verify?session_id=${encodeURIComponent(sessionId)}`)
      .then(async (response) => {
        const data = await response.json()
        if (!response.ok || !data.prompt) throw new Error(data.error || '验证失败')
        setPrompt(data.prompt)
        if (!purchaseTracked.current) {
          analytics.purchase(sessionId, data.prompt.price)
          purchaseTracked.current = true
        }
      })
      .catch(() => setError('暂时无法验证支付结果，请稍后刷新或联系客服。'))
      .finally(() => setIsLoading(false))
  }, [sessionId])

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (error || !prompt) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-bold mb-3">支付结果待确认</h1>
          <p className="text-muted-foreground mb-6">{error || '未找到已验证的购买内容。'}</p>
          <button onClick={() => router.push('/prompts')} className="px-5 py-3 bg-primary text-primary-foreground rounded-lg font-medium">
            返回提示词库
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="text-2xl font-bold mb-2">购买成功</h1>
            <p className="text-muted-foreground">
              {prompt.title} 已解锁，可以复制使用。
            </p>
          </div>

          <div className="bg-background border rounded-xl overflow-hidden mb-8">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground mb-1">已购买内容</div>
                  <h3 className="font-bold text-lg mb-2">{prompt.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">一次购买，终身使用。</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Prompt Content</span>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <Copy className="w-4 h-4" />
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <pre className="text-sm font-mono text-muted-foreground whitespace-pre-wrap">
                  {prompt.content}
                </pre>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => router.push('/prompts')}
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 flex items-center justify-center gap-2"
            >
              Browse More Prompts
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => router.push('/dashboard')}
              className="w-full py-3 border rounded-lg font-medium hover:bg-accent"
            >
              View My Purchases
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PurchaseSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <PurchaseSuccessContent />
    </Suspense>
  )
}

