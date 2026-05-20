import Link from 'next/link'
import { Sparkles, TrendingUp, Users, Shield } from 'lucide-react'
import { getFeaturedPrompts, getCategories } from '@/lib/prompts'
import { Metadata } from 'next'
import TrendingPrompts from './components/trending-prompts'
import NewsletterSubscribe from './components/newsletter-subscribe'

export const metadata: Metadata = {
  title: 'PromptMarket - AI提示词商店 | ChatGPT Midjourney Prompt',
  description: '发现、购买、分享高质量的AI提示词。支持ChatGPT、Midjourney、Stable Diffusion、Claude等主流AI工具。加入创作者社区，变现你的AI提示词！',
  keywords: 'AI提示词, ChatGPT提示词, Midjourney提示词, Stable Diffusion提示词, Claude提示词, 提示词商店, AI工具, 提示词模板, AI写作, AI绘画',
  openGraph: {
    title: 'PromptMarket - AI提示词商店',
    description: '发现、购买、分享高质量的AI提示词。支持ChatGPT、Midjourney、Stable Diffusion等主流AI工具。',
    type: 'website',
    url: 'https://prompts.link.cn',
    siteName: 'PromptMarket',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PromptMarket - AI提示词商店',
    description: '发现、购买、分享高质量的AI提示词。',
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
    description: '发现、购买、分享高质量的AI提示词。支持ChatGPT、Midjourney、Stable Diffusion、Claude等主流AI工具。',
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
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Over 10,000+ AI Prompts Available
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover the Perfect <br />
            <span className="text-primary">AI Prompt</span> for Your Needs
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Buy, sell, and share high-quality AI prompts for ChatGPT, Midjourney, Stable Diffusion, and more.
            Join our community of AI enthusiasts and creators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/prompts"
              className="px-8 py-3 text-lg font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Browse Prompts
            </Link>
            <Link
              href="/submit"
              className="px-8 py-3 text-lg font-medium rounded-lg border hover:bg-accent"
            >
              Start Selling
            </Link>
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
              <h3 className="text-lg font-semibold mb-2">Trending Prompts</h3>
              <p className="text-muted-foreground">
                Discover the most popular and effective prompts curated by our community
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Creator Network</h3>
              <p className="text-muted-foreground">
                Connect with talented prompt creators and monetize your expertise
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Assured</h3>
              <p className="text-muted-foreground">
                All prompts are reviewed and tested to ensure maximum effectiveness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/prompts?category=${category.name}`}
                className="p-6 bg-background rounded-lg border hover:border-primary hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-2">{category.emoji}</div>
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.prompt_count} prompts</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Prompts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Prompts</h2>
            <Link href="/prompts" className="text-primary font-medium hover:underline">
              View All →
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
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{prompt.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {prompt.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">${prompt.price}</span>
                    <span className="text-sm text-muted-foreground">{prompt.sales} sold</span>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Start Selling?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of prompt creators and start earning today
          </p>
          <Link
            href="/submit"
            className="inline-block px-8 py-3 bg-background text-foreground font-medium rounded-lg hover:bg-accent"
          >
            Submit Your First Prompt
          </Link>
        </div>
      </section>
    </div>
    </>
  )
}
