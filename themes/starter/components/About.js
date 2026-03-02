/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'

/**
 * 首页的关于模块
 */
export const About = () => {
  return (
    <>
      {/* <!-- ====== About Section Start --> */}
      <section
        id='about'
        className='pattern-bg pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px] relative'>
        
        {/* 添加裝飾元素 */}
        <div className="absolute right-0 top-0 h-40 w-40 opacity-20">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#00629B" d="M46.5,-78.1C59.9,-71.7,70.3,-59.5,74.4,-45.6C78.5,-31.7,76.2,-16.2,71.4,-3.2C66.6,9.8,59.3,20.3,52.7,31.3C46.1,42.3,40.1,53.9,30.7,61.3C21.2,68.6,8.1,71.7,-3.9,68.3C-15.8,64.9,-26.5,54.9,-39.8,47.1C-53.1,39.2,-69,33.4,-74.4,22.4C-79.8,11.4,-74.7,-4.9,-68.2,-19.1C-61.8,-33.3,-54,-45.4,-43.3,-52.7C-32.7,-60,-16.3,-62.3,-0.3,-61.8C15.7,-61.4,31.3,-58.1,46.5,-52.1C61.7,-46.2,76.5,-37.5,46.5,-78.1Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute left-0 bottom-0 h-40 w-40 opacity-20 rotate-180">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#00629B" d="M46.5,-78.1C59.9,-71.7,70.3,-59.5,74.4,-45.6C78.5,-31.7,76.2,-16.2,71.4,-3.2C66.6,9.8,59.3,20.3,52.7,31.3C46.1,42.3,40.1,53.9,30.7,61.3C21.2,68.6,8.1,71.7,-3.9,68.3C-15.8,64.9,-26.5,54.9,-39.8,47.1C-53.1,39.2,-69,33.4,-74.4,22.4C-79.8,11.4,-74.7,-4.9,-68.2,-19.1C-61.8,-33.3,-54,-45.4,-43.3,-52.7C-32.7,-60,-16.3,-62.3,-0.3,-61.8C15.7,-61.4,31.3,-58.1,46.5,-52.1C61.7,-46.2,76.5,-37.5,46.5,-78.1Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        {/* 內容容器 */}
        <div className="container relative z-10">
          <div className='wow fadeInUp' data-wow-delay='.2s'>
            <div className='-mx-4 flex flex-wrap items-center'>
              {/* 左侧的文字说明板块 */}
              <div className='w-full px-4 lg:w-1/2'>
                <div className='mb-12 max-w-[540px] lg:mb-0'>
                  <h2 className='mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]'>
                    {siteConfig('STARTER_ABOUT_TITLE')}
                  </h2>
                  <p
                    className='mb-10 text-base leading-relaxed text-body-color dark:text-dark-6'
                    dangerouslySetInnerHTML={{
                      __html: siteConfig('STARTER_ABOUT_TEXT')
                    }}></p>

                  <SmartLink
                    href={siteConfig('STARTER_ABOUT_BUTTON_URL', '')}
                    className='inline-flex items-center justify-center rounded-md border border-primary bg-primary px-7 py-3 text-center text-base font-medium text-white hover:border-blue-dark hover:bg-blue-dark'>
                    {siteConfig('STARTER_ABOUT_BUTTON_TEXT')}
                  </SmartLink>
                </div>
              </div>

              {/* 右侧的图片海报 */}
              <div className='w-full px-4 lg:w-1/2'>
                <div className='relative mx-auto'>
                  <img
                    src={siteConfig('STARTER_ABOUT_IMAGE_1')}
                    alt="關於我們"
                    className="rounded-tl-[80px] rounded-br-[80px] shadow-xl float-animation"
                  />
                  <img
                    src={siteConfig('STARTER_ABOUT_IMAGE_2')}
                    alt="關於我們"
                    className="absolute -bottom-16 -right-16 z-10 rounded-tl-[80px] rounded-br-[80px] shadow-xl float-animation"
                    style={{animationDelay: '1.5s'}}
                  />
                  
                  {/* 統計數字卡片 */}
                  <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 bg-white dark:bg-dark-1 p-5 rounded-lg shadow-xl z-20 float-animation" style={{animationDelay: '0.8s'}}>
                    <h3 className="text-4xl font-bold text-gradient">{siteConfig('STARTER_ABOUT_TIPS_1')}</h3>
                    <p className="text-body-color">{siteConfig('STARTER_ABOUT_TIPS_2')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====== About Section End --> */}
    </>
  )
}
