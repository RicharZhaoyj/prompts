'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-1BWZN3C49H'

function AnalyticsContent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const url = pathname + searchParams.toString()
    
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', GA_ID, {
        page_path: url,
      })
    }
  }, [pathname, searchParams])

  return null
}

function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            send_page_view: false
          });
        `}
      </Script>
      <Suspense fallback={null}>
        <AnalyticsContent />
      </Suspense>
    </>
  )
}

export default Analytics

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    gtagReportConversion: (url: string) => boolean
  }
}

export const analytics = {
  pageView: (url: string, title?: string) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'page_view', {
        page_location: url,
        page_title: title || document.title,
      })
    }
  },

  event: (action: string, category: string, label?: string, value?: number) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    }
  },

  purchase: (transactionId: string, value: number, currency: string = 'USD') => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'purchase', {
        transaction_id: transactionId,
        value: value,
        currency: currency,
      })
    }
  },

  signup: (method: string) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'sign_up', {
        method: method,
      })
    }
  },

  share: (contentType: string, itemId: string, method: string) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'share', {
        content_type: contentType,
        item_id: itemId,
        method: method,
      })
    }
  },

  search: (searchTerm: string) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'search', {
        search_term: searchTerm,
      })
    }
  },

  viewItem: (id: string, name: string, category: string, price: number) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'view_item', {
        items: [{
          item_id: id,
          item_name: name,
          item_category: category,
          price: price,
        }],
      })
    }
  },

  addToCart: (id: string, name: string, category: string, price: number) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'add_to_cart', {
        items: [{
          item_id: id,
          item_name: name,
          item_category: category,
          price: price,
        }],
      })
    }
  },

  beginCheckout: (id: string, name: string, category: string, price: number) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'begin_checkout', {
        items: [{
          item_id: id,
          item_name: name,
          item_category: category,
          price: price,
        }],
      })
    }
  },
}
