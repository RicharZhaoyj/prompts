import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

type BreadcrumbItem = {
  label: string
  href: string
}

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '首页',
        item: 'https://prompts.link.cn',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: `https://prompts.link.cn${item.href}`,
      })),
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only">首页</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <Link
                href={item.href}
                className={`transition-colors ${
                  index === items.length - 1
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}