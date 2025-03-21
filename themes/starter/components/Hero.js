/* eslint-disable @next/next/no-img-element */
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import Link from 'next/link'
import { useEffect, useState } from 'react'

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
      {/* <!-- ====== Hero Section Start --> */}
      <div
        id='home'
        className='relative overflow-hidden bg-gradient-to-b from-primary to-blue-dark pt-[120px] md:pt-[130px] lg:pt-[160px]'>
        {/* 添加背景效果 */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <path fill="#FFFFFF" d="M42.7,-68.5C55.9,-61.9,67.4,-50.6,75.6,-36.9C83.8,-23.1,88.6,-7,86.2,8.4C83.8,23.7,74.2,38.2,62.5,49.1C50.8,60.1,37,67.5,22.2,71.9C7.5,76.4,-8.1,77.9,-23.1,74.3C-38.1,70.7,-52.5,62,-63.2,49.7C-73.8,37.4,-80.8,21.4,-82.8,4.6C-84.9,-12.1,-81.9,-29.7,-72.2,-42.8C-62.5,-55.9,-46,-64.5,-30.7,-70C-15.5,-75.4,-1.4,-77.7,12.9,-77.1C27.1,-76.5,42.4,-72.9,55.4,-65.5C68.4,-58.2,76.5,-46.8,77.3,-34.6C78,-22.4,71.5,-9.4,66.3,1.5C61.1,12.3,57.3,21,51,27.1"></path>
          </svg>
        </div>
        
        <div className="container relative z-10">
          <div className='-mx-4 flex flex-wrap items-center'>
            <div className='w-full px-4'>
              <div
                className='hero-content wow fadeInUp mx-auto max-w-[780px] text-center'
                data-wow-delay='.2s'>
                {/* 主标题 */}
                <h1 className='mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]'>
                  {siteConfig('STARTER_HERO_TITLE_1', null, config)}
                </h1>
                {/* 次标题 */}
                <p className='mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]'>
                  {siteConfig('STARTER_HERO_TITLE_2', null, config)}
                </p>
                {/* 按钮组 */}
                <ul className='mb-10 flex flex-wrap items-center justify-center gap-5'>
                  {siteConfig('STARTER_HERO_BUTTON_1_TEXT', null, config) && (
                    <li>
                      <Link
                        href={siteConfig('STARTER_HERO_BUTTON_1_URL', '')}
                        className='inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color'>
                        {siteConfig('STARTER_HERO_BUTTON_1_TEXT', null, config)}
                      </Link>
                    </li>
                  )}
                  {siteConfig('STARTER_HERO_BUTTON_2_TEXT', null, config) && (
                    <li>
                      <Link
                        href={siteConfig(
                          'STARTER_HERO_BUTTON_2_URL',
                          null,
                          config
                        )}
                        target='_blank'
                        className='flex items-center rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark'
                        rel='noreferrer'>
                        {siteConfig(
                          'STARTER_HERO_BUTTON_2_ICON',
                          null,
                          config
                        ) && (
                          <img
                            className='mr-4'
                            src={siteConfig(
                              'STARTER_HERO_BUTTON_2_ICON',
                              null,
                              config
                            )}
                          />
                        )}
                        {siteConfig('STARTER_HERO_BUTTON_2_TEXT', null, config)}
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====== Hero Section End --> */}
      
      {/* 全版輪播圖片 */}
      {images.length > 0 && (
        <div className="relative w-full overflow-hidden" style={{ height: '70vh' }}>
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
                    index === currentImageIndex ? 'bg-primary' : 'bg-white/70'
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
    </>
  )
}
