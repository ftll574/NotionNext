import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { getGlobalData } from '@/lib/db/getSiteData'
import { DynamicLayout } from '@/themes/theme'
import { Component } from 'react'

// 錯誤邊界組件，防止整個頁面因錯誤而崩潰
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('產品頁面錯誤:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">發生了一些錯誤</h2>
          <p className="mb-4">請稍後再試或聯繫網站管理員</p>
        </div>
      )
    }

    return this.props.children
  }
}

/**
 * 產品目錄頁面
 * @param {*} props
 * @returns
 */
const ProductsPage = props => {
  // 示例產品數據
  const sampleProducts = [
    {
      title: 'PET塑膠板材',
      modelNumber: 'PET-001',
      description: '高透明度、高強度的PET塑膠板材，適用於各種包裝和工業用途'
    },
    {
      title: 'PP聚丙烯顆粒',
      modelNumber: 'PP-102',
      description: '高品質聚丙烯原料，適用於注塑成型和擠出加工'
    },
    {
      title: 'ABS工程塑料',
      modelNumber: 'ABS-203',
      description: '耐衝擊性佳的工程塑料，適用於家電、汽車零件等領域'
    }
  ]

  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  
  return (
    <DynamicLayout theme={theme} layoutName='LayoutBase' {...props}>
      <ErrorBoundary>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8 text-center">產品目錄</h1>
          
          {/* 直接在頁面內渲染產品列表，不使用獨立組件 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProducts.map((product, index) => (
              <div key={index} className="border rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-sm text-gray-500">型號: {product.modelNumber}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ErrorBoundary>
    </DynamicLayout>
  )
}

export async function getStaticProps({ locale }) {
  try {
    const props = await getGlobalData({ from: 'products-page', locale })
    
    return {
      props,
      revalidate: process.env.EXPORT
        ? undefined
        : siteConfig(
            'NEXT_REVALIDATE_SECOND',
            BLOG.NEXT_REVALIDATE_SECOND,
            props.NOTION_CONFIG
          )
    }
  } catch (error) {
    console.error('Error in getStaticProps:', error)
    
    // 即使出錯也返回一些基本屬性
    return {
      props: {
        error: true,
        message: '資料載入失敗'
      }
    }
  }
}

export default ProductsPage 