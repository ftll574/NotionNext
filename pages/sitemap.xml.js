// pages/sitemap.xml.js
import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { getGlobalData } from '@/lib/db/getSiteData'
import { extractLangId, extractLangPrefix } from '@/lib/utils/pageId'

// 檢查 URL 是否為外部連結
function isExternalUrl(url) {
  return url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//')
}

// 檢查 URL 是否為有效的內部 URL
function isValidInternalUrl(url) {
  // 移除開頭的斜線
  if (url.startsWith('/')) {
    url = url.slice(1)
  }
  
  // 排除 API 路徑和私有路徑
  if (url.startsWith('api/') || 
      url.startsWith('_next/') || 
      url.startsWith('admin/')) {
    return false
  }
  
  // 排除文件名包含點的路徑 (通常是靜態資源)
  if (url.includes('.') && !url.endsWith('.html')) {
    return false
  }
  
  return true
}

// 清理和驗證 URL，確保格式完全正確
function cleanUrl(url, baseUrl) {
  // 如果 URL 已經是絕對路徑，返回原樣
  if (isExternalUrl(url)) {
    return url
  }
  
  // 確保 baseUrl 結尾沒有斜線
  if (baseUrl.endsWith('/')) {
    baseUrl = baseUrl.slice(0, -1)
  }
  
  // 確保 url 開頭沒有斜線
  if (url.startsWith('/')) {
    url = url.slice(1)
  }
  
  // 組合完整 URL
  return `${baseUrl}/${url}`
}

// 獲取唯一的 URL 列表
function getUniqueFields(fields) {
  const seen = new Set()
  return fields.filter(field => {
    const isDuplicate = seen.has(field.loc)
    seen.add(field.loc)
    return !isDuplicate
  })
}

// 驗證 URL 是否符合 XML 規範
function isValidXmlUrl(url) {
  try {
    // 檢查 URL 是否有效
    new URL(url)
    
    // 檢查 URL 是否包含特殊字符，需要轉義
    return !url.includes('&') || url.includes('&amp;')
  } catch (e) {
    return false
  }
}

// 格式化日期為 YYYY-MM-DD 格式
function formatDate(date) {
  if (!date) return new Date().toISOString().split('T')[0]
  
  if (typeof date === 'string') {
    // 嘗試解析日期字符串
    try {
      return new Date(date).toISOString().split('T')[0]
    } catch (e) {
      return new Date().toISOString().split('T')[0]
    }
  }
  
  // 如果是 Date 對象
  if (date instanceof Date) {
    return date.toISOString().split('T')[0]
  }
  
  return new Date().toISOString().split('T')[0]
}

// 將 sitemap 字段轉換為 XML 格式
function generateSitemapXml(fields) {
  // 過濾和格式化字段
  const validFields = fields.filter(field => {
    return field.loc && isValidXmlUrl(field.loc)
  }).map(field => {
    return {
      ...field,
      lastmod: formatDate(field.lastmod),
      changefreq: field.changefreq || 'daily',
      priority: field.priority || '0.7'
    }
  })
  
  const xmlItems = validFields.map(field => {
    // 確保 URL 中的特殊字符被正確轉義
    const escapedLoc = field.loc
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;')
    
    return `  <url>
    <loc>${escapedLoc}</loc>
    <lastmod>${field.lastmod}</lastmod>
    <changefreq>${field.changefreq}</changefreq>
    <priority>${field.priority}</priority>
  </url>`
  }).join('\n')
  
  // 確保 XML 標頭和命名空間完全符合規範，不含任何前導空白
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${xmlItems}
</urlset>`
}

export const getServerSideProps = async ctx => {
  let fields = []
  const siteIds = BLOG.NOTION_PAGE_ID.split(',')

  for (let index = 0; index < siteIds.length; index++) {
    const siteId = siteIds[index]
    const id = extractLangId(siteId)
    const locale = extractLangPrefix(siteId)
    
    // 獲取站點數據
    const siteData = await getGlobalData({
      pageId: id,
      from: 'sitemap.xml'
    })

    const link = siteConfig('LINK', siteData?.siteInfo?.link, siteData.NOTION_CONFIG)
    
    // 確保 link 是完整的 URL，包含 https://
    const baseLink = link.startsWith('http') ? link : `https://${link}`
    
    // 生成該語言的 sitemap
    const localeFields = generateLocalesSitemap(baseLink, siteData.allPages, locale)
    fields = fields.concat(localeFields)
  }

  // 去重並過濾無效的 URL
  fields = getUniqueFields(fields)
  fields = fields.filter(field => {
    // 確保所有的 URL 都是完整的絕對路徑
    if (!field.loc.startsWith('http')) {
      field.loc = `https://${field.loc}`
    }
    
    // 過濾掉不合法的 URL
    try {
      new URL(field.loc) // 驗證 URL 格式
      return true
    } catch (e) {
      return false
    }
  })

  // 設置快取
  ctx.res.setHeader(
    'Cache-Control',
    'public, max-age=3600, stale-while-revalidate=59'
  )
  
  // 設置內容類型為 XML
  ctx.res.setHeader('Content-Type', 'application/xml')
  
  // 生成 XML
  const xml = generateSitemapXml(fields)
  
  // 直接返回 XML 內容
  ctx.res.write(xml)
  ctx.res.end()
  
  return {
    props: {}
  }
}

function generateLocalesSitemap(link, allPages, locale) {
  // 處理語言前綴
  const localePath = locale && locale.length > 0 
    ? (locale.startsWith('/') ? locale : '/' + locale) 
    : ''
  
  const dateNow = new Date().toISOString().split('T')[0]
  
  // 定義基本頁面
  const defaultFields = [
    // 首頁
    {
      loc: `${link}${localePath}`,
      lastmod: dateNow,
      changefreq: 'daily',
      priority: '1.0'
    },
    // 存檔頁面
    {
      loc: `${link}${localePath}/archive`,
      lastmod: dateNow,
      changefreq: 'daily',
      priority: '0.8'
    },
    // 分類頁面
    {
      loc: `${link}${localePath}/category`,
      lastmod: dateNow,
      changefreq: 'daily',
      priority: '0.8'
    },
    // 搜尋頁面
    {
      loc: `${link}${localePath}/search`,
      lastmod: dateNow,
      changefreq: 'daily',
      priority: '0.7'
    },
    // 標籤頁面
    {
      loc: `${link}${localePath}/tag`,
      lastmod: dateNow,
      changefreq: 'daily',
      priority: '0.7'
    }
  ]

  // 過濾並處理文章頁面
  const postFields = allPages
    ?.filter(p => {
      // 只包含已發布的文章
      if (p.status !== BLOG.NOTION_PROPERTY_NAME.status_publish) {
        return false
      }
      // 排除無效的 slug
      if (!p.slug || !isValidInternalUrl(p.slug)) {
        return false
      }
      return true
    })
    ?.map(post => {
      const slugWithoutLeadingSlash = post.slug.startsWith('/')
        ? post.slug.slice(1)
        : post.slug
      return {
        loc: `${link}${localePath}/${slugWithoutLeadingSlash}`,
        lastmod: post.publishDay ? new Date(post.publishDay).toISOString().split('T')[0] : dateNow,
        changefreq: 'daily',
        priority: '0.6'
      }
    }) ?? []

  return defaultFields.concat(postFields)
}

// 這個頁面需要導出默認組件以符合 Next.js 的要求
export default function Sitemap() {
  return null
}
