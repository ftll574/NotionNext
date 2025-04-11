/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'
import { useEffect, useState, useCallback } from 'react'

/**
 * 站点图标
 * @returns
 */
export const Logo = props => {
  const { white, className = '' } = props
  const router = useRouter()
  const { isDarkMode } = useGlobal()
  
  // 初始化狀態
  const logoWhite = siteConfig('STARTER_LOGO_WHITE')
  const logoNormal = siteConfig('STARTER_LOGO')
  const [logo, setLogo] = useState(white ? logoWhite : logoNormal)
  const [logoTextColor, setLogoTextColor] = useState(white ? 'text-white' : 'text-black')
  const [isScrolled, setIsScrolled] = useState(false)

  // 處理滾動事件的回調函數，使用useCallback確保它的引用穩定
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY
    const homePageNavBar = router.route === '/' && scrollY < 50
    
    setIsScrolled(scrollY > 50)
    
    if (white || isDarkMode || homePageNavBar) {
      setLogo(logoWhite)
      setLogoTextColor('text-white')
    } else {
      setLogo(logoNormal)
      setLogoTextColor('text-black')
    }
  }, [white, isDarkMode, router.route, logoWhite, logoNormal])

  // 設置滾動監聽器
  useEffect(() => {
    // 初始執行一次
    handleScroll()
    
    // 添加節流處理的滾動監聽
    let timeoutId = null
    const throttledScrollHandler = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          handleScroll()
          timeoutId = null
        }, 150) // 150ms的節流
      }
    }
    
    window.addEventListener('scroll', throttledScrollHandler)
    
    // 清理函數
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [handleScroll])

  return (
    <div className={`w-60 max-w-full ${className}`}>
      <div className={`navbar-logo flex items-center w-full cursor-pointer py-2 ${isScrolled ? 'scale-90' : 'scale-100'} transition-all duration-300`}>
        {/* Logo 圖片 */}
        {logo && (
          <LazyImage
            priority
            onClick={() => router.push('/')}
            src={logo}
            alt={siteConfig('TITLE')}
            title={siteConfig('TITLE')}
            className='header-logo mr-2 h-8 sm:h-10 hover:opacity-80 transition-opacity duration-300'
          />
        )}
        
        {/* Logo文字 */}
        <span
          onClick={() => router.push('/')}
          className={`${logoTextColor} logo dark:text-white text-xl sm:text-2xl font-bold header-logo-text whitespace-nowrap transition-all duration-300 hover:opacity-80`}>
          {siteConfig('TITLE')}
        </span>
      </div>
    </div>
  )
}
