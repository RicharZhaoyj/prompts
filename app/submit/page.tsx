'use client'

import { useState, useMemo } from 'react'
import { Upload, DollarSign, FileText, CheckCircle, Eye, Copy, X } from 'lucide-react'
import { CATEGORIES } from '@/lib/prompts'
import { useRouter } from 'next/navigation'

export default function SubmitPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [showPreview, setShowPreview] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    prompt: '',
    price: '',
    tags: '',
    imageUrl: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(3)
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
          <h1 className="text-2xl font-bold mb-4">Prompt Submitted Successfully!</h1>
          <p className="text-muted-foreground mb-8">
            Your prompt has been submitted! It will be reviewed and live on the marketplace soon.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => router.push('/dashboard')}
              className="w-full py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90"
            >
              Go to Dashboard
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
              Submit Another Prompt
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
          <h1 className="text-3xl font-bold mb-4">Submit Your Prompt</h1>
          <p className="text-muted-foreground">
            Share your AI expertise and start earning today
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          {[
            { num: 1, label: 'Basic Info' },
            { num: 2, label: 'Prompt Details' },
            { num: 3, label: 'Complete' },
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
                    Prompt Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border rounded-md"
                    placeholder="e.g., Ultimate Blog Writer Pro"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border rounded-md"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="">Select a category</option>
                    {CATEGORIES.map(cat => (
                      <option key={cat.id} value={cat.name}>{cat.emoji} {cat.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Cover Image URL (Optional
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
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 border rounded-md"
                    placeholder="Describe what your prompt does and what makes it special..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Tags
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border rounded-md"
                    placeholder="e.g., SEO, blog, content, marketing (comma-separated)"
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
                  Continue to Prompt Content
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    The Prompt <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={12}
                    className="w-full px-4 py-3 border rounded-md font-mono text-sm"
                    placeholder="Paste your prompt here..."
                    value={formData.prompt}
                    onChange={(e) => setFormData({ ...formData, prompt: e.target.value })}
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Use [BRACKETS] to indicate customizable variables
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Price (USD) <span className="text-red-500">*</span>
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
                    Set your price between $0.99 and $999.99. Platform fee is 20%.
                  </p>
                </div>

                <div className="bg-muted/50 border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Pricing Tips</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Free prompts can help build your reputation</li>
                    <li>• $5-15 is the sweet spot for single-purpose prompts</li>
                    <li>• $20+ for comprehensive, professional-grade prompts</li>
                  </ul>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-3 border rounded-md font-medium hover:bg-accent"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90"
                  >
                    Submit Prompt
                  </button>
                </div>
              </div>
            )}
          </form>

          {/* Preview Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Preview</h2>
                <button
                  type="button"
                  onClick={() => setShowPreview(!showPreview)}
                  className="flex items-center gap-2 text-sm text-primary"
                >
                  <Eye className="w-4 h-4" />
                  {showPreview ? 'Hide' : 'Show'}
                </button>
              </div>
              
              {showPreview && (
                <div className="bg-background border rounded-lg overflow-hidden">
                  <div className="h-40 bg-muted flex items-center justify-center">
                    {formData.imageUrl ? (
                      <img src={formData.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <FileText className="w-12 h-12 text-muted-foreground" />
                    )}
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-muted-foreground mb-2">{formData.category}</div>
                    <h3 className="font-bold mb-2">{formData.title || 'Your Title'}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                      {formData.description || 'Your description will appear here...'}
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
