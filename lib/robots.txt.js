import BLOG from '@/blog.config'
import fs from 'fs'
import { siteConfig } from './config'

/**
 * 生成robots.txt
 * @param {*} NOTION_CONFIG
 * @returns
 */
export function generateRobotsTxt({ NOTION_CONFIG }) {
  const link = siteConfig('LINK', BLOG.LINK, NOTION_CONFIG)
  const excludePages = siteConfig('SITEMAP_EXCLUDE', [], NOTION_CONFIG)
  
  // 添加更多需要禁止爬取的路徑
  const disallowPaths = [
    '/api/',
    '/_next/',
    '/api/*',
    '/admin/',
    '/admin/*',
    '/feed',
    '/atom',
    '/rss',
    '/rss.xml',
    '/feed.xml'
  ]
  
  // 添加需要禁止爬取的頁面
  if (excludePages && excludePages.length > 0) {
    excludePages.forEach(path => {
      disallowPaths.push(`/${path}`)
    })
  }
  
  // 為所有主要搜尋引擎創建規則
  const userAgents = [
    '*',
    'Googlebot',
    'Bingbot',
    'Baiduspider',
    'YandexBot',
    'SogouSpider',
    'Applebot',
    'facebookexternalhit',
    'Twitterbot'
  ]
  
  let robotsTxt = ''
  
  userAgents.forEach(agent => {
    robotsTxt += `User-agent: ${agent}\n`
    
    if (agent === '*') {
      // 為通用爬蟲添加所有禁止路徑
      disallowPaths.forEach(path => {
        robotsTxt += `Disallow: ${path}\n`
      })
    } else {
      // 為特定搜尋引擎添加較少的禁止路徑
      robotsTxt += `Disallow: /api/\n`
      robotsTxt += `Disallow: /_next/\n`
      robotsTxt += `Disallow: /admin/\n`
    }
    
    robotsTxt += '\n'
  })
  
  // 添加站點地圖位置
  robotsTxt += `Sitemap: ${link}/sitemap.xml\n`
  
  // 添加抓取頻率設定
  robotsTxt += 'Crawl-delay: 10\n\n'
  
  try {
    fs.writeFileSync('robots.txt', robotsTxt)
    fs.writeFileSync('./public/robots.txt', robotsTxt)
    console.log('生成 robots.txt 成功')
  } catch (error) {
    console.warn('無法寫入 robots.txt 文件', error)
  }
}
