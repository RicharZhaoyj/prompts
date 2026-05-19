import { MetadataRoute } from 'next'
import { getPrompts, getCategories } from '@/lib/prompts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const prompts = await getPrompts()
  const categories = await getCategories()

  const staticRoutes = [
    '',
    '/prompts',
    '/submit',
    '/docs',
    '/login',
  ].map((route) => ({
    url: `https://prompts.link.cn${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const promptRoutes = prompts.map((prompt) => ({
    url: `https://prompts.link.cn/prompt/${prompt.id}`,
    lastModified: new Date(prompt.updated_at),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const categoryRoutes = categories.map((category) => ({
    url: `https://prompts.link.cn/prompts?category=${category.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...promptRoutes, ...categoryRoutes]
}
