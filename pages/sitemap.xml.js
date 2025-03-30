// pages/sitemap.xml.js
import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { getGlobalData } from '@/lib/db/getSiteData'
import { extractLangId, extractLangPrefix } from '@/lib/utils/pageId'
import { getServerSideSitemap } from 'next-sitemap'

// 檢查 URL 是否為外部連結
function isExternalUrl(url) {
  return url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//')
}

// 檢查 URL 是否為有效的內部連結
function isValidInternalUrl(url) {
  // 排除包含完整 URL 的路徑
  if (url.includes('http://') || url.includes('https://')) {
    return false
  }
  
  // 排除無效的路徑
  if (url === '#' || url === '') {
    return false
  }

  // 排除示例文章
  if (url.includes('/article/example-') || url.includes('/article/invisible') || url.includes('/article/f6656d78')) {
    return false
  }

  return true
}

// 清理 URL
function cleanUrl(url, baseUrl) {
  if (!url) return ''
  
  // 移除基礎 URL
  let cleanedUrl = url.replace(baseUrl, '')
  
  // 確保開頭有斜線
  if (!cleanedUrl.startsWith('/')) {
    cleanedUrl = '/' + cleanedUrl
  }
  
  // 移除結尾的斜線
  if (cleanedUrl.endsWith('/') && cleanedUrl !== '/') {
    cleanedUrl = cleanedUrl.slice(0, -1)
  }
  
  return cleanedUrl
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
    
    // 生成該語言的 sitemap
    const localeFields = generateLocalesSitemap(link, siteData.allPages, locale)
    fields = fields.concat(localeFields)
  }

  // 去重並過濾無效的 URL
  fields = getUniqueFields(fields)
  fields = fields.filter(field => {
    const path = cleanUrl(field.loc, BLOG.LINK)
    return !isExternalUrl(path) && isValidInternalUrl(path)
  })

  // 設置快取
  ctx.res.setHeader(
    'Cache-Control',
    'public, max-age=3600, stale-while-revalidate=59'
  )

  return getServerSideSitemap(ctx, fields)
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
        lastmod: new Date(post.publishDay).toISOString().split('T')[0],
        changefreq: 'daily',
        priority: '0.6'
      }
    }) ?? []

  return defaultFields.concat(postFields)
}

function getUniqueFields(fields) {
  const uniqueFieldsMap = new Map()

  fields.forEach(field => {
    const existingField = uniqueFieldsMap.get(field.loc)
    
    // 如果是新的 URL 或者比現有的更新，則更新 Map
    if (!existingField || new Date(field.lastmod) > new Date(existingField.lastmod)) {
      uniqueFieldsMap.set(field.loc, field)
    }
  })

  return Array.from(uniqueFieldsMap.values())
}

export default () => {}
