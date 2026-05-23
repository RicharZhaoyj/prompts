
'use client'

import Link from 'next/link'
import { Star, Download, Heart, Copy, CheckCircle, Clock } from 'lucide-react'
import { useState } from 'react'
import { useToast } from '@/app/components/toast'
import { SocialShare } from '@/app/components/social-share'
import { Breadcrumbs } from '@/app/components/breadcrumbs'
import type { Prompt } from '@/lib/types'

export default function PromptDetailClient({ prompt }: { prompt: Prompt }) {
  const [copied, setCopied] = useState(false)
  const { showToast } = useToast()

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt.content)
      setCopied(true)
      showToast('提示词已复制到剪贴板！', 'success')
      setTimeout(() => setCopied(false), 2000)
    } catch {
      showToast('复制失败', 'error')
    }
  }

  const handleNotifyMe = () => {
    showToast('感谢您的关注！我们会在正式上线时通知您。', 'success')
  }

  return (
    <div className="min-h-screen">
      <div className="bg-muted/50 py-8">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: '提示词', href: '/prompts' },
              { label: prompt.title, href: `/prompt/${prompt.id}` },
            ]}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  {prompt.category}
                </span>
                <span className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {prompt.rating} ({prompt.reviews} 条评价)
                </span>
                <span className="text-sm text-muted-foreground">已售出 {prompt.sales}</span>
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
                  <li>完整且经过测试的提示词</li>
                  <li>使用示例</li>
                  <li>自定义建议</li>
                </ul>
                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">如何使用：</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>从下方复制提示词</li>
                  <li>粘贴到您喜欢的AI工具中</li>
                  <li>自定义变量</li>
                </ol>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">提示词内容</h2>
              <div className="bg-muted/50 border rounded-lg p-6 relative">
                <pre className="whitespace-pre-wrap text-sm font-mono">
                  {prompt.content}
                </pre>
                <button
                  onClick={handleCopyPrompt}
                  className="absolute top-4 right-4 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium flex items-center gap-2 hover:bg-primary/90"
                >
                  <Copy className="w-4 h-4" />
                  {copied ? '已复制！' : '复制提示词'}
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
              <h2 className="text-xl font-semibold mb-4">用户评价</h2>
              <div className="space-y-6">
                {[
                  {
                    name: '张三',
                    rating: 5,
                    date: '2周前',
                    text: '这个提示词彻底改变了我的工作流程！',
                  },
                  {
                    name: '李四',
                    rating: 5,
                    date: '1个月前',
                    text: '质量一流，强烈推荐！',
                  },
                ].map((review, index) => (
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
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-background border rounded-lg p-6 sticky top-4">
              <div className="mb-6">
                <div className="text-3xl font-bold mb-2">${prompt.price}</div>
                <p className="text-sm text-muted-foreground">一次性购买，终身使用</p>
              </div>

              <button
                onClick={handleNotifyMe}
                className="w-full py-3 bg-primary text-primary-foreground rounded-md font-medium mb-4 hover:bg-primary/90 flex items-center justify-center gap-2"
              >
                <Clock className="w-5 h-5" />
                上线时通知我
              </button>

              <div className="text-center text-sm text-muted-foreground mb-6">
                <p>支付功能即将上线</p>
                <p>敬请期待！</p>
              </div>

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
                <h3 className="font-semibold mb-3">提示词详情</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">分类</dt>
                    <dd>{prompt.category}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">AI模型</dt>
                    <dd>ChatGPT / Claude</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">格式</dt>
                    <dd>文本</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">更新时间</dt>
                    <dd>最近</dd>
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
                      6个提示词 · {prompt.sales * 2}次销售
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

