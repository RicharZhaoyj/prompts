import Link from 'next/link'
import { Book, Code, Zap, Shield, MessageCircle, ExternalLink } from 'lucide-react'
import { Metadata } from 'next'
import { FAQSchema } from '@/app/components/faq-schema'

export const metadata: Metadata = {
  title: '帮助文档 - PromptMarket | AI提示词免费库',
  description: 'PromptMarket帮助文档，学习如何使用AI提示词、提交提示词、参与社区，以及了解我们的服务条款和政策。',
  keywords: 'PromptMarket文档, AI提示词使用指南, 提示词入门',
  openGraph: {
    title: '帮助文档 - PromptMarket',
    description: '学习如何使用PromptMarket，发现和分享高质量AI提示词。',
    type: 'website',
    url: 'https://prompts.link.cn/docs',
    siteName: 'PromptMarket',
  },
  alternates: {
    canonical: 'https://prompts.link.cn/docs',
  },
}

const faqs = [
  {
    question: '提示词真的免费吗？',
    answer: '是的！内测期间所有提示词完全免费。无需注册，即可浏览和使用所有提示词。'
  },
  {
    question: '如何成为创作者？',
    answer: '只需通过提交表单提交你的第一个提示词即可。无需申请！我们会审核你的提交，并在24-48小时内给你反馈。'
  },
  {
    question: '支持哪些AI工具？',
    answer: '我们的提示词适用于ChatGPT、Claude、Midjourney、Stable Diffusion、DALL-E等主流AI工具。'
  },
  {
    question: '提示词审核需要多长时间？',
    answer: '我们通常在24-48小时内审核所有提交。审核通过后，你的提示词将立即上线展示。'
  },
  {
    question: '我可以分享免费提示词吗？',
    answer: '可以！我们鼓励创作者提供免费提示词来帮助社区。免费提示词同样需要审核，但优先级更高。'
  }
]

export default function DocsPage() {
  const docs = [
    {
      icon: Book,
      title: '开始使用',
      description: '了解PromptMarket的基本知识以及如何使用你的第一个提示词',
      links: [
        { label: '快速开始指南', href: '/blog/prompt-engineering-best-practices' },
        { label: '浏览提示词库', href: '/prompts' },
        { label: '提示词使用技巧', href: '/blog/10-chatgpt-tips' },
        { label: '参与社区讨论', href: '/#' },
      ],
    },
    {
      icon: Zap,
      title: '创建提示词',
      description: '创建和分享高质量提示词的指南',
      links: [
        { label: '提示词撰写最佳实践', href: '/blog/prompt-engineering-best-practices' },
        { label: '提交你的第一个提示词', href: '/submit' },
        { label: '提示词审核标准', href: '/#' },
        { label: '社区激励计划', href: '/#' },
      ],
    },
    {
      icon: Shield,
      title: '社区与安全',
      description: '政策、条款和安全指南',
      links: [
        { label: '社区规范', href: '/#' },
        { label: '隐私政策', href: '/#' },
        { label: '内容规范', href: '/#' },
        { label: '报告问题', href: '/#' },
      ],
    },
  ]

  return (
    <>
      <FAQSchema faqs={faqs} />
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">帮助文档</h1>
          <p className="text-muted-foreground">
            关于PromptMarket，你需要知道的一切
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Link href="/prompts" className="p-6 bg-primary/5 border rounded-lg hover:border-primary transition-colors">
            <Book className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-1">浏览提示词库</h3>
            <p className="text-sm text-muted-foreground">发现高质量提示词</p>
          </Link>
          <Link href="/submit" className="p-6 bg-primary/5 border rounded-lg hover:border-primary transition-colors">
            <Code className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-1">分享你的提示词</h3>
            <p className="text-sm text-muted-foreground">成为创作者</p>
          </Link>
          <Link href="/blog" className="p-6 bg-primary/5 border rounded-lg hover:border-primary transition-colors">
            <MessageCircle className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-1">学习教程</h3>
            <p className="text-sm text-muted-foreground">查看博客文章</p>
          </Link>
        </div>

        {/* Documentation Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {docs.map((doc) => (
            <div key={doc.title} className="bg-background border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <doc.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{doc.title}</h2>
                  <p className="text-sm text-muted-foreground">{doc.description}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {doc.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary hover:underline flex items-center gap-2"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Getting Started Section */}
        <section id="getting-started" className="mb-12">
          <h2 className="text-2xl font-bold mb-6">开始使用</h2>
          
          <div className="space-y-6">
            <div className="bg-background border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">什么是PromptMarket？</h3>
              <p className="text-muted-foreground mb-4">
                PromptMarket是一个AI提示词社区，创作者可以在这里分享他们的提示词，
                大家可以发现用于各种AI工具（包括ChatGPT、Midjourney、Stable Diffusion等）的高质量、经过测试的提示词。
              </p>
              <p className="text-muted-foreground">
                无论你是想提高工作效率、增强创意项目，还是将你的AI专业知识分享给社区，
                PromptMarket都为你提供所需的平台和工具。
              </p>
              <div className="mt-4">
                <Link href="/prompts" className="text-primary hover:underline inline-flex items-center gap-1">
                  开始浏览 →
                </Link>
              </div>
            </div>

            <div className="bg-background border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">如何使用提示词</h3>
              <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                <li>浏览提示词库，使用我们的分类和筛选功能找到你需要的提示词</li>
                <li>点击提示词查看详情、预览和评价</li>
                <li>复制提示词内容</li>
                <li>粘贴到你喜欢的AI工具中使用</li>
                <li>根据需要调整提示词变量</li>
              </ol>
            </div>

            <div className="bg-background border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">如何分享你的提示词</h3>
              <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                <li>准备你的提示词，确保质量和实用性</li>
                <li>访问提示词提交页面</li>
                <li>填写提示词信息：标题、描述、分类等</li>
                <li>提交你的提示词，我们会审核内容</li>
                <li>审核通过后，你的提示词将在社区展示</li>
              </ol>
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm">
                  <strong>提示:</strong> 包含清晰使用说明、示例和变量占位符的提示词通常更受欢迎！
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="mb-12">
          <h2 className="text-2xl font-bold mb-6">常见问题</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">联系我们</h3>
              <p className="text-muted-foreground mb-4">
                有问题或需要帮助？我们的团队随时为你服务。
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>邮箱:</strong> support@prompts.link.cn</p>
                <p><strong>响应时间:</strong> 通常在24小时内</p>
              </div>
            </div>

            <div className="bg-background border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">快速问答</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">提示词真的免费吗？</h4>
                  <p className="text-sm text-muted-foreground">
                    是的！内测期间所有提示词完全免费。
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">如何成为创作者？</h4>
                  <p className="text-sm text-muted-foreground">
                    只需通过提交表单提交你的第一个提示词即可。无需申请！
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">支持哪些AI工具？</h4>
                  <p className="text-sm text-muted-foreground">
                    我们的提示词适用于ChatGPT、Claude、Midjourney、Stable Diffusion、DALL-E等。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  )
}
