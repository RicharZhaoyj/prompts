import Link from 'next/link'
import { Calendar, ArrowRight, BookOpen, Lightbulb, TrendingUp } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '博客 - PromptMarket | AI提示词技巧与教程',
  description: '学习如何有效使用AI提示词，获取最新的ChatGPT、Midjourney、Stable Diffusion提示词技巧、教程和最佳实践。',
  keywords: 'AI提示词教程, ChatGPT技巧, Midjourney教程, AI写作技巧, 提示词优化',
  openGraph: {
    title: '博客 - PromptMarket',
    description: '获取最新的AI提示词技巧、教程和最佳实践。',
    type: 'website',
    url: 'https://prompts.link.cn/blog',
    siteName: 'PromptMarket',
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
    date: '2024-01-15',
    category: 'ChatGPT',
    readTime: '5分钟',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
  },
  {
    id: 'midjourney-prompt-guide',
    title: 'Midjourney提示词完整指南：从入门到精通',
    excerpt: '深入了解Midjourney提示词的结构、风格参数和高级技巧，创造令人惊艳的AI艺术作品。',
    date: '2024-01-10',
    category: 'Midjourney',
    readTime: '8分钟',
    image: 'https://images.unsplash.com/photo-1675271591211-126ad94e496d?w=800',
  },
  {
    id: 'prompt-engineering-best-practices',
    title: '提示词工程最佳实践：如何写出高质量的AI提示词',
    excerpt: '掌握提示词工程的核心原则，包括清晰性、具体性、格式规范等，让你的AI输出更可控。',
    date: '2024-01-05',
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
    </div>
  )
}