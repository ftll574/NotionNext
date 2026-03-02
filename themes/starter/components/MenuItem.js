import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useRef, useEffect } from 'react'

/**
 * 菜單鏈接
 * @param {*} param0
 * @returns
 */
export const MenuItem = ({ link, index, isOpen, onMenuOpen, isAnyMenuOpen, navBar, isMobile }) => {
  const hasSubMenu = link?.subMenus?.length > 0
  const router = useRouter()
  const menuRef = useRef(null)

  // 管理菜單的展開狀態
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [childMenuOpenStates, setChildMenuOpenStates] = useState({})

  // 計算動畫延遲時間，每個菜單項依序延遲出現
  const animationDelay = `${index * 0.1}s`;

  // 切換子菜單狀態
  const toggleSubMenu = () => {
    const newState = !isSubMenuOpen
    setIsSubMenuOpen(newState)

    // 通知父組件有菜單被打開
    if (newState && onMenuOpen) {
      onMenuOpen()
    }
  }

  const toggleChildMenu = (subMenuIndex, e) => {
    e.preventDefault()
    e.stopPropagation()
    setChildMenuOpenStates(prev => ({
      ...prev,
      [subMenuIndex]: !prev[subMenuIndex]
    }))
  }

  // 監聽點擊事件，關閉菜單
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsSubMenuOpen(false)
        setChildMenuOpenStates({})
      }
    }

    if (isSubMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isSubMenuOpen])

  // 當其他菜單打開時，關閉此菜單
  useEffect(() => {
    if (isAnyMenuOpen) {
      setIsSubMenuOpen(false)
      setChildMenuOpenStates({})
    }
  }, [isAnyMenuOpen])

  // 路由變化時關閉所有菜單
  useEffect(() => {
    setIsSubMenuOpen(false)
    setChildMenuOpenStates({})
  }, [router.asPath])

  // 決定文本顏色
  const getTextColorClass = () => {
    if (isMobile) {
      // 手機模式下，統一使用白色
      return 'text-white'
    } else if (navBar) {
      // 非首頁或滾動後的導航欄
      return 'text-black dark:text-white'
    } else {
      // 首頁頂部的透明導航欄
      return 'text-white group-hover:text-primary dark:text-white'
    }
  }

  return (
    <>
      {/* 普通 MenuItem */}
      {!hasSubMenu && link && (
        <li className={`relative group ${isMobile ? 'py-2 border-b border-gray-700/50' : ''}`}>
          <Link
            href={link.href}
            target={link.external ? '_blank' : '_self'}
            rel={link.external ? 'noopener noreferrer' : ''}
            className={`flex items-center py-2 text-base font-medium transition-all duration-300 
              ${router.pathname === link.href ? 'text-primary' : ''}
              ${getTextColorClass()}
              ${isOpen ? 'scale-animation-start' : 'scale-animation-init'}`}
            style={{ animationDelay: animationDelay }}
          >
            <span className="mr-3 flex items-center justify-center w-6">
              {link?.icon && <i className={`${link.icon} text-lg ${isMobile ? 'text-white' : ''}`} />}
            </span>
            {link.name}
          </Link>
        </li>
      )}

      {/* 帶子菜單的 MenuItem */}
      {hasSubMenu && (
        <li className={`relative group ${isMobile ? 'py-2 border-b border-gray-700/50' : ''}`} ref={menuRef}>
          <button
            onClick={toggleSubMenu}
            className={`flex w-full items-center justify-between py-2 text-base font-medium transition-all duration-300
              ${router.pathname === link.href ? 'text-primary' : ''}
              ${getTextColorClass()}
              ${isOpen ? 'scale-animation-start' : 'scale-animation-init'}`}
            style={{ animationDelay: animationDelay }}
          >
            <span className="flex items-center">
              <span className="mr-3 flex items-center justify-center w-6">
                {link?.icon && <i className={`${link.icon} text-lg ${isMobile ? 'text-white' : ''}`} />}
              </span>
              {link.name}
            </span>
            <span className="ml-1 transition-transform duration-200">
              <svg width="16" height="16" viewBox="0 0 24 24" className={`fill-none stroke-current ${isMobile ? 'text-white' : ''} ${isSubMenuOpen ? 'rotate-180' : ''}`}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </span>
          </button>

          {/* 二级菜单 - 優化手機版佈局 */}
          {isSubMenuOpen && (
            <div className={`
              ${isMobile
                ? 'mt-2 pl-6 space-y-1'
                : 'lg:absolute lg:left-0 lg:top-full lg:w-[220px] lg:rounded-md lg:bg-white lg:px-2 lg:py-3 lg:shadow-lg lg:dark:bg-dark'
              }
            `}>
              <ul className="lg:mt-0">
                {link.subMenus.map((subMenu, subMenuIndex) => {
                  // 檢查是否有三級菜單
                  const hasChildMenu = subMenu.childMenus && subMenu.childMenus.length > 0

                  // 判斷是否為第一項或最後一項，加上對應的圓角
                  const isFirstItem = subMenuIndex === 0;
                  const isLastItem = subMenuIndex === link.subMenus.length - 1;
                  const roundedClass = isMobile ? '' : `${isFirstItem ? 'rounded-t-md' : ''} ${isLastItem ? 'rounded-b-md' : ''}`;

                  return (
                    <li key={subMenuIndex} className={`relative ${isMobile ? 'py-1.5' : ''}`}>
                      {!hasChildMenu ? (
                        <Link
                          href={subMenu.href}
                          target={subMenu.external ? '_blank' : '_self'}
                          rel={subMenu.external ? 'noopener noreferrer' : ''}
                          className={`w-full flex items-center justify-between py-1.5 text-sm hover:text-primary ${roundedClass}
                            ${isMobile ? 'text-white/90' : 'text-dark dark:text-white lg:px-3'}
                            ${router.pathname === subMenu.href ? 'text-primary' : ''}`}>
                          <span className='inline-flex items-center'>
                            {subMenu.icon && <i className={`${subMenu.icon} mr-2 w-5 text-center ${isMobile ? 'text-white/90' : ''}`} />}
                            {subMenu.title}
                          </span>
                          {subMenu.childMenus && subMenu.childMenus.length > 0 && (
                            <span className="ml-1 inline-block">{'>'}</span>
                          )}
                        </Link>
                      ) : (
                        // 有三級菜單的二級菜單項
                        <div className={`relative ${isMobile ? 'group/mobile' : 'group/child'}`}>
                          <button
                            onClick={(e) => toggleChildMenu(subMenuIndex, e)}
                            className={`w-full text-left py-1.5 text-sm hover:text-primary flex justify-between items-center ${roundedClass}
                              ${isMobile ? 'text-white/90' : 'text-dark px-3 dark:text-white'}`}>
                            <span className='flex items-center'>
                              {subMenu.icon && <i className={`${subMenu.icon} mr-2 w-5 text-center ${isMobile ? 'text-white/90' : ''}`} />}
                              {subMenu.title}
                            </span>
                            <svg
                              className={`w-4 h-4 transform ${isMobile ? 'text-white/90' : ''}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobile ? (childMenuOpenStates[subMenuIndex] ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7") : "M9 5l7 7-7 7"}></path>
                            </svg>
                          </button>

                          {/* 三級菜單 - 優化手機版顯示 */}
                          <div
                            className={`
                              ${isMobile
                                ? `mt-1 pl-6 space-y-1 ${childMenuOpenStates[subMenuIndex] ? 'block' : 'hidden'}`
                                : `absolute left-full top-0 w-[220px] bg-white dark:bg-dark-2 rounded-sm shadow-lg p-2 -ml-1 z-50
                                   ${childMenuOpenStates[subMenuIndex] ? 'block' : 'hidden'} 
                                   lg:hidden lg:group-hover/child:block`
                              }
                            `}>
                            {subMenu.childMenus.map((childLink, childIndex) => (
                              <Link
                                key={childIndex}
                                href={childLink.href}
                                target={childLink.external ? '_blank' : '_self'}
                                rel={childLink.external ? 'noopener noreferrer' : ''}
                                className={`flex items-center py-1.5 text-sm hover:text-primary
                                  ${isMobile ? 'text-white/80' : 'px-3 text-body-color dark:text-dark-6'}
                                  ${router.pathname === childLink.href ? 'text-primary' : ''}`}>
                                <span className='flex items-center'>
                                  {childLink.icon && <i className={`${childLink.icon} mr-2 w-5 text-center ${isMobile ? 'text-white/80' : ''}`} />}
                                  {childLink.title}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </li>
      )}
    </>
  )
}
