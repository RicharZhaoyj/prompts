import { MetadataRoute } from 'next'
import { getPrompts } from '@/lib/prompts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://prompts.link.cn'
  
  // 获取所有提示词
  const prompts = await getPrompts()
  
  // 静态页面
  const staticRoutes = [
    '',
    '/prompts',
    '/blog',
    '/docs',
    '/login',
    '/submit',
    '/skills',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // 提示词详情页
  const promptRoutes = prompts.map((prompt) => ({
    url: `${baseUrl}/prompt/${prompt.id}`,
    lastModified: new Date(prompt.updated_at),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
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

  // 分类页面
  const categoryRoutes = [
    '/prompts?category=写作',
    '/prompts?category=编程',
    '/prompts?category=图像生成',
    '/prompts?category=营销',
    '/prompts?category=商业',
    '/prompts?category=教育',
    '/prompts?category=创意',
    '/prompts?category=生产力',
    '/prompts?category=AI技能',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }))

  return [...staticRoutes, ...promptRoutes, ...blogRoutes, ...categoryRoutes]
}
