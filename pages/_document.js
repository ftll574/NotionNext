// eslint-disable-next-line @next/next/no-document-import-in-page
import BLOG from '@/blog.config'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={BLOG.LANG}>
        <Head>
          {/* DNS 預解析和資源預連接 */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
          
          {/* 預加載字體 */}
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
          
          {/* 基本SEO標籤 */}
          <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
          <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0" />
          <meta name="format-detection" content="telephone=no" />
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
          
          {/* Bing Webmaster 驗證 */}
          {BLOG.BING_SITE_VERIFICATION && (
            <meta 
              name="msvalidate.01" 
              content={BLOG.BING_SITE_VERIFICATION} 
            />
          )}
          
          {/* 站點地圖連結 */}
          <link 
            rel="sitemap" 
            type="application/xml" 
            title="Sitemap" 
            href="/sitemap.xml" 
          />
          
          {/* 多語言支持 */}
          {BLOG.ENABLE_HREFLANG && Object.entries(BLOG.ALTERNATE_LANG_URLS || {}).map(([lang, url]) => (
            <link 
              key={lang}
              rel="alternate" 
              hrefLang={lang} 
              href={url} 
            />
          ))}
          {BLOG.ENABLE_HREFLANG && (
            <link rel="alternate" hrefLang="x-default" href={BLOG.LINK} />
          )}
          
          {/* 網站圖標 */}
          <link rel="icon" href={BLOG.BLOG_FAVICON} />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="msapplication-TileColor" content="#ffffff" />
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
