import Link from 'next/link'
import { Search, Star, Zap, ArrowRight, Cpu } from 'lucide-react'
import { getSkills, getCategories, SKILL_PLATFORMS, getSkillPlatforms } from '@/lib/prompts'
import { Metadata } from 'next'
import { StructuredData } from '@/app/components/structured-data'

export const metadata: Metadata = {
  title: 'AI技能市场2026 | TRAE/Claude/Cursor Agent技能插件免费下载',
  description: '国内领先的AI技能市场，收录TRAE、Claude Code、Cursor、Windsurf等AI IDE精选Agent技能插件。覆盖代码生成、文档处理、数据分析、自动化工作流等场景，一键安装即用，附Skill开发教程与最佳实践。',
  keywords: 'AI技能,TRAE技能,Claude Code技能,Cursor技能,AI Agent插件,Skill市场,AI自动化,代码生成技能,Prompt Skill,技能下载,AI工作流',
  authors: [{ name: 'PromptMarket' }],
  creator: 'PromptMarket',
  publisher: 'PromptMarket',
  openGraph: {
    type: 'website',
    siteName: 'PromptMarket - AI技能市场',
    title: 'AI技能市场 | TRAE/Claude/Cursor Agent技能插件',
    description: '发现、分享、免费使用高质量的AI技能，支持TRAE、Claude Code、Cursor等主流AI IDE。',
    url: 'https://prompts.link.cn/skills',
    images: [
      {
        url: 'https://prompts.link.cn/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PromptMarket AI技能市场',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI技能市场 | TRAE/Claude/Cursor技能插件',
    description: '发现、分享、免费使用高质量的AI技能',
    images: ['https://prompts.link.cn/twitter-card.png'],
  },
  alternates: {
    canonical: 'https://prompts.link.cn/skills',
  },
}

export default async function SkillsPage({
  searchParams,
}: {
  searchParams?: { platform?: string; category?: string; search?: string }
}) {
  const platform = searchParams?.platform
  const category = searchParams?.category
  const search = searchParams?.search
  const skills = await getSkills(platform, category, search)
  const categories = await getCategories()
  const skillPlatforms = await getSkillPlatforms()

  // FAQ Schema for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'AI技能和AI提示词有什么区别？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI提示词(Prompt)是一次性的文本指令，需要手动复制粘贴到AI对话框中使用；AI技能(Skill)是封装好的模块化能力，可直接安装在TRAE、Claude Code、Cursor等AI IDE中，支持多步自动化、工具调用、上下文感知等高级功能，无需重复编写提示词。',
        },
      },
      {
        '@type': 'Question',
        name: '如何安装TRAI技能？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '在TRAE IDE中打开技能面板，点击「导入技能」，将下载的SKILL.md文件拖入或粘贴内容即可。部分技能还需要配置对应的API密钥或工具权限。安装后可通过自然语言直接调用技能功能。',
        },
      },
      {
        '@type': 'Question',
        name: 'AI技能支持哪些平台？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '目前支持的主流AI IDE平台包括：TRAE（字节跳动推出的AI IDE）、Claude Code（Anthropic官方编辑器）、Cursor（基于VS Code的AI编辑器）、Windsurf（Codeium推出的AI IDE）、GitHub Copilot Workspace等。每个技能页面都会标注具体支持的平台。',
        },
      },
      {
        '@type': 'Question',
        name: '如何提交自己开发的AI技能？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '点击导航栏「提交」按钮，选择「提交AI技能」类型，填写技能标题、分类、描述，上传SKILL.md文件，设置价格（可免费），提交后经过审核即可上架。优质技能还可获得首页推荐位和流量扶持。',
        },
      },
    ],
  }

  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'AI技能市场 - PromptMarket',
    description: '精选AI Agent技能插件，支持TRAE、Claude Code、Cursor等平台',
    url: 'https://prompts.link.cn/skills',
    numberOfItems: skills.length,
  }

  return (
    <div className="min-h-screen">
      <StructuredData type="faq" data={faqSchema as any} />
      <StructuredData type="collection" data={collectionPageSchema as any} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTh2MkgyNHYtMmgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <span className="bg-white text-purple-600 text-[10px] px-2 py-0.5 rounded-full font-bold">NEW</span>
              AI技能市场正式上线
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              释放AI IDE的<span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-400">全部潜能</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              精选<span className="font-semibold text-white">TRAE、Claude Code、Cursor</span>等平台的AI Agent技能插件<br />
              一键安装，自动化复杂工作流，效率提升10倍
            </p>
            
            {/* Search Box */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜索AI技能：如 React组件生成、SQL优化、文档翻译..."
                  className="w-full pl-14 pr-4 py-4 rounded-2xl text-gray-900 text-base shadow-2xl focus:outline-none focus:ring-4 focus:ring-yellow-400/30"
                  defaultValue={search || ''}
                />
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-300" />
                <span><strong className="text-white">{skills.length}+</strong> 精选技能</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-cyan-300" />
                <span><strong className="text-white">{skillPlatforms.length}</strong> 支持平台</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                <span><strong className="text-white">4.8</strong> 平均评分</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Tabs */}
      <div className="bg-white border-b sticky top-[73px] z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 py-4 overflow-x-auto">
            <Link
              href="/skills"
              className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                !platform
                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              全部技能
            </Link>
            {SKILL_PLATFORMS.map((p) => (
              <Link
                key={p.id}
                href={`/skills?platform=${p.id}`}
                className={`shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  platform === p.id
                    ? `bg-gradient-to-r ${p.color} text-white shadow-md`
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span>{p.emoji}</span>
                {p.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-background border rounded-xl p-6 sticky top-[140px]">
              <h3 className="font-bold text-lg mb-4">📂 分类筛选</h3>
              <div className="space-y-1">
                <Link
                  href="/skills"
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    !category ? 'bg-purple-50 text-purple-700 font-medium' : 'hover:bg-gray-50'
                  }`}
                >
                  <span>全部分类</span>
                  <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">{skills.length}</span>
                </Link>
                {categories.map((cat) => {
                  const count = skills.filter((s) => s.category === cat.name).length
                  return (
                    <Link
                      key={cat.id}
                      href={`/skills?category=${encodeURIComponent(cat.name)}`}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                        category === cat.name ? 'bg-purple-50 text-purple-700 font-medium' : 'hover:bg-gray-50'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{cat.emoji}</span>
                        {cat.name}
                      </span>
                      {count > 0 && (
                        <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">{count}</span>
                      )}
                    </Link>
                  )
                })}
              </div>

              {/* 姊妹站点联动卡片 */}
              <div className="mt-8 space-y-3">
                <h3 className="font-semibold mb-3 text-sm">🔗 更多AI资源</h3>
                <a
                  href="https://tools.link.cn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl hover:border-blue-300 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">🛠️</span>
                    <span className="font-semibold text-gray-900 text-sm group-hover:text-blue-700">AI工具推荐</span>
                  </div>
                  <p className="text-xs text-gray-600">精选有评测的AI工具目录</p>
                  <span className="mt-2 text-xs text-blue-600 font-medium">访问 tools.link.cn ↗</span>
                </a>

                <a
                  href="https://ai.link.cn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-xl hover:border-purple-300 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">📰</span>
                    <span className="font-semibold text-gray-900 text-sm group-hover:text-purple-700">AI热点资讯</span>
                  </div>
                  <p className="text-xs text-gray-600">了解最新AI行业动态</p>
                  <span className="mt-2 text-xs text-purple-600 font-medium">访问 ai.link.cn ↗</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Sort & Results */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-sm text-muted-foreground">
                  显示 <span className="font-semibold text-gray-900">{skills.length}</span> 个AI技能
                  {platform && <span className="ml-2 px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">{platform} 平台</span>}
                  {category && <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">{category}</span>}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">排序:</span>
                <select className="border rounded-lg px-3 py-2 text-sm bg-white">
                  <option>热门推荐</option>
                  <option>最新上架</option>
                  <option>评分最高</option>
                  <option>价格: 免费优先</option>
                  <option>销量最高</option>
                </select>
              </div>
            </div>

            {/* Skills Grid */}
            {skills.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {skills.map((skill) => {
                  const platformInfo = SKILL_PLATFORMS.find((p) => p.id === skill.skill_platform)
                  return (
                    <Link
                      key={skill.id}
                      href={`/prompt/${skill.id}`}
                      className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-purple-200 transition-all duration-300"
                    >
                      {/* Card Header Image */}
                      <div className="relative h-44 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                        {skill.image_url ? (
                          <img
                            src={skill.image_url}
                            alt={skill.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className={`w-full h-full bg-gradient-to-br ${platformInfo?.color || 'from-violet-500 to-purple-600'} opacity-90 flex items-center justify-center`}>
                            <div className="text-center text-white">
                              <div className="text-5xl mb-2">{platformInfo?.emoji || '🤖'}</div>
                              <div className="text-sm font-medium opacity-90">{platformInfo?.name || 'AI Skill'}</div>
                            </div>
                          </div>
                        )}
                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          {platformInfo && (
                            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold text-white bg-gradient-to-r ${platformInfo.color} shadow-sm`}>
                              <span>{platformInfo.emoji}</span>
                              {platformInfo.name}
                            </span>
                          )}
                          <span className="px-2.5 py-1 bg-black/50 backdrop-blur-sm text-white rounded-full text-[11px] font-medium">
                            {skill.category}
                          </span>
                        </div>
                        {/* Price Badge */}
                        <div className="absolute top-3 right-3">
                          {skill.price === 0 ? (
                            <span className="px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-xs font-bold shadow-sm">
                              🆓 免费
                            </span>
                          ) : (
                            <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-gray-900 rounded-full text-xs font-bold shadow-sm">
                              ${skill.price}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-5">
                        <h3 className="font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-purple-600 transition-colors">
                          {skill.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-4 line-clamp-2 min-h-[2.5rem]">
                          {skill.description}
                        </p>
                        
                        {/* Tags */}
                        {skill.tags && skill.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {skill.tags.slice(0, 3).map((tag, i) => (
                              <span key={i} className="text-[11px] px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md">
                                {tag}
                              </span>
                            ))}
                            {skill.tags.length > 3 && (
                              <span className="text-[11px] px-2 py-0.5 bg-gray-100 text-gray-500 rounded-md">
                                +{skill.tags.length - 3}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Stats */}
                        <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                          <div className="flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            <span className="text-sm font-semibold text-gray-900">{skill.rating}</span>
                            <span className="text-xs text-gray-400">({skill.reviews})</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <span>⬇️ {skill.sales} 安装</span>
                          </div>
                          <div className="flex items-center gap-1 text-purple-600 font-medium text-sm group-hover:gap-2 transition-all">
                            <span>使用</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            ) : (
              <div className="text-center py-20 bg-gray-50 rounded-2xl">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">暂无匹配的AI技能</h3>
                <p className="text-gray-500 mb-6">尝试更换筛选条件或搜索其他关键词</p>
                <Link
                  href="/skills"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all"
                >
                  查看全部技能
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}

            {/* Pagination */}
            {skills.length > 0 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                <button className="px-4 py-2.5 border rounded-xl text-sm font-medium hover:bg-gray-50 disabled:opacity-50" disabled>
                  上一页
                </button>
                <button className="px-5 py-2.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl text-sm font-bold shadow-md">
                  1
                </button>
                <button className="px-5 py-2.5 border rounded-xl text-sm font-medium hover:bg-gray-50">
                  2
                </button>
                <button className="px-5 py-2.5 border rounded-xl text-sm font-medium hover:bg-gray-50">
                  3
                </button>
                <span className="px-2 text-gray-400">...</span>
                <button className="px-5 py-2.5 border rounded-xl text-sm font-medium hover:bg-gray-50">
                  下一页
                </button>
              </div>
            )}

            {/* FAQ Section (SEO) */}
            <div className="mt-16 pt-12 border-t">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                常见问题 FAQ
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-violet-50/50 to-white border border-violet-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-start gap-2">
                    <span className="text-violet-600 text-lg">Q1.</span>
                    AI技能和AI提示词有什么区别？
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    AI提示词(Prompt)是一次性的文本指令，需要手动复制粘贴到AI对话框中使用；AI技能(Skill)是封装好的模块化能力，可直接安装在TRAE、Claude Code、Cursor等AI IDE中，支持多步自动化、工具调用、上下文感知等高级功能，无需重复编写提示词。
                  </p>
                </div>
                <div className="bg-gradient-to-br from-pink-50/50 to-white border border-pink-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-start gap-2">
                    <span className="text-pink-600 text-lg">Q2.</span>
                    如何安装TRAE技能？
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    在TRAE IDE中打开技能面板，点击「导入技能」，将下载的SKILL.md文件拖入或粘贴内容即可。部分技能还需要配置对应的API密钥或工具权限。安装后可通过自然语言直接调用技能功能。
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50/50 to-white border border-blue-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-start gap-2">
                    <span className="text-blue-600 text-lg">Q3.</span>
                    AI技能支持哪些平台？
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    目前支持的主流AI IDE平台包括：TRAE（字节跳动推出的AI IDE）、Claude Code（Anthropic官方编辑器）、Cursor（基于VS Code的AI编辑器）、Windsurf（Codeium推出的AI IDE）、GitHub Copilot Workspace等。每个技能页面都会标注具体支持的平台。
                  </p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50/50 to-white border border-emerald-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-start gap-2">
                    <span className="text-emerald-600 text-lg">Q4.</span>
                    如何提交自己开发的AI技能？
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    点击导航栏「提交」按钮，选择「提交AI技能」类型，填写技能标题、分类、描述，上传SKILL.md文件，设置价格（可免费），提交后经过审核即可上架。优质技能还可获得首页推荐位和流量扶持。
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
