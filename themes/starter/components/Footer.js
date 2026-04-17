import { siteConfig } from '@/lib/config'
import SocialButton from '@/themes/fukasawa/components/SocialButton'
import { Logo } from './Logo'
import { SVGFooterCircleBG } from './svg/SVGFooterCircleBG'
import Link from 'next/link'
import React from 'react'

/* eslint-disable @next/next/no-img-element */
export const Footer = props => {
  const footerPostCount = siteConfig('STARTER_FOOTER_POST_COUNT', 2)
  const latestPosts = props?.latestPosts
    ? props?.latestPosts.slice(0, footerPostCount)
    : []
  const STARTER_FOOTER_LINK_GROUP = siteConfig('STARTER_FOOTER_LINK_GROUP', [])

  // 移除useEffect和useState，直接使用客戶端渲染判斷
  const isBrowser = typeof window !== 'undefined'

  return (
    <>
      {/* <!-- ====== Footer Section Start --> */}
      <footer
        className='wow fadeInUp relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]'
        data-wow-delay='.15s'
      >
        <div className='container'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12'>
              <div className='mb-10 w-full'>
                <a className='-mx-4 mb-6 inline-block max-w-[160px]'>
                  <Logo white={true} />
                </a>
                <p className='mb-8 max-w-[270px] text-base text-gray-300'>
                  {siteConfig('STARTER_FOOTER_SLOGAN')}
                </p>
                <div className='-mx-3 flex items-center'>
                  <div className='mx-3'>
                    <SocialButton />
                  </div>
                </div>
              </div>
            </div>

            {/* 中间三列菜单组 */}
            {STARTER_FOOTER_LINK_GROUP?.map((item, index) => {
              return (
                <div
                  key={index}
                  className='w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12'
                >
                  <div className='mb-10 w-full'>
                    <h4 className='mb-9 text-lg font-semibold text-white'>
                      {item.TITLE}
                    </h4>
                    <ul className='space-y-2'>
                      {item?.LINK_GROUP?.map((l, i) => {
                        // 檢查是否為產品目錄頁面帶有錨點的連結
                        const isProductAnchorLink =
                          l.URL.startsWith('/products#')

                        return (
                          <li key={i}>
                            {isProductAnchorLink ? (
                              // 產品目錄帶錨點的連結 - 使用原生a標籤
                              <a
                                href={l.URL}
                                className='inline-block text-base text-gray-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform'
                              >
                                {l.TITLE}
                              </a>
                            ) : (
                              // 普通連結
                              <Link
                                href={l.URL}
                                className='inline-block text-base text-gray-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform'
                              >
                                {l.TITLE}
                              </Link>
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              )
            })}

            {/* 页脚右侧最新博文 */}
            <div className='w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12'>
              <div className='mb-10 w-full'>
                <h4 className='mb-9 text-lg font-semibold text-white'>
                  {siteConfig('STARTER_FOOTER_BLOG_LATEST_TITLE')}
                </h4>
                {/* 展示两条最新博客文章 */}
                <div className='flex flex-col gap-8'>
                  {latestPosts?.map((item, index) => {
                    return (
                      <Link
                        key={index}
                        href={item?.href}
                        className='group flex items-center gap-[22px]'
                      >
                        {item.pageCoverThumbnail && (
                          <div className='overflow-hidden rounded w-20 h-12'>
                            <img
                              src={item.pageCoverThumbnail}
                              alt={item.title}
                            />
                          </div>
                        )}
                        <span className='line-clamp-2 max-w-[180px] text-base text-gray-300 group-hover:text-white'>
                          {item.title}
                        </span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部版权信息相关 */}

        <div className='mt-12 border-t border-[#8890A4] border-opacity-40 py-8 lg:mt-[60px]'>
          <div className='container'>
            <div className='-mx-4 flex flex-wrap'>
              <div className='w-full px-4 md:w-2/3 lg:w-1/2'>
                <div className='my-1'>
                  <div className='-mx-3 flex items-center justify-center md:justify-start'>
                    {siteConfig('STARTER_FOOTER_PRIVACY_POLICY_TEXT') && (
                      <Link
                        href={siteConfig(
                          'STARTER_FOOTER_PRIVACY_POLICY_URL',
                          ''
                        )}
                        className='px-3 text-base text-gray-300 hover:text-white hover:underline'
                      >
                        {siteConfig('STARTER_FOOTER_PRIVACY_POLICY_TEXT')}
                      </Link>
                    )}
                    {siteConfig('STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT') && (
                      <Link
                        href={siteConfig(
                          'STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL',
                          ''
                        )}
                        className='px-3 text-base text-gray-300 hover:text-white hover:underline'
                      >
                        {siteConfig('STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT')}
                      </Link>
                    )}
                    {siteConfig(
                      'STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT'
                    ) && (
                      <Link
                        href={siteConfig(
                          'STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL',
                          ''
                        )}
                        className='px-3 text-base text-gray-300 hover:text-white hover:underline'
                      >
                        {siteConfig(
                          'STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT'
                        )}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div className='w-full px-4 md:w-1/3 lg:w-1/2'>
                <div className='my-1 flex justify-center md:justify-end'>
                  <p className='text-base text-gray-300'>
                    Designed and Developed by
                    <a
                      href='https://github.com/tangly1024/NotionNext'
                      rel='nofollow noopner noreferrer'
                      target='_blank'
                      className='px-1 text-gray-100 hover:underline'
                    >
                      NotionNext {siteConfig('VERSION')}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer 背景（純裝飾） */}
        <div aria-hidden='true'>
          <span className='absolute left-0 top-0 z-[-1]'>
            <img
              src='/images/starter/footer/shape-1.svg'
              alt=''
              aria-hidden='true'
            />
          </span>

          <span className='absolute bottom-0 right-0 z-[-1]'>
            <img
              src='/images/starter/footer/shape-3.svg'
              alt=''
              aria-hidden='true'
            />
          </span>

          <span className='absolute right-0 top-0 z-[-1]'>
            <SVGFooterCircleBG />
          </span>
        </div>

        {/* 版權區塊 */}
        <div className='bg-primary/10 py-8'>
          <div className='container'>
            <div className='items-center justify-between text-center md:flex'>
              <p className='mb-6 text-base text-gray-300 md:mb-0'>
                {siteConfig('STARTER_FOOTER_COPYRIGHT')}
              </p>

              {/* 只在客戶端顯示統計組件 */}
              {isBrowser && (
                <div className='flex items-center justify-center space-x-5'>
                  <div className='flex items-center space-x-2 text-sm text-gray-300'>
                    <i className='fas fa-eye'></i>
                    <span className='busuanzi_container_site_pv'>
                      總訪問量: <span className='busuanzi_value_site_pv'></span>
                    </span>
                  </div>
                  <div className='flex items-center space-x-2 text-sm text-gray-300'>
                    <i className='fas fa-users'></i>
                    <span className='busuanzi_container_site_uv'>
                      訪客數: <span className='busuanzi_value_site_uv'></span>
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- ====== Footer Section End --> */}
    </>
  )
}
