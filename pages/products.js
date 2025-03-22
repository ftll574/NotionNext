import React from 'react'
import Head from 'next/head'
import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { getGlobalData } from '@/lib/db/getSiteData'
import { ProductCatalog } from '@/themes/starter/components/ProductCatalog'

/**
 * 整合 ProductCatalog 的產品頁面 - 避免重複顯示公司名稱
 */
const ProductsPage = props => {
  // 安全獲取配置
  const config = props.NOTION_CONFIG || {}
  const title = siteConfig('TITLE', BLOG.TITLE, config)
  
  // 產品數據 - 與網站現有產品匹配
  const sampleProducts = [
    {
      title: 'PET塑膠板材',
      modelNumber: 'PET-001',
      description: '高透明度、高強度的PET塑膠板材，適用於各種包裝和工業用途',
      slug: 'pet-sheet',
      image: '/images/products/pet-sheet.jpg',
      tags: ['pet材料', '板材']
    },
    {
      title: 'PP聚丙烯顆粒',
      modelNumber: 'PP-102',
      description: '高品質聚丙烯原料，適用於注塑成型和擠出加工',
      slug: 'pp-resin',
      image: '/images/products/pp-resin.jpg',
      tags: ['聚丙烯', '樹脂']
    },
    {
      title: 'ABS工程塑料',
      modelNumber: 'ABS-203',
      description: '耐衝擊性佳的工程塑料，適用於家電、汽車零件等領域',
      slug: 'abs-plastic',
      image: '/images/products/abs-plastic.jpg',
      tags: ['ABS塑料', '工程塑料']
    }
  ]
  
  // 標籤數據 - 與產品標籤匹配
  const sampleTags = [
    { name: '全部產品', value: '全部產品' },
    { name: 'PET材料', value: 'pet材料' },
    { name: '聚丙烯', value: '聚丙烯' },
    { name: 'ABS塑料', value: 'ABS塑料' },
    { name: '板材', value: '板材' },
    { name: '樹脂', value: '樹脂' },
    { name: '工程塑料', value: '工程塑料' }
  ]
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <Head>
        <title>產品目錄 - {title}</title>
      </Head>
      
      {/* 使用 ProductCatalog 組件，不額外添加公司名稱 */}
      <div className="flex-grow mt-16"> {/* 添加頂部間距避免與導航欄重疊 */}
        <ProductCatalog 
          products={sampleProducts} 
          tags={sampleTags} 
          description="瀏覽我們的完整產品系列，滿足您的各種需求"
        />
      </div>
      
      {/* 簡單頁尾 - 只顯示版權信息 */}
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