import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

/**
 * 服務產業信任指標區塊
 * 以 SVG 圖示呈現服務產業別與關鍵數字，不依賴外部 logo 資產
 */
export const Industries = () => {
  const enable = siteConfig('STARTER_INDUSTRIES_ENABLE', true, CONFIG)
  if (!enable) return null

  const title = siteConfig('STARTER_INDUSTRIES_TITLE', '服務產業', CONFIG)
  const text1 = siteConfig(
    'STARTER_INDUSTRIES_TEXT_1',
    '跨產業的可靠原料夥伴',
    CONFIG
  )
  const text2 = siteConfig(
    'STARTER_INDUSTRIES_TEXT_2',
    '30 年深耕，廣獲電子、汽車、家電、醫療、包裝等產業客戶信賴',
    CONFIG
  )

  const industries = siteConfig(
    'STARTER_INDUSTRIES_ITEMS',
    CONFIG.STARTER_INDUSTRIES_ITEMS,
    CONFIG
  )
  const stats = siteConfig(
    'STARTER_INDUSTRIES_STATS',
    CONFIG.STARTER_INDUSTRIES_STATS,
    CONFIG
  )

  return (
    <section className='bg-gray-50 dark:bg-dark-2 py-20 lg:py-[120px]'>
      <div className='container mx-auto px-4'>
        <div className='mx-auto mb-14 max-w-[600px] text-center'>
          <span className='mb-2 block text-lg font-semibold text-primary'>
            {title}
          </span>
          <h2 className='mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]'>
            {text1}
          </h2>
          <p className='text-base text-body-color dark:text-dark-6'>{text2}</p>
        </div>

        {/* 關鍵數字 */}
        {Array.isArray(stats) && stats.length > 0 && (
          <div className='mb-14 grid grid-cols-2 md:grid-cols-4 gap-6'>
            {stats.map((s, i) => (
              <div
                key={i}
                className='bg-white dark:bg-dark rounded-lg p-6 text-center shadow-sm'
              >
                <div className='text-3xl md:text-4xl font-bold text-primary mb-2'>
                  {s.value}
                </div>
                <div className='text-sm md:text-base text-body-color dark:text-dark-6'>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 產業卡片 */}
        {Array.isArray(industries) && industries.length > 0 && (
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
            {industries.map((item, i) => (
              <div
                key={i}
                className='bg-white dark:bg-dark rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow'
              >
                <div
                  className='w-12 h-12 mb-3 text-primary'
                  aria-hidden='true'
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                />
                <div className='text-sm font-medium text-dark dark:text-white'>
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Industries
