'use client'

import { useState } from 'react'
import {
  Twitter,
  Facebook,
  Linkedin,
  Copy,
  CheckCircle,
  Share2,
  MessageCircle,
  Send,
  Mail,
} from 'lucide-react'

type ShareProps = {
  title: string
  url: string
  image?: string
  description?: string
}

export function SocialShare({ title, url, image, description }: ShareProps) {
  const [copied, setCopied] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)
  const encodedDescription = encodeURIComponent(description || title)

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  const shareButtons = [
    {
      icon: Twitter,
      label: 'X (Twitter)',
      href: shareLinks.twitter,
      color: '#000000',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: shareLinks.facebook,
      color: '#1877F2',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: shareLinks.linkedin,
      color: '#0A66C2',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: shareLinks.whatsapp,
      color: '#25D366',
    },
    {
      icon: Send,
      label: 'Telegram',
      href: shareLinks.telegram,
      color: '#0088CC',
    },
    {
      icon: Mail,
      label: 'Email',
      href: shareLinks.email,
      color: '#EA4335',
    },
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-accent transition-colors"
      >
        <Share2 className="w-4 h-4" />
        <span className="text-sm">分享</span>
      </button>

      {showDropdown && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setShowDropdown(false)}
          />
          <div className="absolute right-0 mt-2 w-64 bg-background border rounded-xl shadow-lg z-20 overflow-hidden">
            <div className="p-3">
              <p className="text-xs text-muted-foreground mb-2 px-1">分享到平台</p>
              <div className="grid grid-cols-3 gap-2">
                {shareButtons.map((button, index) => (
                  <a
                    key={index}
                    href={button.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-accent transition-colors"
                    title={button.label}
                  >
                    <button.icon className="w-5 h-5" style={{ color: button.color }} />
                    <span className="text-xs">{button.label}</span>
                  </a>
                ))}
              </div>
              
              <hr className="my-3" />
              
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-3 w-full px-3 py-3 rounded-lg hover:bg-accent text-sm font-medium"
              >
                {copied ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
                <span>{copied ? '✅ 链接已复制!' : '复制链接'}</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
