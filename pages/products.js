import React from 'react'
import Head from 'next/head'
import BLOG from '@/blog.config'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'
// 注意：暫時不使用 DynamicLayout
// import { DynamicLayout } from '@/themes/theme'
import { getGlobalData } from '@/lib/db/getSiteData'
import { ProductCatalog } from '@/themes/starter/components/ProductCatalog'

/**
 * 整合 ProductCatalog 的產品頁面
 */
const ProductsPage = props => {
  // 安全獲取配置
  const config = props.NOTION_CONFIG || {}
  const title = siteConfig('TITLE', BLOG.TITLE, config)
  
  // 示例產品數據
  const sampleProducts = [
    {
      title: 'PET塑膠板材',
      modelNumber: 'PET-001',
      description: '高透明度、高強度的PET塑膠板材，適用於各種包裝和工業用途',
      slug: 'pet-sheet',
      tags: ['pet', 'sheet']
    },
    {
      title: 'PP聚丙烯顆粒',
      modelNumber: 'PP-102',
      description: '高品質聚丙烯原料，適用於注塑成型和擠出加工',
      slug: 'pp-resin',
      tags: ['pp', 'resin']
    },
    {
      title: 'ABS工程塑料',
      modelNumber: 'ABS-203',
      description: '耐衝擊性佳的工程塑料，適用於家電、汽車零件等領域',
      slug: 'abs-plastic',
      tags: ['abs', 'engineering']
    }
  ]
  
  // 示例標籤數據
  const sampleTags = [
    { name: 'PET材料', value: 'pet' },
    { name: '聚丙烯', value: 'pp' },
    { name: 'ABS塑料', value: 'abs' },
    { name: '板材', value: 'sheet' },
    { name: '樹脂', value: 'resin' },
    { name: '工程塑料', value: 'engineering' }
  ]
  
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
      
      {/* 使用 ProductCatalog 組件 */}
      <div className="flex-grow">
        <ProductCatalog products={sampleProducts} tags={sampleTags} />
      </div>
      
      {/* 簡單頁尾 - 不重複顯示公司名稱 */}
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