import React from 'react'
import Head from 'next/head'
import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { getGlobalData } from '@/lib/db/getSiteData'

/**
 * 產品目錄頁面 - 修正分類結構
 */
const ProductsPage = ({ products = [], categories = [], parentCategories = {}, siteInfo, NOTION_CONFIG }) => {
  const title = siteConfig('TITLE', BLOG.TITLE, NOTION_CONFIG)
  
  // 根據標籤內容生成顏色
  const getTagColor = (tag) => {
    // 擴展的顏色選項
    const colors = [
      // 基本顏色
      'bg-blue-100 text-blue-800',
      'bg-green-100 text-green-800',
      'bg-yellow-100 text-yellow-800',
      'bg-red-100 text-red-800',
      'bg-purple-100 text-purple-800',
      'bg-pink-100 text-pink-800',
      'bg-indigo-100 text-indigo-800',
      'bg-teal-100 text-teal-800',
      
      // 新增顏色 - 橙色系列
      'bg-orange-100 text-orange-800',
      'bg-amber-100 text-amber-800',
      
      // 綠色變體
      'bg-lime-100 text-lime-800',
      'bg-emerald-100 text-emerald-800',
      
      // 藍色變體
      'bg-sky-100 text-sky-800',
      'bg-cyan-100 text-cyan-800',
      
      // 紫色變體
      'bg-violet-100 text-violet-800',
      'bg-fuchsia-100 text-fuchsia-800',
      
      // 灰色系列
      'bg-gray-100 text-gray-800',
      'bg-slate-100 text-slate-800',
      'bg-zinc-100 text-zinc-800',
      'bg-stone-100 text-stone-800',
      
      // 其他顏色
      'bg-rose-100 text-rose-800',
      
      // 深色背景淺色文字
      'bg-blue-600 text-white',
      'bg-green-600 text-white',
      'bg-red-600 text-white',
      'bg-purple-600 text-white',
      'bg-pink-600 text-white',
      'bg-indigo-600 text-white',
      'bg-teal-600 text-white',
      'bg-orange-600 text-white',
      'bg-amber-600 text-white',
      'bg-emerald-600 text-white',
      'bg-sky-600 text-white',
    ];
    
    let hash = 0;
    for (let i = 0; i < tag.length; i++) {
      hash = tag.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    return colors[Math.abs(hash) % colors.length];
  };
  
  // 獲取主分類，不包括子分類
  const mainCategories = categories.filter(cat => !parentCategories[cat.value]);
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <Head>
        <title>產品目錄 - {title}</title>
      </Head>
      
      <div className="flex-grow mt-16">
        {products && products.length > 0 ? (
          <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-16">
              <h1 className="text-3xl font-bold text-dark dark:text-white mb-6 sm:text-4xl md:text-[40px]">
                產品目錄
              </h1>
              <p className="text-base text-body-color dark:text-dark-6 max-w-[600px] mx-auto mb-8">
                瀏覽我們的完整產品系列，滿足您的各種需求
              </p>
              
              {/* 頂部分類導航按鈕 - 只顯示主分類 */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {mainCategories.map((category, index) => (
                  <a 
                    key={index}
                    href={`#${category.value}`}
                    className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
                  >
                    {category.name}
                  </a>
                ))}
              </div>
            </div>
            
            {/* 按主分類顯示產品 */}
            {mainCategories.map((category, catIndex) => {
              // 獲取當前主分類下的所有產品
              const mainCategoryProducts = products.filter(product => 
                product.category === category.value
              );
              
              // 獲取該主分類下的所有子分類
              const childCategories = categories.filter(c => 
                parentCategories[c.value] === category.value
              );
              
              return (
                <div key={catIndex} className="mb-16" id={category.value}>
                  <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
                    {category.name}
                  </h2>
                  
                  {/* 主分類下的產品 */}
                  {mainCategoryProducts.length > 0 && (
                    <div className="flex flex-row flex-wrap gap-6 mb-12">
                      {mainCategoryProducts.map((product, index) => (
                        <div key={index} className="bg-white dark:bg-dark-2 rounded-lg shadow-lg overflow-hidden p-6 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]">
                          <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
                          
                          {/* 標籤列表 */}
                          {product.tags && product.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {product.tags.map((tag, tagIndex) => (
                                <span key={tagIndex} className={`px-3 py-1 rounded-full text-sm ${getTagColor(tag)}`}>
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                          
                          <p className="text-gray-500 dark:text-gray-400 mb-4">型號: {product.modelNumber}</p>
                          <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3">{product.description}</p>
                          
                          <a 
                            href={`/${product.slug}`} 
                            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                          >
                            查看詳情
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* 子分類下的產品 */}
                  {childCategories.map((childCat, childIndex) => {
                    const childProducts = products.filter(product => 
                      product.category === childCat.value
                    );
                    
                    return childProducts.length > 0 ? (
                      <div key={childIndex} className="mb-12">
                        <h3 className="text-xl font-semibold mb-6 pl-4 border-l-4 border-primary">
                          {childCat.name}
                        </h3>
                        
                        <div className="flex flex-row flex-wrap gap-6">
                          {childProducts.map((product, index) => (
                            <div key={index} className="bg-white dark:bg-dark-2 rounded-lg shadow-lg overflow-hidden p-6 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]">
                              <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
                              
                              {/* 標籤列表 */}
                              {product.tags && product.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {product.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className={`px-3 py-1 rounded-full text-sm ${getTagColor(tag)}`}>
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                              
                              <p className="text-gray-500 dark:text-gray-400 mb-4">型號: {product.modelNumber}</p>
                              <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3">{product.description}</p>
                              
                              <a 
                                href={`/${product.slug}`} 
                                className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                              >
                                查看詳情
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null;
                  })}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="container mx-auto px-4 py-12 text-center">
            <h2 className="text-2xl font-bold mb-4">暫無產品資料</h2>
            <p>請在 Notion 中添加產品頁面</p>
          </div>
        )}
      </div>
      
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
    // 獲取全局數據
    const props = await getGlobalData({ from: 'products-page', locale })
    
    // 處理產品頁面 - 從菜單中獲取產品目錄
    const productMenus = props.customMenu?.filter(menu => 
      menu.title === '產品目錄' || menu.name === '產品目錄' || menu.slug === 'products'
    ) || []
    
    const products = []
    const categoryMap = new Map()
    const parentCategories = {}
    
    // 處理產品菜單
    if (productMenus.length > 0) {
      const productMenu = productMenus[0]
      
      // 尋找頁面資料 - 用於獲取標籤
      const findPageData = (slug) => {
        if (!slug || !slug.startsWith('/')) return null
        const pageSlug = slug.substring(1) // 移除開頭的 '/'
        return props.allPages?.find(page => page.slug === pageSlug)
      }
      
      // 根據 Notion 表格結構處理 SubMenu 和 ChildMenu
      if (productMenu.subMenus && productMenu.subMenus.length > 0) {
        // 首先收集所有 SubMenu
        productMenu.subMenus.forEach(subMenu => {
          const subMenuName = subMenu.title || subMenu.name
          const subMenuSlug = subMenu.id || subMenu.slug
          
          if (subMenuName && subMenuSlug) {
            categoryMap.set(subMenuSlug, {
              name: subMenuName,
              value: subMenuSlug
            })
            
            // 處理指向頁面的 SubMenu
            if (subMenu.slug && subMenu.slug.startsWith('/')) {
              const pageData = findPageData(subMenu.slug)
              
              const product = {
                id: subMenu.id,
                title: subMenuName,
                slug: subMenu.slug.startsWith('/') ? subMenu.slug.substring(1) : subMenu.slug,
                category: subMenuSlug,
                description: subMenu.description || '',
                modelNumber: pageData?.id?.substr(-12) || subMenu.id?.substr(-12),
                tags: pageData?.tags || []
              }
              
              products.push(product)
            }
            
            // 處理 ChildMenu - 根據 Notion 表格，這些應該歸屬於父 SubMenu
            if (subMenu.childMenus && subMenu.childMenus.length > 0) {
              subMenu.childMenus.forEach(childMenu => {
                const childMenuName = childMenu.title || childMenu.name
                const childMenuSlug = childMenu.id || childMenu.slug
                
                if (childMenuName && childMenuSlug) {
                  // 添加為類別
                  categoryMap.set(childMenuSlug, {
                    name: childMenuName,
                    value: childMenuSlug
                  })
                  
                  // 設置父子關係
                  parentCategories[childMenuSlug] = subMenuSlug
                  
                  // 如果 ChildMenu 指向頁面
                  if (childMenu.slug && childMenu.slug.startsWith('/')) {
                    const pageData = findPageData(childMenu.slug)
                    
                    const product = {
                      id: childMenu.id,
                      title: childMenuName,
                      slug: childMenu.slug.startsWith('/') ? childMenu.slug.substring(1) : childMenu.slug,
                      category: childMenuSlug, // 使用 ChildMenu 自己的類別
                      description: childMenu.description || '',
                      modelNumber: pageData?.id?.substr(-12) || childMenu.id?.substr(-12),
                      tags: pageData?.tags || []
                    }
                    
                    products.push(product)
                  }
                }
              })
            }
          }
        })
      }
    }
    
    // 構建類別數組
    const categories = Array.from(categoryMap.values())
    
    return {
      props: {
        ...props,
        products,
        categories,
        parentCategories
      },
      revalidate: parseInt(process.env.NEXT_REVALIDATE_SECOND || '86400')
    }
  } catch (error) {
    console.error('Error in getStaticProps:', error)
    return { 
      props: { 
        NOTION_CONFIG: {},
        products: [],
        categories: [],
        parentCategories: {}
      } 
    }
  }
}

export default ProductsPage 