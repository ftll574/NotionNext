/* eslint-disable @next/next/no-img-element */
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import FixedScrollButton from './FixedScrollButton'

/**
 * 英雄大圖區塊
 */
export const Hero = props => {
  const config = props?.NOTION_CONFIG || CONFIG
  const heroRef = useRef(null)
  
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
  const [scrollY, setScrollY] = useState(0)
  
  // 視差滾動效果
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
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
        <div 
          ref={heroRef}
          className="relative w-full overflow-hidden" 
          style={{ height: '100vh' }}
        >
          {/* 輪播圖片 - 改進版視差效果 */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transform: `translateY(${scrollY * 0.1}px)`, 
                transition: 'transform 0.5s ease-out'
              }}
            >
              <img
                src={image}
                alt={siteConfig('TITLE', null, config)}
                title={siteConfig('TITLE', null, config)}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'center',
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
          ))}
          
          {/* 半透明漸變覆蓋層 - 確保文字清晰可見 */}
          <div 
            className="absolute inset-0 z-10"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,98,155,0.7), rgba(0,98,155,0.8))'
            }}
          ></div>
          
          {/* 將Hero内容疊加在輪播圖片上 */}
          <div 
            className="absolute inset-0 z-20 flex items-center justify-center text-center"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
              opacity: Math.max(0, 1 - scrollY * 0.002)
            }}
          >
            <div className="container px-4 max-w-screen-lg mx-auto">
              <div className="animate-fadeIn">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight transition-all duration-300 ease-in-out transform hover:scale-[1.01]">
                  {siteConfig('STARTER_HERO_TITLE_1', '專業塑膠原料供應商', config)}
                </h1>
                <p className="text-xl md:text-2xl text-white opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
                  {siteConfig('STARTER_HERO_TITLE_2', '30年產業經驗，值得信賴的合作夥伴', config)}
                </p>
                <div className="flex flex-wrap gap-6 justify-center">
                  <Link
                    href={siteConfig('STARTER_HERO_BUTTON_1_URL', '/products', config)}
                    className="rounded-md bg-white px-8 py-4 font-medium text-primary hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                  >
                    <span className="flex items-center">
                      <span>{siteConfig('STARTER_HERO_BUTTON_1_TEXT', '產品目錄', config)}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </Link>
                  <Link
                    href={siteConfig('STARTER_HERO_BUTTON_2_URL', '/contact', config)}
                    className="rounded-md border-2 border-white bg-transparent px-8 py-4 font-medium text-white hover:bg-white/20 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                  >
                    <span className="flex items-center">
                      <span>{siteConfig('STARTER_HERO_BUTTON_2_TEXT', '聯繫我們', config)}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* 輪播導航按鈕 - 只在多張圖片時顯示 */}
          {images.length > 1 && (
            <>
              <button 
                onClick={goToPrevSlide}
                className='absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/20 dark:bg-dark-2/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/40 dark:hover:bg-dark-2/40 transition-all z-20 hover:scale-110'
                aria-label="上一張"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={goToNextSlide}
                className='absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/20 dark:bg-dark-2/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/40 dark:hover:bg-dark-2/40 transition-all z-20 hover:scale-110'
                aria-label="下一張"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
          
          {/* 輪播指示器 - 只在多張圖片時顯示 */}
          {images.length > 1 && (
            <div className='absolute bottom-12 left-1/2 transform -translate-x-1/2 flex justify-center z-20'>
              {images.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full mx-2 transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-white w-8 scale-110' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`前往第 ${index + 1} 張圖片`}
                />
              ))}
            </div>
          )}
          
          {/* 添加滾動按鈕 - 使用修復版的滾動按鈕 */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
            <FixedScrollButton 
              targetId="about-section" 
              color="white" 
              pulseEffect={true}
            />
          </div>
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
    </>
  )
}
