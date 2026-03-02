import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'
import { MenuItem } from './MenuItem'
import CONFIG from '../config'

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

  const [activeMenuIndex, setActiveMenuIndex] = useState(null)
  const navRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  let links = [
    {
      icon: 'fas fa-archive',
      name: locale.NAV.ARCHIVE,
      href: '/archive',
      show: siteConfig('STARTER_MENU_ARCHIVE', null, CONFIG)
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

  // 檢測是否為移動設備
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg 斷點是 1024px
    }

    checkIfMobile() // 初始檢查

    // 監聽窗口大小變化
    window.addEventListener('resize', checkIfMobile)

    return () => {
      window.removeEventListener('resize', checkIfMobile)
    }
  }, [])

  // 處理菜單項被打開的回調
  const handleMenuOpen = (index) => {
    setActiveMenuIndex(index)
  }

  // 監聽點擊事件，關閉菜單
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setLockScreen(false)
        setActiveMenuIndex(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // 路由變化時關閉菜單
  useEffect(() => {
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
    <div ref={navRef} className="menu-container">
      {/* 移動端選單按鈕 */}
      <div className='lg:hidden'>
        <button
          onClick={() => setLockScreen(!lockScreen)}
          className='rounded-lg px-3 py-[6px] ring-primary focus:ring-2'>
          <span
            className={`relative my-1.5 block h-0.5 w-[30px] ${isHomePage && !navBar ? 'bg-white' : 'bg-black dark:bg-white'} transition-all duration-300 ${lockScreen ? ' top-[7px] rotate-45' : ' '
              }`}
          />
          <span
            className={`relative my-1.5 block h-0.5 w-[30px] ${isHomePage && !navBar ? 'bg-white' : 'bg-black dark:bg-white'} transition-all duration-300 ${lockScreen ? 'opacity-0 ' : ' '
              }`}
          />
          <span
            className={`relative my-1.5 block h-0.5 w-[30px] ${isHomePage && !navBar ? 'bg-white' : 'bg-black dark:bg-white'} transition-all duration-300 ${lockScreen ? ' top-[-8px] -rotate-45' : ' '
              }`}
          />
        </button>
      </div>

      {/* 手機版選單 - 優化樣式 */}
      {isMobile && lockScreen && (
        <nav className="fixed left-0 top-[70px] z-50 h-[calc(100vh-70px)] w-full bg-dark/95 py-4 backdrop-blur-lg overflow-y-auto">
          <ul className="block px-6 py-2">
            {links && links?.map((link, index) => {
              return <MenuItem
                key={`mobile-${index}`}
                link={link}
                index={index}
                isOpen={true}
                onMenuOpen={() => handleMenuOpen(index)}
                isAnyMenuOpen={activeMenuIndex !== null && activeMenuIndex !== index}
                navBar={true}
                isMobile={true}
              />
            })}
          </ul>
        </nav>
      )}

      {/* 電腦版選單 - 永遠可見 */}
      <nav className="hidden lg:block lg:w-full lg:max-w-full desktop-menu">
        <ul className="flex">
          {links && links?.map((link, index) => {
            return <MenuItem
              key={`desktop-${index}`}
              link={link}
              index={index}
              isOpen={isOpen}
              onMenuOpen={() => handleMenuOpen(index)}
              isAnyMenuOpen={activeMenuIndex !== null && activeMenuIndex !== index}
              navBar={navBar}
              isMobile={false}
            />
          })}
        </ul>
      </nav>

      {/* 添加全局樣式 */}
      <style jsx global>{`
        /* 移動菜單整體樣式 */
        .menu-container nav {
          transition: all 0.3s ease;
        }
        
        /* 基本選單項樣式 */
        .desktop-menu .group ul li a,
        .desktop-menu .group ul li button {
          padding: 8px 16px;
          color: #333;
          border-radius: 4px;
          transition: all 0.3s ease;
          display: flex !important;
          flex-direction: row !important;
          align-items: center !important;
          justify-content: space-between !important;
          width: 100% !important;
          text-align: left;
          white-space: nowrap !important;
        }
        
        /* 深色模式 */
        .dark .desktop-menu .group ul li a,
        .dark .desktop-menu .group ul li button {
          color: #fff;
        }
        
        /* 懸停和活動狀態 */
        .desktop-menu .group ul li a:hover,
        .desktop-menu .group ul li button:hover,
        .desktop-menu .group ul li a.active {
          background-color: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }
        
        /* 子菜單容器 */
        .desktop-menu .group > div > div,
        .desktop-menu .group ul li div > div {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        /* 深色模式下子菜單容器 */
        .dark .desktop-menu .group > div > div,
        .dark .desktop-menu .group ul li div > div {
          background-color: #1f2937;
        }
        
        /* 移動端菜單樣式 */
        @media (max-width: 1023px) {
          nav ul li div > div {
            background-color: transparent !important;
            box-shadow: none !important;
          }
          
          nav ul li a, 
          nav ul li button {
            color: white !important;
            padding: 12px 0 !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
          }
          
          nav ul li a:hover, 
          nav ul li button:hover {
            background-color: rgba(255, 255, 255, 0.1) !important;
          }
        }
      `}</style>
    </div>
  )
}
