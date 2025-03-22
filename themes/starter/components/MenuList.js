import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'
import { MenuItem } from './MenuItem'

/**
 * 響應式 折疊菜單
 */
export const MenuList = props => {
  const { customNav, customMenu } = props
  const { locale } = useGlobal()
  const router = useRouter()
  
  // 修改：根據當前路由判斷是否為首頁
  const isHomePage = router.pathname === '/'
  const [navBar, setNavBar] = useState(!isHomePage) // 如果不是首頁，初始為 true
  
  // 添加菜單展開狀態
  const [isOpen, setIsOpen] = useState(false)
  const [lockScreen, setLockScreen] = useState(false)
  
  const [showMenu, setShowMenu] = useState(false)
  const [activeMenuIndex, setActiveMenuIndex] = useState(null)
  const navRef = useRef(null)

  let links = [
    {
      icon: 'fas fa-archive',
      name: locale.NAV.ARCHIVE,
      href: '/archive',
      show: siteConfig('HEO_MENU_ARCHIVE')
    },
    {
      icon: 'fas fa-search',
      name: locale.NAV.SEARCH,
      href: '/search',
      show: siteConfig('HEO_MENU_SEARCH')
    },
    {
      icon: 'fas fa-folder',
      name: locale.COMMON.CATEGORY,
      href: '/category',
      show: siteConfig('HEO_MENU_CATEGORY')
    },
    {
      icon: 'fas fa-tag',
      name: locale.COMMON.TAGS,
      href: '/tag',
      show: siteConfig('HEO_MENU_TAG')
    }
  ]

  if (customNav) {
    links = customNav.concat(links)
  }

  if (siteConfig('CUSTOM_MENU', BLOG.CUSTOM_MENU)) {
    links = customMenu
  }

  if (!links || links.length === 0) {
    return null
  }

  // 處理菜單項被打開的回調
  const handleMenuOpen = (index) => {
    setActiveMenuIndex(index)
  }

  // 監聽點擊事件，關閉菜單
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShowMenu(false)
        setLockScreen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // 路由變化時關閉菜單
  useEffect(() => {
    setShowMenu(false)
    setLockScreen(false)
    setActiveMenuIndex(null)
    
    // 修改：當路由變化時，根據是否為首頁設置navBar狀態
    const isHomePage = router.pathname === '/'
    setNavBar(!isHomePage || window.scrollY > 100)
  }, [router.asPath, router.pathname])

  // 滾動事件和動畫效果
  useEffect(() => {
    // 監聽滾動事件
    const changeHeight = () => {
      // 修改：如果是首頁，則根據滾動位置變更顏色；如果不是首頁，始終為 true (黑色)
      if (!isHomePage || window.scrollY > 100) {
        setNavBar(true)
      } else {
        setNavBar(false)
      }
    }
    
    // 初始設置，根據當前滾動位置和頁面設定導航欄狀態
    changeHeight()
    
    window.addEventListener('scroll', changeHeight)
    
    // 加載時顯示菜單動畫效果
    setTimeout(() => {
      setIsOpen(true)
    }, 200)
    
    return () => {
      window.removeEventListener('scroll', changeHeight)
    }
  }, [isHomePage])

  return (
    <div ref={navRef}>
      {/* 移動端選單按鈕 */}
      <div className='relative flex justify-between lg:hidden'>
        <div></div>
        <div>
          <button
            onClick={() => setLockScreen(!lockScreen)}
            className='block absolute right-0 top-1/2 translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2'>
            <span
              className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                lockScreen ? ' top-[7px] rotate-45' : ' '
              }`}
            />
            <span
              className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                lockScreen ? 'opacity-0 ' : ' '
              }`}
            />
            <span
              className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                lockScreen ? ' top-[-8px] -rotate-45' : ' '
              }`}
            />
          </button>
        </div>
      </div>

      {/* 電腦版選單 */}
      <nav className={`absolute right-0 z-10 w-[250px] lg:static lg:block lg:w-full lg:max-w-full ${lockScreen ? 'block ' : 'hidden'}`}>
        <ul className='block lg:flex'>
          {links && links?.map((link, index) => {
            // 將菜單索引和navBar狀態傳遞給MenuItem
            return <MenuItem 
              key={index} 
              link={link} 
              index={index} 
              isOpen={isOpen} 
              onMenuOpen={() => handleMenuOpen(index)} 
              isAnyMenuOpen={activeMenuIndex !== null && activeMenuIndex !== index}
              navBar={navBar}
            />
          })}
        </ul>
      </nav>
    </div>
  )
}
