'use client'

import { useState } from 'react'
import { Upload, DollarSign, FileText, CheckCircle } from 'lucide-react'

export default function SubmitPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    prompt: '',
    price: '',
    tags: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(3)
  }

  if (step === 3) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Prompt Submitted Successfully!</h1>
          <p className="text-muted-foreground mb-8">
            Your prompt has been submitted for review. We'll notify you once it's approved and live on the marketplace.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => window.location.href = '/prompts'}
              className="w-full py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90"
            >
              Browse More Prompts
            </button>
            <button
              onClick={() => setStep(1)}
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

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
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
                  <option value="writing">Writing</option>
                  <option value="coding">Coding</option>
                  <option value="image">Image Generation</option>
                  <option value="marketing">Marketing</option>
                  <option value="business">Business</option>
                  <option value="education">Education</option>
                  <option value="creative">Creative</option>
                </select>
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
      </div>
    </div>
  )
}
