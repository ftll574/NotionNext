// 注: process.env.XX是Vercel的环境变量，配置方式见：https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a

const BLOG = {
  // Important page_id！！！Duplicate Template from  https://www.notion.so/tanghh/02ab3b8678004aa69e9e415905ef32a5
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '183b75929a5e802e886cd7d8291e7804',
  THEME: process.env.NEXT_PUBLIC_THEME || 'starter', // 当前主题，在themes文件夹下可找到所有支持的主题；主题名称就是文件夹名，例如 example,fukasawa,gitbook,heo,hexo,landing,matery,medium,next,nobelium,plog,simple
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-TW', // e.g 'zh-CN','en-US'  see /lib/lang.js for more.
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2025, // e.g if leave this empty, current year will be used.

  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, // 伪静态路径，开启后所有文章URL都以 .html 结尾。
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 60, // 更新缓存间隔 单位(秒)；即每个页面有5秒的纯静态期、此期间无论多少次访问都不会抓取notion数据；调大该值有助于节省Vercel资源、同时提升访问速率，但也会使文章更新有延迟。
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light', // ['light', 'dark', 'auto'], // light 日间模式 ， dark夜间模式， auto根据时间和主题自动夜间模式
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], // 夜间模式起至时间，false时关闭根据时间自动切换夜间模式

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || '鑫葳貿易有限公司', // 您的昵称 例如 tangly1024
  BIO: process.env.NEXT_PUBLIC_BIO || '鑫葳貿易有限公司', // 作者简介
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://xin-wei.com', // 网站地址
  DESCRIPTION: process.env.NEXT_PUBLIC_DESCRIPTION || '鑫葳貿易有限公司 - 專業塑膠原料供應商，30年產業經驗，提供PP聚丙烯、PE聚乙烯、PS聚苯乙烯等全系列塑膠原料，電子、汽車、家電等行業優質供應商。', // 網站描述
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || '鑫葳貿易,塑膠原料,PP聚丙烯,PE聚乙烯,PS聚苯乙烯,ABS,塑膠供應商,工程塑料,塑膠粒,台灣塑膠原料', // 网站关键词 英文逗号隔开
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', // blog favicon 配置, 默认使用 /public/favicon.ico，支持在线图片，如 https://img.imesong.com/favicon.png
  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', // 备案号 闽ICP备XXXXXX
  BEI_AN_LINK: process.env.NEXT_PUBLIC_BEI_AN_LINK || '', // 备案查询链接，如果用了萌备等备案请在这里填写

  // RSS订阅
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, // 是否开启RSS订阅功能

  // 其它复杂配置
  // 原配置文件过长，且并非所有人都会用到，故此将配置拆分到/conf/目录下, 按需找到对应文件并修改即可
  ...require('./conf/comment.config'), // 评论插件
  ...require('./conf/contact.config'), // 作者联系方式配置
  ...require('./conf/post.config'), // 文章与列表配置
  ...require('./conf/analytics.config'), // 站点访问统计
  ...require('./conf/image.config'), // 网站图片相关配置
  ...require('./conf/font.config'), // 网站字体
  ...require('./conf/right-click-menu'), // 自定义右键菜单相关配置
  ...require('./conf/code.config'), // 网站代码块样式
  ...require('./conf/animation.config'), // 动效美化效果
  ...require('./conf/widget.config'), // 悬浮在网页上的挂件，聊天客服、宠物挂件、音乐播放器等
  ...require('./conf/ad.config'), // 广告营收插件
  ...require('./conf/plugin.config'), // 其他第三方插件 algolia全文索引

  // 高级用法
  ...require('./conf/layout-map.config'), // 路由与布局映射自定义，例如自定义特定路由的页面布局
  ...require('./conf/notion.config'), // 读取notion数据库相关的扩展配置，例如自定义表头
  ...require('./conf/dev.config'), // 开发、调试时需要关注的配置

  // 自定义外部脚本，外部样式
  CUSTOM_EXTERNAL_JS: [''], // e.g. ['https://xx.com/script.js','https://xx.com/script.js']
  CUSTOM_EXTERNAL_CSS: [''], // e.g. ['https://xx.com/style.css','https://xx.com/style.css']

  // 自定义菜单
  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true, // 支持Menu类型的菜单，替代了3.12版本前的Page类型

  // 文章列表相关设置
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, // 是否允许复制页面内容 默认允许，如果设置为false、则全栈禁止复制内容。

  // 侧栏布局 是否反转(左变右,右变左) 已支持主题: hexo next medium fukasawa example
  LAYOUT_SIDEBAR_REVERSE:
    process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  // 欢迎语打字效果,Hexo,Matery主题支持, 英文逗号隔开多个欢迎语。
  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    '鑫葳貿易有限公司',

  // uuid重定向至 slug
  UUID_REDIRECT: process.env.UUID_REDIRECT || false,

  // 顶部右侧导航按钮
  STARTER_NAV_BUTTON_ENABLE: true,

  // 登入功能
  ENABLE_LOGIN: false, // 禁用登入功能

  // 主题切换
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || false,

  // 右键菜单
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU: process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU || false,
  
  // SEO 相關設定
  CANONICAL_URL_PREFIX: process.env.NEXT_PUBLIC_CANONICAL_URL_PREFIX || 'https://xin-wei.com', // 規範化URL前綴
  ENABLE_CANONICAL: process.env.NEXT_PUBLIC_ENABLE_CANONICAL || true, // 是否啟用規範化URL
  SITEMAP_EXCLUDE: process.env.NEXT_PUBLIC_SITEMAP_EXCLUDE || [
    '/search', 
    '/search/*', 
    '/sign-in', 
    '/sign-in/*', 
    '/sign-up', 
    '/sign-up/*', 
    '/dashboard',
    '/dashboard/*',
    '/zh/*',
    '/auth/*'
  ], // 排除在站點地圖之外的頁面
  ENABLE_HREFLANG: false, // 禁用多語言標籤
  
  // 搜索功能
  ENABLE_SEARCH: false, // 禁用搜索功能
  
  // 站點驗證碼 - 設定 Google Search Console 驗證碼
  GOOGLE_SITE_VERIFICATION: '8MrZMy7Z8AL166kWXQe_F0wsN9IrGZGox9ILz7CoDjY',
  BAIDU_SITE_VERIFICATION: '', // 百度搜尋管理員驗證碼
  BING_SITE_VERIFICATION: '', // 必應網站管理員驗證碼
  COMMENT_WEBMENTION: process.env.NEXT_PUBLIC_WEBMENTION_ENABLE
}

module.exports = BLOG
