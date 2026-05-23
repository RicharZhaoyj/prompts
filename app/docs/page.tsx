import Link from 'next/link'
import { Book, Code, Zap, Shield, MessageCircle, ExternalLink } from 'lucide-react'
import { Metadata } from 'next'
import { FAQSchema } from '@/app/components/faq-schema'

export const metadata: Metadata = {
  title: '帮助文档 - PromptMarket | AI提示词商店',
  description: 'PromptMarket帮助文档，学习如何购买AI提示词、提交提示词、使用API，以及了解我们的服务条款和政策。',
  keywords: 'PromptMarket文档, AI提示词使用指南, 提示词API文档',
  openGraph: {
    title: '帮助文档 - PromptMarket',
    description: '学习如何使用PromptMarket，购买和出售AI提示词。',
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
    question: '我可以获得退款吗？',
    answer: '是的，我们对所有购买提供30天退款保证。如果您对购买的提示词不满意，可以在购买后30天内申请全额退款。'
  },
  {
    question: '如何成为卖家？',
    answer: '只需通过提交表单提交您的第一个提示词即可。无需申请！我们会审核您的提交，并在24-48小时内给您反馈。'
  },
  {
    question: '支持哪些AI工具？',
    answer: '我们的提示词适用于ChatGPT、Claude、Midjourney、Stable Diffusion、DALL-E等主流AI工具。'
  },
  {
    question: '提示词审核需要多长时间？',
    answer: '我们通常在24-48小时内审核所有提交。审核通过后，您的提示词将立即上线销售。'
  },
  {
    question: '我可以销售免费提示词吗？',
    answer: '可以！我们鼓励创作者提供免费提示词来建立声誉。免费提示词同样需要审核，但优先级更高。'
  }
]

export default function DocsPage() {
  const docs = [
    {
      icon: Book,
      title: '开始使用',
      description: '了解PromptMarket的基本知识以及如何购买您的第一个提示词',
      links: [
        { label: '快速开始指南', href: '#' },
        { label: '创建账户', href: '#' },
        { label: '完成首次购买', href: '#' },
        { label: '有效使用提示词', href: '#' },
      ],
    },
    {
      icon: Code,
      title: '开发者专区',
      description: 'API文档和开发者集成指南',
      links: [
        { label: 'API概览', href: '#' },
        { label: '身份验证', href: '#' },
        { label: '速率限制', href: '#' },
        { label: 'SDK和库', href: '#' },
      ],
    },
    {
      icon: Zap,
      title: '创建提示词',
      description: '创建和销售高质量提示词的指南',
      links: [
        { label: '提示词撰写最佳实践', href: '#' },
        { label: '为提示词定价', href: '#' },
        { label: '提交指南', href: '#' },
        { label: '营销您的作品', href: '#' },
      ],
    },
    {
      icon: Shield,
      title: '信任与安全',
      description: '政策、条款和安全指南',
      links: [
        { label: '服务条款', href: '#' },
        { label: '隐私政策', href: '#' },
        { label: '退款政策', href: '#' },
        { label: '内容规范', href: '#' },
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
            关于PromptMarket，您需要知道的一切
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <a href="#getting-started" className="p-6 bg-primary/5 border rounded-lg hover:border-primary transition-colors">
            <Book className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-1">快速开始</h3>
            <p className="text-sm text-muted-foreground">几分钟内开始使用</p>
          </a>
          <a href="#api" className="p-6 bg-primary/5 border rounded-lg hover:border-primary transition-colors">
            <Code className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-1">API文档</h3>
            <p className="text-sm text-muted-foreground">使用我们的API构建</p>
          </a>
          <a href="#support" className="p-6 bg-primary/5 border rounded-lg hover:border-primary transition-colors">
            <MessageCircle className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-1">获取支持</h3>
            <p className="text-sm text-muted-foreground">联系我们的团队</p>
          </a>
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
                    <a
                      href={link.href}
                      className="text-sm text-primary hover:underline flex items-center gap-2"
                    >
                      {link.label}
                    </a>
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
                PromptMarket是一个AI提示词市场，创作者可以在这里出售他们的提示词，
                买家可以发现用于各种AI工具（包括ChatGPT、Midjourney、Stable Diffusion等）的高质量、经过测试的提示词。
              </p>
              <p className="text-muted-foreground">
                无论您是想提高工作效率、增强创意项目，还是将您的AI专业知识变现，
                PromptMarket都为您提供所需的平台和工具。
              </p>
            </div>

            <div className="bg-background border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">如何购买提示词</h3>
              <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                <li>创建免费账户或登录</li>
                <li>使用我们的分类和筛选功能浏览或搜索提示词</li>
                <li>点击提示词查看详情、预览和评价</li>
                <li>点击"立即购买"并通过Stripe安全支付</li>
                <li>在您的仪表板中访问已购买的提示词</li>
                <li>复制提示词并在您喜欢的AI工具中使用</li>
              </ol>
            </div>

            <div className="bg-background border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">如何销售提示词</h3>
              <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                <li>创建卖家账户（免费加入）</li>
                <li>按照我们的提交指南准备您的提示词</li>
                <li>提交您的提示词，包括标题、描述、分类和价格</li>
                <li>我们的团队会在48小时内审核提交内容</li>
                <li>审核通过后，您的提示词将在市场上发布</li>
                <li>在您的卖家仪表板中跟踪销售和收入</li>
              </ol>
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm">
                  <strong>卖家提示:</strong> 包含清晰使用说明、示例和变量占位符的提示词通常表现更好！
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* API Section */}
        <section id="api" className="mb-12">
          <h2 className="text-2xl font-bold mb-6">API文档</h2>
          
          <div className="bg-background border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">REST API</h3>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">v1.0</span>
            </div>
            <p className="text-muted-foreground mb-4">
              我们的API允许您以编程方式访问提示词、用户数据和交易。
              非常适合构建集成或自定义应用程序。
            </p>
            <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
              <p className="text-muted-foreground">基础URL:</p>
              <p className="text-foreground">https://api.prompts.link.cn/v1</p>
            </div>
            <div className="mt-4">
              <h4 className="font-medium mb-2">可用的接口:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• <code className="bg-muted px-1 rounded">GET /prompts</code> - 列出所有提示词</li>
                <li>• <code className="bg-muted px-1 rounded">GET /prompts/:id</code> - 获取提示词详情</li>
                <li>• <code className="bg-muted px-1 rounded">GET /categories</code> - 列出分类</li>
                <li>• <code className="bg-muted px-1 rounded">GET /users/:id</code> - 获取用户资料</li>
              </ul>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-primary hover:underline mt-4">
              查看完整API文档 <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="mb-12">
          <h2 className="text-2xl font-bold mb-6">支持</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">联系我们</h3>
              <p className="text-muted-foreground mb-4">
                有问题或需要帮助？我们的支持团队随时为您服务。
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>邮箱:</strong> support@prompts.link.cn</p>
                <p><strong>响应时间:</strong> 通常在24小时内</p>
              </div>
            </div>

            <div className="bg-background border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">常见问题</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">我可以获得退款吗？</h4>
                  <p className="text-sm text-muted-foreground">
                    是的，我们对所有购买提供30天退款保证。
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">如何成为卖家？</h4>
                  <p className="text-sm text-muted-foreground">
                    只需通过提交表单提交您的第一个提示词即可。无需申请！
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
