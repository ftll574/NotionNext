/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import FixedScrollButton from './FixedScrollButton'

/**
 * 首頁的關於模組
 */
export const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])
  
  return (
    <>
      {/* <!-- ====== About Section Start --> */}
      <section
        ref={sectionRef}
        id='about-section'
        className='bg-gray-1 pb-16 pt-24 dark:bg-dark lg:pb-24 lg:pt-32 relative overflow-hidden'>
        
        {/* 背景裝飾元素 */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary opacity-5 rounded-full"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary opacity-5 rounded-full"></div>
        </div>
        
        <div className='container mx-auto px-4 relative z-10'>
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className='-mx-4 flex flex-wrap items-center'>
              {/* 左側的文字說明板塊 */}
              <div className='w-full px-4 lg:w-1/2'>
                <div className='mb-12 max-w-[540px] lg:mb-0'>
                  <span className='mb-4 block text-lg font-semibold text-primary animated-underline inline-block'>
                    {siteConfig('STARTER_ABOUT_TITLE', '鑫葳團隊服務業界30年，專注塑膠原料行業')}
                  </span>
                  <h3 className='mb-6 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-4xl sm:leading-[1.2] lg:text-[40px] text-shadow'>
                    {siteConfig('STARTER_ABOUT_TEXT_1', '鑫葳團隊服務業界30年，專注塑膠原料行業')}
                  </h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: siteConfig('STARTER_ABOUT_TEXT', '鑫葳塑膠專注於高品質塑膠原料的供應與服務。<br/><br/>憑藉多年的行業經驗和穩定的供應鏈管理，我們為電子、汽車、家電等行業提供可靠的原材料支持，成為眾多製造企業的長期合作夥伴。')
                    }}
                    className='mb-10 text-lg leading-relaxed text-body-color dark:text-dark-6'></div>

                  <Link
                    href={siteConfig('STARTER_ABOUT_BUTTON_URL', '/about')}
                    className='inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-blue-dark px-8 py-4 text-center text-base font-medium text-white hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300'>
                    <span className="flex items-center">
                      <span>{siteConfig('STARTER_ABOUT_BUTTON_TEXT', '了解更多')}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
              
              {/* 右側的圖片區域 */}
              <div className='w-full px-4 lg:w-1/2'>
                <div className='relative mx-auto'>
                  <div className="relative">
                    <img
                      src={siteConfig('STARTER_ABOUT_IMAGE_1')}
                      alt="關於我們"
                      className="rounded-tl-[80px] rounded-br-[80px] shadow-xl hover-scale-img max-w-full h-auto"
                    />
                    <div className="absolute inset-0 rounded-tl-[80px] rounded-br-[80px] shadow-inner bg-gradient-to-tr from-primary/10 to-transparent"></div>
                  </div>
                  
                  <div className="relative">
                    <img
                      src={siteConfig('STARTER_ABOUT_IMAGE_2')}
                      alt="關於我們"
                      className="absolute -bottom-16 -right-16 z-5 rounded-tl-[80px] rounded-br-[80px] shadow-xl hover-scale-img max-w-[65%] h-auto"
                    />
                    <div className="absolute -bottom-16 -right-16 z-6 inset-0 rounded-tl-[80px] rounded-br-[80px] shadow-inner bg-gradient-to-bl from-secondary/10 to-transparent"></div>
                  </div>
                  
                  {/* 統計數字卡片 */}
                  <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 glassmorphism p-6 rounded-lg shadow-xl z-10 transition-all duration-500 hover:shadow-2xl hover:scale-105">
                    <h3 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-dark bg-clip-text text-transparent">{siteConfig('STARTER_ABOUT_TIPS_1', '1000+')}</h3>
                    <p className="text-body-color mt-1">{siteConfig('STARTER_ABOUT_TIPS_2', '長期客戶')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 滾動按鈕 - 絕對定位在底部中間 */}
        <div className="absolute bottom-4 left-0 right-0 w-full flex justify-center pb-2 z-50">
          <FixedScrollButton targetId="features-section" color="primary" pulseEffect={true} />
        </div>
      </section>
      {/* <!-- ====== About Section End --> */}
    </>
  )
}
