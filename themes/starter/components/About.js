/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { siteConfig } from '@/lib/config'
<<<<<<< HEAD
import SmartLink from '@/components/SmartLink'
=======
import Link from 'next/link'
import ScrollButton from './ScrollButton'
>>>>>>> be8c14e1 (Fix mobile display bug)

/**
 * 首頁的關於模組
 */
export const About = () => {
  return (
    <>
      {/* <!-- ====== About Section Start --> */}
      <section
        id='about-section'
        className='bg-gray-1 pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px] relative'>
        <div className='container mx-auto px-4'>
          <div className='wow fadeInUp' data-wow-delay='.2s'>
            <div className='-mx-4 flex flex-wrap items-center'>
              {/* 左側的文字說明板塊 */}
              <div className='w-full px-4 lg:w-1/2'>
                <div className='mb-12 max-w-[540px] lg:mb-0'>
                  <span className='mb-2 block text-lg font-semibold text-primary'>
                    {siteConfig('STARTER_ABOUT_TITLE', '鑫葳團隊服務業界30年，專注塑膠原料行業')}
                  </span>
                  <h3 className='mb-4 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-4xl sm:leading-[1.2] lg:text-[40px]'>
                    {siteConfig('STARTER_ABOUT_TEXT_1', '鑫葳團隊服務業界30年，專注塑膠原料行業')}
                  </h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: siteConfig('STARTER_ABOUT_TEXT', '鑫葳塑膠專注於高品質塑膠原料的供應與服務。<br/><br/>憑藉多年的行業經驗和穩定的供應鏈管理，我們為電子、汽車、家電等行業提供可靠的原材料支持，成為眾多製造企業的長期合作夥伴。')
                    }}
                    className='mb-10 text-base leading-relaxed text-body-color dark:text-dark-6'></p>

<<<<<<< HEAD
                  <SmartLink
                    href={siteConfig('STARTER_ABOUT_BUTTON_URL', '')}
                    className='inline-flex items-center justify-center rounded-md border border-primary bg-primary px-7 py-3 text-center text-base font-medium text-white hover:border-blue-dark hover:bg-blue-dark'>
                    {siteConfig('STARTER_ABOUT_BUTTON_TEXT')}
                  </SmartLink>
=======
                  <Link
                    href={siteConfig('STARTER_ABOUT_BUTTON_URL', '/about')}
                    className='inline-flex items-center justify-center rounded-md border border-primary bg-primary px-7 py-3 text-center text-base font-medium text-white hover:border-blue-dark hover:bg-blue-dark'>
                    {siteConfig('STARTER_ABOUT_BUTTON_TEXT', '了解更多')}
                  </Link>
>>>>>>> be8c14e1 (Fix mobile display bug)
                </div>
              </div>
              
              {/* 右側的圖片區域 */}
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
                    className="absolute -bottom-16 -right-16 z-5 rounded-tl-[80px] rounded-br-[80px] shadow-xl float-animation"
                    style={{animationDelay: '1.5s'}}
                  />
                  
                  {/* 統計數字卡片 */}
                  <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 bg-white dark:bg-dark-1 p-5 rounded-lg shadow-xl z-10 float-animation" style={{animationDelay: '0.8s'}}>
                    <h3 className="text-4xl font-bold text-gradient">{siteConfig('STARTER_ABOUT_TIPS_1', '1000+')}</h3>
                    <p className="text-body-color">{siteConfig('STARTER_ABOUT_TIPS_2', '長期客戶')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 滾動按鈕 - 絕對定位在底部中間 */}
        <div className="absolute -bottom-16 md:-bottom-16 left-0 right-0 w-full flex justify-center pb-2">
          <ScrollButton targetId="features-section" color="primary" />
        </div>
      </section>
      {/* <!-- ====== About Section End --> */}
    </>
  )
}
