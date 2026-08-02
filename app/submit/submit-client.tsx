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
          <h1 className="text-2xl font-bold mb-4">
            {submitType === 'skill' ? 'AI技能提交成功！' : '提示词提交成功！'}
          </h1>
          <p className="text-muted-foreground mb-8">
            {submitType === 'skill' 
              ? '你的AI技能已提交！它将被审核后很快在技能市场上发布。'
              : '你的提示词已提交！它将被审核后很快在市场上发布。'}
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
                setSkillMdContent('')
                setSkillFileName('')
                setFormData({
                  title: '',
                  category: '',
                  description: '',
                  prompt: '',
                  price: '',
                  tags: '',
                  imageUrl: '',
                  skillPlatform: 'Trae',
                })
              }}
              className="w-full py-3 border rounded-md font-medium hover:bg-accent"
            >
              {submitType === 'skill' ? '提交另一个AI技能' : '提交另一个提示词'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 py-12 border-b">
        <div className="container mx-auto px-4">
          {/* Type Selector */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-white rounded-2xl p-2 shadow-sm border inline-flex gap-2 mx-auto">
              <button
                type="button"
                onClick={() => setSubmitType('prompt')}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                  submitType === 'prompt'
                    ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <FileText className="w-4 h-4" />
                提交 AI 提示词
              </button>
              <button
                type="button"
                onClick={() => setSubmitType('skill')}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                  submitType === 'skill'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Cpu className="w-4 h-4" />
                提交 AI 技能
                <span className="bg-yellow-400 text-yellow-900 text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                  NEW
                </span>
              </button>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-4 text-center">
            {submitType === 'skill' ? '提交你的AI技能' : '提交你的提示词'}
          </h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            {submitType === 'skill'
              ? '分享你的SKILL.md技能插件，支持TRAE、Claude Code、Cursor等平台，今天就开始赚钱'
              : '分享你的AI专业知识，今天就开始赚钱'}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          {[
            { num: 1, label: '基本信息' },
            { num: 2, label: submitType === 'skill' ? 'SKILL.md 内容' : '提示词详情' },
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

                {submitType === 'skill' && (
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      适用平台 <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {SKILL_PLATFORMS.map((p) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, skillPlatform: p.id })}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            formData.skillPlatform === p.id
                              ? `border-transparent bg-gradient-to-br ${p.color} text-white shadow-md`
                              : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          <div className="text-2xl mb-1">{p.emoji}</div>
                          <div className="font-semibold text-sm">{p.name}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

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
                  {submitType === 'skill' ? '继续上传 SKILL.md' : '继续填写提示词内容'}
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                {submitType === 'skill' && (
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      上传 SKILL.md <span className="text-red-500">*</span>
                    </label>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".md,.markdown,text/markdown,text/plain"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                        skillMdContent
                          ? 'border-green-300 bg-green-50/50'
                          : 'border-gray-300 hover:border-purple-400 hover:bg-purple-50/30'
                      }`}
                    >
                      {skillMdContent ? (
                        <div>
                          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <FileCode className="w-7 h-7 text-green-600" />
                          </div>
                          <p className="font-semibold text-green-700 mb-1">{skillFileName}</p>
                          <p className="text-sm text-green-600">
                            文件已上传，大小 {(skillMdContent.length / 1024).toFixed(1)} KB
                          </p>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation()
                              setSkillMdContent('')
                              setSkillFileName('')
                            }}
                            className="mt-3 text-sm text-red-500 hover:text-red-600 font-medium"
                          >
                            移除文件，重新上传
                          </button>
                        </div>
                      ) : (
                        <div>
                          <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Upload className="w-7 h-7 text-purple-600" />
                          </div>
                          <p className="font-semibold text-gray-800 mb-1">点击上传 SKILL.md 文件</p>
                          <p className="text-sm text-gray-500">
                            支持 .md 或 .markdown 格式，建议包含技能说明、触发词、工具调用配置等
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {submitType === 'skill' ? '技能内容 / SKILL.md 原文' : '提示词内容'} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={submitType === 'skill' ? 16 : 12}
                    className="w-full px-4 py-3 border rounded-md font-mono text-sm"
                    placeholder={submitType === 'skill' 
                      ? 'SKILL.md 内容将自动填充，或在此手动编写技能定义...'
                      : '粘贴你的提示词在这里...'}
                    value={formData.prompt}
                    onChange={(e) => setFormData({ ...formData, prompt: e.target.value })}
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    {submitType === 'skill'
                      ? '标准SKILL.md格式：包含 name、description、triggers、tools、steps 等字段'
                      : '使用 [方括号] 来标注可自定义的变量'}
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
                    {submitType === 'skill' ? (
                      <>
                        <li>• 免费技能可以帮助建立开发者声誉，快速获取用户</li>
                        <li>• $5-15 是单一功能技能（如代码生成、文档翻译）的最佳价格区间</li>
                        <li>• $20+ 适合多步自动化、调用多工具的综合性专业级技能</li>
                      </>
                    ) : (
                      <>
                        <li>• 免费提示词可以帮助建立你的声誉</li>
                        <li>• $5-15 是单一用途提示词的最佳价格区间</li>
                        <li>• $20+ 适合综合性、专业级提示词</li>
                      </>
                    )}
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
                    {submitType === 'skill' ? '提交AI技能' : '提交提示词'}
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
