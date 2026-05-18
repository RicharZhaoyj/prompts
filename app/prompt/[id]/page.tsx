import Link from 'next/link'
import { Star, Download, Heart, Share2, Copy, CheckCircle, Clock } from 'lucide-react'

export default function PromptDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-muted/50 py-8">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/prompts">Prompts</Link>
            <span>/</span>
            <span>Ultimate Blog Writer Pro</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Title Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  Writing
                </span>
                <span className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  4.8 (234 reviews)
                </span>
                <span className="text-sm text-muted-foreground">1,234 sold</span>
              </div>
              <h1 className="text-3xl font-bold mb-4">Ultimate Blog Writer Pro</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">SC</span>
                  </div>
                  <div>
                    <p className="font-medium">Sarah Chen</p>
                    <p className="text-sm text-muted-foreground">2 months ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 ml-auto">
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                    <Heart className="w-4 h-4" />
                    Save
                  </button>
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* Preview Image */}
            <div className="mb-8">
              <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop"
                alt="Prompt Preview"
                className="w-full rounded-lg"
              />
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <div className="prose max-w-none text-muted-foreground">
                <p>
                  This comprehensive blog writing prompt helps you create SEO-optimized, engaging blog posts
                  that rank on Google and resonate with your readers. Whether you're a blogger, content
                  marketer, or business owner, this prompt will revolutionize your content creation process.
                </p>
                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">What You'll Get:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Complete blog post structure with introduction, body, and conclusion</li>
                  <li>SEO optimization tips integrated into the writing process</li>
                  <li>Engaging hooks and calls-to-action</li>
                  <li>Customizable for any niche or industry</li>
                  <li>Multiple content variations for A/B testing</li>
                </ul>
                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">How to Use:</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Copy the prompt from the box below</li>
                  <li>Paste it into ChatGPT or your preferred AI tool</li>
                  <li>Customize the variables (topic, tone, length)</li>
                  <li>Generate and refine your content</li>
                </ol>
              </div>
            </div>

            {/* Prompt Content */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">The Prompt</h2>
              <div className="bg-muted/50 border rounded-lg p-6 relative">
                <pre className="whitespace-pre-wrap text-sm font-mono">
{`You are an expert blog writer specializing in [TOPIC/NICHE]. I need you to write a comprehensive, SEO-optimized blog post that:

1. **Title**: Create a compelling, keyword-rich title that hooks readers
2. **Meta Description**: Write a 150-160 character meta description
3. **Introduction**: Start with a powerful hook that addresses [PAIN_POINT/AUDIENCE_CHALLENGE]
4. **Main Content**: Cover these key points:
   - Point 1: [KEY_MESSAGE]
   - Point 2: [SUPPORTING_DETAIL]
   - Point 3: [ACTIONABLE_TIP]
5. **Conclusion**: Summarize and include a clear call-to-action

**Style Requirements**:
- Tone: [FRIENDLY/PROFESSIONAL/CASUAL]
- Length: [SHORT/MEDIUM/LONG - specify word count]
- Include subheadings for scannability
- Add bullet points where appropriate
- Maintain conversational flow

**SEO Requirements**:
- Primary keyword: [KEYWORD]
- Secondary keywords: [RELATED_KEYWORDS]
- Include internal linking suggestions
- Optimize for featured snippets where possible

Let's start writing!`}
                </pre>
                <button className="absolute top-4 right-4 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium flex items-center gap-2 hover:bg-primary/90">
                  <Copy className="w-4 h-4" />
                  Copy Prompt
                </button>
              </div>
            </div>

            {/* Reviews */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
              <div className="space-y-6">
                {[
                  {
                    name: 'John D.',
                    rating: 5,
                    date: '2 weeks ago',
                    text: 'This prompt has completely transformed my blog workflow. I can now write a full post in half the time!',
                  },
                  {
                    name: 'Maria S.',
                    rating: 5,
                    date: '1 month ago',
                    text: 'Excellent quality. The SEO optimization tips are incredibly helpful. Highly recommend!',
                  },
                  {
                    name: 'Alex R.',
                    rating: 4,
                    date: '2 months ago',
                    text: 'Great prompt overall. Would love to see more variations for different content types.',
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

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-background border rounded-lg p-6 sticky top-4">
              <div className="mb-6">
                <div className="text-3xl font-bold mb-2">$9.99</div>
                <p className="text-sm text-muted-foreground">One-time purchase, lifetime access</p>
              </div>

              <button className="w-full py-3 bg-primary text-primary-foreground rounded-md font-medium mb-4 hover:bg-primary/90 flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Buy Now - $9.99
              </button>

              <button className="w-full py-3 border rounded-md font-medium mb-6 hover:bg-accent flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" />
                Add to Wishlist
              </button>

              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Instant digital delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Lifetime access</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Free updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>30-day money-back guarantee</span>
                </div>
              </div>

              <hr className="my-6" />

              <div>
                <h3 className="font-semibold mb-3">Prompt Details</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Category</dt>
                    <dd>Writing</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">AI Model</dt>
                    <dd>ChatGPT / Claude</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Format</dt>
                    <dd>Text</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Updated</dt>
                    <dd>2 weeks ago</dd>
                  </div>
                </dl>
              </div>

              <hr className="my-6" />

              <div>
                <h3 className="font-semibold mb-3">Author Stats</h3>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">SC</span>
                  </div>
                  <div>
                    <p className="font-medium">Sarah Chen</p>
                    <p className="text-sm text-muted-foreground">12 prompts · 5,234 sales</p>
                  </div>
                </div>
                <button className="w-full mt-4 py-2 border rounded-md text-sm font-medium hover:bg-accent">
                  View Profile
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
