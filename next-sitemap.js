const BLOG = require('./blog.config')

/**
 * 確保生成標準的 sitemap.xml
 */
module.exports = {
  siteUrl: BLOG.LINK.startsWith('http') ? BLOG.LINK : `https://${BLOG.LINK}`,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/'
      }
    ],
    additionalSitemaps: [
      `${BLOG.LINK.startsWith('http') ? BLOG.LINK : `https://${BLOG.LINK}`}/sitemap.xml`
    ]
  },
  exclude: BLOG.SITEMAP_EXCLUDE || [],
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  outDir: 'public'
}
