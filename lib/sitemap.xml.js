import BLOG from '@/blog.config'
import fs from 'fs'
import { siteConfig } from './config'
/**
 * 生成站点地图
 * @param {*} param0
 */
export async function generateSitemapXml({ allPages, NOTION_CONFIG }) {
  const link = siteConfig('LINK', BLOG.LINK, NOTION_CONFIG)
  const excludePages = siteConfig('SITEMAP_EXCLUDE', [], NOTION_CONFIG)
  
  // 基本頁面
  const urls = [
    {
      loc: `${link}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: 1.0,
      image: siteConfig('STARTER_HERO_PREVIEW_IMAGE', '', NOTION_CONFIG) ? 
        `${link}/${siteConfig('STARTER_HERO_PREVIEW_IMAGE', '', NOTION_CONFIG)}` : null
    },
    {
      loc: `${link}/archive`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: 0.9
    },
    {
      loc: `${link}/category`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: 0.8
    },
    {
      loc: `${link}/tag`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: 0.8
    },
    {
      loc: `${link}/about`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      loc: `${link}/products`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${link}/contact`,
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
    
    const slugWithoutLeadingSlash = post?.slug?.startsWith('/')
      ? post?.slug?.slice(1)
      : post.slug
      
    urls.push({
      loc: `${link}/${slugWithoutLeadingSlash}`,
      lastmod: new Date(post?.publishDay).toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: post.type === 'Post' ? 0.7 : 0.5,
      image: post.pageCoverThumbnail ? post.pageCoverThumbnail : null
    })
  })
  const xml = createSitemapXml(urls)
  try {
    fs.writeFileSync('sitemap.xml', xml)
    fs.writeFileSync('./public/sitemap.xml', xml)
    console.log('生成站點地圖 sitemap.xml 成功')
  } catch (error) {
    console.warn('無法寫入站點地圖文件', error)
  }
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
      imageXml = `
      <image:image>
        <image:loc>${u.image}</image:loc>
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
