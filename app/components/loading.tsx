export function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' | 'xl' }) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  }

  return (
    <div className={`animate-spin rounded-full border-2 border-primary border-t-transparent ${sizes[size]}`} />
  )
}

export function LoadingScreen() {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <LoadingSpinner size="xl" />
    </div>
  )
}

export function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-muted rounded ${className}`} />
  )
}

export function CardSkeleton() {
  return (
    <div className="border rounded-lg overflow-hidden">
      <Skeleton className="h-48" />
      <div className="p-4 space-y-3">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex gap-2">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-12" />
        </div>
      </div>
    </div>
  )
}
