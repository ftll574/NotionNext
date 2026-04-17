/* eslint-disable @next/next/no-img-element */
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'

/**
 * 博文列表
 * @param {*} param0
 * @returns
 */
export const Blog = ({ posts }) => {
  return (
    <>
      {/* <!-- ====== Blog Section Start --> */}
      <section
        id='blog-section'
        className='bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]'
      >
        <div className='container mx-auto'>
          {/* 区块标题文字 */}
          <div className='-mx-4 flex flex-wrap justify-center'>
            <div className='w-full px-4'>
              <div className='mx-auto mb-[60px] max-w-[485px] text-center'>
                <span className='mb-2 block text-lg font-semibold text-primary'>
                  {siteConfig('STARTER_BLOG_TITLE')}
                </span>
                <h2 className='mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]'>
                  {siteConfig('STARTER_BLOG_TEXT_1')}
                </h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: siteConfig('STARTER_BLOG_TEXT_2')
                  }}
                  className='text-base text-body-color dark:text-dark-6'
                ></p>
              </div>
            </div>
          </div>
          {/* 博客列表 此处优先展示3片文章 */}
          <div className='-mx-4 flex flex-wrap'>
            {posts?.map((item, index) => {
              return (
                <div key={index} className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group mb-10'
                    data-wow-delay='.1s'
                  >
                    <div className='mb-8 overflow-hidden rounded-[5px] aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-dark-2 dark:to-dark-3'>
                      <SmartLink
                        href={item?.href}
                        aria-label={item.title}
                        className='block w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
                      >
                        {item.pageCoverThumbnail ? (
                          <img
                            src={item.pageCoverThumbnail}
                            alt={item.title}
                            loading='lazy'
                            decoding='async'
                            onError={e => {
                              e.currentTarget.style.display = 'none'
                            }}
                            className='w-full h-full object-cover transition group-hover:rotate-6 group-hover:scale-125'
                          />
                        ) : (
                          <div className='relative w-full h-full bg-gradient-to-br from-primary to-[#0096db] transition group-hover:scale-105'>
                            <div
                              aria-hidden='true'
                              className='absolute inset-0 opacity-20'
                              style={{
                                backgroundImage:
                                  'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35) 0, transparent 40%), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.25) 0, transparent 50%)'
                              }}
                            />
                            <div className='relative z-10 h-full flex items-center justify-center p-6'>
                              <span className='text-white text-lg font-semibold line-clamp-3 text-center leading-snug'>
                                {item.title}
                              </span>
                            </div>
                          </div>
                        )}
                      </SmartLink>
                    </div>
                    <div>
                      <span className='mb-6 inline-block rounded-[5px] bg-primary px-4 py-0.5 text-center text-xs font-medium leading-loose text-white'>
                        {item.publishDay}
                      </span>
                      <h3>
                        <SmartLink
                          href={item?.href}
                          className='mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl'
                        >
                          {item.title}
                        </SmartLink>
                      </h3>
                      <p className='max-w-[370px] text-base text-body-color dark:text-dark-6'>
                        {item.summary}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* <!-- ====== Blog Section End --> */}
    </>
  )
}
