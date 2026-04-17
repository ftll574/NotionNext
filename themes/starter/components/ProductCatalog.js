/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'

/**
 * 產品目錄頁面
 * 展示產品列表並可透過標籤進行篩選
 */
export const ProductCatalog = ({ products = [], tags = [] }) => {
  const [selectedTag, setSelectedTag] = useState('all')
  const [filteredProducts, setFilteredProducts] = useState(products)

  // 當選擇的標籤變更時過濾產品
  useEffect(() => {
    if (selectedTag === 'all') {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(
        products.filter(
          product => product.tags && product.tags.includes(selectedTag)
        )
      )
    }
  }, [selectedTag, products])

  return (
    <>
      {/* <!-- ====== 產品目錄區塊 開始 --> */}
      <section className='bg-white dark:bg-dark py-20 pt-32'>
        <div className='container mx-auto'>
          <div className='text-center mb-16'>
            <h1 className='text-3xl font-bold leading-tight text-dark dark:text-white mb-6 sm:text-4xl md:text-[40px] md:leading-[1.2]'>
              {siteConfig('PRODUCT_CATALOG_TITLE', '產品目錄')}
            </h1>
            <p className='text-base text-body-color dark:text-dark-6 max-w-[600px] mx-auto'>
              {siteConfig(
                'PRODUCT_CATALOG_DESCRIPTION',
                '瀏覽我們的完整產品系列，滿足您的各種需求'
              )}
            </p>
          </div>

          {/* 產品分類標籤 */}
          <div className='flex flex-wrap justify-center mb-10 gap-3'>
            <button
              onClick={() => setSelectedTag('all')}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedTag === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-dark-2 text-body-color dark:text-dark-6 hover:bg-gray-200 dark:hover:bg-dark-3'
              }`}
            >
              全部產品
            </button>

            {tags.map((tag, index) => (
              <button
                key={index}
                onClick={() => setSelectedTag(tag.value)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedTag === tag.value
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-dark-2 text-body-color dark:text-dark-6 hover:bg-gray-200 dark:hover:bg-dark-3'
                }`}
              >
                {tag.name}
              </button>
            ))}
          </div>

          {/* 產品列表 */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className='wow fadeInUp group bg-white dark:bg-dark-2 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all'
                data-wow-delay={`0.${index + 1}s`}
              >
                <Link
                  href={product.link || '#'}
                  aria-label={product.title}
                  className='block relative overflow-hidden h-60 cursor-pointer'
                >
                  <img
                    src={
                      product.coverImage ||
                      '/images/starter/product-placeholder.svg'
                    }
                    alt={product.title || '產品圖'}
                    loading='lazy'
                    onError={e => {
                      if (
                        e.currentTarget.src.endsWith(
                          '/images/starter/product-placeholder.svg'
                        )
                      )
                        return
                      e.currentTarget.src =
                        '/images/starter/product-placeholder.svg'
                    }}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                  />

                  {/* 產品型號標籤 */}
                  {product.modelNumber && (
                    <div className='absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium'>
                      {product.modelNumber}
                    </div>
                  )}
                </Link>

                <div className='p-6'>
                  <h3 className='text-xl font-bold text-dark dark:text-white mb-3'>
                    <Link
                      href={product.link || '#'}
                      className='hover:text-primary transition-colors'
                    >
                      {product.title}
                    </Link>
                  </h3>

                  <p className='text-body-color dark:text-dark-6 mb-4 line-clamp-2'>
                    {product.description}
                  </p>

                  {/* 產品標籤 */}
                  {product.tags && product.tags.length > 0 && (
                    <div className='flex flex-wrap gap-2 mb-4'>
                      {product.tags.map((tag, tagIndex) => {
                        const tagObj = tags.find(t => t.value === tag)
                        return (
                          <span
                            key={tagIndex}
                            className='inline-block bg-gray-100 dark:bg-dark-3 text-body-color dark:text-dark-6 text-xs px-3 py-1 rounded-full'
                          >
                            {tagObj ? tagObj.name : tag}
                          </span>
                        )
                      })}
                    </div>
                  )}

                  {/* 產品詳情連結 */}
                  <Link
                    href={product.link || '#'}
                    className='inline-flex items-center text-primary hover:underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded'
                  >
                    查看詳情
                    <svg
                      className='w-4 h-4 ml-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* 無產品時顯示 */}
          {filteredProducts.length === 0 && (
            <div className='text-center py-20'>
              <p className='text-lg text-body-color dark:text-dark-6'>
                目前沒有符合條件的產品
              </p>
            </div>
          )}
        </div>
      </section>
      {/* <!-- ====== 產品目錄區塊 結束 --> */}
    </>
  )
}

export default ProductCatalog
