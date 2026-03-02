import { siteConfig } from '@/lib/config'
import Link from 'next/link'

/**
 * 价格板块
 * @returns
 */
export const Pricing = () => {
  return (
    <>
      {/* <!-- ====== Pricing Section Start --> */}
      <section
        id='pricing'
        className='relative overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]'>
        <div className='container mx-auto'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4'>
              <div className='mx-auto mb-[60px] max-w-[510px] text-center'>
                <span className='mb-2 block text-lg font-semibold text-primary'>
                  {siteConfig('STARTER_PRICING_TITLE')}
                </span>
                <h2 className='mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]'>
                  {siteConfig('STARTER_PRICING_TEXT_1')}
                </h2>
                <p className='text-base text-body-color dark:text-dark-6'>
                  {siteConfig('STARTER_PRICING_TEXT_2')}
                </p>
              </div>
            </div>
          </div>

          <div className='-mx-4 flex flex-wrap justify-center'>
            {/* 第一个付费计划 */}
            <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
              <div className="wow fadeInUp gradient-card relative overflow-hidden border-0 shadow-lg transition-all duration-500 hover:shadow-xl" data-wow-delay="0.1s">
                {/* 如果有標籤，顯示在角落 */}
                {siteConfig('STARTER_PRICING_1_TAG') && (
                  <div className="absolute -right-12 top-10 z-20 w-40 rotate-45 bg-primary py-1 text-center text-xs font-semibold text-white">
                    {siteConfig('STARTER_PRICING_1_TAG')}
                  </div>
                )}
                
                {/* 卡片頂部 */}
                <div className="bg-primary bg-opacity-5 p-8 text-center">
                  <h3 className="text-xl font-bold text-dark mb-4 dark:text-white">
                    {siteConfig('STARTER_PRICING_1_TITLE')}
                  </h3>
                  <p className="text-sm text-body-color dark:text-dark-6 mb-6">
                    {siteConfig('STARTER_PRICING_1_HEADER')}
                  </p>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-primary">
                      {siteConfig('STARTER_PRICING_1_PRICE_CURRENCY')}
                      {siteConfig('STARTER_PRICING_1_PRICE')}
                    </span>
                    <span className="text-base text-body-color dark:text-dark-6">
                      {siteConfig('STARTER_PRICING_1_PRICE_PERIOD')}
                    </span>
                  </div>
                </div>
                
                {/* 卡片內容 */}
                <div className="p-8">
                  <ul className="mb-8 space-y-4">
                    {siteConfig('STARTER_PRICING_1_FEATURES')
                      ?.split(',')
                      .map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary bg-opacity-10">
                            <svg className="h-3 w-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="text-base text-body-color dark:text-dark-6">
                            {feature}
                          </span>
                        </li>
                      ))}
                  </ul>
                  
                  {/* 按鈕 */}
                  <Link
                    href={siteConfig('STARTER_PRICING_1_BUTTON_URL', '')}
                    className="btn-effect block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90">
                    {siteConfig('STARTER_PRICING_1_BUTTON_TEXT')}
                  </Link>
                </div>
              </div>
            </div>

            {/* 第二个付费计划 */}
            <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
              <div className="wow fadeInUp gradient-card relative overflow-hidden border-0 shadow-lg transition-all duration-500 hover:shadow-xl" data-wow-delay="0.1s">
                {/* 如果有標籤，顯示在角落 */}
                {siteConfig('STARTER_PRICING_2_TAG') && (
                  <div className="absolute -right-12 top-10 z-20 w-40 rotate-45 bg-primary py-1 text-center text-xs font-semibold text-white">
                    {siteConfig('STARTER_PRICING_2_TAG')}
                  </div>
                )}
                
                {/* 卡片頂部 */}
                <div className="bg-primary bg-opacity-5 p-8 text-center">
                  <h3 className="text-xl font-bold text-dark mb-4 dark:text-white">
                    {siteConfig('STARTER_PRICING_2_TITLE')}
                  </h3>
                  <p className="text-sm text-body-color dark:text-dark-6 mb-6">
                    {siteConfig('STARTER_PRICING_2_HEADER')}
                  </p>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-primary">
                      {siteConfig('STARTER_PRICING_2_PRICE_CURRENCY')}
                      {siteConfig('STARTER_PRICING_2_PRICE')}
                    </span>
                    <span className="text-base text-body-color dark:text-dark-6">
                      {siteConfig('STARTER_PRICING_2_PRICE_PERIOD')}
                    </span>
                  </div>
                </div>
                
                {/* 卡片內容 */}
                <div className="p-8">
                  <ul className="mb-8 space-y-4">
                    {siteConfig('STARTER_PRICING_2_FEATURES')
                      ?.split(',')
                      .map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary bg-opacity-10">
                            <svg className="h-3 w-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="text-base text-body-color dark:text-dark-6">
                            {feature}
                          </span>
                        </li>
                      ))}
                  </ul>
                  
                  {/* 按鈕 */}
                  <Link
                    href={siteConfig('STARTER_PRICING_2_BUTTON_URL', '')}
                    className="btn-effect block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90">
                    {siteConfig('STARTER_PRICING_2_BUTTON_TEXT')}
                  </Link>
                </div>
              </div>
            </div>

            {/* 第三个付费计划 */}
            <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
              <div className="wow fadeInUp gradient-card relative overflow-hidden border-0 shadow-lg transition-all duration-500 hover:shadow-xl" data-wow-delay="0.1s">
                {/* 如果有標籤，顯示在角落 */}
                {siteConfig('STARTER_PRICING_3_TAG') && (
                  <div className="absolute -right-12 top-10 z-20 w-40 rotate-45 bg-primary py-1 text-center text-xs font-semibold text-white">
                    {siteConfig('STARTER_PRICING_3_TAG')}
                  </div>
                )}
                
                {/* 卡片頂部 */}
                <div className="bg-primary bg-opacity-5 p-8 text-center">
                  <h3 className="text-xl font-bold text-dark mb-4 dark:text-white">
                    {siteConfig('STARTER_PRICING_3_TITLE')}
                  </h3>
                  <p className="text-sm text-body-color dark:text-dark-6 mb-6">
                    {siteConfig('STARTER_PRICING_3_HEADER')}
                  </p>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-primary">
                      {siteConfig('STARTER_PRICING_3_PRICE_CURRENCY')}
                      {siteConfig('STARTER_PRICING_3_PRICE')}
                    </span>
                    <span className="text-base text-body-color dark:text-dark-6">
                      {siteConfig('STARTER_PRICING_3_PRICE_PERIOD')}
                    </span>
                  </div>
                </div>
                
                {/* 卡片內容 */}
                <div className="p-8">
                  <ul className="mb-8 space-y-4">
                    {siteConfig('STARTER_PRICING_3_FEATURES')
                      ?.split(',')
                      .map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary bg-opacity-10">
                            <svg className="h-3 w-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="text-base text-body-color dark:text-dark-6">
                            {feature}
                          </span>
                        </li>
                      ))}
                  </ul>
                  
                  {/* 按鈕 */}
                  <Link
                    href={siteConfig('STARTER_PRICING_3_BUTTON_URL', '')}
                    className="btn-effect block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90">
                    {siteConfig('STARTER_PRICING_3_BUTTON_TEXT')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====== Pricing Section End --> */}
    </>
  )
}
