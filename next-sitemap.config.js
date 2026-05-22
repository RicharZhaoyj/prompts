module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://prompts.link.cn',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/dashboard/*', '/api/*'],
}
