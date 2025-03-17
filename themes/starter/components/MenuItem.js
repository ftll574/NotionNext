import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

/**
 * 菜單鏈接
 * @param {*} param0
 * @returns
 */
export const MenuItem = ({ link }) => {
  const hasSubMenu = link?.subMenus?.length > 0
  const router = useRouter()

  // 管理菜單的展開狀態
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
            {link?.icon && <span className='mr-2'>{link.icon}</span>}
            {link?.name}
          </Link>
        </li>
      )}

      {/* 帶子菜單的 MenuItem */}
      {hasSubMenu && (
        <li className='submenu-item group relative whitespace-nowrap'>
          <button
            onClick={toggleSubMenu}
            className={`ud-menu-scroll mx-8 flex items-center justify-between py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
              router.route === '/'
                ? 'lg:text-white lg:group-hover:text-white'
                : ''
            } lg:group-hover:opacity-70`}>
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

          {/* 下拉子菜單 */}
          <div
            className={`submenu ${
              isSubMenuOpen ? 'block' : 'hidden'
            } relative rounded-md bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark-2 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full`}>
            <ul className='py-2 lg:py-[14px]'>
              {link?.subMenus?.map((subMenu, subMenuIndex) => (
                <li key={subMenuIndex} className='relative'>
                  {!subMenu?.subMenus?.length ? (
                    <Link
                      href={subMenu?.href}
                      target={subMenu?.target}
                      className='flex px-8 py-2 text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-white lg:px-3'>
                      {subMenu?.icon && <span className='mr-2'>{subMenu.icon}</span>}
                      {subMenu?.name}
                    </Link>
                  ) : (
                    <div className='relative'>
                      <button
                        onClick={(e) => toggleChildMenu(subMenuIndex, e)}
                        className='flex w-full items-center justify-between px-8 py-2 text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-white lg:px-3'>
                        {subMenu?.icon && <span className='mr-2'>{subMenu.icon}</span>}
                        {subMenu?.name}
                        <span className='pl-3'>
                          <svg width='15' height='14' viewBox='0 0 15 14' className='rotate-[-90deg]'>
                            <path
                              d='M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z'
                              fill='currentColor'
                            />
                          </svg>
                        </span>
                      </button>

                      {/* 第三級菜單 - 向右側展開 */}
                      <div
                        className={`child-menu ${
                          childMenuOpenStates[subMenuIndex] ? 'block' : 'hidden'
                        } absolute right-[-100%] top-0 z-10 min-w-[200px] rounded-md bg-white py-2 shadow-lg dark:bg-dark-2`}>
                        <ul className='py-1'>
                          {subMenu?.subMenus?.map((childMenu, childMenuIndex) => (
                            <li key={childMenuIndex}>
                              <Link
                                href={childMenu?.href}
                                target={childMenu?.target}
                                className='block px-4 py-1 text-sm text-body-color hover:bg-gray-50 hover:text-primary dark:text-dark-6 dark:hover:bg-dark-3 dark:hover:text-white'>
                                {childMenu?.icon && <span className='mr-2'>{childMenu.icon}</span>}
                                {childMenu?.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </li>
      )}
    </>
  )
}
