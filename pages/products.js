import React from 'react'
import Head from 'next/head'
import BLOG from '@/blog.config'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'
// 注意：暫時不使用 DynamicLayout
// import { DynamicLayout } from '@/themes/theme'
import { getGlobalData } from '@/lib/db/getSiteData'

const ProductsPage = props => {
  // 獲取基本配置，但不用於關鍵渲染邏輯
  const config = props.NOTION_CONFIG || {}
  const title = siteConfig('TITLE', BLOG.TITLE, config)
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <Head>
        <title>產品目錄 - {title}</title>
      </Head>
      
      {/* 簡單自定義頁頭 - 不使用主題組件 */}
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
              {title}
            </Link>
          </div>
        </div>
      </header>
      
      {/* 主內容 */}
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          產品目錄
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border dark:border-gray-700 rounded-lg overflow-hidden shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">測試產品 {item}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">這是一個測試產品描述，用於診斷頁面問題。</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">型號: TEST-{item}00</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      {/* 簡單頁尾 */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} {title}</p>
        </div>
      </footer>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  try {
    // 仍然獲取全局數據，但即使失敗也有後備方案
    const props = await getGlobalData({ from: 'products-page', locale })
    return {
      props: props || { NOTION_CONFIG: {} },
      revalidate: parseInt(process.env.NEXT_REVALIDATE_SECOND || '86400')
    }
  } catch (error) {
    console.error('Error in getStaticProps:', error)
    return { props: { NOTION_CONFIG: {} } }
  }
}

export default ProductsPage 