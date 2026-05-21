'use client'

import { useCallback } from 'react'

export function useAnalytics() {
  const trackEvent = useCallback((action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    }
  }, [])

  const trackPageView = useCallback((url: string, title?: string) => {
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      window.gtag('event', 'page_view', {
        page_location: url,
        page_title: title || document.title,
      })
    }
  }, [])

  const trackPromptView = useCallback((id: string, name: string, category: string, price: number) => {
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      window.gtag('event', 'view_item', {
        items: [{
          item_id: id,
          item_name: name,
          item_category: category,
          price: price,
        }],
      })
    }
  }, [])

  const trackPromptPurchase = useCallback((id: string, name: string, category: string, price: number) => {
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      window.gtag('event', 'purchase', {
        transaction_id: `tx_${Date.now()}`,
        value: price,
        currency: 'USD',
        items: [{
          item_id: id,
          item_name: name,
          item_category: category,
          price: price,
        }],
      })
    }
  }, [])

  const trackSignup = useCallback((method: string) => {
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      window.gtag('event', 'sign_up', {
        method: method,
      })
    }
  }, [])

  const trackShare = useCallback((contentType: string, itemId: string, method: string) => {
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      window.gtag('event', 'share', {
        content_type: contentType,
        item_id: itemId,
        method: method,
      })
    }
  }, [])

  const trackSearch = useCallback((searchTerm: string) => {
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      window.gtag('event', 'search', {
        search_term: searchTerm,
      })
    }
  }, [])

  const trackNewsletterSubscribe = useCallback((email: string) => {
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      window.gtag('event', 'subscribe', {
        event_category: 'engagement',
        event_label: 'newsletter',
        value: 1,
      })
    }
  }, [])

  const trackPromptSubmit = useCallback((category: string) => {
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      window.gtag('event', 'submit_prompt', {
        event_category: 'engagement',
        event_label: category,
      })
    }
  }, [])

  return {
    trackEvent,
    trackPageView,
    trackPromptView,
    trackPromptPurchase,
    trackSignup,
    trackShare,
    trackSearch,
    trackNewsletterSubscribe,
    trackPromptSubmit,
  }
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}