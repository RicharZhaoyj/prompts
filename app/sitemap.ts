import { MetadataRoute } from 'next'
import { getPrompts, getCategories } from '@/lib/prompts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://prompts.link.cn'
  const now = new Date()

  // Source data can contain scheduled/future-dated records. Sitemap lastmod
  // must describe the page as of the build, never a date in the future.
  const safeLastModified = (value: string) => {
    const parsed = new Date(value)
    return Number.isNaN(parsed.getTime()) || parsed > now ? now : parsed
  }

  const prompts = await getPrompts()
  const cats = await getCategories()

  // 静态页面
  const staticRoutes = [
    '',
    '/prompts',
    '/blog',
    '/docs',
    '/skills',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // 独立静态分类页（新：SEO权重高）
  const categoryRoutes = cats.map((c) => ({
    url: `${baseUrl}/category/${encodeURIComponent(c.name)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.75,
  }))

  // 提示词/技能详情页
  const promptRoutes = prompts.map((prompt) => ({
    url: `${baseUrl}/prompt/${prompt.id}`,
    lastModified: safeLastModified(prompt.updated_at),
    changeFrequency: 'monthly' as const,
    priority: prompt.type === 'skill' ? 0.75 : 0.7,
  }))

  // 博客文章页
  const blogRoutes = [
    '/blog/10-chatgpt-tips',
    '/blog/midjourney-prompt-guide',
    '/blog/prompt-engineering-best-practices',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...categoryRoutes, ...promptRoutes, ...blogRoutes]
}
