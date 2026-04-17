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
        id='pricing-section'
        className='relative overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]'
      >
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
              <div
                className='wow fadeInUp relative overflow-hidden rounded-xl border-0 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:bg-dark-2'
                data-wow-delay='0.1s'
              >
                {/* 背景圖案裝飾 - 使用 config 參數，修改為只在卡片區域內顯示 */}
                <div className='relative z-10 overflow-hidden pb-10 pt-8'>
                  {/* 背景圖案 - 移至此處並限制在頂部區域 */}
                  <div className='absolute inset-0 z-0'>
                    <img
                      src={siteConfig(
                        'STARTER_PRICING_1_IMAGE',
                        '/images/starter/patterns/pattern-granule.jpg'
                      )}
                      alt=''
                      aria-hidden='true'
                      loading='lazy'
                      decoding='async'
                      className='h-full w-full object-cover opacity-5'
                    />
                  </div>

                  {/* 波浪分隔線 */}
                  <div className='absolute bottom-0 left-0 right-0'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 1440 320'
                      className='text-primary text-opacity-5'
                    >
                      <path
                        fill='currentColor'
                        fillOpacity='1'
                        d='M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,186.7C672,213,768,235,864,213.3C960,192,1056,128,1152,117.3C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
                      ></path>
                    </svg>
                  </div>

                  <div className='relative z-10 px-8 text-center'>
                    <h3 className='text-xl font-bold text-dark mb-4 dark:text-white'>
                      {siteConfig('STARTER_PRICING_1_TITLE')}
                    </h3>
                    <p className='text-sm text-body-color dark:text-dark-6 mb-6'>
                      {siteConfig('STARTER_PRICING_1_HEADER')}
                    </p>
                    <div className='flex items-center justify-center space-x-1'>
                      <span className='text-3xl font-bold text-primary'>
                        {siteConfig('STARTER_PRICING_1_PRICE_CURRENCY')}
                        {siteConfig('STARTER_PRICING_1_PRICE')}
                      </span>
                      <span className='text-base text-body-color dark:text-dark-6'>
                        {siteConfig('STARTER_PRICING_1_PRICE_PERIOD')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 卡片內容 */}
                <div className='relative z-10 p-8 pt-4'>
                  <ul className='mb-8 space-y-4'>
                    {siteConfig('STARTER_PRICING_1_FEATURES')
                      ?.split(',')
                      .map((feature, index) => (
                        <li key={index} className='flex items-center'>
                          <div className='mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary bg-opacity-10'>
                            <svg
                              className='h-3 w-3 text-primary'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M5 13l4 4L19 7'
                              ></path>
                            </svg>
                          </div>
                          <span className='text-base text-body-color dark:text-dark-6'>
                            {feature}
                          </span>
                        </li>
                      ))}
                  </ul>

                  {/* 按鈕 - 更現代的設計 */}
                  <Link
                    href={siteConfig('STARTER_PRICING_1_BUTTON_URL', '')}
                    className='group relative z-10 block w-full overflow-hidden rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition-all duration-300 hover:bg-opacity-90'
                  >
                    <span className='absolute bottom-0 left-0 h-1 w-0 bg-white bg-opacity-20 transition-all duration-300 group-hover:w-full'></span>
                    {siteConfig('STARTER_PRICING_1_BUTTON_TEXT')}
                  </Link>
                </div>
              </div>
            </div>

            {/* 第二个付费计划 */}
            <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
              <div
                className='wow fadeInUp relative overflow-hidden rounded-xl border-0 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:bg-dark-2'
                data-wow-delay='0.1s'
              >
                {/* 背景圖案裝飾 - 使用 config 參數，修改為只在卡片區域內顯示 */}
                <div className='relative z-10 overflow-hidden pb-10 pt-8'>
                  {/* 背景圖案 - 移至此處並限制在頂部區域 */}
                  <div className='absolute inset-0 z-0'>
                    <img
                      src={siteConfig(
                        'STARTER_PRICING_2_IMAGE',
                        '/images/starter/patterns/pattern-grid.jpg'
                      )}
                      alt=''
                      aria-hidden='true'
                      loading='lazy'
                      decoding='async'
                      className='h-full w-full object-cover opacity-5'
                    />
                  </div>

                  {/* 波浪分隔線 */}
                  <div className='absolute bottom-0 left-0 right-0'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 1440 320'
                      className='text-primary text-opacity-5'
                    >
                      <path
                        fill='currentColor'
                        fillOpacity='1'
                        d='M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,186.7C672,213,768,235,864,213.3C960,192,1056,128,1152,117.3C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
                      ></path>
                    </svg>
                  </div>

                  {/* 如果有標籤，顯示在角落 */}
                  {siteConfig('STARTER_PRICING_2_TAG') && (
                    <div className='absolute -right-12 top-10 z-20 w-40 rotate-45 bg-primary py-1 text-center text-xs font-semibold text-white'>
                      {siteConfig('STARTER_PRICING_2_TAG')}
                    </div>
                  )}

                  <div className='relative z-10 px-8 text-center'>
                    <h3 className='text-xl font-bold text-dark mb-4 dark:text-white'>
                      {siteConfig('STARTER_PRICING_2_TITLE')}
                    </h3>
                    <p className='text-sm text-body-color dark:text-dark-6 mb-6'>
                      {siteConfig('STARTER_PRICING_2_HEADER')}
                    </p>
                    <div className='flex items-center justify-center space-x-1'>
                      <span className='text-3xl font-bold text-primary'>
                        {siteConfig('STARTER_PRICING_2_PRICE_CURRENCY')}
                        {siteConfig('STARTER_PRICING_2_PRICE')}
                      </span>
                      <span className='text-base text-body-color dark:text-dark-6'>
                        {siteConfig('STARTER_PRICING_2_PRICE_PERIOD')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 卡片內容 */}
                <div className='relative z-10 p-8 pt-4'>
                  <ul className='mb-8 space-y-4'>
                    {siteConfig('STARTER_PRICING_2_FEATURES')
                      ?.split(',')
                      .map((feature, index) => (
                        <li key={index} className='flex items-center'>
                          <div className='mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary bg-opacity-10'>
                            <svg
                              className='h-3 w-3 text-primary'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M5 13l4 4L19 7'
                              ></path>
                            </svg>
                          </div>
                          <span className='text-base text-body-color dark:text-dark-6'>
                            {feature}
                          </span>
                        </li>
                      ))}
                  </ul>

                  {/* 按鈕 */}
                  <Link
                    href={siteConfig('STARTER_PRICING_2_BUTTON_URL', '')}
                    className='group relative z-10 block w-full overflow-hidden rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition-all duration-300 hover:bg-opacity-90'
                  >
                    <span className='absolute bottom-0 left-0 h-1 w-0 bg-white bg-opacity-20 transition-all duration-300 group-hover:w-full'></span>
                    {siteConfig('STARTER_PRICING_2_BUTTON_TEXT')}
                  </Link>
                </div>
              </div>
            </div>

            {/* 第三个付费计划 */}
            <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
              <div
                className='wow fadeInUp relative overflow-hidden rounded-xl border-0 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:bg-dark-2'
                data-wow-delay='0.1s'
              >
                {/* 背景圖案裝飾 - 使用 config 參數，修改為只在卡片區域內顯示 */}
                <div className='relative z-10 overflow-hidden pb-10 pt-8'>
                  {/* 背景圖案 - 移至此處並限制在頂部區域 */}
                  <div className='absolute inset-0 z-0'>
                    <img
                      src={siteConfig(
                        'STARTER_PRICING_3_IMAGE',
                        '/images/starter/patterns/pattern-recycle.jpg'
                      )}
                      alt=''
                      aria-hidden='true'
                      loading='lazy'
                      decoding='async'
                      className='h-full w-full object-cover opacity-5'
                    />
                  </div>

                  {/* 波浪分隔線 */}
                  <div className='absolute bottom-0 left-0 right-0'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 1440 320'
                      className='text-primary text-opacity-5'
                    >
                      <path
                        fill='currentColor'
                        fillOpacity='1'
                        d='M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,186.7C672,213,768,235,864,213.3C960,192,1056,128,1152,117.3C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
                      ></path>
                    </svg>
                  </div>

                  {/* 如果有標籤，顯示在角落 */}
                  {siteConfig('STARTER_PRICING_3_TAG') && (
                    <div className='absolute -right-12 top-10 z-20 w-40 rotate-45 bg-primary py-1 text-center text-xs font-semibold text-white'>
                      {siteConfig('STARTER_PRICING_3_TAG')}
                    </div>
                  )}

                  <div className='relative z-10 px-8 text-center'>
                    <h3 className='text-xl font-bold text-dark mb-4 dark:text-white'>
                      {siteConfig('STARTER_PRICING_3_TITLE')}
                    </h3>
                    <p className='text-sm text-body-color dark:text-dark-6 mb-6'>
                      {siteConfig('STARTER_PRICING_3_HEADER')}
                    </p>
                    <div className='flex items-center justify-center space-x-1'>
                      <span className='text-3xl font-bold text-primary'>
                        {siteConfig('STARTER_PRICING_3_PRICE_CURRENCY')}
                        {siteConfig('STARTER_PRICING_3_PRICE')}
                      </span>
                      <span className='text-base text-body-color dark:text-dark-6'>
                        {siteConfig('STARTER_PRICING_3_PRICE_PERIOD')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 卡片內容 */}
                <div className='relative z-10 p-8 pt-4'>
                  <ul className='mb-8 space-y-4'>
                    {siteConfig('STARTER_PRICING_3_FEATURES')
                      ?.split(',')
                      .map((feature, index) => (
                        <li key={index} className='flex items-center'>
                          <div className='mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary bg-opacity-10'>
                            <svg
                              className='h-3 w-3 text-primary'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M5 13l4 4L19 7'
                              ></path>
                            </svg>
                          </div>
                          <span className='text-base text-body-color dark:text-dark-6'>
                            {feature}
                          </span>
                        </li>
                      ))}
                  </ul>

                  {/* 按鈕 */}
                  <Link
                    href={siteConfig('STARTER_PRICING_3_BUTTON_URL', '')}
                    className='group relative z-10 block w-full overflow-hidden rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition-all duration-300 hover:bg-opacity-90'
                  >
                    <span className='absolute bottom-0 left-0 h-1 w-0 bg-white bg-opacity-20 transition-all duration-300 group-hover:w-full'></span>
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
