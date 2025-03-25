/* eslint-disable @next/next/no-img-element */
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ScrollButton from './ScrollButton'

/**
 * 英雄大圖區塊
 */
export const Hero = props => {
  const config = props?.NOTION_CONFIG || CONFIG
  
  // 從配置中獲取輪播圖片數組，如果是字符串則轉換為數組
  const getImagesArray = () => {
    const imagesConfig = siteConfig('STARTER_HERO_PREVIEW_IMAGES', null, config) || 
                        siteConfig('STARTER_HERO_PREVIEW_IMAGE', null, config)
    
    if (!imagesConfig) return []
    
    // 如果配置是字符串，檢查是否包含分隔符
    if (typeof imagesConfig === 'string') {
      // 如果包含逗號，則按逗號分割成數組
      if (imagesConfig.includes(',')) {
        return imagesConfig.split(',').map(url => url.trim())
      }
      // 否則將單個圖片作為數組的唯一元素
      return [imagesConfig]
    }
    
    // 如果已經是數組則直接返回
    return Array.isArray(imagesConfig) ? imagesConfig : []
  }
  
  const images = getImagesArray()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // 自動輪播效果
  useEffect(() => {
    // 如果只有一張圖片或沒有圖片，不需要輪播
    if (images.length <= 1) return
    
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // 每5秒切換一次圖片
    
    return () => clearInterval(interval)
  }, [images.length])
  
  // 手動切換函數
  const goToNextSlide = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }
  
  const goToPrevSlide = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  return (
    <>
      {/* 全版輪播圖片 */}
      {images.length > 0 && (
        <div className="relative w-full overflow-hidden" style={{ height: '100vh' }}>
          {/* 輪播圖片 */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={siteConfig('TITLE', null, config)}
                title={siteConfig('TITLE', null, config)}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          
          {/* 半透明覆蓋層 - 確保文字清晰可見 */}
          <div className="absolute inset-0 bg-primary/70 z-10"></div>
          
          {/* 將Hero内容疊加在輪播圖片上 */}
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
            <div className="container px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {siteConfig('STARTER_HERO_TITLE_1', '專業塑膠原料供應商', config)}
              </h1>
              <p className="text-xl text-white/90 mb-8">
                {siteConfig('STARTER_HERO_TITLE_2', '30年產業經驗，值得信賴的合作夥伴', config)}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href={siteConfig('STARTER_HERO_BUTTON_1_URL', '/products', config)}
                  className="rounded-md bg-white px-6 py-3 font-medium text-primary hover:bg-gray-100 transition-all"
                >
                  {siteConfig('STARTER_HERO_BUTTON_1_TEXT', '產品目錄', config)}
                </Link>
                <Link
                  href={siteConfig('STARTER_HERO_BUTTON_2_URL', '/contact', config)}
                  className="rounded-md bg-primary/30 border border-white/50 px-6 py-3 font-medium text-white hover:bg-primary/50 transition-all"
                >
                  {siteConfig('STARTER_HERO_BUTTON_2_TEXT', '聯繫我們', config)}
                </Link>
              </div>
            </div>
          </div>
          
          {/* 輪播導航按鈕 - 只在多張圖片時顯示 */}
          {images.length > 1 && (
            <>
              <button 
                onClick={goToPrevSlide}
                className='absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/50 dark:bg-dark-2/50 rounded-full p-3 text-primary hover:bg-white dark:hover:bg-dark-2 transition-all z-20'
              >
                <i className='fas fa-chevron-left text-xl'></i>
              </button>
              <button 
                onClick={goToNextSlide}
                className='absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/50 dark:bg-dark-2/50 rounded-full p-3 text-primary hover:bg-white dark:hover:bg-dark-2 transition-all z-20'
              >
                <i className='fas fa-chevron-right text-xl'></i>
              </button>
            </>
          )}
          
          {/* 輪播指示器 - 只在多張圖片時顯示 */}
          {images.length > 1 && (
            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center z-20'>
              {images.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-4 h-4 rounded-full mx-2 ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`前往第 ${index + 1} 張圖片`}
                />
              ))}
            </div>
          )}
        </div>
      )}
      
      {/* 横幅图片 */}
      {siteConfig('STARTER_HERO_BANNER_IMAGE', null, config) && (
        <div className='container'>
          <LazyImage
            priority
            className='w-full'
            src={siteConfig(
              'STARTER_HERO_BANNER_IMAGE',
              null,
              config
            )}></LazyImage>
        </div>
      )}

      {/* 添加滾動按鈕 */}
      <div className="mt-12">
        <ScrollButton targetId="about-section" />
      </div>
    </>
  )
}
