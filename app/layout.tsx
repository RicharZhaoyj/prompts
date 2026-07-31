import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import { Navbar } from './components/navbar'
import Analytics from './components/analytics'
import { ToastProvider } from './components/toast'
import { StructuredData } from './components/structured-data'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'AI提示词免费库2026 | ChatGPT/Midjourney/Claude高质量Prompt模板',
    template: '%s | PromptMarket - AI提示词免费库',
  },
  description: '国内高质量AI提示词免费库2026，收录ChatGPT/GPT-5、Midjourney、Claude、Stable Diffusion/Flux等主流AI工具精选Prompt模板。覆盖AI写作、编程、设计、营销、办公、副业变现等场景，一键复制即用，附提示词工程教程与最佳实践。',
  keywords: 'AI提示词,ChatGPT提示词,Midjourney提示词,Claude提示词,Stable Diffusion提示词,Flux提示词,提示词模板,提示词免费,提示词工程,Prompt市场,AI写作提示词,AI绘画提示词,GPT-5提示词,AI办公提效,提示词优化技巧',
  authors: [{ name: 'PromptMarket' }],
  creator: 'PromptMarket',
  publisher: 'PromptMarket',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: 'PromptMarket',
    title: 'PromptMarket - AI提示词免费库',
    description: '发现、分享、免费使用高质量的AI提示词',
    url: 'https://prompts.link.cn',
    images: [
      {
        url: 'https://prompts.link.cn/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PromptMarket - AI提示词免费库',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PromptMarket - AI提示词免费库',
    description: '发现、分享、免费使用高质量的AI提示词',
    images: ['https://prompts.link.cn/twitter-card.png'],
  },
  alternates: {
    canonical: 'https://prompts.link.cn',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <Analytics />
        <StructuredData
          type="website"
          data={{
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'PromptMarket',
            url: 'https://prompts.link.cn',
            description: 'AI提示词免费库，发现、分享、免费使用高质量的AI提示词，涵盖ChatGPT、Midjourney、Claude等主流AI工具。',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://prompts.link.cn/prompts?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          } as any}
        />
        <ToastProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <footer className="border-t">
              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                        <span className="text-primary-foreground text-xs font-bold">P</span>
                      </div>
                      <span className="font-bold">PromptMarket</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      AI提示词免费库，发现、分享、免费使用高质量的AI提示词。
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">产品</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><Link href="/prompts" className="hover:text-foreground">浏览提示词</Link></li>
                      <li><Link href="/submit" className="hover:text-foreground">提交提示词</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">资源</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><Link href="/docs" className="hover:text-foreground">文档</Link></li>
                      <li><Link href="/blog" className="hover:text-foreground">博客</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">姊妹站点 ↗</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><a href="https://tools.link.cn" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">🛠️ AI工具推荐</a></li>
                      <li><a href="https://ai.link.cn" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">📰 AI热点资讯</a></li>
                      <li><a href="https://tool.link.cn" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600">⚡ AI工具LTD</a></li>
                      <li><a href="https://signal.link.cn" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">₿ 加密货币分析</a></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                  © 2026 PromptMarket · <a href="https://tools.link.cn" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">AI工具</a> · <a href="https://ai.link.cn" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">AI热点</a> · <a href="https://tool.link.cn" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600">LTD</a> · <a href="https://signal.link.cn" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">加密分析</a>
                </div>
              </div>
            </footer>
          </div>
        </ToastProvider>
      </body>
    </html>
  )
}
