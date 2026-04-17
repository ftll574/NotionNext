/**
 * Sitemap 生成工具
 * 生成符合 XML Sitemap 標準的內容
 */
import BLOG from '@/blog.config'

/**
 * 生成 XML Sitemap 內容
 * @param {Array} pages - 所有頁面
 * @param {Array} categories - 所有分類
 * @param {Array} tags - 所有標籤
 * @returns {string} - XML 格式的 sitemap 內容
 */
export function generateSitemapXml({ pages = [], categories = [], tags = [] }) {
  const baseUrl = BLOG.LINK.startsWith('http') ? BLOG.LINK : `https://${BLOG.LINK}`
  const now = new Date().toISOString()
  
  // XML 頭部
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  
  // 添加首頁
  xml += `  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>\n`
  
  // 添加所有頁面
  pages.forEach(page => {
    if (page.slug && isValidUrl(`${baseUrl}/${page.slug}`)) {
      xml += `  <url>
    <loc>${baseUrl}/${page.slug}</loc>
    <lastmod>${page.publishDate || now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`
    }
  })
  
  // 添加所有分類頁面
  categories.forEach(category => {
    if (category.name && isValidUrl(`${baseUrl}/category/${category.name}`)) {
      xml += `  <url>
    <loc>${baseUrl}/category/${category.name}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>\n`
    }
  })
  
  // 添加所有標籤頁面
  tags.forEach(tag => {
    if (tag.name && isValidUrl(`${baseUrl}/tag/${tag.name}`)) {
      xml += `  <url>
    <loc>${baseUrl}/tag/${tag.name}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>\n`
    }
  })
  
  // 添加固定頁面
  const staticPages = [
    'archive', 'search'
  ]
  
  staticPages.forEach(page => {
    xml += `  <url>
    <loc>${baseUrl}/${page}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>\n`
  })
  
  // XML 尾部
  xml += '</urlset>'
  
  return xml
}

/**
 * 檢查 URL 是否有效
 * @param {string} url - 要檢查的 URL
 * @returns {boolean} - 是否有效
 */
function isValidUrl(url) {
  if (!url) return false
  
  // 檢查是否為絕對 URL
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return false
  }
  
  try {
    // 嘗試創建 URL 對象來驗證格式
    new URL(url)
    
    // 檢查 URL 是否包含無效字符
    const invalidChars = /[\s\{\}\|\\\^\[\]`<>#%"]/
    if (invalidChars.test(url)) {
      return false
    }
    
    return true
  } catch (e) {
    return false
  }
} 