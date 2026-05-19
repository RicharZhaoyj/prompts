import { Search, FileText, ShoppingCart, Bell, Heart, Plus } from 'lucide-react'
import Link from 'next/link'

type EmptyStateProps = {
  type: 'search' | 'prompts' | 'cart' | 'saved' | 'notifications' | 'generic'
  title?: string
  description?: string
  action?: {
    label: string
    href?: string
    onClick?: () => void
  }
}

export function EmptyState({ type, title, description, action }: EmptyStateProps) {
  const configs = {
    search: {
      icon: Search,
      defaultTitle: 'No results found',
      defaultDescription: 'Try adjusting your search or filters',
    },
    prompts: {
      icon: FileText,
      defaultTitle: 'No prompts yet',
      defaultDescription: 'Create your first prompt to get started',
    },
    cart: {
      icon: ShoppingCart,
      defaultTitle: 'Cart is empty',
      defaultDescription: 'Browse prompts and add them to your cart',
    },
    saved: {
      icon: Heart,
      defaultTitle: 'No saved prompts',
      defaultDescription: 'Save prompts you like for later',
    },
    notifications: {
      icon: Bell,
      defaultTitle: 'No notifications',
      defaultDescription: 'You\'re all caught up!',
    },
    generic: {
      icon: FileText,
      defaultTitle: 'Nothing here yet',
      defaultDescription: 'Check back later for updates',
    },
  }

  const config = configs[type]
  const Icon = config.icon

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-muted-foreground" />
      </div>
      <h2 className="text-xl font-bold mb-2">{title || config.defaultTitle}</h2>
      <p className="text-muted-foreground mb-8 max-w-sm">
        {description || config.defaultDescription}
      </p>
      {action && (
        action.href ? (
          <Link
            href={action.href}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90"
          >
            {action.label}
          </Link>
        ) : (
          <button
            onClick={action.onClick}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90"
          >
            {action.label}
          </button>
        )
      )}
    </div>
  )
}

export function NoPromptsFound() {
  return (
    <EmptyState
      type="prompts"
      action={{
        label: 'Create Prompt',
        href: '/submit',
      }}
    />
  )
}

export function NoSearchResults() {
  return (
    <EmptyState
      type="search"
      description="Try different keywords or remove some filters"
    />
  )
}
