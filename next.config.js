const { THEME } = require('./blog.config')
const fs = require('node:fs')
const path = require('node:path')
const BLOG = require('./blog.config')
const { extractLangPrefix } = require('./lib/utils/pageId')
const { isExport } = require('./lib/utils/buildMode')

// 打包时是否分析代码
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: BLOG.BUNDLE_ANALYZER
})

// 扫描项目 /themes下的目录名
const themes = scanSubdirectories(path.resolve(__dirname, 'themes'))
// 检测用户开启的多语言
const locales = (function () {
  // 根据BLOG_NOTION_PAGE_ID 检查支持多少种语言数据.
  // 支持如下格式配置多个语言的页面id xxx,zh:xxx,en:xxx
  const langs = [BLOG.LANG]
  if (BLOG.NOTION_PAGE_ID.indexOf(',') > 0) {
    const siteIds = BLOG.NOTION_PAGE_ID.split(',')
    for (const siteId of siteIds) {
      const prefix = extractLangPrefix(siteId)
      // 如果包含前缀 例如 zh , en 等
      if (prefix) {
        if (!langs.includes(prefix)) {
          langs.push(prefix)
        }
      }
    }
  }
  return langs
})()

// 编译前执行
// eslint-disable-next-line no-unused-vars
const preBuild = (function () {
  if (
    process.env.npm_lifecycle_event !== 'export' &&
    process.env.npm_lifecycle_event !== 'build'
  ) {
    return
  }
  // 删除 public/sitemap.xml 文件 ； 否则会和/pages/sitemap.xml.js 冲突。
  const sitemapPath = path.resolve(__dirname, 'public', 'sitemap.xml')
  if (fs.existsSync(sitemapPath)) {
    fs.unlinkSync(sitemapPath)
    console.log('Deleted existing sitemap.xml from public directory')
  }

  const sitemap2Path = path.resolve(__dirname, 'sitemap.xml')
  if (fs.existsSync(sitemap2Path)) {
    fs.unlinkSync(sitemap2Path)
    console.log('Deleted existing sitemap.xml from root directory')
  }
})()

/**
 * 扫描指定目录下的文件夹名，用于获取所有主题
 * @param {*} directory
 * @returns
 */
function scanSubdirectories(directory) {
  const subdirectories = []

  fs.readdirSync(directory).forEach(file => {
    const fullPath = path.join(directory, file)
    const stats = fs.statSync(fullPath)
    if (stats.isDirectory()) {
      subdirectories.push(file)
    }
  })

  return subdirectories
}

/**
 * @type {import('next').NextConfig}
 */

function getOutput() {
  if (isExport()) return 'export'
  if (process.env.NEXT_BUILD_STANDALONE === 'true') return 'standalone'
  return undefined
}

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  output: getOutput(),
  staticPageGenerationTimeout: 300,

  // 性能优化配置
  compress: true,
  poweredByHeader: false,
  generateEtags: true,

  // 构建优化
  swcMinify: true,
  modularizeImports: {
    '@heroicons/react/24/outline': {
      transform: '@heroicons/react/24/outline/{{member}}'
    },
    '@heroicons/react/24/solid': {
      transform: '@heroicons/react/24/solid/{{member}}'
    }
  },
  // 多语言， 在export时禁用
  i18n: process.env.EXPORT
    ? undefined
    : {
        defaultLocale: BLOG.LANG,
        // 支持的所有多语言,按需填写即可
        locales: locales
      },
  images: {
    // 圖片壓縮和優化
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    // 允許 next/image 加載的圖片域名
    remotePatterns: [
      { protocol: 'https', hostname: 'gravatar.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.notion.so', pathname: '/**' },
      { protocol: 'https', hostname: 'notion.so', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'source.unsplash.com', pathname: '/**' },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/**'
      },
      { protocol: 'https', hostname: 'p1.qhimg.com', pathname: '/**' },
      { protocol: 'https', hostname: 'webmention.io', pathname: '/**' },
      { protocol: 'https', hostname: 'ko-fi.com', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.jsdelivr.net', pathname: '/**' },
      { protocol: 'https', hostname: 'cdnjs.cloudflare.com', pathname: '/**' },
      { protocol: 'https', hostname: 'fonts.googleapis.com', pathname: '/**' },
      { protocol: 'https', hostname: 'fonts.gstatic.com', pathname: '/**' },
      { protocol: 'https', hostname: 'res.cloudinary.com', pathname: '/**' },
      { protocol: 'https', hostname: 'imgur.com', pathname: '/**' },
      { protocol: 'https', hostname: 'i.imgur.com', pathname: '/**' }
    ]
  },

  // 默认将feed重定向至 /public/rss/feed.xml
  redirects: process.env.EXPORT
    ? undefined
    : () => {
        return [
          {
            source: '/feed',
            destination: '/rss/feed.xml',
            permanent: true
          }
        ]
      },
  // 重写url
  rewrites: process.env.EXPORT
    ? undefined
    : () => {
        // 处理多语言重定向
        const langsRewrites = []
        if (BLOG.NOTION_PAGE_ID.indexOf(',') > 0) {
          const siteIds = BLOG.NOTION_PAGE_ID.split(',')
          const langs = []
          for (const siteId of siteIds) {
            const prefix = extractLangPrefix(siteId)
            // 如果包含前缀 例如 zh , en 等
            if (prefix) {
              langs.push(prefix)
            }
            console.log('[Locales]', siteId)
          }

          // 映射多语言
          // 示例： source: '/:locale(zh|en)/:path*' ; :locale() 会将语言放入重写后的 `?locale=` 中。
          langsRewrites.push(
            {
              source: `/:locale(${langs.join('|')})/:path*`,
              destination: '/:path*'
            },
            // 匹配没有路径的情况，例如 [domain]/zh 或 [domain]/en
            {
              source: `/:locale(${langs.join('|')})`,
              destination: '/'
            },
            // 匹配没有路径的情况，例如 [domain]/zh/ 或 [domain]/en/
            {
              source: `/:locale(${langs.join('|')})/`,
              destination: '/'
            }
          )
        }

        return [
          ...langsRewrites,
          // 伪静态重写
          {
            source: '/:path*.html',
            destination: '/:path*'
          }
        ]
      },
  headers: process.env.EXPORT
    ? undefined
    : () => {
        return [
          {
            source: '/:path*{/}?',
            headers: [
              { key: 'Access-Control-Allow-Credentials', value: 'true' },
              {
                key: 'Access-Control-Allow-Origin',
                value: 'https://xin-wei.com'
              },
              {
                key: 'Access-Control-Allow-Methods',
                value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'
              },
              {
                key: 'Access-Control-Allow-Headers',
                value:
                  'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
              },
              {
                key: 'Content-Security-Policy',
                value:
                  "default-src 'self'; base-uri 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://cdnjs.cloudflare.com https://cdnjs.snrat.com https://widget.daovoice.io https://busuanzi.ibruce.info https://*.vercel.com https://*.vercel.app http://localhost:* https://*.vercel.live; script-src-elem 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://cdnjs.cloudflare.com https://widget.daovoice.io https://busuanzi.ibruce.info https://*.vercel.com https://*.vercel.app http://busuanzi.ibruce.info http://localhost:* https://*.vercel.live; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net https://cdnjs.cloudflare.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com data: https://*.jsdelivr.net https://cdnjs.cloudflare.com; connect-src 'self' https: wss: http://localhost:*; frame-src 'self' https://*.noteforms.com https://api.noteforms.com https://noteforms.com https://*.vercel.live; object-src 'none'; manifest-src 'self';"
              },
              {
                key: 'X-Content-Type-Options',
                value: 'nosniff'
              },
              {
                key: 'Referrer-Policy',
                value: 'strict-origin-when-cross-origin'
              },
              {
                key: 'X-Frame-Options',
                value: 'DENY'
              }
            ]
          },
          {
            source: '/static/:path*',
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=31536000, immutable'
              }
            ]
          },
          {
            source: '/(.*).ico',
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=31536000, immutable'
              }
            ]
          },
          {
            source: '/(.*).png',
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=31536000, immutable'
              }
            ]
          },
          {
            source: '/(.*).jpg',
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=31536000, immutable'
              }
            ]
          },
          {
            source: '/(.*).webp',
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=31536000, immutable'
              }
            ]
          },
          {
            source: '/(.*).css',
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=31536000, immutable'
              }
            ]
          },
          {
            source: '/(.*).js',
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=31536000, immutable'
              },
              {
                key: 'Content-Type',
                value: 'application/javascript; charset=utf-8'
              }
            ]
          }
        ]
      },
  webpack: (config, { dev, isServer }) => {
    // 动态主题：添加 resolve.alias 配置，将动态路径映射到实际路径
    config.resolve.alias['@'] = path.resolve(__dirname)

    if (!isServer) {
      console.log('[默认主题]', path.resolve(__dirname, 'themes', THEME))
    }
    config.resolve.alias['@theme-components'] = path.resolve(
      __dirname,
      'themes',
      THEME
    )
    // Enable source maps in development mode
    if (process.env.NODE_ENV_API === 'development') {
      config.devtool = 'source-map'
    }
    return config
  },
  experimental: {
    // cpus: 1,
    scrollRestoration: true,
    // 性能优化实验性功能
    optimizePackageImports: ['@heroicons/react', 'lodash']
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    // export 静态导出时 忽略/pages/sitemap.xml.js ， 否则和getServerSideProps这个动态文件冲突
    const pages = { ...defaultPathMap }
    delete pages['/sitemap.xml']
    delete pages['/auth']
    return pages
  },
  publicRuntimeConfig: {
    // 这里的配置既可以服务端获取到，也可以在浏览器端获取到
    THEMES: themes
  }
}

module.exports = process.env.ANALYZE
  ? withBundleAnalyzer(nextConfig)
  : nextConfig
