import Link from 'next/link'
import { Sparkles, TrendingUp, Users, Shield, RefreshCw, Star, CheckCircle, Gift } from 'lucide-react'
import { getFeaturedPrompts, getCategories } from '@/lib/prompts'
import { Metadata } from 'next'
import { TrendingPrompts } from './components/trending-prompts'
import { NewsletterSubscribe } from './components/newsletter-subscribe'
import { StructuredData } from './components/structured-data'

// 使用构建时的固定日期
const LAST_UPDATED = '2026年6月7日'

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
            <span>最后更新：{LAST_UPDATED}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            收录 120+ 精选AI提示词
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            发现完美的 <br />
            <span className="text-primary">AI提示词</span> 提升你的效率
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            全部免费使用！涵盖写作、编程、设计、营销等多个场景。
            <br />
            无需注册，直接使用。帮助 1,580+ 用户提升工作效率。
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
                <div className="font-semibold">1,580+ 用户</div>
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
                href={`/prompts?category=${category.id}`}
                className="p-6 bg-background rounded-lg border hover:border-primary hover:shadow-md transition-all text-center"
              >
                <div className="text-4xl mb-3">{category.emoji}</div>
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.prompt_count} 个提示词</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Prompts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">精选提示词</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPrompts.map((prompt) => (
              <Link
                key={prompt.id}
                href={`/prompt/${prompt.id}`}
                className="bg-background rounded-lg border overflow-hidden hover:shadow-md transition-all group"
              >
                {prompt.image_url && (
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={prompt.image_url}
                      alt={prompt.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                )}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 bg-muted rounded-full">{prompt.category}</span>
                    {prompt.price > 0 ? (
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">${prompt.price}</span>
                    ) : (
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">免费</span>
                    )}
                  </div>
                  <h3 className="font-semibold mb-2 line-clamp-2">{prompt.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{prompt.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{prompt.rating}</span>
                      <span className="text-muted-foreground">({prompt.reviews})</span>
                    </div>
                    <div className="text-sm text-muted-foreground">{prompt.sales} 购买</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/prompts"
              className="inline-flex items-center gap-2 px-6 py-3 border rounded-lg hover:bg-accent transition-colors"
            >
              查看全部提示词
              <TrendingUp className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Prompts Sidebar Preview */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">热门提示词</h2>
          <div className="max-w-3xl mx-auto">
            <TrendingPrompts />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <NewsletterSubscribe />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">常见问题</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-background rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">这些提示词是免费的吗？</h3>
              <p className="text-muted-foreground">是的！内测期间所有提示词都是免费使用的，无需注册即可使用。</p>
            </div>
            <div className="bg-background rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">提示词支持哪些AI工具？</h3>
              <p className="text-muted-foreground">我们的提示词支持所有主流AI工具，包括ChatGPT、Claude、Midjourney、Stable Diffusion等。</p>
            </div>
            <div className="bg-background rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">我可以提交自己的提示词吗？</h3>
              <p className="text-muted-foreground">当然可以！点击"成为创作者"按钮即可提交你的提示词，审核通过后会展示在平台上。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">准备好提升你的工作效率了吗？</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            加入 1,580+ 用户，发现完美的AI提示词！
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/prompts"
              className="px-8 py-3 text-lg font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
            >
              立即开始
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
