import { siteConfig } from '@/lib/config'
import { SVGDesign } from './svg/SVGDesign'
import { SVGEssential } from './svg/SVGEssential'
import { SVGGifts } from './svg/SVGGifts'
import { SVGTemplate } from './svg/SVGTemplate'
import { SVGQualityAssurance } from './svg/SVGQualityAssurance'
import { SVGInventoryManagement } from './svg/SVGInventoryManagement'
import Link from 'next/link'
import ScrollButton from './ScrollButton'
/**
 * 產品特性相關，將顯示在首頁中
 * @returns
 */
export const Features = () => {
  return (
    <>
      {/* <!-- ====== Features Section Start --> */}
      <section id="features-section" className='pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center'>
            <div className='w-full px-4'>
              <div className='mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]'>
                <span className='mb-2 block text-lg font-semibold text-primary'>
                  {siteConfig('STARTER_FEATURE_TITLE')}
                </span>
                <h2 className='mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]'>
                  {siteConfig('STARTER_FEATURE_TEXT_1')}
                </h2>
                <p className='text-base text-body-color dark:text-dark-6'>
                  {siteConfig('STARTER_FEATURE_TEXT_2')}
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap justify-center -mx-4'>
            <div className='w-full px-4 sm:w-1/2 md:w-1/2 lg:w-1/4'>
              <div className='wow fadeInUp group mb-12' data-wow-delay='.1s'>
                <div className='relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary sm:mx-0 mx-auto'>
                  <span className='absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45'></span>
                  <SVGGifts />
                </div>
                <h4 className='mb-3 text-xl font-bold text-dark dark:text-white sm:text-left text-center'>
                  {siteConfig('STARTER_FEATURE_1_TITLE_1')}
                </h4>
                <p className='mb-8 text-body-color dark:text-dark-6 lg:mb-9 sm:text-left text-center'>
                  {siteConfig('STARTER_FEATURE_1_TEXT_1')}
                </p>
                <Link
                  href={siteConfig('STARTER_FEATURE_1_BUTTON_URL', '')}
                  className='text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-left text-center sm:inline-block block w-full'>
                  {siteConfig('STARTER_FEATURE_1_BUTTON_TEXT')}
                </Link>
              </div>
            </div>
            <div className='w-full px-4 sm:w-1/2 md:w-1/2 lg:w-1/4'>
              <div className='wow fadeInUp group mb-12' data-wow-delay='.15s'>
                <div className='relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary sm:mx-0 mx-auto'>
                  <span className='absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45'></span>
                  <SVGTemplate />
                </div>
                <h4 className='mb-3 text-xl font-bold text-dark dark:text-white sm:text-left text-center'>
                  {siteConfig('STARTER_FEATURE_2_TITLE_1')}
                </h4>
                <p className='mb-8 text-body-color dark:text-dark-6 lg:mb-9 sm:text-left text-center'>
                  {siteConfig('STARTER_FEATURE_2_TEXT_1')}
                </p>
                <Link
                  href={siteConfig('STARTER_FEATURE_2_BUTTON_URL', '')}
                  className='text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-left text-center sm:inline-block block w-full'>
                  {siteConfig('STARTER_FEATURE_2_BUTTON_TEXT')}
                </Link>
              </div>
            </div>
            <div className='w-full px-4 sm:w-1/2 md:w-1/2 lg:w-1/4'>
              <div className='wow fadeInUp group mb-12' data-wow-delay='.2s'>
                <div className='relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary sm:mx-0 mx-auto'>
                  <span className='absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45'></span>
                  <SVGDesign />
                </div>
                <h4 className='mb-3 text-xl font-bold text-dark dark:text-white sm:text-left text-center'>
                  {siteConfig('STARTER_FEATURE_3_TITLE_1')}
                </h4>
                <p className='mb-8 text-body-color dark:text-dark-6 lg:mb-9 sm:text-left text-center'>
                  {siteConfig('STARTER_FEATURE_3_TEXT_1')}
                </p>
                <Link
                  href={siteConfig('STARTER_FEATURE_3_BUTTON_URL', '')}
                  className='text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-left text-center sm:inline-block block w-full'>
                  {siteConfig('STARTER_FEATURE_3_BUTTON_TEXT')}
                </Link>
              </div>
            </div>
            <div className='w-full px-4 sm:w-1/2 md:w-1/2 lg:w-1/4'>
              <div className='wow fadeInUp group mb-12' data-wow-delay='.25s'>
                <div className='relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary sm:mx-0 mx-auto'>
                  <span className='absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45'></span>
                  <SVGInventoryManagement/>
                </div>
                <h4 className='mb-3 text-xl font-bold text-dark dark:text-white sm:text-left text-center'>
                  {siteConfig('STARTER_FEATURE_4_TITLE_1')}
                </h4>
                <p className='mb-8 text-body-color dark:text-dark-6 lg:mb-9 sm:text-left text-center'>
                  {siteConfig('STARTER_FEATURE_4_TEXT_1')}
                </p>
                <Link
                  href={siteConfig('STARTER_FEATURE_4_BUTTON_URL', '')}
                  className='text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-left text-center sm:inline-block block w-full'>
                  {siteConfig('STARTER_FEATURE_4_BUTTON_TEXT')}
                </Link>
              </div>
            </div>
          </div>
          
          {/* 滾動按鈕 */}
          <div className="mt-2 mb-8">
            <ScrollButton targetId="pricing-section" color="primary" />
          </div>
        </div>
      </section>
      {/* <!-- ====== Features Section End --> */}
    </>
  )
}
