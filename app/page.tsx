import Link from 'next/link'
import { Sparkles, TrendingUp, Users, Shield, RefreshCw, Star, CheckCircle, Gift } from 'lucide-react'
import { getFeaturedPrompts, getCategories } from '@/lib/prompts'
import { Metadata } from 'next'
import { TrendingPrompts } from './components/trending-prompts'
import { NewsletterSubscribe } from './components/newsletter-subscribe'
import { StructuredData } from './components/structured-data'

const LAST_UPDATED = new Date().toLocaleString('zh-CN', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
})

export const metadata: Metadata = {
  title: 'PromptMarket - AI提示词免费库 | ChatGPT Midjourney提示词',
  description: '发现、免费使用高质量AI提示词！支持ChatGPT、Midjourney、Stable Diffusion、Claude等主流AI工具。全部免费，内测期间不限量使用！',
  keywords: 'AI提示词, ChatGPT提示词, Midjourney提示词, Stable Diffusion提示词, Claude提示词, 提示词免费, AI工具, 提示词模板, AI写作, AI绘画',
  openGraph: {
    title: 'PromptMarket - AI提示词免费库',
    description: '发现、免费使用高质量AI提示词。全部免费，内测期间不限量！',
    type: 'website',
    url: 'https://prompts.link.cn',
    siteName: 'PromptMarket',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PromptMarket - AI提示词免费库',
    description: '发现、免费使用高质量AI提示词。',
    creator: '@promptmarket',
  },
  alternates: {
    canonical: 'https://prompts.link.cn',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default async function Home() {
  const featuredPrompts = await getFeaturedPrompts()
  const categories = await getCategories()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PromptMarket',
    url: 'https://prompts.link.cn',
    description: '发现、免费使用高质量AI提示词。支持ChatGPT、Midjourney、Stable Diffusion、Claude等主流AI工具。',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://prompts.link.cn/prompts?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
      {/* Beta Banner */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-2 text-sm">
            <Gift className="w-4 h-4 text-primary" />
            <span className="font-medium text-primary">🔥 内测期间全部免费！</span>
            <span className="text-muted-foreground">无需注册，即可使用所有提示词</span>
          </div>
        </div>
      </div>

      {/* Update Time Banner */}
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <RefreshCw className="w-3 h-3" />
            <span>最后更新: {LAST_UPDATED}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            收录 1,000+ 精选AI提示词
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            发现完美的 <br />
            <span className="text-primary">AI提示词</span> 提升你的效率
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            全部免费使用！涵盖写作、编程、设计、营销等多个场景。
            <br />
            无需注册，直接使用。帮助1000+用户提升工作效率。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/prompts"
              className="px-8 py-3 text-lg font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
            >
              免费浏览提示词
            </Link>
            <Link
              href="/submit"
              className="px-8 py-3 text-lg font-medium rounded-lg border hover:bg-accent"
            >
              成为创作者
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 justify-center">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <div className="text-sm">
                <div className="font-semibold">100% 免费</div>
                <div className="text-muted-foreground">内测期间全部免费</div>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Shield className="w-6 h-6 text-blue-500" />
              <div className="text-sm">
                <div className="font-semibold">已验证质量</div>
                <div className="text-muted-foreground">每个提示词经过测试</div>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Users className="w-6 h-6 text-purple-500" />
              <div className="text-sm">
                <div className="font-semibold">1000+ 用户</div>
                <div className="text-muted-foreground">正在使用我们的提示词</div>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <TrendingUp className="w-6 h-6 text-orange-500" />
              <div className="text-sm">
                <div className="font-semibold">每日更新</div>
                <div className="text-muted-foreground">持续新增优质内容</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">精选热门提示词</h3>
              <p className="text-muted-foreground">
                精心挑选最受欢迎和实用的提示词，持续更新
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">真实用户反馈</h3>
              <p className="text-muted-foreground">
                基于真实使用场景优化，经过大量用户验证
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">质量保证</h3>
              <p className="text-muted-foreground">
                所有提示词都经过测试，确保有效性和实用性
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">按分类浏览</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/prompts?category=${category.name}`}
                className="p-6 bg-background rounded-lg border hover:border-primary hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-2">{category.emoji}</div>
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.prompt_count} 个提示词</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Prompts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">精选提示词</h2>
            <Link href="/prompts" className="text-primary font-medium hover:underline">
              查看全部 →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPrompts.map((prompt) => (
              <Link
                key={prompt.id}
                href={`/prompt/${prompt.id}`}
                className="bg-background border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={prompt.image_url}
                    alt={prompt.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium">
                    {prompt.category}
                  </span>
                  <span className="absolute top-3 right-3 px-2 py-1 bg-green-500/90 text-white rounded-full text-xs font-medium">
                    免费
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{prompt.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {prompt.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{prompt.rating}</span>
                      <span className="text-sm text-muted-foreground">({prompt.reviews}条评价)</span>
                    </div>
                    <span className="text-sm text-muted-foreground">by {prompt.author_name}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Prompts Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <TrendingPrompts />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <NewsletterSubscribe />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">成为提示词创作者</h2>
          <p className="text-xl mb-8 opacity-90">
            分享你的专业知识，获得用户反馈，未来还能获得收益
          </p>
          <Link
            href="/submit"
            className="inline-block px-8 py-3 bg-background text-foreground font-medium rounded-lg hover:bg-accent"
          >
            提交你的第一个提示词
          </Link>
        </div>
      </section>
    </div>
    </>
  )
}
