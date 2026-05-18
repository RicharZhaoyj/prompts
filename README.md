# Prompt Marketplace

A modern AI prompt marketplace built with Next.js, deployed on Vercel.

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment to Vercel

### Option 1: One-Click Deploy

1. Create a GitHub repository and push your code
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Database (optional for MVP)
DATABASE_URL=

# Stripe (optional for payments)
STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=

# NextAuth (optional for authentication)
NEXTAUTH_URL=
NEXTAUTH_SECRET=
```

### Custom Domain Setup

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your subdomain: `prompts.link.cn`
3. Update DNS records in your domain provider:

**For root domain (link.cn):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For subdomain (prompts.link.cn):**
```
Type: A
Name: prompts
Value: 76.76.21.21
```

Or use CNAME:
```
Type: CNAME
Name: prompts
Value: cname.vercel-dns.com
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage
│   ├── prompts/           # Browse prompts
│   ├── prompt/[id]/       # Prompt details
│   ├── submit/            # Submit prompt
│   └── docs/              # Documentation
├── public/                # Static assets
└── package.json
```

## 🎨 Features

- [x] Homepage with featured prompts
- [x] Browse and search prompts
- [x] Prompt detail page
- [x] Submit prompt form
- [x] Documentation page
- [ ] User authentication
- [ ] Payment integration
- [ ] User dashboard
- [ ] Admin panel

## 📝 License

MIT License - feel free to use this template for your own projects!

---

Built with ❤️ using Next.js + Tailwind CSS + Lucide Icons
