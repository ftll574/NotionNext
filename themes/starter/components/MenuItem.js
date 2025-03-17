import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

/**
 * 菜单链接
 * @param {*} param0
 * @returns
 */
export const MenuItem = ({ link }) => {
  const hasSubMenu = link?.subMenus?.length > 0
  const router = useRouter()

  // 管理菜单的展开状态
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [childMenuOpenStates, setChildMenuOpenStates] = useState({})

  const toggleSubMenu = () => {
    setIsSubMenuOpen(prev => !prev)
  }

  const toggleChildMenu = (subMenuIndex, e) => {
    e.preventDefault()
    e.stopPropagation()
    setChildMenuOpenStates(prev => ({
      ...prev,
      [subMenuIndex]: !prev[subMenuIndex]
    }))
  }

  return (
    <>
      {/* 普通 MenuItem */}
      {!hasSubMenu && (
        <li className='group relative whitespace-nowrap'>
          <Link
            href={link?.href}
            target={link?.target}
            className={`ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
              router.route === '/'
                ? 'lg:text-white lg:group-hover:text-white'
                : ''
            } lg:group-hover:opacity-70`}>
            {link?.icon && <i className={link.icon + ' mr-2 my-auto'} />}
            {link?.name}
          </Link>
        </li>
      )}

      {/* 有子菜单的 MenuItem */}
      {hasSubMenu && (
        <li className='submenu-item group relative whitespace-nowrap'>
          <button
            onClick={toggleSubMenu}
            className={`cursor-pointer relative px-8 flex items-center justify-between py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-8 lg:mr-0 lg:inline-flex lg:py-6 lg:pl-0 lg:pr-4 ${
              router.route === '/'
                ? 'lg:text-white lg:group-hover:text-white'
                : ''
            } lg:group-hover:opacity-70 xl:ml-10`}>
            <span>
              {link?.icon && <i className={link.icon + ' mr-2 my-auto'} />}
              {link?.name}
            </span>

            <svg
              className='ml-2 fill-current'
              width='16'
              height='20'
              viewBox='0 0 16 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M7.99999 14.9C7.84999 14.9 7.72499 14.85 7.59999 14.75L1.84999 9.10005C1.62499 8.87505 1.62499 8.52505 1.84999 8.30005C2.07499 8.07505 2.42499 8.07505 2.64999 8.30005L7.99999 13.525L13.35 8.25005C13.575 8.02505 13.925 8.02505 14.15 8.25005C14.375 8.47505 14.375 8.82505 14.15 9.05005L8.39999 14.7C8.27499 14.825 8.14999 14.9 7.99999 14.9Z' />
            </svg>
          </button>

          {/* 二级菜单 */}
          <div
            className={`submenu dark:border-gray-600 absolute left-full top-0 w-[250px] rounded-sm bg-white p-4 transition-all duration-300 dark:bg-dark-2 lg:absolute lg:shadow-lg ${
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
                      href={sLink.href}
                      target={sLink.target || link?.target}
                      className='block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary'>
                      <span className='text-md ml-2 whitespace-nowrap'>
                        {sLink.icon && <i className={sLink.icon + ' mr-2 my-auto'} />}
                        {sLink.title}
                      </span>
                    </Link>
                  ) : (
                    // 有三級菜單的二級菜單項
                    <div className="relative">
                      <button
                        onClick={(e) => toggleChildMenu(index, e)}
                        className='w-full text-left rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary flex justify-between items-center'>
                        <span className='text-md ml-2 whitespace-nowrap'>
                          {sLink.icon && <i className={sLink.icon + ' mr-2 my-auto'} />}
                          {sLink.title}
                        </span>
                        <svg
                          className={`w-4 h-4 transform transition-transform ${childMenuOpenStates[index] ? 'rotate-90' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </button>

                      {/* 三級菜單 */}
                      <div
                        className={`pl-4 ml-2 mt-1 border-l border-gray-200 dark:border-gray-700 transition-all duration-300 ${
                          childMenuOpenStates[index] ? 'block' : 'hidden'
                        }`}>
                        {sLink.childMenus.map((childLink, childIndex) => (
                          <Link
                            key={childIndex}
                            href={childLink.href}
                            target={childLink.target || sLink.target || link?.target}
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
