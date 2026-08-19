
'use client'

import Link from 'next/link'
import { Star, Download, Heart, Copy, CheckCircle, Clock, Wrench, Newspaper, Cpu, Download as DownloadIcon, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { useToast } from '@/app/components/toast'
import { SocialShare } from '@/app/components/social-share'
import { Breadcrumbs } from '@/app/components/breadcrumbs'
import type { Prompt } from '@/lib/types'
import { SKILL_PLATFORMS } from '@/lib/prompts'
import { analytics } from '@/app/components/analytics'

// 评论类型
interface Review {
  name: string
  rating: number
  date: string
  text: string
}

// 分类工具推荐映射
const CATEGORY_TOOLS: Record<string, Array<{name: string, description: string, icon: string}>> = {
  '写作': [
    { name: 'ChatGPT', description: '强大的AI对话模型，适合各类文案创作', icon: '💬' },
    { name: 'Claude', description: 'Anthropic推出的AI助手，擅长长文本分析', icon: '🖋️' },
    { name: 'Kimi', description: '国产AI助手，支持长文本阅读和写作', icon: '📝' },
    { name: '文心一言', description: '百度推出的AI写作助手', icon: '✍️' },
  ],
  '编程': [
    { name: 'GitHub Copilot', description: 'AI代码补全，提升编程效率', icon: '⚡' },
    { name: 'Cursor', description: 'AI代码编辑器，基于GPT-4', icon: '💻' },
    { name: '通义灵码', description: '阿里云推出的AI编程助手', icon: '🛠️' },
    { name: 'CodeGeex', description: '国产AI代码生成工具', icon: '🔧' },
  ],
  '图像生成': [
    { name: 'Midjourney', description: '高质量图像生成，适合创意设计', icon: '🎨' },
    { name: 'DALL-E 3', description: 'OpenAI推出的图像生成模型', icon: '🖼️' },
    { name: 'Stable Diffusion', description: '开源图像生成模型，可本地部署', icon: '✨' },
    { name: 'Ideogram', description: '文字渲染出色的AI图像生成', icon: '🎭' },
  ],
  '营销': [
    { name: 'Jasper', description: 'AI营销文案生成工具', icon: '📢' },
    { name: 'Canva AI', description: '设计+AI，一站式营销素材', icon: '🎯' },
    { name: 'Copy.ai', description: '多场景营销文案AI', icon: '✏️' },
    { name: ' Writesonic', description: 'SEO友好的AI写作工具', icon: '📊' },
  ],
  '教育': [
    { name: 'Khan Academy AI', description: 'AI辅导学习平台', icon: '📚' },
    { name: 'Wolfram Alpha', description: '计算与知识问答引擎', icon: '🧮' },
    { name: 'Quizlet AI', description: 'AI辅助学习和记忆工具', icon: '🎓' },
    { name: 'Turnitin', description: 'AI检测与学术辅助', icon: '✓' },
  ],
  '商业': [
    { name: 'Notion AI', description: 'AI笔记和团队协作工具', icon: '📋' },
    { name: 'Grammarly', description: 'AI写作辅助和语法检查', icon: '✅' },
    { name: 'Zapier', description: 'AI自动化工作流工具', icon: '🔄' },
    { name: 'Tableau AI', description: 'AI驱动的数据分析可视化', icon: '📈' },
  ],
  '游戏': [
    { name: 'Inworld AI', description: 'AI游戏角色对话引擎', icon: '🎮' },
    { name: 'Scenario', description: 'AI游戏资产生成工具', icon: '🎲' },
    { name: 'Charisma', description: 'AI驱动的互动叙事引擎', icon: '🎭' },
    { name: 'Leonardo AI', description: '游戏风格图像生成', icon: '🎨' },
  ],
  '音乐': [
    { name: 'Suno AI', description: 'AI音乐生成，支持多种风格', icon: '🎵' },
    { name: 'Udio', description: 'AI音乐创作平台', icon: '🎶' },
    { name: 'Mureka', description: '国产AI音乐生成工具', icon: '🎼' },
    { name: 'ACE Studio', description: 'AI歌声合成工具', icon: '🎤' },
  ],
}

// 分类新闻关键词映射
const CATEGORY_NEWS: Record<string, string> = {
  '写作': 'AI写作助手、大语言模型进展、Prompt工程技巧、内容创作效率提升',
  '编程': 'AI编程助手、代码生成工具、开发者工具新趋势、GitHub Copilot更新',
  '图像生成': 'AI绘图工具迭代、图像生成技术突破、设计师工作流变革、Midjourney新功能',
  '营销': 'AI营销自动化、内容营销趋势、品牌AI应用案例、社交媒体AI工具',
  '教育': 'AI教育应用进展、个性化学习平台、智能辅导系统、教育科技趋势',
  '商业': 'AI办公效率、企业AI转型、智能数据分析、协作工具创新',
  '游戏': 'AI游戏开发进展、NPC对话AI、游戏资产生成、游戏设计自动化',
  '音乐': 'AI音乐生成技术、音乐创作AI工具、声音合成进展、独立音乐人AI辅助',
  '默认': '大语言模型进展、AI行业动态、技术创新与应用、工具推荐与评测',
}

// 根据分类获取推荐工具
const getRecommendedTools = (category: string) => {
  // 精确匹配
  if (CATEGORY_TOOLS[category]) {
    return CATEGORY_TOOLS[category]
  }
  // 模糊匹配
  const lowerCategory = category.toLowerCase()
  for (const [key, tools] of Object.entries(CATEGORY_TOOLS)) {
    if (lowerCategory.includes(key.toLowerCase()) || key.toLowerCase().includes(lowerCategory)) {
      return tools
    }
  }
  return CATEGORY_TOOLS['写作'] // 默认返回写作工具
}

// 根据分类获取新闻关键词
const getNewsKeywords = (category: string) => {
  if (CATEGORY_NEWS[category]) {
    return CATEGORY_NEWS[category]
  }
  return CATEGORY_NEWS['默认']
}

export default function PromptDetailClient({ prompt, reviews = [], relatedPrompts = [] }: { prompt: Prompt; reviews?: Review[]; relatedPrompts?: Prompt[] }) {
  const [copied, setCopied] = useState(false)
  const { showToast } = useToast()
  
  // 动态获取分类推荐
  const recommendedTools = getRecommendedTools(prompt.category)
  const newsKeywords = getNewsKeywords(prompt.category)

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt.content)
      setCopied(true)
      analytics.event('copy_prompt', 'engagement', prompt.id)
      showToast('提示词已复制到剪贴板！', 'success')
      setTimeout(() => setCopied(false), 2000)
    } catch {
      showToast('复制失败', 'error')
    }
  }

  const handleNotifyMe = () => {
    analytics.event('purchase_intent', 'monetization', prompt.id, prompt.price)
    showToast('感谢您的关注！我们会在正式上线时通知您。', 'success')
  }

  return (
    <div className="min-h-screen">
      <div className="bg-muted/50 py-8">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: '全部分类', href: '/prompts' },
              { label: prompt.category, href: `/category/${encodeURIComponent(prompt.category)}` },
              { label: prompt.title, href: `/prompt/${prompt.id}` },
            ]}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {/* Skill 平台徽章 */}
                {prompt.type === 'skill' && prompt.skill_platform && (() => {
                  const pInfo = SKILL_PLATFORMS.find((p) => p.id === prompt.skill_platform)
                  return (
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${pInfo?.color || 'from-violet-500 to-purple-600'} shadow-sm`}>
                      <span className="text-sm">{pInfo?.emoji || '🤖'}</span>
                      {pInfo?.name || prompt.skill_platform} 技能
                    </span>
                  )
                })()}
                {/* 类型徽章 */}
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                  prompt.type === 'skill'
                    ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700'
                    : 'bg-primary/10 text-primary'
                }`}>
                  {prompt.type === 'skill' ? '✨ AI技能' : prompt.category}
                </span>
                <span className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {prompt.rating} ({prompt.reviews} 条评价)
                </span>
                <span className="text-sm text-muted-foreground">
                  {prompt.type === 'skill' ? `⬇️ ${prompt.sales} 安装` : `已售出 ${prompt.sales}`}
                </span>
              </div>
              <h1 className="text-3xl font-bold mb-4">{prompt.title}</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {prompt.author_name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{prompt.author_name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 ml-auto">
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                    <Heart className="w-4 h-4" />
                    收藏
                  </button>
                </div>
              </div>
            </div>

            {prompt.image_url && (
              <div className="mb-8">
                <img
                  src={prompt.image_url}
                  alt={prompt.title}
                  className="w-full rounded-lg"
                />
              </div>
            )}

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">描述</h2>
              <div className="prose max-w-none text-muted-foreground">
                <p>{prompt.description}</p>
                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">您将获得：</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {prompt.type === 'skill' ? (
                    <>
                      <li>完整的SKILL.md技能定义文件</li>
                      <li>多平台安装说明（TRAE/Claude/Cursor等）</li>
                      <li>触发词和调用示例</li>
                      <li>工具调用配置（如适用）</li>
                    </>
                  ) : (
                    <>
                      <li>完整且经过测试的提示词</li>
                      <li>使用示例</li>
                      <li>自定义建议</li>
                    </>
                  )}
                </ul>
                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
                  {prompt.type === 'skill' ? '如何安装技能：' : '如何使用：'}
                </h3>
                <ol className="list-decimal pl-6 space-y-2">
                  {prompt.type === 'skill' ? (
                    <>
                      <li>打开您的AI IDE（TRAE、Claude Code、Cursor等）</li>
                      <li>进入技能管理面板，选择「导入技能」</li>
                      <li>复制下方SKILL.md内容并粘贴，或上传文件</li>
                      <li>配置所需的API密钥或工具权限（如有）</li>
                      <li>使用自然语言调用技能功能</li>
                    </>
                  ) : (
                    <>
                      <li>从下方复制提示词</li>
                      <li>粘贴到您喜欢的AI工具中</li>
                      <li>自定义变量</li>
                    </>
                  )}
                </ol>
              </div>
            </div>

            {/* Skill 平台安装跳转区 */}
            {prompt.type === 'skill' && prompt.skill_platform && (() => {
              const pInfo = SKILL_PLATFORMS.find((p) => p.id === prompt.skill_platform)
              return (
                <div className={`mb-8 bg-gradient-to-br ${pInfo?.color || 'from-violet-500 to-purple-600'} rounded-2xl p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 text-[120px] opacity-10 -mt-4 -mr-4">{pInfo?.emoji || '🤖'}</div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Cpu className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">适用于 {pInfo?.name || prompt.skill_platform}</h3>
                        <p className="text-sm text-white/80">一键安装到您的AI IDE中</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                        <DownloadIcon className="w-4 h-4" />
                        下载 SKILL.md
                      </button>
                      <button
                        onClick={handleCopyPrompt}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/30 transition-colors border border-white/30"
                      >
                        <Copy className="w-4 h-4" />
                        {copied ? '已复制！' : '复制技能代码'}
                      </button>
                      <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm text-white rounded-xl font-medium hover:bg-white/20 transition-colors border border-white/20">
                        <ExternalLink className="w-4 h-4" />
                        查看安装文档
                      </button>
                    </div>
                  </div>
                </div>
              )
            })()}

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                {prompt.type === 'skill' ? '技能内容 / SKILL.md' : '提示词内容'}
              </h2>
              <div className="bg-muted/50 border rounded-lg p-6 relative">
                <pre className="whitespace-pre-wrap text-sm font-mono">
                  {prompt.content}
                </pre>
                <button
                  onClick={handleCopyPrompt}
                  className="absolute top-4 right-4 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium flex items-center gap-2 hover:bg-primary/90"
                >
                  <Copy className="w-4 h-4" />
                  {copied ? '已复制！' : prompt.type === 'skill' ? '复制技能代码' : '复制提示词'}
                </button>
              </div>
            </div>

            <div className="mb-8">
              <SocialShare 
                title={prompt.title}
                description={prompt.description}
                url={`/prompt/${prompt.id}`}
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">用户评价 ({prompt.reviews}条)</h2>
              <div className="space-y-6">
                {reviews.length > 0 ? (
                  reviews.map((review, index) => (
                  <div key={index} className="border-b pb-6 last:border-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">{review.name}</span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <p className="text-muted-foreground">{review.text}</p>
                  </div>
                ))
                ) : (
                  <p className="text-muted-foreground text-center py-8">
                    暂无评价，成为第一个评价的用户吧！
                  </p>
                )}
              </div>
            </div>

            {/* 相关提示词推荐 (降低跳出率) */}
            {relatedPrompts.length > 0 && (
              <div className="mt-12 pt-8 border-t">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">✨ 你可能还喜欢这些提示词</h2>
                  <Link
                    href="/prompts"
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    查看全部 →
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedPrompts.map((rp) => (
                    <Link
                      key={rp.id}
                      href={`/prompt/${rp.id}`}
                      className="group bg-background border rounded-xl p-4 hover:border-primary/40 hover:shadow-md transition-all duration-200"
                    >
                      {rp.image_url && (
                        <div className="aspect-[4/3] rounded-lg overflow-hidden mb-3 bg-muted">
                          <img
                            src={rp.image_url}
                            alt={rp.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="shrink-0 px-2 py-0.5 text-[11px] bg-primary/10 text-primary rounded-full font-medium">
                          {rp.category}
                        </span>
                        {rp.price === 0 ? (
                          <span className="shrink-0 px-2 py-0.5 text-[11px] bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full font-bold">
                            🆓 免费
                          </span>
                        ) : (
                          <span className="shrink-0 px-2 py-0.5 text-[11px] bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full font-semibold">
                            ${rp.price}
                          </span>
                        )}
                      </div>
                      <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2 min-h-[2.5em]">
                        {rp.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-3 min-h-[2em]">
                        {rp.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium text-yellow-600 dark:text-yellow-400">{rp.rating}</span>
                          <span>({rp.reviews})</span>
                        </div>
                        <span>销量 {rp.sales}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-background border rounded-lg p-6 sticky top-4">
              <div className="mb-6">
                <div className="text-3xl font-bold mb-2">${prompt.price}</div>
                <p className="text-sm text-muted-foreground">一次性购买，终身使用</p>
              </div>

              {prompt.price > 0 ? (
                <>
                  <button
                    onClick={handleNotifyMe}
                    className="w-full py-3 bg-primary text-primary-foreground rounded-md font-medium mb-4 hover:bg-primary/90 flex items-center justify-center gap-2"
                  >
                    <Clock className="w-5 h-5" />
                    购买上线时通知我
                  </button>
                  <div className="text-center text-sm text-muted-foreground mb-6">
                    <p>支付功能正在接入</p>
                    <p>提交意向后优先获得通知</p>
                  </div>
                </>
              ) : (
                <>
                  <button
                    onClick={handleCopyPrompt}
                    className="w-full py-3 bg-primary text-primary-foreground rounded-md font-medium mb-4 hover:bg-primary/90 flex items-center justify-center gap-2"
                  >
                    <Copy className="w-5 h-5" />
                    免费复制提示词
                  </button>
                  <div className="text-center text-sm text-muted-foreground mb-6">
                    <p>当前内容免费使用</p>
                  </div>
                </>
              )}

              <button className="w-full py-3 border rounded-md font-medium mb-6 hover:bg-accent flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" />
                加入愿望清单
              </button>

              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>即时数字交付</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>终身访问权限</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>免费更新</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>30天退款保证</span>
                </div>
              </div>

              <hr className="my-6" />

              <div>
                <h3 className="font-semibold mb-3">{prompt.type === 'skill' ? '技能详情' : '提示词详情'}</h3>
                <dl className="space-y-2 text-sm">
                  {prompt.type === 'skill' && prompt.skill_platform && (() => {
                    const pInfo = SKILL_PLATFORMS.find((p) => p.id === prompt.skill_platform)
                    return (
                      <div className="flex justify-between items-center">
                        <dt className="text-muted-foreground">适用平台</dt>
                        <dd className="inline-flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r text-white rounded-full text-xs font-medium"
                          style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                        >
                          <span>{pInfo?.emoji || '🤖'}</span>
                          {pInfo?.name || prompt.skill_platform}
                        </dd>
                      </div>
                    )
                  })()}
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">分类</dt>
                    <dd>{prompt.category}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">类型</dt>
                    <dd>{prompt.type === 'skill' ? 'AI Agent技能' : 'Prompt提示词'}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">{prompt.type === 'skill' ? '支持IDE' : 'AI模型'}</dt>
                    <dd>{prompt.type === 'skill' ? 'TRAE / Claude / Cursor' : 'ChatGPT / Claude'}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">格式</dt>
                    <dd>{prompt.type === 'skill' ? 'SKILL.md' : '文本'}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">更新时间</dt>
                    <dd>2026年8月</dd>
                  </div>
                </dl>
              </div>

              <hr className="my-6" />

              <div>
                <h3 className="font-semibold mb-3">作者信息</h3>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {prompt.author_name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{prompt.author_name}</p>
                    <p className="text-sm text-muted-foreground">
                      6个提示词 · {prompt.sales}次销售
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 推荐配套工具 */}
            <div className="bg-background border rounded-lg p-6 mt-6">
              <div className="flex items-center gap-2 mb-1">
                <Wrench className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold">推荐配套工具</h3>
              </div>
              <p className="text-xs text-gray-500 mb-4">为「{prompt.category}」分类精选的工具推荐</p>
              <div className="space-y-3">
                {recommendedTools.map((tool) => (
                  <a
                    key={tool.name}
                    href="https://tools.link.cn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group"
                  >
                    <span className="text-2xl flex-shrink-0">{tool.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm text-gray-900 group-hover:text-blue-700">{tool.name}</div>
                      <p className="text-xs text-gray-500 mt-0.5">{tool.description}</p>
                    </div>
                  </a>
                ))}
              </div>
              <a
                href="https://tools.link.cn"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 pt-4 border-t border-gray-100 text-center text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                查看更多{prompt.category}相关工具 →
              </a>
            </div>

            {/* 相关AI新闻 */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg p-6 mt-6 text-white">
              <div className="flex items-center gap-2 mb-1">
                <Newspaper className="w-5 h-5" />
                <h3 className="font-bold text-lg">相关AI热点</h3>
              </div>
              <p className="text-xs text-white/80 mb-4">了解{prompt.category}领域最新动态</p>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4">
                <div className="flex flex-wrap gap-2">
                  {newsKeywords.split('、').map((keyword, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-white/30 rounded-full">{keyword}</span>
                  ))}
                </div>
              </div>
              <a
                href="https://ai.link.cn"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-2.5 bg-white text-purple-600 font-semibold rounded-md hover:bg-gray-100 transition-colors text-sm text-center"
              >
                浏览AI热点资讯 →
              </a>
            </div>

            {/* 分类快速导航 */}
            <div className="bg-background border rounded-lg p-6 mt-6">
              <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                🧭 更多分类
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: '写作', emoji: '✍️' },
                  { name: '编程', emoji: '💻' },
                  { name: '图像生成', emoji: '🎨' },
                  { name: '营销', emoji: '📣' },
                  { name: '商业', emoji: '💼' },
                  { name: '教育', emoji: '📚' },
                  { name: '创意', emoji: '✨' },
                  { name: '职场', emoji: '💼' },
                ].map((c) => (
                  <Link
                    key={c.name}
                    href={`/category/${encodeURIComponent(c.name)}`}
                    className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-xs font-medium transition-colors ${
                      c.name === prompt.category
                        ? 'bg-purple-100 text-purple-700 ring-1 ring-purple-200'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <span>{c.emoji}</span>
                    <span>{c.name}</span>
                  </Link>
                ))}
              </div>
              <Link
                href="/skills"
                className="mt-3 flex items-center justify-between rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 px-3 py-2 text-xs font-semibold text-purple-700 transition-colors"
              >
                🤖 探索 AI 技能专区
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[9px] px-1.5 py-0.5 rounded font-bold ml-1">NEW</span>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

