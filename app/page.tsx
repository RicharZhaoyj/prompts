import Link from 'next/link'
import { Sparkles, TrendingUp, Users, Shield } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Over 10,000+ AI Prompts Available
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover the Perfect <br />
            <span className="text-primary">AI Prompt</span> for Your Needs
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Buy, sell, and share high-quality AI prompts for ChatGPT, Midjourney, Stable Diffusion, and more.
            Join our community of AI enthusiasts and creators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/prompts"
              className="px-8 py-3 text-lg font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Browse Prompts
            </Link>
            <Link
              href="/submit"
              className="px-8 py-3 text-lg font-medium rounded-lg border hover:bg-accent"
            >
              Start Selling
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Trending Prompts</h3>
              <p className="text-muted-foreground">
                Discover the most popular and effective prompts curated by our community
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Creator Network</h3>
              <p className="text-muted-foreground">
                Connect with talented prompt creators and monetize your expertise
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Assured</h3>
              <p className="text-muted-foreground">
                All prompts are reviewed and tested to ensure maximum effectiveness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Writing', count: 2340, emoji: '✍️' },
              { name: 'Coding', count: 1890, emoji: '💻' },
              { name: 'Image Generation', count: 3200, emoji: '🎨' },
              { name: 'Marketing', count: 1560, emoji: '📊' },
              { name: 'Education', count: 980, emoji: '📚' },
              { name: 'Business', count: 1120, emoji: '💼' },
              { name: 'Creative', count: 2780, emoji: '✨' },
              { name: 'Productivity', count: 1450, emoji: '⚡' },
            ].map((category) => (
              <Link
                key={category.name}
                href={`/prompts?category=${category.name.toLowerCase().replace(' ', '-')}`}
                className="p-6 bg-background rounded-lg border hover:border-primary hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-2">{category.emoji}</div>
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} prompts</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Prompts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Prompts</h2>
            <Link href="/prompts" className="text-primary font-medium hover:underline">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Ultimate Blog Writer',
                description: 'Generate engaging blog posts with SEO optimization',
                price: 9.99,
                category: 'Writing',
                rating: 4.8,
                sales: 1234,
              },
              {
                title: 'Code Review Assistant',
                description: 'Professional code review and optimization suggestions',
                price: 14.99,
                category: 'Coding',
                rating: 4.9,
                sales: 856,
              },
              {
                title: 'Portrait Art Generator',
                description: 'Create stunning portrait images with detailed prompts',
                price: 7.99,
                category: 'Image Generation',
                rating: 4.7,
                sales: 2341,
              },
            ].map((prompt, index) => (
              <div key={index} className="bg-background border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                    {prompt.category}
                  </span>
                  <span className="text-sm text-muted-foreground">★ {prompt.rating}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{prompt.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{prompt.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">${prompt.price}</span>
                  <span className="text-sm text-muted-foreground">{prompt.sales} sold</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Selling?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of prompt creators and start earning today
          </p>
          <Link
            href="/submit"
            className="inline-block px-8 py-3 bg-background text-foreground font-medium rounded-lg hover:bg-accent"
          >
            Submit Your First Prompt
          </Link>
        </div>
      </section>
    </div>
  )
}
