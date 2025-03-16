import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import { SVGEmail } from './svg/SVGEmail'
import { SVGLocation } from './svg/SVGLocation'
import { SVGPhone } from './svg/SVGPhone'

/* eslint-disable react/no-unescaped-entities */
export const Contact = () => {
  const url = siteConfig('STARTER_CONTACT_MSG_EXTERNAL_URL')
  
  // 地址的 Google Maps 連結
  const addressText = siteConfig('STARTER_CONTACT_ADDRESS_TEXT')
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressText)}`
  
  return (
    <>
      {/* <!-- ====== Contact Start ====== --> */}
      <section id='contact' className='relative py-20 md:py-[120px]'>
        <div className='absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark'></div>
        <div className='absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2'></div>
        
        {/* 背景裝飾元素 */}
        <div className="absolute right-0 top-0 -z-[1] opacity-30">
          <svg width="238" height="531" viewBox="0 0 238 531" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.3" x="422.819" y="-70.8145" width="196" height="541.607" rx="2" transform="rotate(51.2997 422.819 -70.8145)" fill="url(#paint0_linear_83:2)"></rect>
            <rect opacity="0.3" x="426.568" y="144.886" width="59.7544" height="541.607" rx="2" transform="rotate(51.2997 426.568 144.886)" fill="url(#paint1_linear_83:2)"></rect>
            <defs>
              <linearGradient id="paint0_linear_83:2" x1="517.152" y1="-251.373" x2="517.152" y2="459.865" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7"></stop>
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient id="paint1_linear_83:2" x1="455.327" y1="-35.673" x2="455.327" y2="675.565" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7"></stop>
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className='container px-4'>
          <div className='-mx-4 flex flex-wrap items-center'>
            {/* 聯繫方式左側文字 */}
            <div className='w-full px-4 lg:w-7/12 xl:w-8/12'>
              <div className='ud-contact-content-wrapper'>
                <div className='ud-contact-title mb-12 lg:mb-[80px]'>
                  <span className='mb-6 block text-base font-medium text-primary'>
                    {siteConfig('STARTER_CONTACT_TITLE')}
                  </span>
                  <h2 className='text-[35px] font-semibold leading-tight text-dark dark:text-white mb-6'>
                    {siteConfig('STARTER_CONTACT_TEXT_1')}
                  </h2>
                  <p className="text-lg text-body-color dark:text-dark-6 max-w-[600px]">
                    {siteConfig('STARTER_CONTACT_TEXT_2')}
                  </p>
                </div>
                
                <div className='mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:mb-0'>
                  {/* 地址卡片 - 添加可點擊連結 */}
                  <div className='wow fadeInUp gradient-card p-8 transition-all duration-300 hover:shadow-xl flex' data-wow-delay='0.1s'>
                    <div className='mr-6 flex items-start text-primary'>
                      <SVGLocation />
                    </div>
                    <div>
                      <h5 className='mb-4 text-xl font-bold text-dark dark:text-white'>
                        {siteConfig('STARTER_CONTACT_ADDRESS_TITLE')}
                      </h5>
                      <p className='text-base text-body-color dark:text-dark-6'>
                        {addressText}
                      </p>
                      <a 
                        href={googleMapsUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="mt-3 inline-flex items-center text-primary hover:underline"
                      >
                        在 Google 地圖查看
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  {/* 電話卡片 */}
                  <div className='wow fadeInUp gradient-card p-8 transition-all duration-300 hover:shadow-xl flex' data-wow-delay='0.2s'>
                    <div className='mr-6 flex items-start text-primary'>
                      <SVGPhone />
                    </div>
                    <div>
                      <h5 className='mb-4 text-xl font-bold text-dark dark:text-white'>
                        {siteConfig('STARTER_CONTACT_PHONE_TITLE')}
                      </h5>
                      <p className='text-base text-body-color dark:text-dark-6'>
                        {siteConfig('STARTER_CONTACT_PHONE_TEXT')}
                      </p>
                      <a 
                        href={`tel:${siteConfig('STARTER_CONTACT_PHONE_TEXT').replace(/[^0-9+]/g, '')}`} 
                        className="mt-3 inline-flex items-center text-primary hover:underline"
                      >
                        立即撥打
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  {/* 電子郵箱卡片 */}
                  <div className='wow fadeInUp gradient-card p-8 transition-all duration-300 hover:shadow-xl flex' data-wow-delay='0.3s'>
                    <div className='mr-6 flex items-start text-primary'>
                      <SVGEmail />
                    </div>
                    <div>
                      <h5 className='mb-4 text-xl font-bold text-dark dark:text-white'>
                        {siteConfig('STARTER_CONTACT_EMAIL_TITLE')}
                      </h5>
                      <p className='text-base text-body-color dark:text-dark-6'>
                        {siteConfig('STARTER_CONTACT_EMAIL_TEXT')}
                      </p>
                      <a 
                        href={`mailto:${siteConfig('STARTER_CONTACT_EMAIL_TEXT')}`} 
                        className="mt-3 inline-flex items-center text-primary hover:underline"
                      >
                        寄送郵件
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  {/* 營業時間卡片 */}
                  <div className='wow fadeInUp gradient-card p-8 transition-all duration-300 hover:shadow-xl flex' data-wow-delay='0.4s'>
                    <div className='mr-6 flex items-start text-primary'>
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h5 className='mb-4 text-xl font-bold text-dark dark:text-white'>
                        營業時間
                      </h5>
                      <p className='text-base text-body-color dark:text-dark-6'>
                        週一至週五: 9:00 - 17:30<br/>
                        週六: 9:00 - 13:00<br/>
                        週日: 休息
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {url && url !== '' && (
              <>
                {/* 聯繫方式右側留言 */}
                <div className='w-full px-4 lg:w-5/12 xl:w-4/12'>
                  <div
                    className='wow fadeInUp gradient-card rounded-lg shadow-xl overflow-hidden'
                    data-wow-delay='.2s'>
                    <div className="bg-primary p-6 text-white">
                      <h3 className="text-2xl font-bold">聯絡表單</h3>
                      <p className="mt-2">填寫以下表單，我們將盡快回覆您</p>
                    </div>
                    {/* 嵌入外部表單 */}
                    <iframe
                      src={siteConfig(
                        'STARTER_CONTACT_MSG_EXTERNAL_URL',
                        null,
                        CONFIG
                      )}
                      width='100%'
                      height='500px'
                      className="border-0 p-0"
                      frameBorder='0'></iframe>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      {/* <!-- ====== Contact End ====== --> */}
    </>
  )
}
