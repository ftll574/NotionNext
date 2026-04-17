import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { loadExternalResource } from '@/lib/utils'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

/**
 * 页面的Head头，有用于SEO
 * @param {*} param0
 * @returns
 */
const SEO = props => {
  const { children, siteInfo, post, NOTION_CONFIG } = props
  const PATH = siteConfig('PATH')
  const LINK = siteConfig('LINK')
  const SUB_PATH = siteConfig('SUB_PATH', '')
  let url = PATH?.length ? `${LINK}/${SUB_PATH}` : LINK
  let image
  const router = useRouter()
  const meta = getSEOMeta(props, router, useGlobal()?.locale)
  const webFontUrl = siteConfig('FONT_URL')
  const STARTER_LOGO = siteConfig('STARTER_LOGO')

  useEffect(() => {
    // 使用WebFontLoader字体加载
    loadExternalResource(
      'https://cdnjs.cloudflare.com/ajax/libs/webfont/1.6.28/webfontloader.js',
      'js'
    ).then(url => {
      const WebFont = window?.WebFont
      if (WebFont) {
        // console.log('LoadWebFont', webFontUrl)
        WebFont.load({
          custom: {
            // families: ['"LXGW WenKai"'],
            urls: webFontUrl
          }
        })
      }
    })
  }, [])

  // SEO关键词
  const KEYWORDS = siteConfig('KEYWORDS')
  let keywords = meta?.tags || KEYWORDS
  if (post?.tags && post?.tags?.length > 0) {
    keywords = post?.tags?.join(',')
  }
  if (meta) {
    url = `${url}/${meta.slug}`
    image = meta.image || '/bg_image.jpg'
  }
  const TITLE = siteConfig('TITLE')
  const title = meta?.title || TITLE
  const description = meta?.description || `${siteInfo?.description}`
  const type = meta?.type || 'website'
  const lang = siteConfig('LANG').replace('-', '_') // Facebook OpenGraph 要 zh_CN 這樣的格式才抓得到語言
  const category = meta?.category || KEYWORDS // section 主要是像是 category 這樣的分類，Facebook 用這個來抓連結的分類
  const favicon = siteConfig('BLOG_FAVICON')
  const BACKGROUND_DARK = siteConfig('BACKGROUND_DARK', '', NOTION_CONFIG)

  const SEO_BAIDU_SITE_VERIFICATION = siteConfig(
    'SEO_BAIDU_SITE_VERIFICATION',
    null,
    NOTION_CONFIG
  )

  const SEO_GOOGLE_SITE_VERIFICATION = siteConfig(
    'SEO_GOOGLE_SITE_VERIFICATION',
    null,
    NOTION_CONFIG
  )

  const BLOG_FAVICON = siteConfig('BLOG_FAVICON', null, NOTION_CONFIG)

  const COMMENT_WEBMENTION_ENABLE = siteConfig(
    'COMMENT_WEBMENTION_ENABLE',
    null,
    NOTION_CONFIG
  )

  const COMMENT_WEBMENTION_HOSTNAME = siteConfig(
    'COMMENT_WEBMENTION_HOSTNAME',
    null,
    NOTION_CONFIG
  )
  const COMMENT_WEBMENTION_AUTH = siteConfig(
    'COMMENT_WEBMENTION_AUTH',
    null,
    NOTION_CONFIG
  )
  const ANALYTICS_BUSUANZI_ENABLE = siteConfig(
    'ANALYTICS_BUSUANZI_ENABLE',
    null,
    NOTION_CONFIG
  )

  const FACEBOOK_PAGE = siteConfig('FACEBOOK_PAGE', null, NOTION_CONFIG)

  const AUTHOR = siteConfig('AUTHOR')
  const CANONICAL_URL_PREFIX = siteConfig('CANONICAL_URL_PREFIX', LINK)
  const ENABLE_CANONICAL = siteConfig('ENABLE_CANONICAL', true)

  // 規範化 URL
  const canonicalUrl = `${CANONICAL_URL_PREFIX}${meta?.slug ? '/' + meta.slug : ''}`

  // 安全地產生 JSON-LD
  const generateOrganizationSchema = () => {
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: AUTHOR,
      url: CANONICAL_URL_PREFIX,
      logo: {
        '@type': 'ImageObject',
        url: STARTER_LOGO || image,
        width: '280',
        height: '44'
      },
      description:
        '鑫葳貿易專注於高品質塑膠原料的供應與服務，為電子、汽車、家電等行業提供可靠的原材料支持',
      address: {
        '@type': 'PostalAddress',
        addressLocality: '新北市',
        addressRegion: '林口區',
        postalCode: '244',
        addressCountry: 'TW',
        streetAddress: '湖北里10鄰17之20號'
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+886-2-2602-6961',
          contactType: 'customer service',
          areaServed: 'TW',
          availableLanguage: ['Chinese', 'English']
        }
      ]
    }

    // 只有在有 Facebook 頁面時才添加
    if (FACEBOOK_PAGE) {
      organizationSchema.sameAs = [FACEBOOK_PAGE]
    }

    return JSON.stringify(organizationSchema)
  }

  // 產生文章結構化數據
  const generateArticleSchema = () => {
    if (!meta || meta.type !== 'Post') return null

    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl
      },
      headline: meta.title,
      description: meta.description || description,
      image: meta.image || image,
      author: {
        '@type': 'Person',
        name: AUTHOR
      },
      publisher: {
        '@type': 'Organization',
        name: AUTHOR,
        logo: {
          '@type': 'ImageObject',
          url: STARTER_LOGO || image,
          width: '280',
          height: '44'
        }
      },
      datePublished: meta.publishDay,
      dateModified: meta.publishDay
    }

    return JSON.stringify(articleSchema)
  }

  // 產生產品結構化數據
  const generateProductSchema = () => {
    if (!meta || meta.type !== 'Product' || router.route !== '/products')
      return null

    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: '鑫葳塑膠原料',
      description:
        '高品質塑膠原料，包括PP聚丙烯、PE聚乙烯、PS聚苯乙烯等通用塑料和工程塑料',
      brand: {
        '@type': 'Brand',
        name: AUTHOR
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'TWD',
        availability: 'https://schema.org/InStock',
        itemCondition: 'https://schema.org/NewCondition'
      }
    }

    return JSON.stringify(productSchema)
  }

  // 產生本地企業結構化數據
  const generateLocalBusinessSchema = () => {
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${CANONICAL_URL_PREFIX}#localbusiness`,
      name: AUTHOR,
      url: CANONICAL_URL_PREFIX,
      logo: STARTER_LOGO || image,
      image: STARTER_LOGO || image,
      url: CANONICAL_URL_PREFIX,
      email: 'tw.xinwei@gmail.com',
      telephone: '+886-2-2602-6961',
      description:
        '鑫葳貿易有限公司 - 專業塑膠原料供應商，30年產業經驗，提供PP聚丙烯、PE聚乙烯、PS聚苯乙烯等全系列塑膠原料，電子、汽車、家電等行業優質供應商。',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '湖北里10鄰17之20號',
        addressLocality: '林口區',
        addressRegion: '新北市',
        postalCode: '244',
        addressCountry: 'TW'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 25.0755,
        longitude: 121.3656
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00'
        }
      ],
      priceRange: '$$',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: '塑膠原料產品目錄',
        itemListElement: [
          {
            '@type': 'OfferCatalog',
            name: 'PP聚丙烯',
            description: '各種規格的聚丙烯原料，包括射出級、擠出級等'
          },
          {
            '@type': 'OfferCatalog',
            name: 'PE聚乙烯',
            description: '高密度、低密度和線性低密度聚乙烯原料'
          },
          {
            '@type': 'OfferCatalog',
            name: 'PS聚苯乙烯',
            description: '通用級和高衝擊級聚苯乙烯原料'
          }
        ]
      }
    }

    return JSON.stringify(localBusinessSchema)
  }

  // 產生麵包屑結構化數據
  const generateBreadcrumbSchema = () => {
    const path = router.asPath
    const isRootPage = path === '/'

    if (isRootPage) return null

    const breadcrumbItems = []

    // 添加首頁
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 1,
      name: '首頁',
      item: CANONICAL_URL_PREFIX
    })

    // 根據當前路徑生成麵包屑
    if (path.startsWith('/products')) {
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 2,
        name: '產品資訊',
        item: `${CANONICAL_URL_PREFIX}/products`
      })
    } else if (path.startsWith('/category/')) {
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 2,
        name: '分類',
        item: `${CANONICAL_URL_PREFIX}/category`
      })

      const categoryMatch = path.match(/\/category\/([^/]+)/)
      if (categoryMatch) {
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 3,
          name: decodeURIComponent(categoryMatch[1]),
          item: `${CANONICAL_URL_PREFIX}/category/${categoryMatch[1]}`
        })
      }
    } else if (meta?.type === 'Post') {
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 2,
        name: '文章',
        item: `${CANONICAL_URL_PREFIX}/archive`
      })

      if (meta.title) {
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 3,
          name: meta.title,
          item: canonicalUrl
        })
      }
    }

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems
    }

    return JSON.stringify(breadcrumbSchema)
  }

  // 網站 SEO 核心標記
  const mainStructuredData = [
    {
      id: 'organization-schema',
      content: generateOrganizationSchema()
    },
    {
      id: 'local-business-schema',
      content: generateLocalBusinessSchema()
    },
    {
      id: 'breadcrumb-schema',
      content: generateBreadcrumbSchema()
    }
  ]

  // 條件性結構化數據
  const conditionalSchemas = []

  // 文章頁面結構化數據
  const articleSchema = generateArticleSchema()
  if (articleSchema) {
    conditionalSchemas.push({
      id: 'article-schema',
      content: articleSchema
    })
  }

  // 產品頁面結構化數據
  const productSchema = generateProductSchema()
  if (productSchema) {
    conditionalSchemas.push({
      id: 'product-schema',
      content: productSchema
    })
  }

  return (
    <Head>
      <link rel='icon' type='image/svg+xml' href={favicon} />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='shortcut icon' href='/favicon.ico' />
      <title>{title}</title>
      <meta name='theme-color' content={BACKGROUND_DARK} />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0'
      />
      <meta
        name='robots'
        content='follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large'
      />
      <meta name='googlebot' content='index,follow' />
      <meta charSet='UTF-8' />

      {/* 站點驗證 */}
      {SEO_GOOGLE_SITE_VERIFICATION && (
        <meta
          name='google-site-verification'
          content={SEO_GOOGLE_SITE_VERIFICATION}
        />
      )}
      {SEO_BAIDU_SITE_VERIFICATION && (
        <meta
          name='baidu-site-verification'
          content={SEO_BAIDU_SITE_VERIFICATION}
        />
      )}

      {/* 規範化 URL */}
      {ENABLE_CANONICAL && <link rel='canonical' href={canonicalUrl} />}

      {/* 基本 Meta 標籤 */}
      <meta
        name='keywords'
        content={`${keywords},塑膠原料,TPE,PVC,工程塑料,塑膠材料,原物料,射出級,擠出級,南亞,台化,福聚,永嘉,奇美,台聚,台塑`}
      />
      <meta name='description' content={description} />
      <meta name='author' content={AUTHOR} />

      {/* Open Graph 標籤 */}
      <meta property='og:locale' content={lang} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={canonicalUrl} />
      <meta property='og:image' content={STARTER_LOGO || image} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:image:alt' content={title} />
      <meta property='og:site_name' content={TITLE} />
      <meta property='og:type' content={type} />
      {FACEBOOK_PAGE && (
        <meta property='article:publisher' content={FACEBOOK_PAGE} />
      )}

      {/* Twitter 標籤 - 增強版 */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:image' content={STARTER_LOGO || image} />
      <meta name='twitter:image:alt' content={title} />
      <meta name='twitter:site' content={AUTHOR} />
      <meta name='twitter:creator' content={AUTHOR} />

      {/* 移動設備元標記 */}
      <meta name='format-detection' content='telephone=no' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta
        name='apple-mobile-web-app-status-bar-style'
        content='black-translucent'
      />
      <meta name='apple-mobile-web-app-title' content={title} />

      {/* 預連接常用域名以提升性能 */}
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link
        rel='preconnect'
        href='https://cdnjs.cloudflare.com'
        crossOrigin='anonymous'
      />

      {/* Apple / Tile icons (主要 favicon 已於頂部宣告) */}
      <link rel='apple-touch-icon' href={BLOG_FAVICON} />
      <meta name='msapplication-TileImage' content={BLOG_FAVICON} />

      {/* 結構化數據 - 主要數據 */}
      {mainStructuredData.map(schema => (
        <script
          key={schema.id}
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: schema.content }}
        />
      ))}

      {/* 結構化數據 - 條件性數據 */}
      {conditionalSchemas.map(schema => (
        <script
          key={schema.id}
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: schema.content }}
        />
      ))}

      {/* WebMention 支持 */}
      {COMMENT_WEBMENTION_ENABLE && (
        <>
          <link
            rel='webmention'
            href={`https://webmention.io/${COMMENT_WEBMENTION_HOSTNAME}/webmention`}
          />
          <link
            rel='pingback'
            href={`https://webmention.io/${COMMENT_WEBMENTION_HOSTNAME}/xmlrpc`}
          />
          {COMMENT_WEBMENTION_AUTH && (
            <link href={COMMENT_WEBMENTION_AUTH} rel='me' />
          )}
        </>
      )}

      {/* 不蒜子計數器設定 */}
      {ANALYTICS_BUSUANZI_ENABLE && (
        <meta name='referrer' content='no-referrer-when-downgrade' />
      )}

      {/* 文章元數據 */}
      {meta?.type === 'Post' && (
        <>
          <meta property='article:published_time' content={meta.publishDay} />
          <meta property='article:author' content={AUTHOR} />
          <meta property='article:section' content={category} />
          <meta property='article:publisher' content={FACEBOOK_PAGE} />
          {post?.tags &&
            post.tags.map((tag, index) => (
              <meta property='article:tag' content={tag} key={index} />
            ))}
        </>
      )}
      {children}
    </Head>
  )
}

/**
 * 获取SEO信息
 * @param {*} props
 * @param {*} router
 */
const getSEOMeta = (props, router, locale) => {
  const { post, siteInfo, tag, category, page } = props
  const keyword = router?.query?.s

  const TITLE = siteConfig('TITLE')
  const BRAND_SUFFIX = ' | 鑫葳貿易有限公司'

  switch (router.route) {
    case '/':
      return {
        title: `${siteInfo?.title}${BRAND_SUFFIX} - 專業塑膠原料供應商`,
        description: `鑫葳貿易有限公司 - 專業塑膠原料供應商，30年產業經驗，提供PP聚丙烯、PE聚乙烯、PS聚苯乙烯等全系列塑膠原料，電子、汽車、家電等行業優質供應商。`,
        image: `${siteInfo?.pageCover}`,
        slug: '',
        type: 'website'
      }
    case '/archive':
      return {
        title: `${locale.NAV.ARCHIVE}${BRAND_SUFFIX}`,
        description: `鑫葳貿易有限公司文章彙整 - 查看我們關於塑膠原料的專業文章、產品資訊和產業新聞。提供塑膠原料相關知識和最新產業動態。`,
        image: `${siteInfo?.pageCover}`,
        slug: 'archive',
        type: 'website'
      }
    case '/page/[page]':
      return {
        title: `第 ${page} 頁${BRAND_SUFFIX}`,
        description: `鑫葳貿易有限公司第 ${page} 頁 - 專業塑膠原料供應商，提供PP聚丙烯、PE聚乙烯、PS聚苯乙烯等塑膠產品資訊和應用知識。`,
        image: `${siteInfo?.pageCover}`,
        slug: 'page/' + page,
        type: 'website'
      }
    case '/category/[category]':
      return {
        title: `${category}${BRAND_SUFFIX} - 塑膠原料分類`,
        description: `鑫葳貿易有限公司 ${category} 分類 - 專業塑膠原料供應商，查看我們的 ${category} 相關產品資訊、技術規格和應用案例。`,
        slug: 'category/' + category,
        image: `${siteInfo?.pageCover}`,
        type: 'website',
        category: category
      }
    case '/category/[category]/page/[page]':
      return {
        title: `${category} - 第 ${page} 頁${BRAND_SUFFIX}`,
        description: `鑫葳貿易有限公司 ${category} 分類第 ${page} 頁 - 專業塑膠原料供應商，查看更多 ${category} 相關資訊和產品應用方案。`,
        slug: 'category/' + category,
        image: `${siteInfo?.pageCover}`,
        type: 'website',
        category: category
      }
    case '/tag/[tag]':
    case '/tag/[tag]/page/[page]':
      return {
        title: `${tag} 標籤${BRAND_SUFFIX}`,
        description: `鑫葳貿易有限公司 ${tag} 相關內容 - 專業塑膠原料供應商，瀏覽有關 ${tag} 的專業資訊、技術文章和產品應用。`,
        image: `${siteInfo?.pageCover}`,
        slug: 'tag/' + tag,
        type: 'website'
      }
    case '/search':
      return {
        title: `${keyword ? `${keyword} - ` : ''}搜尋結果${BRAND_SUFFIX}`,
        description: `鑫葳貿易有限公司網站搜尋${keyword ? ` - ${keyword} 相關結果` : ''} - 尋找塑膠原料相關資訊、技術文章和產品規格。`,
        image: `${siteInfo?.pageCover}`,
        slug: 'search',
        type: 'website'
      }
    case '/search/[keyword]':
    case '/search/[keyword]/page/[page]':
      return {
        title: `${keyword ? `${keyword} - ` : ''}搜尋結果${BRAND_SUFFIX}`,
        description: `鑫葳貿易有限公司網站搜尋 - ${keyword} 相關結果 - 專業塑膠原料供應商，提供全面的塑膠原料資訊和技術支援。`,
        image: `${siteInfo?.pageCover}`,
        slug: 'search/' + (keyword || ''),
        type: 'website'
      }
    case '/404':
      return {
        title: `頁面未找到${BRAND_SUFFIX}`,
        description: `很抱歉，您請求的頁面不存在。鑫葳貿易有限公司是專業的塑膠原料供應商，提供PP聚丙烯、PE聚乙烯等產品。`,
        image: `${siteInfo?.pageCover}`,
        type: 'website'
      }
    case '/tag':
      return {
        title: `所有標籤${BRAND_SUFFIX}`,
        description: `鑫葳貿易有限公司網站標籤索引 - 瀏覽所有標籤找到您需要的塑膠原料相關資訊，包括產品規格、應用範圍和技術支援。`,
        image: `${siteInfo?.pageCover}`,
        slug: 'tag',
        type: 'website'
      }
    case '/category':
      return {
        title: `所有分類${BRAND_SUFFIX}`,
        description: `鑫葳貿易有限公司產品分類索引 - 查看我們提供的所有塑膠原料分類，包括PP聚丙烯、PE聚乙烯、PS聚苯乙烯等各種規格產品。`,
        image: `${siteInfo?.pageCover}`,
        slug: 'category',
        type: 'website'
      }
    case '/products':
      return {
        title: `產品資訊${BRAND_SUFFIX} - 塑膠原料供應商`,
        description: `鑫葳貿易有限公司產品目錄 - 專業塑膠原料供應商，提供PP聚丙烯、PE聚乙烯、PS聚苯乙烯等全系列產品，品質穩定、價格合理。`,
        image: `${siteInfo?.pageCover}`,
        slug: 'products',
        type: 'Product'
      }
    default:
      return {
        title: post
          ? `${post?.title}${BRAND_SUFFIX}`
          : `${siteInfo?.title}${BRAND_SUFFIX}`,
        description:
          post?.summary ||
          `鑫葳貿易有限公司 - 專業塑膠原料供應商，提供PP聚丙烯、PE聚乙烯等多種高品質塑膠原料，為各行業提供全面技術支援。`,
        type: post?.type || 'website',
        slug: post?.slug || '',
        image: post?.pageCoverThumbnail || `${siteInfo?.pageCover}`,
        category: post?.category?.[0] || '',
        tags: post?.tags || [],
        publishDay: post?.publishDay || new Date().toISOString()
      }
  }
}

export default SEO
