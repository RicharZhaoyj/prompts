import Link from 'next/link'
import { Star, CheckCircle, Clock } from 'lucide-react'
import { getPromptById, getPromptReviews, getRelatedPrompts } from '@/lib/prompts'
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
    title: prompt.title,
    description: `${prompt.description} - 高质量的${prompt.category}提示词，${prompt.rating}星评价，${prompt.sales}人已购买。`,
    keywords: seoKeywords,
    openGraph: {
      title: prompt.title,
      description: prompt.description,
      type: 'website',
      url: `https://prompts.link.cn/prompt/${prompt.id}`,
      siteName: 'PromptMarket',
      images: prompt.image_url ? [
        {
          url: prompt.image_url,
          width: 1200,
          height: 630,
          alt: prompt.title,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: prompt.title,
      description: prompt.description,
      images: prompt.image_url ? [prompt.image_url] : [],
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
          <p className="text-xl text-muted-foreground">提示词未找到</p>
          <Link href="/prompts" className="text-primary hover:underline mt-4 inline-block">
            浏览提示词
          </Link>
        </div>
      </div>
    )
  }

  // 获取该提示词的真实评论
  const reviews = getPromptReviews(params.id)
  // 获取相关提示词推荐（同分类、同标签）
  const relatedPrompts = getRelatedPrompts(params.id, 6)

  // 付费正文只在支付验证接口确认后返回，避免随未购买详情页下发完整内容。
  const clientPrompt = prompt.price > 0
    ? { ...prompt, content: prompt.content.slice(0, 240) }
    : prompt
  const clientRelatedPrompts = relatedPrompts.map((related) => (
    related.price > 0
      ? { ...related, content: related.content.slice(0, 120) }
      : related
  ))

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: prompt.title,
    description: prompt.description,
    image: prompt.image_url || '',
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
      reviewCount: String(prompt.reviews),
    },
  }

  // FAQPage Schema（根据提示词类型动态生成FAQ）
  const isSkill = prompt.type === 'skill'
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: isSkill
          ? `如何在${(prompt as any).skill_platform?.split(',')[0] || 'IDE'}中安装和使用${prompt.title}？`
          : `${prompt.title}适合哪些场景使用？`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: isSkill
            ? `${prompt.title}是一个AI技能(SKILL.md格式)，适用于${(prompt as any).skill_platform || '主流AI IDE'}。安装方式：1) 下载SKILL.md文件；2) 在你的AI IDE（如Trae/Cursor）中导入该技能；3) 在对话中调用即可自动执行。详细安装步骤请参考详情页的安装指南。`
            : `${prompt.title}适用于${prompt.category}场景。使用方法：1) 复制提示词内容；2) 粘贴到ChatGPT/Claude/Midjourney等AI工具中；3) 根据你的具体需求替换占位符内容；4) AI生成结果后可进一步追问优化。本提示词已被${prompt.sales}+用户使用验证。`,
        },
      },
      {
        '@type': 'Question',
        name: `${prompt.title}是免费的吗？支持哪些AI工具？`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: prompt.price > 0
            ? `本${isSkill ? '技能' : '提示词'}为一次性购买内容，价格为${prompt.price}美元。登录后可在线购买，支付成功后解锁完整内容。`
            : `本${isSkill ? '技能' : '提示词'}完全免费使用。${isSkill ? '兼容Trae、Cursor、Windsurf等支持SKILL.md格式的AI IDE。' : '兼容ChatGPT/GPT-4/GPT-5、Claude 3/4、文心一言、通义千问、Kimi等所有主流大语言模型。'}复制后直接粘贴到对应工具即可使用。`,
        },
      },
      {
        '@type': 'Question',
        name: `如何让AI输出效果更好？有什么使用技巧？`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `3个核心技巧：① 提供具体上下文——把你的项目背景、目标受众、已有素材告诉AI，输出质量提升300%；② 分步迭代——不要一次性让AI完成全部，先出大纲→确认后再展开→最后润色；③ 给参考范例——如果有满意的旧作品，附在提示词后让AI学习风格。更多技巧请参考详情页的使用指南。`,
        },
      },
    ],
  }

  return (
    <>
      <StructuredData type="product" data={productSchema as any} />
      <StructuredData type="faq" data={faqSchema as any} />
      <PromptDetailClient prompt={clientPrompt} reviews={reviews} relatedPrompts={clientRelatedPrompts} />
    </>
  )
}
