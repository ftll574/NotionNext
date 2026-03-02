import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'
import { MenuItem } from './MenuItem'

/**
 * 响应式 折叠菜单
 */
export const MenuList = props => {
  const { customNav, customMenu } = props
  const { locale } = useGlobal()
  const [navBar, setNavBar] = useState(false)
  
  // 添加菜單展開狀態
  const [isOpen, setIsOpen] = useState(false)
  // 修正：定義 lockScreen 狀態
  const [lockScreen, setLockScreen] = useState(false)
  
  const [showMenu, setShowMenu] = useState(false) // 控制菜單展開/收起狀態
  const [activeMenuIndex, setActiveMenuIndex] = useState(null) // 跟踪當前打開的菜單
  const navRef = useRef(null)
  const router = useRouter()

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

  // 如果開啟自定義菜單，則覆蓋Page生成的菜單
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
  }, [router.asPath])

  // 滾動事件和動畫效果
  useEffect(() => {
    // 監聽滾動事件
    const changeHeight = () => {
      if (window.scrollY > 100) {
        setNavBar(true)
      } else {
        setNavBar(false)
      }
    }
    window.addEventListener('scroll', changeHeight)
    
    // 加載時顯示菜單動畫效果
    setTimeout(() => {
      setIsOpen(true)
    }, 200)
    
    return () => {
      window.removeEventListener('scroll', changeHeight)
    }
  }, [])

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
