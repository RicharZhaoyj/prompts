import Script from 'next/script'

type WebsiteSchema = {
  '@context': 'https://schema.org'
  '@type': 'WebSite'
  name: string
  url: string
  description?: string
  potentialAction?: {
    '@type': 'SearchAction'
    target: string
    'query-input': string
  }
}

type ProductSchema = {
  '@context': 'https://schema.org'
  '@type': 'Product'
  name: string
  description: string
  image?: string | string[]
  offers: {
    '@type': 'Offer'
    price: string
    priceCurrency: string
    availability: string
  }
}

type FAQSchema = {
  '@context': 'https://schema.org'
  '@type': 'FAQPage'
  mainEntity: Array<{
    '@type': 'Question'
    name: string
    acceptedAnswer: {
      '@type': 'Answer'
      text: string
    }
  }>
}

type CollectionSchema = {
  '@context': 'https://schema.org'
  '@type': 'CollectionPage'
  name: string
  description: string
  url: string
  numberOfItems?: number
}

type ArticleSchema = {
  '@context': 'https://schema.org'
  '@type': 'Article'
  headline: string
  description?: string
  image?: string | string[]
  author?: {
    '@type': 'Person' | 'Organization'
    name: string
  }
  datePublished?: string
  dateModified?: string
}

export function StructuredData({
  type = 'website',
  data,
}: {
  type: 'website' | 'product' | 'faq' | 'collection' | 'article'
  data: WebsiteSchema | ProductSchema | FAQSchema | CollectionSchema | ArticleSchema
}) {
  return (
    <Script
      id={`structured-data-${type}-${Math.random().toString(36).slice(2, 8)}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}