import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 最简单的sitemap，确保不会构建失败
  const staticRoutes = [
    '',
    '/prompts',
    '/docs',
  ].map((route) => ({
    url: `https://prompts.link.cn${route}`,
    lastModified: new Date(),
  }))

  return staticRoutes
}
