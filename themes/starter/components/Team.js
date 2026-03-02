/* eslint-disable @next/next/no-img-element */
import { siteConfig } from '@/lib/config'
import { SVGAvatarBG } from './svg/SVGAvatarBG'
import ScrollButton from './ScrollButton'

export const Team = () => {
  const STARTER_TEAM_ITEMS = siteConfig('STARTER_TEAM_ITEMS', [])
  return (
    <>
      {/* <!-- ====== Team Section Start --> */}
      <section
        id='team-section'
        className='overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]'>
        <div className='container mx-auto'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4'>
              <div className='mx-auto mb-[60px] max-w-[485px] text-center'>
                <span className='mb-2 block text-lg font-semibold text-primary'>
                  {siteConfig('STARTER_TEAM_TITLE')}
                </span>
                <h2 className='mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]'>
                  {siteConfig('STARTER_TEAM_TEXT_1')}
                </h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: siteConfig('STARTER_TEAM_TEXT_2')
                  }}
                  className='text-base text-body-color dark:text-dark-6'></p>
              </div>
            </div>
          </div>

          {/* 团队成员排列矩阵 */}
          <div className='-mx-4 flex flex-wrap justify-center'>
            {STARTER_TEAM_ITEMS?.map((item, index) => {
              return (
                <div
                  key={index}
                  className='w-full px-4 md:w-1/2 lg:w-1/4'>
                  <div className="wow fadeInUp gradient-card img-zoom overflow-hidden text-center" data-wow-delay={`0.${index * 2 + 1}s`}>
                    <div className="relative overflow-hidden">
                      <img
                        src={item.STARTER_TEAM_ITEM_AVATAR}
                        alt={item.STARTER_TEAM_ITEM_NICKNAME}
                        className="w-full transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-primary bg-opacity-70 opacity-0 transition-all duration-300 hover:opacity-100 flex items-center justify-center">
                        <a 
                          href={item.STARTER_TEAM_ITEM_URL} 
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary mx-1 hover:bg-primary hover:text-white transition-all duration-300">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="mb-1 text-xl font-bold text-dark dark:text-white">
                        {item.STARTER_TEAM_ITEM_NICKNAME}
                      </h3>
                      <p className="text-body-color dark:text-dark-6">
                        {item.STARTER_TEAM_ITEM_DESCRIPTION}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          
          {/* 滾動按鈕 */}
          <ScrollButton targetId="contact-section" color="primary" />
        </div>
      </section>
      {/* <!-- ====== Team Section End --> */}
    </>
  )
}
