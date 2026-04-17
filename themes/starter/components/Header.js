/* eslint-disable no-unreachable */
import DashboardButton from '@/components/ui/dashboard/DashboardButton'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import throttle from 'lodash.throttle'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState, useRef } from 'react'
import { Logo } from './Logo'
import { MenuList } from './MenuList'

/**
 * 顶部导航栏
 */
export const Header = props => {
  const router = useRouter()
  const { isDarkMode } = useGlobal()

  // 設置初始狀態
  const [buttonTextColor, setColor] = useState(
    router.route === '/' ? 'text-white' : ''
  )
  const [scrolled, setScrolled] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)

  // 使用useRef儲存可能變化的值
  const isDarkModeRef = useRef(isDarkMode)
  const routerRef = useRef(router)

  // 更新ref值
  useEffect(() => {
    isDarkModeRef.current = isDarkMode
    routerRef.current = router
  })

  // 滚动监听函数
  const throttleMs = 100
  const navBarScollListener = useCallback(
    throttle(() => {
      const ud_header = document.querySelector('.ud-header')
      const scrollY = window.scrollY

      // 更新滾動狀態
      setScrolled(scrollY > 50)

      // 控制台输出当前滚动位置和 sticky 值
      if (scrollY > 50) {
        ud_header?.classList?.add('sticky')
      } else {
        ud_header?.classList?.remove('sticky')
      }
    }, throttleMs),
    [] // 空依賴數組，確保只創建一次函數
  )

  // 初始設置和事件監聽
  useEffect(() => {
    // 設置文字顏色
    if (isDarkMode || router.route === '/') {
      setColor('text-white')
    } else {
      setColor('')
    }

    // 等待一小段時間後設置動畫完成標誌
    const animationTimer = setTimeout(() => {
      setAnimationComplete(true)
    }, 500)

    // 添加滾動事件監聽
    window.addEventListener('scroll', navBarScollListener)

    // 初始化檢查
    navBarScollListener()

    // 清理函數
    return () => {
      clearTimeout(animationTimer)
      window.removeEventListener('scroll', navBarScollListener)
    }
  }, [isDarkMode, router.route, navBarScollListener]) // 僅在這些值變化時重新執行

  // 導航欄背景顏色
  const navBarBg =
    router.route === '/' && !scrolled
      ? 'bg-transparent backdrop-blur-md'
      : 'bg-white dark:bg-gray-900'

  return (
    <>
      {/* <!-- ====== 改進的導航欄部分 Start --> */}
      <div
        className={`ud-header absolute left-0 top-0 z-50 w-full ${navBarBg} transition-all duration-300 ease-in-out ${animationComplete ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'}`}
      >
        <div
          className={`container mx-auto ${scrolled ? 'py-2' : 'py-4'} transition-all duration-300`}
        >
          <div className='relative flex items-center justify-between'>
            {/* Logo */}
            <div className='flex-shrink-0 w-auto'>
              <Logo {...props} className='transition-all duration-300' />
            </div>

            {/* 手機版：只顯示選單按鈕 */}
            <div className='flex items-center space-x-2'>
              {/* 僅顯示選單按鈕，移除深色模式按鈕 */}
              <MenuList {...props} />
            </div>

            {/* 僅在桌面版顯示的導航按鈕 */}
            {siteConfig('STARTER_NAV_BUTTON_ENABLE') && (
              <div className='hidden lg:flex items-center space-x-4'>
                {/* 第一個導航按鈕 */}
                {siteConfig('STARTER_NAV_BUTTON_1_TEXT') && (
                  <Link
                    href={siteConfig('STARTER_NAV_BUTTON_1_URL')}
                    className={`py-2 px-4 rounded-md border border-gray-300 ${
                      router.route === '/' && !scrolled
                        ? 'text-white hover:bg-white/20'
                        : 'text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                    } transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`}
                  >
                    {siteConfig('STARTER_NAV_BUTTON_1_TEXT')}
                  </Link>
                )}

                {/* 第二個導航按鈕 */}
                {siteConfig('STARTER_NAV_BUTTON_2_TEXT') && (
                  <Link
                    href={siteConfig('STARTER_NAV_BUTTON_2_URL')}
                    className={`py-2 px-4 rounded-md ${
                      router.route === '/' && !scrolled
                        ? 'bg-white text-primary hover:bg-gray-100'
                        : 'bg-primary text-white hover:bg-primary-700'
                    } transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`}
                  >
                    {siteConfig('STARTER_NAV_BUTTON_2_TEXT')}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <!-- ====== 導航欄部分 End --> */}
    </>
  )
}
