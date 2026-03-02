/**
 * 站点统计插件
 */
const CONFIG = {
  ANALYTICS_VERCEL: process.env.NEXT_PUBLIC_ANALYTICS_VERCEL || true, // vercel自带的统计 https://vercel.com/docs/concepts/analytics/quickstart https://github.com/tangly1024/NotionNext/issues/897
  ANALYTICS_BUSUANZI_ENABLE:
    process.env.NEXT_PUBLIC_ANALYTICS_BUSUANZI_ENABLE || true, // 展示网站阅读量、访问数 see http://busuanzi.ibruce.info/
  ANALYTICS_BAIDU_ID: process.env.NEXT_PUBLIC_ANALYTICS_BAIDU_ID || '', // e.g 只需要填写百度统计的id，[baidu_id] -> https://hm.baidu.com/hm.js?[baidu_id]
  ANALYTICS_CNZZ_ID: process.env.NEXT_PUBLIC_ANALYTICS_CNZZ_ID || '', // 只需要填写站长统计的id, [cnzz_id] -> https://s9.cnzz.com/z_stat.php?id=[cnzz_id]&web_id=[cnzz_id]
  ANALYTICS_GOOGLE_ID: process.env.NEXT_PUBLIC_ANALYTICS_GOOGLE_ID || '', // 谷歌Analytics的id e.g: G-XXXXXXXXXX

  // 51la 站点统计 https://www.51.la/
  ANALYTICS_51LA_ID: process.env.NEXT_PUBLIC_ANALYTICS_51LA_ID || '', // id，在51la后台获取 参阅 https://docs.tangly1024.com/article/notion-next-51-la
  ANALYTICS_51LA_CK: process.env.NEXT_PUBLIC_ANALYTICS_51LA_CK || '', // ck，在51la后台获取

  // Matomo 网站统计
  MATOMO_HOST_URL: process.env.NEXT_PUBLIC_MATOMO_HOST_URL || '', // Matomo服务器地址，不带斜杠
  MATOMO_SITE_ID: process.env.NEXT_PUBLIC_MATOMO_SITE_ID || '', // Matomo网站ID
  // ACKEE网站访客统计工具
  ANALYTICS_ACKEE_TRACKER:
    process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_TRACKER || '', // e.g 'https://ackee.tangly1024.com/tracker.js'
  ANALYTICS_ACKEE_DATA_SERVER:
    process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DATA_SERVER || '', // e.g https://ackee.tangly1024.com , don't end with a slash
  ANALYTICS_ACKEE_DOMAIN_ID:
    process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DOMAIN_ID || '', // e.g '82e51db6-dec2-423a-b7c9-b4ff7ebb3302'

  SEO_GOOGLE_SITE_VERIFICATION:
    process.env.NEXT_PUBLIC_SEO_GOOGLE_SITE_VERIFICATION || '', // Remove the value or replace it with your own google site verification code

  SEO_BAIDU_SITE_VERIFICATION:
    process.env.NEXT_PUBLIC_SEO_BAIDU_SITE_VERIFICATION || '', // Remove the value or replace it with your own google site verification code

  // 微软 Clarity 站点分析
  CLARITY_ID: process.env.NEXT_PUBLIC_CLARITY_ID || null, // 只需要复制Clarity脚本中的ID部分，ID是一个十位的英文数字组合
<<<<<<< HEAD

  UMAMI_HOST: process.env.NEXT_PUBLIC_UMAMI_HOST || 'https://cloud.umami.is/script.js', // umami的服务地址
  UMAMI_ID: process.env.NEXT_PUBLIC_UMAMI_ID || '', // umami的id
=======
>>>>>>> be8c14e1 (Fix mobile display bug)

  // GA4 - GOOGLE ANALYTICS 4, 測量ID 以 G- 開頭
  ANALYTICS_TRACKING_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || '',

  // Matomo 統計分析以及谷歌跟蹤代碼
  MATOMO_URL: process.env.NEXT_PUBLIC_MATOMO_URL || '',

  // Umami Analytics
  UMAMI_ENABLED: process.env.NEXT_PUBLIC_UMAMI_ENABLED || false,
  UMAMI_ID: process.env.NEXT_PUBLIC_UMAMI_ID || '',
  UMAMI_URL: process.env.NEXT_PUBLIC_UMAMI_URL || 'https://analytics.umami.is',
  
  // Google Search Console 站點驗證
  GOOGLE_SITE_VERIFICATION: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  
  // Baidu Search Console 站點驗證
  BAIDU_SITE_VERIFICATION: process.env.NEXT_PUBLIC_BAIDU_SITE_VERIFICATION || '',
  
  // 百度統計
  BAIDU_ANALYTICS_ENABLED: process.env.NEXT_PUBLIC_BAIDU_ANALYTICS_ENABLED || false,
  BAIDU_ANALYTICS_ID: process.env.NEXT_PUBLIC_BAIDU_ANALYTICS_ID || '',
  
  // Microsoft Clarity 分析
  CLARITY_ANALYTICS_ENABLED: process.env.NEXT_PUBLIC_CLARITY_ANALYTICS_ENABLED || false,
  CLARITY_ANALYTICS_ID: process.env.NEXT_PUBLIC_CLARITY_ANALYTICS_ID || '',
  
  // 數據收集隱私模式，合規GDPR，若開啟會詢問用戶是否同意數據收集
  ANALYTICS_PRIVACY_MODE: process.env.NEXT_PUBLIC_ANALYTICS_PRIVACY_MODE || false
}

module.exports = CONFIG
