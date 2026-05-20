'use client'

import { useState } from 'react'
import { Mail, CheckCircle, Send } from 'lucide-react'

export function NewsletterSubscribe() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus('success')
        setMessage('Welcome to our community! Check your email to confirm.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage('Something went wrong. Please try again later.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again later.')
    }
  }

  return (
    <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
          <Mail className="w-6 h-6 text-primary-foreground" />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">
            Join our Newsletter
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            Get the latest AI prompts and productivity tips delivered to your inbox weekly.
          </p>

          {status === 'success' ? (
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm">{message}</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                {status === 'loading' ? (
                  <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                <span className="hidden sm:inline">Subscribe</span>
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="text-red-500 text-sm mt-2">{message}</p>
          )}
        </div>
      </div>
    </div>
  )
}
