import Link from 'next/link'
import { Book, Code, Zap, Shield, MessageCircle, ExternalLink } from 'lucide-react'

export default function DocsPage() {
  const docs = [
    {
      icon: Book,
      title: 'Getting Started',
      description: 'Learn the basics of PromptMarket and how to buy your first prompt',
      links: [
        { label: 'Quick Start Guide', href: '#' },
        { label: 'Creating an Account', href: '#' },
        { label: 'Making Your First Purchase', href: '#' },
        { label: 'Using Prompts Effectively', href: '#' },
      ],
    },
    {
      icon: Code,
      title: 'For Developers',
      description: 'API documentation and integration guides for developers',
      links: [
        { label: 'API Overview', href: '#' },
        { label: 'Authentication', href: '#' },
        { label: 'Rate Limits', href: '#' },
        { label: 'SDKs & Libraries', href: '#' },
      ],
    },
    {
      icon: Zap,
      title: 'Creating Prompts',
      description: 'Guide to creating and selling high-quality prompts',
      links: [
        { label: 'Prompt Writing Best Practices', href: '#' },
        { label: 'Pricing Your Prompts', href: '#' },
        { label: 'Submission Guidelines', href: '#' },
        { label: 'Marketing Your Work', href: '#' },
      ],
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'Policies, terms, and safety guidelines',
      links: [
        { label: 'Terms of Service', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Refund Policy', href: '#' },
        { label: 'Content Guidelines', href: '#' },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Documentation</h1>
          <p className="text-muted-foreground">
            Everything you need to know about PromptMarket
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <a href="#getting-started" className="p-6 bg-primary/5 border rounded-lg hover:border-primary transition-colors">
            <Book className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-1">Quick Start</h3>
            <p className="text-sm text-muted-foreground">Get up and running in minutes</p>
          </a>
          <a href="#api" className="p-6 bg-primary/5 border rounded-lg hover:border-primary transition-colors">
            <Code className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-1">API Reference</h3>
            <p className="text-sm text-muted-foreground">Build with our API</p>
          </a>
          <a href="#support" className="p-6 bg-primary/5 border rounded-lg hover:border-primary transition-colors">
            <MessageCircle className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-1">Get Support</h3>
            <p className="text-sm text-muted-foreground">Contact our team</p>
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
          <h2 className="text-2xl font-bold mb-6">Getting Started</h2>
          
          <div className="space-y-6">
            <div className="bg-background border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">What is PromptMarket?</h3>
              <p className="text-muted-foreground mb-4">
                PromptMarket is a marketplace for AI prompts where creators can sell their prompts and 
                buyers can discover high-quality, tested prompts for various AI tools including ChatGPT, 
                Midjourney, Stable Diffusion, and more.
              </p>
              <p className="text-muted-foreground">
                Whether you're looking to boost your productivity, enhance your creative projects, or 
                monetize your AI expertise, PromptMarket provides the platform and tools you need.
              </p>
            </div>

            <div className="bg-background border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">How to Buy Prompts</h3>
              <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                <li>Create a free account or sign in</li>
                <li>Browse or search for prompts using our categories and filters</li>
                <li>Click on a prompt to view details, previews, and reviews</li>
                <li>Click "Buy Now" and complete the payment securely via Stripe</li>
                <li>Access your purchased prompts in your dashboard</li>
                <li>Copy the prompt and use it in your preferred AI tool</li>
              </ol>
            </div>

            <div className="bg-background border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">How to Sell Prompts</h3>
              <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                <li>Create a seller account (free to join)</li>
                <li>Prepare your prompt following our submission guidelines</li>
                <li>Submit your prompt with title, description, category, and price</li>
                <li>Our team reviews submissions within 48 hours</li>
                <li>Once approved, your prompt goes live on the marketplace</li>
                <li>Track your sales and earnings in your seller dashboard</li>
              </ol>
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm">
                  <strong>Seller Tip:</strong> Prompts that include clear usage instructions, 
                  examples, and variable placeholders tend to perform better!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* API Section */}
        <section id="api" className="mb-12">
          <h2 className="text-2xl font-bold mb-6">API Documentation</h2>
          
          <div className="bg-background border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">REST API</h3>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">v1.0</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Our API allows you to programmatically access prompts, user data, and transactions.
              Perfect for building integrations or custom applications.
            </p>
            <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
              <p className="text-muted-foreground">Base URL:</p>
              <p className="text-foreground">https://api.promptmarket.com/v1</p>
            </div>
            <div className="mt-4">
              <h4 className="font-medium mb-2">Available Endpoints:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• <code className="bg-muted px-1 rounded">GET /prompts</code> - List all prompts</li>
                <li>• <code className="bg-muted px-1 rounded">GET /prompts/:id</code> - Get prompt details</li>
                <li>• <code className="bg-muted px-1 rounded">GET /categories</code> - List categories</li>
                <li>• <code className="bg-muted px-1 rounded">GET /users/:id</code> - Get user profile</li>
              </ul>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-primary hover:underline mt-4">
              View Full API Documentation <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Support</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
              <p className="text-muted-foreground mb-4">
                Have questions or need help? Our support team is here for you.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Email:</strong> support@promptmarket.com</p>
                <p><strong>Response Time:</strong> Usually within 24 hours</p>
              </div>
            </div>

            <div className="bg-background border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">FAQ</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">Can I get a refund?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes, we offer a 30-day money-back guarantee on all purchases.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">How do I become a seller?</h4>
                  <p className="text-sm text-muted-foreground">
                    Simply submit your first prompt through the submission form. No application required!
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">What AI tools are supported?</h4>
                  <p className="text-sm text-muted-foreground">
                    Our prompts work with ChatGPT, Claude, Midjourney, Stable Diffusion, DALL-E, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
