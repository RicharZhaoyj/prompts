'use client'

import { useState, useMemo, useRef } from 'react'
import { Upload, DollarSign, FileText, CheckCircle, Eye, Copy, X, Cpu, Code, FileCode } from 'lucide-react'
import { CATEGORIES, SKILL_PLATFORMS } from '@/lib/prompts'
import { useRouter } from 'next/navigation'

export default function SubmitClient() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [showPreview, setShowPreview] = useState(false)
  const [submitType, setSubmitType] = useState<'prompt' | 'skill'>('prompt')
  const [skillMdContent, setSkillMdContent] = useState('')
  const [skillFileName, setSkillFileName] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    prompt: '',
    price: '',
    tags: '',
    imageUrl: '',
    skillPlatform: 'Trae',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(3)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    
    setSkillFileName(file.name)
    const reader = new FileReader()
    reader.onload = (event) => {
      const content = event.target?.result as string
      setSkillMdContent(content)
      // 自动填充内容
      if (content && !formData.prompt) {
        setFormData({ ...formData, prompt: content })
      }
    }
    reader.readAsText(file)
  }

  const tagList = useMemo(() => {
    return formData.tags.split(',').map(t => t.trim()).filter(Boolean)
  }, [formData.tags])

  if (step === 3) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold mb-4">提示词提交成功！</h1>
          <p className="text-muted-foreground mb-8">
            你的提示词已提交！它将被审核后很快在市场上发布。
          </p>
          <div className="space-y-3">
            <button
              onClick={() => router.push('/dashboard')}
              className="w-full py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90"
            >
              前往仪表盘
            </button>
            <button
              onClick={() => {
                setStep(1)
                setFormData({
                  title: '',
                  category: '',
                  description: '',
                  prompt: '',
                  price: '',
                  tags: '',
                  imageUrl: '',
                })
              }}
              className="w-full py-3 border rounded-md font-medium hover:bg-accent"
            >
              提交另一个提示词
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">提交你的提示词</h1>
          <p className="text-muted-foreground">
            分享你的AI专业知识，今天就开始赚钱
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          {[
            { num: 1, label: '基本信息' },
            { num: 2, label: '提示词详情' },
            { num: 3, label: '完成' },
          ].map((s, index) => (
            <div key={s.num} className="flex items-center">
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= s.num
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {s.num}
                </div>
                <span className={`ml-2 font-medium ${step >= s.num ? '' : 'text-muted-foreground'}`}>
                  {s.label}
                </span>
              </div>
              {index < 2 && <div className="w-24 h-0.5 bg-muted mx-4" />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <form onSubmit={handleSubmit} className="lg:col-span-2">
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    提示词标题 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border rounded-md"
                    placeholder="例如：终极博客写作专家"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    分类 <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border rounded-md"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="">选择分类</option>
                    {CATEGORIES.map(cat => (
                      <option key={cat.id} value={cat.name}>{cat.emoji} {cat.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    封面图片链接 (可选)
                  </label>
                  <input
                    type="url"
                    className="w-full px-4 py-3 border rounded-md"
                    placeholder="https://example.com/image.jpg"
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    描述 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 border rounded-md"
                    placeholder="描述你的提示词能做什么，以及它的特别之处..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    标签
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border rounded-md"
                    placeholder="例如：SEO, 博客, 内容, 营销 (用逗号分隔)"
                    value={formData.tags}
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  />
                  {tagList.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {tagList.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-muted rounded-md rounded-full text-sm">
                          {tag}
                          <button
                            type="button"
                            onClick={() => {
                              const newTags = [...tagList]
                              newTags.splice(i, 1)
                              setFormData({ ...formData, tags: newTags.join(', ') })
                            }}
                            className="ml-1"
                          >
                            <X className="w-3 h-3 inline" />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90"
                >
                  继续填写提示词内容
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    提示词内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={12}
                    className="w-full px-4 py-3 border rounded-md font-mono text-sm"
                    placeholder="粘贴你的提示词在这里..."
                    value={formData.prompt}
                    onChange={(e) => setFormData({ ...formData, prompt: e.target.value })}
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    使用 [方括号] 来标注可自定义的变量
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    价格 (美元) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="number"
                      required
                      min="0.99"
                      max="999.99"
                      step="0.01"
                      className="w-full pl-12 pr-4 py-3 border rounded-md"
                      placeholder="9.99"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    设定价格在 $0.99 到 $999.99 之间。平台服务费为 20%。
                  </p>
                </div>

                <div className="bg-muted/50 border rounded-lg p-4">
                  <h3 className="font-medium mb-2">定价建议</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 免费提示词可以帮助建立你的声誉</li>
                    <li>• $5-15 是单一用途提示词的最佳价格区间</li>
                    <li>• $20+ 适合综合性、专业级提示词</li>
                  </ul>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-3 border rounded-md font-medium hover:bg-accent"
                  >
                    返回
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90"
                  >
                    提交提示词
                  </button>
                </div>
              </div>
            )}
          </form>

          {/* Preview Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">预览</h2>
                <button
                  type="button"
                  onClick={() => setShowPreview(!showPreview)}
                  className="flex items-center gap-2 text-sm text-primary"
                >
                  <Eye className="w-4 h-4" />
                  {showPreview ? '隐藏' : '显示'}
                </button>
              </div>
              
              {showPreview && (
                <div className="bg-background border rounded-lg overflow-hidden">
                  <div className="h-40 bg-muted flex items-center justify-center">
                    {formData.imageUrl ? (
                      <img src={formData.imageUrl} alt="预览" className="w-full h-full object-cover" />
                    ) : (
                      <FileText className="w-12 h-12 text-muted-foreground" />
                    )}
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-muted-foreground mb-2">{formData.category}</div>
                    <h3 className="font-bold mb-2">{formData.title || '你的标题'}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                      {formData.description || '你的描述将显示在这里...'}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {tagList.map((tag, i) => (
                        <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-xl font-bold">${formData.price || '0.00'}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
