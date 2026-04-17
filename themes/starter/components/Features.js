import { siteConfig } from '@/lib/config'
import { SVGDesign } from './svg/SVGDesign'
import { SVGEssential } from './svg/SVGEssential'
import { SVGGifts } from './svg/SVGGifts'
import { SVGTemplate } from './svg/SVGTemplate'
import { SVGQualityAssurance } from './svg/SVGQualityAssurance'
import { SVGInventoryManagement } from './svg/SVGInventoryManagement'
import Link from 'next/link'

import { useEffect, useRef, useState } from 'react'

/**
 * 產品特性相關，將顯示在首頁中
 * @returns
 */
export const Features = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // 特性卡片數據
  const featureCards = [
    {
      icon: <SVGGifts />,
      title: siteConfig('STARTER_FEATURE_1_TITLE_1'),
      description: siteConfig('STARTER_FEATURE_1_TEXT_1'),
      link: siteConfig('STARTER_FEATURE_1_BUTTON_URL', ''),
      linkText: siteConfig('STARTER_FEATURE_1_BUTTON_TEXT'),
      delay: 100
    },
    {
      icon: <SVGTemplate />,
      title: siteConfig('STARTER_FEATURE_2_TITLE_1'),
      description: siteConfig('STARTER_FEATURE_2_TEXT_1'),
      link: siteConfig('STARTER_FEATURE_2_BUTTON_URL', ''),
      linkText: siteConfig('STARTER_FEATURE_2_BUTTON_TEXT'),
      delay: 200
    },
    {
      icon: <SVGDesign />,
      title: siteConfig('STARTER_FEATURE_3_TITLE_1'),
      description: siteConfig('STARTER_FEATURE_3_TEXT_1'),
      link: siteConfig('STARTER_FEATURE_3_BUTTON_URL', ''),
      linkText: siteConfig('STARTER_FEATURE_3_BUTTON_TEXT'),
      delay: 300
    },
    {
      icon: <SVGInventoryManagement />,
      title: siteConfig('STARTER_FEATURE_4_TITLE_1'),
      description: siteConfig('STARTER_FEATURE_4_TEXT_1'),
      link: siteConfig('STARTER_FEATURE_4_BUTTON_URL', ''),
      linkText: siteConfig('STARTER_FEATURE_4_BUTTON_TEXT'),
      delay: 400
    }
  ]

  return (
    <>
      {/* <!-- ====== Features Section Start --> */}
      <section
        ref={sectionRef}
        id="features-section"
        className='pb-16 pt-24 dark:bg-dark lg:pb-24 lg:pt-32 relative overflow-hidden'
      >
        {/* 背景效果元素 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-20 dark:opacity-5"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-secondary-100 rounded-full opacity-20 dark:opacity-5"></div>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className={`flex flex-wrap justify-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className='w-full px-4'>
              <div className='mx-auto mb-16 max-w-[580px] text-center'>
                <span className='mb-3 inline-block text-lg font-semibold text-primary animated-underline'>
                  {siteConfig('STARTER_FEATURE_TITLE')}
                </span>
                <h2 className='mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2] text-shadow'>
                  {siteConfig('STARTER_FEATURE_TEXT_1')}
                </h2>
                <p className='text-lg text-body-color dark:text-dark-6 mx-auto max-w-[520px]'>
                  {siteConfig('STARTER_FEATURE_TEXT_2')}
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-wrap justify-center -mx-4'>
            {featureCards.map((card, index) => (
              <div
                key={index}
                className='w-full px-4 sm:w-1/2 md:w-1/2 lg:w-1/4'
                style={{
                  transitionDelay: `${card.delay}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
                }}
              >
                <div className='mb-12 group'>
                  <div className='glassmorphism p-8 rounded-2xl transition-all duration-300 hover:shadow-card-hover transform hover:-translate-y-2 h-full'>
                    <div className='relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-gradient-primary'>
                      <div className='text-white'>
                        {card.icon}
                      </div>
                    </div>
                    <h4 className='mb-4 text-xl font-bold text-dark dark:text-white'>
                      {card.title}
                    </h4>
                    <p className='mb-8 text-body-color dark:text-dark-6 lg:mb-9 leading-relaxed'>
                      {card.description}
                    </p>
                    {card.link && (
                      <Link
                        href={card.link}
                        className='inline-flex items-center font-medium text-primary hover:text-primary-800 transition-colors'
                      >
                        <span>{card.linkText}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* <!-- ====== Features Section End --> */}
    </>
  )
}
