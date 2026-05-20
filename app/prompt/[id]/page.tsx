import Link from 'next/link'
import { Star, CheckCircle, Clock } from 'lucide-react'
import { getPromptById } from '@/lib/prompts'
import { Metadata } from 'next'
import PromptDetailClient from './prompt-detail-client'

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const prompt = await getPromptById(params.id)
  
  if (!prompt) {
    return {
      title: '提示词未找到 - PromptMarket',
    }
  }

  return {
    title: `${prompt.title} - PromptMarket`,
    description: prompt.description,
    keywords: prompt.tags?.join(', ') || '',
    openGraph: {
      title: prompt.title,
      description: prompt.description,
      images: [prompt.image_url || ''],
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

  return <PromptDetailClient prompt={prompt} />
}
