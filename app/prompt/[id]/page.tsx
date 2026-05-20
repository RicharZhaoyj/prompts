import Link from 'next/link'
import { Star, CheckCircle, Clock } from 'lucide-react'
import { getPromptById } from '@/lib/prompts'
import { Metadata } from 'next'
import PromptDetailClient from './prompt-detail-client'
import { StructuredData } from '@/app/components/structured-data'

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const prompt = await getPromptById(params.id)
  
  if (!prompt) {
    return {
      title: '提示词未找到 - PromptMarket',
      description: '您访问的提示词不存在或已被删除。',
    }
  }

  const seoKeywords = [
    ...(prompt.tags || []),
    `${prompt.category}提示词`,
    'AI提示词',
    'ChatGPT',
    'Midjourney'
  ].filter(Boolean).join(', ')

  return {
    title: `${prompt.title} - PromptMarket | AI提示词商店`,
    description: `${prompt.description} - 高质量的${prompt.category}提示词，${prompt.rating}星评价，${prompt.sales}人已购买。`,
    keywords: seoKeywords,
    openGraph: {
      title: prompt.title,
      description: prompt.description,
      type: 'product',
      url: `https://prompts.link.cn/prompt/${prompt.id}`,
      siteName: 'PromptMarket',
      images: [
        {
          url: prompt.image_url,
          width: 1200,
          height: 630,
          alt: prompt.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: prompt.title,
      description: prompt.description,
      images: [prompt.image_url],
      creator: '@promptmarket',
    },
    alternates: {
      canonical: `https://prompts.link.cn/prompt/${prompt.id}`,
    },
  }
}

export default async function PromptDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const prompt = await getPromptById(params.id)

  if (!prompt) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-muted-foreground">Prompt not found</p>
          <Link href="/prompts" className="text-primary hover:underline mt-4 inline-block">
            Browse prompts
          </Link>
        </div>
      </div>
    )
  }

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: prompt.title,
    description: prompt.description,
    image: prompt.image_url,
    offers: {
      '@type': 'Offer',
      price: String(prompt.price),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: prompt.author_name,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(prompt.rating),
      reviewCount: String(prompt.sales),
    },
  }

  return (
    <>
      <StructuredData type="product" data={productSchema} />
      <PromptDetailClient prompt={prompt} />
    </>
  )
}
