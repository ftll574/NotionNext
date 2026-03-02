// eslint-disable-next-line @next/next/no-document-import-in-page
import BLOG from '@/blog.config'
import Document, { Head, Html, Main, NextScript } from 'next/document'

// 预先设置深色模式的脚本内容
const darkModeScript = `
(function() {
  const darkMode = localStorage.getItem('darkMode')

  const prefersDark =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

  const defaultAppearance = '${BLOG.APPEARANCE || 'auto'}'

  let shouldBeDark = darkMode === 'true' || darkMode === 'dark'

  if (darkMode === null) {
    if (defaultAppearance === 'dark') {
      shouldBeDark = true
    } else if (defaultAppearance === 'auto') {
      // 检查是否在深色模式时间范围内
      const date = new Date()
      const hours = date.getHours()
      const darkTimeStart = ${BLOG.APPEARANCE_DARK_TIME ? BLOG.APPEARANCE_DARK_TIME[0] : 18}
      const darkTimeEnd = ${BLOG.APPEARANCE_DARK_TIME ? BLOG.APPEARANCE_DARK_TIME[1] : 6}
      
      shouldBeDark = prefersDark || (hours >= darkTimeStart || hours < darkTimeEnd)
    }
  }
  
  // 立即设置 html 元素的类
  document.documentElement.classList.add(shouldBeDark ? 'dark' : 'light')
})()
`

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={BLOG.LANG}>
        <Head>
          {/* 预加载字体 */}
          {BLOG.FONT_AWESOME && (
            <>
              <link
                rel='preload'
                href={BLOG.FONT_AWESOME}
                as='style'
                crossOrigin='anonymous'
              />
              <link
                rel='stylesheet'
                href={BLOG.FONT_AWESOME}
                crossOrigin='anonymous'
                referrerPolicy='no-referrer'
              />
            </>
          )}
<<<<<<< HEAD

          {/* 预先设置深色模式，避免闪烁 */}
          <script dangerouslySetInnerHTML={{ __html: darkModeScript }} />
=======
          
          {/* 基本SEO標籤 */}
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content={BLOG.DESCRIPTION || `${BLOG.AUTHOR} - ${BLOG.BIO}`} />
          <meta name="keywords" content={BLOG.KEYWORDS} />
          <meta name="author" content={BLOG.AUTHOR} />
          
          {/* Google Search Console 驗證 */}
          {BLOG.GOOGLE_SITE_VERIFICATION && (
            <meta 
              name="google-site-verification" 
              content={BLOG.GOOGLE_SITE_VERIFICATION} 
            />
          )}

          {/* Baidu Search Console 驗證 */}
          {BLOG.BAIDU_SITE_VERIFICATION && (
            <meta 
              name="baidu-site-verification" 
              content={BLOG.BAIDU_SITE_VERIFICATION} 
            />
          )}
          
          {/* 站點地圖連結 */}
          <link 
            rel="sitemap" 
            type="application/xml" 
            title="Sitemap" 
            href="/sitemap.xml" 
          />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={BLOG.AUTHOR} />
          
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:creator" content={BLOG.AUTHOR} />
          
          {/* 網站圖標 */}
          <link rel="icon" href={BLOG.BLOG_FAVICON} />
          <link rel="apple-touch-icon" href={BLOG.BLOG_FAVICON} />
          
          {/* 結構化數據 - 組織 */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: BLOG.AUTHOR,
                url: BLOG.LINK,
                logo: BLOG.BLOG_FAVICON,
                sameAs: [
                  BLOG.CONTACT_TWITTER && `https://twitter.com/${BLOG.CONTACT_TWITTER}`,
                  BLOG.CONTACT_FACEBOOK && `https://www.facebook.com/${BLOG.CONTACT_FACEBOOK}`,
                  BLOG.CONTACT_INSTAGRAM && `https://www.instagram.com/${BLOG.CONTACT_INSTAGRAM}`,
                  BLOG.CONTACT_LINKEDIN && `https://www.linkedin.com/in/${BLOG.CONTACT_LINKEDIN}`
                ].filter(Boolean)
              })
            }}
          />
>>>>>>> be8c14e1 (Fix mobile display bug)
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
