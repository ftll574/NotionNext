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
      {!hasSubMenu && (
        <li 
          className="group relative"
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
            transition: `opacity 0.5s ease-out ${animationDelay}, transform 0.5s ease-out ${animationDelay}`
          }}
        >
          <Link
            href={link?.href || '#'}
            target={link?.href && link.href.indexOf('http') === 0 ? '_blank' : '_self'}
            className={`ud-menu-scroll mx-8 flex py-2 text-base font-medium ${
              navBar ? 'text-primary' : router.route === '/' ? 'lg:text-white lg:group-hover:text-white' : 'text-dark dark:text-white'
            } group-hover:text-primary lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:group-hover:opacity-70`}>
            {link?.icon && <span className='mr-2'>{link.icon}</span>}
            {link?.name}
          </Link>
        </li>
      )}

      {/* 帶子菜單的 MenuItem */}
      {hasSubMenu && (
        <li 
          ref={menuRef}
          className="group relative"
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
            transition: `opacity 0.5s ease-out ${animationDelay}, transform 0.5s ease-out ${animationDelay}`
          }}
        >
          <button
            onClick={toggleSubMenu}
            className={`ud-menu-scroll mx-8 flex items-center justify-between py-2 text-base font-medium ${
              navBar ? 'text-primary' : router.route === '/' ? 'lg:text-white lg:group-hover:text-white' : 'text-dark dark:text-white'
            } group-hover:text-primary lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:group-hover:opacity-70`}>
            {link?.icon && <span className='mr-2'>{link.icon}</span>}
            {link?.name}
            <span className='pl-3'>
              <svg width='15' height='14' viewBox='0 0 15 14'>
                <path
                  d='M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z'
                  fill='currentColor'
                />
              </svg>
            </span>
          </button>

          {/* 二级菜单 */}
          <div
            className={`submenu dark:border-gray-600 relative left-0 top-full w-[250px] rounded-sm bg-white p-4 transition-all duration-300 dark:bg-dark-2 lg:absolute lg:shadow-lg ${
              isSubMenuOpen
                ? 'block opacity-100 visible'
                : 'hidden opacity-0 invisible'
            }`}>
            {link.subMenus.map((sLink, index) => {
              // 檢查是否有三級菜單
              const hasChildMenu = sLink.childMenus && sLink.childMenus.length > 0

              return (
                <div key={index} className="mb-2">
                  {!hasChildMenu ? (
                    // 普通二級菜單項
                    <Link
                      href={sLink.href || '#'}
                      target={sLink.href && sLink.href.indexOf('http') === 0 ? '_blank' : '_self'}
                      className='block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary'>
                      <span className='text-md ml-2 whitespace-nowrap'>
                        {sLink.icon && <i className={sLink.icon + ' mr-2 my-auto'} />}
                        {sLink.title}
                      </span>
                    </Link>
                  ) : (
                    // 有三級菜單的二級菜單項 - 改為右側顯示
                    <div className="relative group/child">
                      <button
                        onClick={(e) => toggleChildMenu(index, e)}
                        className='w-full text-left rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary flex justify-between items-center'>
                        <span className='text-md ml-2 whitespace-nowrap'>
                          {sLink.icon && <i className={sLink.icon + ' mr-2 my-auto'} />}
                          {sLink.title}
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
                          childMenuOpenStates[index] ? 'block' : 'hidden'
                        } lg:hidden lg:group-hover/child:block`}>
                        {sLink.childMenus.map((childLink, childIndex) => (
                          <Link
                            key={childIndex}
                            href={childLink.href || '#'}
                            target={childLink.href && childLink.href.indexOf('http') === 0 ? '_blank' : '_self'}
                            className='block rounded px-4 py-[8px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary'>
                            <span className='text-md whitespace-nowrap'>
                              {childLink.icon && <i className={childLink.icon + ' mr-2 my-auto'} />}
                              {childLink.title}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </li>
      )}
    </>
  )
}
