import Link from 'next/link'
import { Sparkles, TrendingUp, Users, Shield, RefreshCw, Star, CheckCircle, Gift } from 'lucide-react'
import { getFeaturedPrompts, getCategories } from '@/lib/prompts'
import { Metadata } from 'next'
import { TrendingPrompts } from './components/trending-prompts'
import { NewsletterSubscribe } from './components/newsletter-subscribe'
import { StructuredData } from './components/structured-data'
import { FAQSchema } from './components/faq-schema'

// 使用构建时的固定日期
const LAST_UPDATED = '2026年8月1日'

const HOME_FAQS = [
  {
    question: 'PromptMarket上的AI提示词是免费的吗？',
    answer: '是的！PromptMarket内测期间所有提示词完全免费使用，无需注册、无需付费，一键复制即可用在ChatGPT、Midjourney、Claude、Stable Diffusion等所有主流AI工具上。后续会新增部分高级创作者的付费提示词，现有免费内容会永久免费。',
  },
  {
    question: '提示词支持哪些AI工具？怎么使用？',
    answer: '本站提示词支持所有主流AI工具：ChatGPT/GPT-4/GPT-5、Claude 3/4系列、Midjourney V6/V7、Stable Diffusion XL/Flux、DALL-E 3、文心一言、通义千问等。使用步骤：1) 找到合适的提示词；2) 点击「复制」按钮；3) 粘贴到对应AI工具的输入框即可。每个提示词页面都附有详细的使用场景和示例输出。',
  },
  {
    question: '如何写出高质量的ChatGPT提示词？有什么技巧？',
    answer: '高质量ChatGPT提示词四大要素：1) 明确角色：告诉AI「你是谁」（如资深文案、产品经理）；2) 具体任务：描述要做什么，避免模糊；3) 输出格式：指定表格/列表/Markdown/JSON等结构；4) 约束条件：字数、风格、受众。进阶技巧：少样本示范（给1-2个例子）、思维链（让AI一步步思考）、角色扮演+用户场景。完整教程见博客《提示词工程最佳实践》。',
  },
  {
    question: 'Midjourney提示词有什么结构和参数技巧？',
    answer: 'Midjourney提示词推荐结构：[主体描述] + [风格/艺术流派] + [光线/构图] + [氛围/情绪] + [参数]。核心参数：--ar 16:9/3:4/1:1（比例）、--stylize 50-1000（艺术化程度）、--chaos 0-100（多样性）、--version 7（版本号）。常见误区：中文关键词效果差（建议英文）、堆砌形容词无主次、忽略负向提示词（--no）。完整指南见博客《Midjourney提示词完整指南》。',
  },
  {
    question: '我可以提交自己的原创提示词并赚钱吗？',
    answer: '当然可以！点击首页「成为创作者」按钮即可提交提示词。审核通过后，你可以选择免费分享或设置付费（建议价格5-50元）。免费提示词可以获得更多曝光和粉丝积累，付费提示词每笔销售创作者可获得70%分成。平台还会定期举办创作大赛，设有奖金和首页推荐位奖励。',
  },
  {
    question: 'PromptMarket和其他提示词网站有什么区别？',
    answer: '四大差异化：1) 质量优先：每条提示词都经过人工验证+真实AI输出测试，不是爬虫搬运；2) 中文友好：为国内用户优化场景（如小红书文案、公众号写作、PPT大纲），不是纯英文翻译；3) 姊妹生态：与AI工具推荐(tools.link.cn)、AI资讯(ai.link.cn)等站点联动，从「了解AI→选工具→用好提示词」一站式解决；4) 完全免费：内测期间不设付费墙，所有内容零门槛使用。',
  },
]

export const metadata: Metadata = {
  title: 'AI提示词免费库2026 | ChatGPT/Midjourney/Claude高质量Prompt模板',
  description: 'PromptMarket是国内高质量AI提示词免费库，收录120+精选ChatGPT提示词、Midjourney提示词、Claude/Stable Diffusion提示词模板。覆盖写作、编程、设计、营销、办公、副业变现等场景，一键复制即用，无需注册，内测期间全部免费！附提示词工程教程和最佳实践。',
  keywords: 'AI提示词, ChatGPT提示词, Midjourney提示词, Claude提示词, Stable Diffusion提示词, 提示词模板, 提示词免费, 提示词工程, Prompt市场, AI写作提示词, AI绘画提示词, GPT-5提示词, Flux提示词, AI办公提效, PromptMarket',
  openGraph: {
    title: 'AI提示词免费库2026 | ChatGPT/Midjourney/Claude高质量Prompt模板',
    description: '120+精选AI提示词，覆盖写作/编程/设计/营销/副业场景，一键复制即用，内测期间全免费！',
    type: 'website',
    url: 'https://prompts.link.cn',
    siteName: 'PromptMarket - AI提示词免费库',
    locale: 'zh_CN',
    images: [{ url: 'https://prompts.link.cn/og-image.png', width: 1200, height: 630, alt: 'AI提示词免费库 - ChatGPT/Midjourney/Claude高质量Prompt模板' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI提示词免费库2026 | ChatGPT/Midjourney/Claude高质量Prompt模板',
    description: '120+精选AI提示词，一键复制即用，内测期间全免费！',
    creator: '@promptmarket',
    images: ['https://prompts.link.cn/og-image.png'],
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
      <FAQSchema faqs={HOME_FAQS} />
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

      {/* SEO Content Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <h2 className="text-2xl font-bold mb-6 text-center">为什么选择 PromptMarket 的 AI 提示词？</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">🎯 精选高质量提示词模板</h3>
                <p className="text-sm leading-relaxed">
                  我们的提示词库收录了 120+ 经过人工验证的 AI 提示词模板，覆盖 ChatGPT 提示词、Midjourney 提示词、Claude 提示词、Stable Diffusion 提示词和 Flux 提示词等主流 AI 工具。每个提示词都经过真实 AI 输出测试，确保一键复制即可获得高质量结果。无论你是 AI 新手还是资深用户，都能在这里找到适合自己场景的 Prompt 模板。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">📚 全场景覆盖</h3>
                <p className="text-sm leading-relaxed">
                  提示词分类涵盖 AI 写作（公众号文章、小红书文案、SEO内容）、AI 编程（代码生成、Code Review、Debug）、AI 绘画（Midjourney 绘图、Stable Diffusion 出图、Flux 图像生成）、AI 营销（广告文案、邮件营销、社媒运营）、AI 办公（PPT 大纲、会议纪要、数据分析）和 AI 副业变现等热门场景。每个分类下都有多个精选提示词供你免费使用。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">⚡ 即用型提示词工程</h3>
                <p className="text-sm leading-relaxed">
                  所有提示词都遵循提示词工程最佳实践，采用 CRISPE 框架（Capacity & Role + Insight + Statement + Personality + Experiment）和 CoT（Chain of Thought）思维链技术，让 AI 输出更精准、更有逻辑。每个提示词页面都附有使用场景说明、示例输出和参数调优建议，帮助你快速掌握提示词工程技巧。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">🔄 持续更新完全免费</h3>
                <p className="text-sm leading-relaxed">
                  PromptMarket 内测期间所有提示词完全免费，无需注册即可使用。我们持续跟踪 AI 工具更新（GPT-5、Midjourney V7、Claude 4 等），同步更新提示词库，确保你始终用到最新最有效的 Prompt。同时支持创作者提交原创提示词，平台审核通过后可获得 70% 分成，构建良性循环的提示词生态。
                </p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-background rounded-xl border border-border/50">
              <h3 className="text-lg font-semibold mb-3">💡 提示词使用小贴士</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>1. 选择合适的提示词：</strong>根据你的使用场景（写作/编程/绘图/营销）在分类中筛选，或使用搜索功能快速定位。<br/>
                <strong>2. 替换变量内容：</strong>提示词中的 <code className="text-primary">[方括号]</code> 部分需要替换为你的实际需求，如 <code className="text-primary">[主题]</code>、<code className="text-primary">[目标受众]</code> 等。<br/>
                <strong>3. 迭代优化：</strong>首次输出不满意时，尝试调整提示词中的风格描述、输出格式或约束条件，通常 2-3 轮迭代即可获得理想结果。<br/>
                <strong>4. 保存常用模板：</strong>把效果好的提示词保存到你的个人收藏或笔记中，形成自己的提示词库，长期复用效率翻倍。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">❓ 常见问题 FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-background rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors">
              <h3 className="font-semibold text-lg mb-3 flex items-start gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex-shrink-0 mt-0.5">Q</span>
                PromptMarket上的AI提示词是免费的吗？
              </h3>
              <p className="text-muted-foreground pl-9 leading-relaxed">
                是的！PromptMarket内测期间所有提示词<strong>完全免费</strong>使用，无需注册、无需付费，<strong>一键复制</strong>即可用在ChatGPT、Midjourney、Claude、Stable Diffusion等所有主流AI工具上。后续会新增部分高级创作者的付费提示词，<strong>现有免费内容会永久免费</strong>。
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors">
              <h3 className="font-semibold text-lg mb-3 flex items-start gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex-shrink-0 mt-0.5">Q</span>
                提示词支持哪些AI工具？怎么使用？
              </h3>
              <p className="text-muted-foreground pl-9 leading-relaxed">
                本站提示词支持所有主流AI工具：<strong>ChatGPT/GPT-4/GPT-5</strong>、<strong>Claude 3/4系列</strong>、<strong>Midjourney V6/V7</strong>、<strong>Stable Diffusion XL/Flux</strong>、DALL-E 3、文心一言、通义千问等。<strong>使用步骤</strong>：1) 浏览分类或搜索找到合适的提示词；2) 点击「复制」按钮；3) 粘贴到对应AI工具的输入框即可。每个提示词页面都附有详细的使用场景和示例输出。
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors">
              <h3 className="font-semibold text-lg mb-3 flex items-start gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex-shrink-0 mt-0.5">Q</span>
                如何写出高质量的ChatGPT提示词？有什么技巧？
              </h3>
              <p className="text-muted-foreground pl-9 leading-relaxed">
                高质量ChatGPT提示词<strong>四大要素</strong>：1) <strong>明确角色</strong>：告诉AI「你是谁」（如资深文案、产品经理）；2) <strong>具体任务</strong>：描述要做什么，避免模糊；3) <strong>输出格式</strong>：指定表格/列表/Markdown/JSON等结构；4) <strong>约束条件</strong>：字数、风格、受众。<strong>进阶技巧</strong>：少样本示范（给1-2个例子）、思维链（让AI一步步思考）、角色扮演+用户场景。完整教程见博客<Link href="/blog/prompt-engineering-best-practices" className="text-primary hover:underline font-medium">《提示词工程最佳实践》</Link>，常用模板可直接在<Link href="/prompts" className="text-primary hover:underline font-medium">提示词库</Link>中一键复制。
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors">
              <h3 className="font-semibold text-lg mb-3 flex items-start gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex-shrink-0 mt-0.5">Q</span>
                Midjourney提示词有什么结构和参数技巧？
              </h3>
              <p className="text-muted-foreground pl-9 leading-relaxed">
                Midjourney提示词<strong>推荐结构</strong>：[主体描述] + [风格/艺术流派] + [光线/构图] + [氛围/情绪] + [参数]。<strong>核心参数</strong>：<code>--ar 16:9/3:4/1:1</code>（比例）、<code>--stylize 50-1000</code>（艺术化程度）、<code>--chaos 0-100</code>（多样性）、<code>--version 7</code>（版本号）。<strong>常见误区</strong>：中文关键词效果差（建议英文）、堆砌形容词无主次、忽略负向提示词（<code>--no</code>）。完整指南见博客<Link href="/blog/midjourney-prompt-guide" className="text-primary hover:underline font-medium">《Midjourney提示词完整指南》</Link>，精选Midjourney模板见<Link href="/prompts?category=design" className="text-primary hover:underline font-medium">设计分类</Link>。
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors">
              <h3 className="font-semibold text-lg mb-3 flex items-start gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex-shrink-0 mt-0.5">Q</span>
                我可以提交自己的原创提示词并赚钱吗？
              </h3>
              <p className="text-muted-foreground pl-9 leading-relaxed">
                当然可以！点击首页<strong>「成为创作者」</strong>按钮即可提交提示词。审核通过后，你可以选择<strong>免费分享</strong>或<strong>设置付费</strong>（建议价格5-50元）。免费提示词可以获得更多曝光和粉丝积累，付费提示词每笔销售<strong>创作者可获得70%分成</strong>。平台还会定期举办创作大赛，设有奖金和首页推荐位奖励。欢迎到<Link href="/submit" className="text-primary hover:underline font-medium">提交页面</Link>了解详情！
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors">
              <h3 className="font-semibold text-lg mb-3 flex items-start gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex-shrink-0 mt-0.5">Q</span>
                PromptMarket和其他提示词网站有什么区别？
              </h3>
              <p className="text-muted-foreground pl-9 leading-relaxed">
                <strong>四大差异化</strong>：1) <strong>质量优先</strong>：每条提示词都经过人工验证+真实AI输出测试，不是爬虫搬运；2) <strong>中文友好</strong>：为国内用户优化场景（如小红书文案、公众号写作、PPT大纲），不是纯英文翻译；3) <strong>姊妹生态</strong>：与<Link href="https://tools.link.cn" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">AI工具推荐</Link>、<Link href="https://ai.link.cn" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">AI资讯</Link>等站点联动，从「了解AI→选工具→用好提示词」一站式解决；4) <strong>完全免费</strong>：内测期间不设付费墙，所有内容零门槛使用。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 姊妹站点联动 Section */}
      <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">🔗 探索更多AI资源</h2>
            <p className="text-lg text-muted-foreground">发现精选AI工具和最新行业资讯，助力你的AI之旅</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* AI工具推荐卡片 */}
            <a
              href="https://tools.link.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-gradient-to-br from-blue-50 via-background to-indigo-50 rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20 group-hover:shadow-xl group-hover:scale-105 transition-all">
                  <span className="text-3xl">🛠️</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">AI工具推荐</h3>
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">精选</span>
                  </div>
                  <p className="text-gray-600 mb-4">精选有评测的AI工具，让你快速找到最适合自己的生产力工具。</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100">🔥 热门评测</span>
                    <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100">⚡ 效率提升</span>
                    <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100">⭐ 工具推荐</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-blue-600 font-medium group-hover:gap-3 transition-all">
                    <span>探索AI工具</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </a>

            {/* AI热点资讯卡片 */}
            <a
              href="https://ai.link.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-gradient-to-br from-purple-50 via-background to-pink-50 rounded-2xl border border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/20 group-hover:shadow-xl group-hover:scale-105 transition-all">
                  <span className="text-3xl">📰</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">AI热点资讯</h3>
                    <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">最新</span>
                  </div>
                  <p className="text-gray-600 mb-4">了解AI行业最新动态和深度分析，第一时间掌握前沿资讯。</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs px-2 py-1 bg-purple-50 text-purple-700 rounded-full border border-purple-100">🚀 行业动态</span>
                    <span className="text-xs px-2 py-1 bg-purple-50 text-purple-700 rounded-full border border-purple-100">💡 技术趋势</span>
                    <span className="text-xs px-2 py-1 bg-purple-50 text-purple-700 rounded-full border border-purple-100">📊 深度分析</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-purple-600 font-medium group-hover:gap-3 transition-all">
                    <span>浏览热点资讯</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </a>

            {/* AI工具LTD卡片 */}
            <a
              href="https://tool.link.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-gradient-to-br from-cyan-50 via-background to-teal-50 rounded-2xl border border-cyan-100 hover:border-cyan-300 hover:shadow-xl transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-100/50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/20 group-hover:shadow-xl group-hover:scale-105 transition-all">
                  <span className="text-3xl">⚡</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">AI工具LTD</h3>
                    <span className="px-2 py-0.5 bg-cyan-100 text-cyan-700 text-xs font-medium rounded-full">买断</span>
                  </div>
                  <p className="text-gray-600 mb-4">全球顶尖AI工具的Lifetime Deal买断方案，一次付费终身使用。</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs px-2 py-1 bg-cyan-50 text-cyan-700 rounded-full border border-cyan-100">💰 限时优惠</span>
                    <span className="text-xs px-2 py-1 bg-cyan-50 text-cyan-700 rounded-full border border-cyan-100">🔒 终身授权</span>
                    <span className="text-xs px-2 py-1 bg-cyan-50 text-cyan-700 rounded-full border border-cyan-100">🎯 精选推荐</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-cyan-600 font-medium group-hover:gap-3 transition-all">
                    <span>浏览LTD优惠</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </a>

            {/* 加密货币分析卡片 */}
            <a
              href="https://signal.link.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-gradient-to-br from-orange-50 via-background to-amber-50 rounded-2xl border border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/20 group-hover:shadow-xl group-hover:scale-105 transition-all">
                  <span className="text-3xl">₿</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">加密货币分析</h3>
                    <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">实时</span>
                  </div>
                  <p className="text-gray-600 mb-4">智能识别异动品种与横盘启动机会，每小时自动更新市场数据。</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs px-2 py-1 bg-orange-50 text-orange-700 rounded-full border border-orange-100">📈 实时行情</span>
                    <span className="text-xs px-2 py-1 bg-orange-50 text-orange-700 rounded-full border border-orange-100">⚡ 异动预警</span>
                    <span className="text-xs px-2 py-1 bg-orange-50 text-orange-700 rounded-full border border-orange-100">📬 日报订阅</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-orange-600 font-medium group-hover:gap-3 transition-all">
                    <span>查看行情分析</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          
          {/* 底部快速链接栏 */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>姊妹站点：</span>
            <a href="https://tools.link.cn" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">tools.link.cn</a>
            <span>·</span>
            <a href="https://ai.link.cn" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">ai.link.cn</a>
            <span>·</span>
            <a href="https://tool.link.cn" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">tool.link.cn</a>
            <span>·</span>
            <a href="https://signal.link.cn" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">signal.link.cn</a>
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
