import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import { Navbar } from './components/navbar'
import Analytics from './components/analytics'
import { ToastProvider } from './components/toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prompt Marketplace - AI Prompts Store',
  description: 'Discover, share, and sell high-quality AI prompts for ChatGPT, Midjourney, and more',
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
