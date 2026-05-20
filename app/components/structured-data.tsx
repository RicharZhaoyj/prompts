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

export function StructuredData({
  type = 'website',
  data,
}: {
  type: 'website' | 'product'
  data: WebsiteSchema | ProductSchema
}) {
  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}