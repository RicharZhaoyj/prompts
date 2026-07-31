import Link from 'next/link'
import { Calendar, ArrowRight, BookOpen, Lightbulb, TrendingUp, HelpCircle } from 'lucide-react'
import { Metadata } from 'next'
import { FAQSchema } from '../components/faq-schema'

const BLOG_FAQS = [
  {
    question: '新手学习AI提示词应该看哪些内容？',
    answer: '建议新手按此路径学习：1) 先读《提示词工程最佳实践》掌握四大要素（角色/任务/格式/约束）；2) 选1-2个场景（如写作或编程）找现成模板套用；3) 学习《10个ChatGPT提示词技巧》理解思维链、少样本等进阶；4) 动手实践，对比不同提示词的输出差异。提示词的关键不是「神奇咒语」，而是结构化思维+场景经验。',
  },
  {
    question: 'ChatGPT和Claude的提示词写法有什么区别？',
    answer: '两者通用原则一致，但细节有差异：1) Claude对长上下文更友好，提示词可以更长更详细；2) ChatGPT对格式指令（如Markdown表格）响应更标准；3) Claude建议在开头使用XML标签（如<human>、<context>）分隔指令和内容；4) ChatGPT使用system prompt效果更好。建议在提示词库中选择对应AI工具的分类版本，或注明工具名让我们帮你适配。',
  },
  {
    question: '写不出好的AI图像提示词怎么办？',
    answer: 'AI绘画提示词快速上手三步：1) 先抄再改：从提示词库设计分类复制类似风格的模板，替换主体关键词；2) 英文优先：Midjourney/Flux等模型对英文关键词理解更准确，可用DeepL翻译；3) 迭代优化：先出基础图，再逐步加风格/光线/镜头词。进阶可参考博客《Midjourney提示词完整指南》中的参数表和结构公式。',
  },
  {
    question: '提示词写多长比较合适？越长越好吗？',
    answer: '不是越长越好！建议：简单任务（翻译、改写）30-100字；中等任务（文案、分析）100-300字；复杂任务（报告生成、代码编写）300-800字。超过500字建议分段，用小标题或编号组织。关键原则：每句话都有明确目的，删除形容词和重复信息；用模板复制比每次重写效果更稳定。',
  },
]

export const metadata: Metadata = {
  title: 'AI提示词教程博客2026 | ChatGPT/Midjourney技巧与最佳实践',
  description: 'PromptMarket博客：2026最新ChatGPT提示词技巧、Midjourney参数教程、提示词工程最佳实践、AI写作/绘画/编程/副业变现场景化指南。从新手到进阶系统化学习提示词优化，附可复制模板。',
  keywords: 'AI提示词教程, ChatGPT技巧, Midjourney教程, 提示词工程, Prompt最佳实践, AI写作技巧, Midjourney参数, GPT-5提示词, Claude提示词, 提示词优化, AI副业, 提示词模板',
  openGraph: {
    title: 'AI提示词教程博客2026 | ChatGPT/Midjourney技巧与最佳实践',
    description: '系统化学习AI提示词优化：ChatGPT技巧、Midjourney参数、提示词工程四大要素，附可复制模板。',
    type: 'website',
    url: 'https://prompts.link.cn/blog',
    siteName: 'PromptMarket - AI提示词免费库',
    locale: 'zh_CN',
    images: [{ url: 'https://prompts.link.cn/og-image.png', width: 1200, height: 630, alt: 'AI提示词教程博客' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI提示词教程博客2026 | ChatGPT/Midjourney技巧与最佳实践',
    description: '系统化学习AI提示词优化，附可复制模板。',
  },
  alternates: {
    canonical: 'https://prompts.link.cn/blog',
  },
}

const blogPosts = [
  {
    id: '10-chatgpt-tips',
    title: '10个ChatGPT提示词技巧，让AI帮你事半功倍',
    excerpt: '学习如何写出更高效的ChatGPT提示词，从角色扮演到结构化输出，全面提升你的工作效率。',
    date: '2026-06-01',
    category: 'ChatGPT',
    readTime: '5分钟',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
  },
  {
    id: 'midjourney-prompt-guide',
    title: 'Midjourney提示词完整指南：从入门到精通',
    excerpt: '深入了解Midjourney提示词的结构、风格参数和高级技巧，创造令人惊艳的AI艺术作品。',
    date: '2026-05-25',
    category: 'Midjourney',
    readTime: '8分钟',
    image: 'https://images.unsplash.com/photo-1675271591211-126ad94e496d?w=800',
  },
  {
    id: 'prompt-engineering-best-practices',
    title: '提示词工程最佳实践：如何写出高质量的AI提示词',
    excerpt: '掌握提示词工程的核心原则，包括清晰性、具体性、格式规范等，让你的AI输出更可控。',
    date: '2026-05-20',
    category: '教程',
    readTime: '6分钟',
    image: 'https://images.unsplash.com/photo-1684163549237-41611c81a324?w=800',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            资源与教程
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI提示词技巧与教程
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            学习如何充分发挥ChatGPT、Midjourney、Stable Diffusion等AI工具的潜力
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            热门文章
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-background border rounded-xl overflow-hidden hover:shadow-lg transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 leading-tight hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                    阅读更多
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">更多资源</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background border rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">提示词模板库</h3>
              <p className="text-muted-foreground mb-4">
                精选高质量提示词模板，一键复制使用
              </p>
              <Link href="/prompts" className="text-primary font-medium hover:underline">
                浏览模板 →
              </Link>
            </div>
            <div className="bg-background border rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">完整文档</h3>
              <p className="text-muted-foreground mb-4">
                了解如何购买、使用和出售AI提示词
              </p>
              <Link href="/docs" className="text-primary font-medium hover:underline">
                查看文档 →
              </Link>
            </div>
            <div className="bg-background border rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">热门提示词</h3>
              <p className="text-muted-foreground mb-4">
                发现社区最受欢迎的AI提示词
              </p>
              <Link href="/prompts" className="text-primary font-medium hover:underline">
                查看热门 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">准备好提升你的AI技能了吗？</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            订阅我们的新闻通讯，获取最新的提示词技巧和教程
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="输入你的邮箱地址"
                className="flex-1 px-4 py-3 border rounded-lg"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90">
                订阅
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <FAQSchema faqs={BLOG_FAQS} />
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
            <HelpCircle className="w-8 h-8 text-primary" />
            学习常见问题 FAQ
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {BLOG_FAQS.map((faq, idx) => (
              <div key={idx} className="bg-background rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors">
                <h3 className="font-semibold text-lg mb-3 flex items-start gap-2">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex-shrink-0 mt-0.5">Q</span>
                  {faq.question}
                </h3>
                <p className="text-muted-foreground pl-9 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}