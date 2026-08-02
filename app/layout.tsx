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
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
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
                    <h3 className="font-semibold mb-4">热门分类</h3>
                    <div className="flex flex-wrap gap-2">
                      <Link href="/skills" className="inline-flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-700 dark:text-purple-400 rounded-full text-xs hover:from-purple-500/20 hover:to-pink-500/20 transition-colors font-medium">
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[9px] px-1 rounded font-bold">NEW</span>
                        🤖 AI技能
                      </Link>
                      <Link href="/category/写作" className="inline-block px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs hover:bg-primary/20 transition-colors">✍️ 写作</Link>
                      <Link href="/category/编程" className="inline-block px-2.5 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-xs hover:bg-blue-500/20 transition-colors">💻 编程</Link>
                      <Link href="/category/图像生成" className="inline-block px-2.5 py-1 bg-pink-500/10 text-pink-600 dark:text-pink-400 rounded-full text-xs hover:bg-pink-500/20 transition-colors">🎨 图像生成</Link>
                      <Link href="/category/营销" className="inline-block px-2.5 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-full text-xs hover:bg-orange-500/20 transition-colors">📣 营销</Link>
                      <Link href="/category/商业" className="inline-block px-2.5 py-1 bg-violet-500/10 text-violet-600 dark:text-violet-400 rounded-full text-xs hover:bg-violet-500/20 transition-colors">💼 商业</Link>
                      <Link href="/category/教育" className="inline-block px-2.5 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-xs hover:bg-indigo-500/20 transition-colors">📚 教育</Link>
                      <Link href="/category/创意" className="inline-block px-2.5 py-1 bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 rounded-full text-xs hover:bg-fuchsia-500/20 transition-colors">✨ 创意</Link>
                      <Link href="/category/职场" className="inline-block px-2.5 py-1 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-xs hover:bg-cyan-500/20 transition-colors">💼 职场</Link>
                    </div>
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
