import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useRef, useEffect } from 'react'

/**
 * 菜單鏈接
 * @param {*} param0
 * @returns
 */
export const MenuItem = ({ link, index, isOpen, onMenuOpen, isAnyMenuOpen, navBar }) => {
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

  return (
    <>
      {/* 普通 MenuItem */}
      {!hasSubMenu && link && (
        <li className="relative group">
          <Link
            href={link.href}
            target={link.external ? '_blank' : '_self'} 
            rel={link.external ? 'noopener noreferrer' : ''}
            className={`flex py-2 text-base font-bold transition-all duration-500 lg:mr-0 lg:inline-flex lg:py-6 lg:px-4 
              ${router.pathname === link.href ? 'text-primary dark:text-white' : ''}
              ${navBar 
                ? 'text-black dark:text-white'
                : 'text-white group-hover:text-primary dark:text-white'
              }
              ${isOpen ? 'scale-animation-start' : 'scale-animation-init'}`}
            style={{ animationDelay: animationDelay }}
          >
            <span className="mr-2">{link?.icon && <i className={link.icon} />}</span>
            {link.name}
          </Link>
        </li>
      )}

      {/* 帶子菜單的 MenuItem */}
      {hasSubMenu && (
        <li className="relative group" ref={menuRef}>
          <button
            onClick={toggleSubMenu}
            className={`flex w-full items-center justify-between py-2 text-base font-bold transition-all duration-500 lg:mr-0 lg:inline-flex lg:py-6 lg:px-4
              ${router.pathname === link.href ? 'text-primary dark:text-white' : ''}
              ${navBar 
                ? 'text-black dark:text-white'
                : 'text-white group-hover:text-primary dark:text-white'
              }
              ${isOpen ? 'scale-animation-start' : 'scale-animation-init'}`}
            style={{ animationDelay: animationDelay }}
          >
            <span className="mr-2 flex items-center">
              {link?.icon && <i className={`${link.icon} mr-2`} />}
              {link.name}
            </span>
            <span className="ml-1 transition-transform duration-200">
              <svg width="10" height="6" viewBox="0 0 10 6" className={`fill-current ${isSubMenuOpen ? 'rotate-180' : ''}`}>
                <path d="M0.292893 0.292893C0.683416 -0.097631 1.31658 -0.097631 1.7071 0.292893L4.99999 3.58579L8.29288 0.292893C8.6834 -0.097631 9.31657 -0.097631 9.70709 0.292893C10.0976 0.683417 10.0976 1.31658 9.70709 1.70711L5.7071 5.70711C5.31657 6.09763 4.68341 6.09763 4.29289 5.70711L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893Z" />
              </svg>
            </span>
          </button>

          {/* 二级菜单 */}
          {isSubMenuOpen && (
            <div className="lg:absolute lg:left-0 lg:top-full lg:w-[220px] lg:rounded-md lg:bg-white lg:px-2 lg:py-3 lg:shadow-lg lg:dark:bg-dark">
              <ul className="lg:mt-0">
                {link.subMenus.map((subMenu, subMenuIndex) => {
                  // 檢查是否有三級菜單
                  const hasChildMenu = subMenu.childMenus && subMenu.childMenus.length > 0

                  return (
                    <li key={subMenuIndex} className="relative">
                      {!hasChildMenu ? (
                        <Link
                          href={subMenu.href}
                          target={subMenu.external ? '_blank' : '_self'}
                          rel={subMenu.external ? 'noopener noreferrer' : ''}
                          className={`block py-2 text-sm text-dark hover:text-primary dark:text-white lg:px-3
                            ${router.pathname === subMenu.href ? 'text-primary dark:text-white' : ''}
                            ${navBar && 'lg:text-black lg:dark:text-black'}`}>
                          <span className='text-md ml-2 whitespace-nowrap'>
                            {subMenu.icon && <i className={subMenu.icon + ' mr-2 my-auto'} />}
                            {subMenu.title}
                          </span>
                        </Link>
                      ) : (
                        // 有三級菜單的二級菜單項 - 改為右側顯示
                        <div className="relative group/child">
                          <button
                            onClick={(e) => toggleChildMenu(subMenuIndex, e)}
                            className='w-full text-left rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary flex justify-between items-center'>
                            <span className='text-md ml-2 whitespace-nowrap'>
                              {subMenu.icon && <i className={subMenu.icon + ' mr-2 my-auto'} />}
                              {subMenu.title}
                            </span>
                            <svg
                              className="w-4 h-4 transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                          </button>

                          {/* 三級菜單 - 改為右側顯示 */}
                          <div
                            className={`absolute left-full top-0 w-[220px] bg-white dark:bg-dark-2 rounded-sm shadow-lg p-2 -ml-1 ${
                              childMenuOpenStates[subMenuIndex] ? 'block' : 'hidden'
                            } lg:hidden lg:group-hover/child:block`}>
                            {subMenu.childMenus.map((childLink, childIndex) => (
                              <Link
                                key={childIndex}
                                href={childLink.href}
                                target={childLink.external ? '_blank' : '_self'}
                                rel={childLink.external ? 'noopener noreferrer' : ''}
                                className={`block rounded px-4 py-[8px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary
                                  ${router.pathname === childLink.href ? 'text-primary dark:text-white' : ''}
                                  ${navBar && 'lg:text-black lg:dark:text-black'}`}>
                                <span className='text-md whitespace-nowrap'>
                                  {childLink.icon && <i className={childLink.icon + ' mr-2 my-auto'} />}
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
