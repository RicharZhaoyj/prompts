'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { CheckCircle, ArrowRight, Copy, FileText } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function PurchaseSuccessPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [copied, setCopied] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const sessionId = searchParams.get('session_id')

  useEffect(() => {
    if (sessionId) {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
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

  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Success Icon */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Purchase Successful!</h1>
            <p className="text-muted-foreground">
              Thank you for your purchase. Your prompt is ready to use.
            </p>
          </div>

          {/* Prompt Card */}
          <div className="bg-background border rounded-xl overflow-hidden mb-8">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground mb-1">Your Prompt</div>
                  <h3 className="font-bold text-lg mb-2">Ultimate Blog Post Writer Pro</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    A comprehensive prompt for generating high-quality blog posts with SEO optimization and engaging content.
                  </p>
                </div>
              </div>

              {/* Prompt Content */}
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
                  You are an expert content writer. Write a comprehensive blog post about [TOPIC] that is engaging, informative, and optimized for SEO. Include:
                  1. An attention-grabbing introduction
                  2. Key points with detailed explanations
                  3. Practical examples
                  4. A strong conclusion with a call to action
                  Target audience: [AUDIENCE]
                  Tone: [TONE]
                  Word count: [WORDS] words
                </pre>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
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
