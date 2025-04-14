// pages/sitemap.xml.js
import BLOG from '@/blog.config'

/**
 * 生成站點地圖
 * 使用更簡單和可靠的方法來確保不會發生 500 錯誤
 */
export async function getServerSideProps({ res }) {
  // 確保使用絕對 URL
  const domain = BLOG.LINK && BLOG.LINK.startsWith('http') 
    ? BLOG.LINK 
    : `https://${BLOG.LINK}`;

  // 手動定義網站主要頁面
  const mainPages = [
    { url: '', priority: '1.0' },
    { url: 'archive', priority: '0.8' },
    { url: 'category', priority: '0.8' },
    { url: 'tag', priority: '0.7' },
    { url: 'products', priority: '0.8' }
  ];

  // 當前日期作為 lastmod
  const currentDate = new Date().toISOString();

  // 建立 XML 頭部
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"\n';
  xml += '  xmlns:xhtml="http://www.w3.org/1999/xhtml"\n';
  xml += '  xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"\n';
  xml += '  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"\n';
  xml += '  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n';

  // 加入主要頁面
  mainPages.forEach(page => {
    const pageUrl = page.url ? `${domain}/${page.url}` : domain;
    xml += '  <url>\n';
    xml += `    <loc>${escapeXml(pageUrl)}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += '    <changefreq>daily</changefreq>\n';
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  // 加入分類頁面
  const categories = ['塑料最新報價', '新聞整理'];
  categories.forEach(category => {
    const categoryUrl = `${domain}/category/${encodeURIComponent(category)}`;
    xml += '  <url>\n';
    xml += `    <loc>${escapeXml(categoryUrl)}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += '    <priority>0.6</priority>\n';
    xml += '  </url>\n';
  });

  // 關閉 XML
  xml += '</urlset>';

  // 設置適當的響應頭和內容
  res.setHeader('Content-Type', 'text/xml');
  res.write(xml);
  res.end();

  return {
    props: {}
  };
}

/**
 * 轉義 XML 特殊字符
 */
function escapeXml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export default function Sitemap() {
  // 這個組件在客戶端不會被渲染
  return null;
}
