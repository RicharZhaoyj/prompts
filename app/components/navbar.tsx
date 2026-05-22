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
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">首页</Link>
          <Link href="/prompts" className="text-sm font-medium hover:text-primary">浏览</Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary">博客</Link>
          <Link href="/submit" className="text-sm font-medium hover:text-primary">提交</Link>
          <Link href="/docs" className="text-sm font-medium hover:text-primary">文档</Link>
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
