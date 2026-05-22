import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
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
                      The marketplace for AI prompts. Discover, share, and monetize your prompts.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Product</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><a href="/prompts" className="hover:text-foreground">Browse Prompts</a></li>
                      <li><a href="/submit" className="hover:text-foreground">Submit Prompt</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><a href="/docs" className="hover:text-foreground">Documentation</a></li>
                      <li><a href="/blog" className="hover:text-foreground">Blog</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><a href="/docs" className="hover:text-foreground">About</a></li>
                      <li><a href="/docs" className="hover:text-foreground">Terms</a></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                  © 2024 PromptMarket. All rights reserved.
                </div>
              </div>
            </footer>
          </div>
        </ToastProvider>
      </body>
    </html>
  )
}
