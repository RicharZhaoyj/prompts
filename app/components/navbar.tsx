'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import { User, Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`border-b sticky top-0 z-50 transition-all ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-background'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold">P</span>
          </div>
          <span className="text-xl font-bold">PromptMarket</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5">
          <Link href="/" className="text-sm font-medium hover:text-primary">首页</Link>
          <Link href="/prompts" className="text-sm font-medium hover:text-primary">浏览</Link>
          <Link href="/skills" className="text-sm font-medium hover:text-primary flex items-center gap-1">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">NEW</span>
            AI技能
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary">博客</Link>
          <Link href="/submit" className="text-sm font-medium hover:text-primary">提交</Link>
          <Link href="/docs" className="text-sm font-medium hover:text-primary">文档</Link>
          <span className="h-4 w-px bg-border mx-1" />
          <div className="flex items-center gap-1.5">
            <a 
              href="https://tools.link.cn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 transition-all"
            >
              <span>🛠️</span>
              <span>工具</span>
            </a>
            <a 
              href="https://ai.link.cn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-full bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200 transition-all"
            >
              <span>📰</span>
              <span>资讯</span>
            </a>
            <a 
              href="https://tool.link.cn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-full bg-cyan-50 text-cyan-700 hover:bg-cyan-100 border border-cyan-200 transition-all"
            >
              <span>⚡</span>
              <span>LTD</span>
            </a>
            <a 
              href="https://signal.link.cn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-full bg-orange-50 text-orange-700 hover:bg-orange-100 border border-orange-200 transition-all"
            >
              <span>₿</span>
              <span>加密</span>
            </a>
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-medium rounded-md border hover:bg-accent"
          >
            登录
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <User className="w-4 h-4" />
            仪表盘
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-accent rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <Link 
              href="/" 
              className="block px-4 py-3 rounded-md hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              首页
            </Link>
            <Link 
              href="/prompts" 
              className="block px-4 py-3 rounded-md hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              浏览
            </Link>
            <Link 
              href="/skills" 
              className="block px-4 py-3 rounded-md hover:bg-accent flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">NEW</span>
              AI技能
            </Link>
            <Link 
              href="/blog" 
              className="block px-4 py-3 rounded-md hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              博客
            </Link>
            <Link 
              href="/submit" 
              className="block px-4 py-3 rounded-md hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              提交
            </Link>
            <Link 
              href="/docs" 
              className="block px-4 py-3 rounded-md hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              文档
            </Link>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://tools.link.cn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 text-sm font-medium border border-blue-200"
                onClick={() => setIsMenuOpen(false)}
              >
                🛠️ 工具推荐
              </a>
              <a
                href="https://ai.link.cn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-50 text-purple-700 text-sm font-medium border border-purple-200"
                onClick={() => setIsMenuOpen(false)}
              >
                📰 热点资讯
              </a>
              <a
                href="https://tool.link.cn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-cyan-50 text-cyan-700 text-sm font-medium border border-cyan-200"
                onClick={() => setIsMenuOpen(false)}
              >
                ⚡ AI工具LTD
              </a>
              <a
                href="https://signal.link.cn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-orange-50 text-orange-700 text-sm font-medium border border-orange-200"
                onClick={() => setIsMenuOpen(false)}
              >
                ₿ 加密分析
              </a>
            </div>
            
            <div className="border-t pt-4 mt-4 space-y-2">
              <Link
                href="/login"
                className="block px-4 py-3 rounded-md border text-center hover:bg-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                登录
              </Link>
              <Link
                href="/dashboard"
                className="block px-4 py-3 rounded-md bg-primary text-primary-foreground text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                仪表盘
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
