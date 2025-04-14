import BLOG from '@/blog.config'
import fs from 'fs'
import { siteConfig } from './config'
/**
 * 生成站点地图
 * @param {*} param0
 */
export async function generateSitemapXml({ allPages, NOTION_CONFIG }) {
  const link = siteConfig('LINK', BLOG.LINK, NOTION_CONFIG)
  // 確保 link 包含完整的 https:// 前綴
  const baseLink = link.startsWith('http') ? link : `https://${link}`
  const excludePages = siteConfig('SITEMAP_EXCLUDE', [], NOTION_CONFIG)
  
  // 基本頁面
  const urls = [
    {
      loc: `${baseLink}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: 1.0,
      image: siteConfig('STARTER_HERO_PREVIEW_IMAGE', '', NOTION_CONFIG) ? 
        `${baseLink}/${siteConfig('STARTER_HERO_PREVIEW_IMAGE', '', NOTION_CONFIG)}` : null
    },
    {
      loc: `${baseLink}/archive`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: 0.9
    },
    {
      loc: `${baseLink}/category`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: 0.8
    },
    {
      loc: `${baseLink}/tag`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: 0.8
    },
    {
      loc: `${baseLink}/about`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      loc: `${baseLink}/products`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseLink}/contact`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.7
    }
  ]
  
  // 循环页面生成
  allPages?.forEach(post => {
    // 排除不需要的頁面
    if (excludePages.some(path => post.slug.includes(path))) {
      return
    }
    
    // 若頁面 URL 為外部連結，則跳過
    if (post.slug.startsWith('http')) {
      return
    }
    
    const slugWithoutLeadingSlash = post?.slug?.startsWith('/')
      ? post?.slug?.slice(1)
      : post.slug
      
    urls.push({
      loc: `${baseLink}/${slugWithoutLeadingSlash}`,
      lastmod: new Date(post?.publishDay).toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: post.type === 'Post' ? 0.7 : 0.5,
      image: post.pageCoverThumbnail ? post.pageCoverThumbnail : null
    })
  })
  
  // 過濾掉無效的 URL
  const validUrls = urls.filter(url => {
    // 排除包含 # 的錨點連結
    if (url.loc.includes('#')) {
      return false
    }
    
    // 排除無效的外部鏈接
    if (url.loc.includes('https://https://')) {
      return false
    }
    
    return true
  })
  
  const xml = createSitemapXml(validUrls)
  
  // 注意：不再手動寫入 sitemap.xml 文件，改由 next-sitemap 生成
  // 這裡只返回 XML 字符串，供需要時使用
  console.log('站點地圖資料已生成，將使用 next-sitemap 產生最終文件')
  return xml
  
  /* 註釋掉手動寫入文件部分，避免與 next-sitemap 衝突
  try {
    fs.writeFileSync('sitemap.xml', xml)
    fs.writeFileSync('./public/sitemap.xml', xml)
    console.log('生成站點地圖 sitemap.xml 成功')
  } catch (error) {
    console.warn('無法寫入站點地圖文件', error)
  }
  */
}

/**
 * 生成站点地图
 * @param {*} urls
 * @returns
 */
function createSitemapXml(urls) {
  let urlsXml = ''
  urls.forEach(u => {
    let imageXml = ''
    if (u.image) {
      // 確保圖片 URL 是完整的絕對路徑
      const imageUrl = u.image.startsWith('http') ? u.image : `https:${u.image}`
      imageXml = `
      <image:image>
        <image:loc>${imageUrl}</image:loc>
      </image:image>`
    }

    urlsXml += `<url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority || 0.5}</priority>${imageXml}
    </url>
    `
  })

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    ${urlsXml}
    </urlset>
    `
}
