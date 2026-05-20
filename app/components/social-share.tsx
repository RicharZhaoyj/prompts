'use client'

import { useState } from 'react'
import {
  Twitter,
  Facebook,
  Linkedin,
  Copy,
  CheckCircle,
  Share2,
} from 'lucide-react'

type ShareProps = {
  title: string
  url: string
  image?: string
}

export function SocialShare({ title, url, image }: ShareProps) {
  const [copied, setCopied] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
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

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-accent transition-colors"
      >
        <Share2 className="w-4 h-4" />
        <span className="text-sm">Share</span>
      </button>

      {showDropdown && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setShowDropdown(false)}
          />
          <div className="absolute right-0 mt-2 w-56 bg-background border rounded-lg shadow-lg z-20 overflow-hidden">
            <div className="p-2 space-y-1">
              <a
                href={shareLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent text-sm"
              >
                <Twitter className="w-4 h-4" />
                <span>Share on X (Twitter)</span>
              </a>

              <a
                href={shareLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent text-sm"
              >
                <Facebook className="w-4 h-4" />
                <span>Share on Facebook</span>
              </a>

              <a
                href={shareLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent text-sm"
              >
                <Linkedin className="w-4 h-4" />
                <span>Share on LinkedIn</span>
              </a>

              <hr className="my-1" />

              <button
                onClick={handleCopyLink}
                className="flex items-center gap-3 w-full px-3 py-2 rounded-md hover:bg-accent text-sm"
              >
                {copied ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
