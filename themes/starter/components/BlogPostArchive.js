/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { siteConfig } from '@/lib/config'

const isGenericNotionCover = url => {
  if (!url || typeof url !== 'string') return true
  return (
    url.includes('notion.so/images/page-cover/') ||
    url.includes('notion.so/images/page-cover%2F') ||
    url.includes('www.notion.so/images/page-cover')
  )
}

/**
 * 博文存檔列表顯示 - 簡化版本
 * @param {*} param0
 * @returns
 */
export const BlogPostArchive = ({
  posts,
  archiveTitle,
  categories = [],
  selectedCategory = 'all',
  onCategoryChange = () => {}
}) => {
  // 確保有文章數據
  const postData = posts || []

  return (
    <div className='w-full'>
      {/* 區塊標題文字 */}
      <div className='mb-10 text-center'>
        <h2 className='mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]'>
          {archiveTitle || siteConfig('STARTER_ARCHIVE_TITLE', '所有文章')}
        </h2>
        <p className='text-base text-body-color dark:text-dark-6'>
          {siteConfig(
            'STARTER_ARCHIVE_DESCRIPTION',
            '瀏覽我們所有的文章和最新消息'
          )}
        </p>
      </div>

      {/* 類別篩選 */}
      {categories.length > 1 && (
        <div className='mb-10 flex flex-wrap justify-center gap-3'>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 
                ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-dark-2 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
            >
              {category === 'all' ? '全部' : category}
            </button>
          ))}
        </div>
      )}

      {/* 文章列表 */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {postData?.length > 0 ? (
          postData.map((item, index) => {
            return (
              <div key={index} className='mb-6'>
                <div
                  className='wow fadeInUp group rounded-lg bg-white p-4 pb-8 shadow-lg dark:bg-dark-2 h-full'
                  data-wow-delay='.1s'
                >
                  <Link
                    href={`${item.slug}`}
                    aria-label={item.title}
                    className='block overflow-hidden rounded aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-dark-2 dark:to-dark-3'
                  >
                    {item.pageCoverThumbnail &&
                    !isGenericNotionCover(item.pageCoverThumbnail) ? (
                      <img
                        src={item.pageCoverThumbnail}
                        alt={item.title}
                        loading='lazy'
                        decoding='async'
                        className='w-full h-full object-cover transition group-hover:rotate-6 group-hover:scale-110'
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
                        <div className='relative z-10 h-full flex items-center justify-center p-4'>
                          <span className='text-white text-base font-semibold line-clamp-3 text-center leading-snug'>
                            {item.title}
                          </span>
                        </div>
                      </div>
                    )}
                  </Link>
                  <div className='mt-5'>
                    <span className='mb-2 inline-block rounded bg-primary py-1 px-4 text-center text-xs font-semibold leading-loose text-white'>
                      {item.publishDate &&
                        new Date(item.publishDate).toLocaleDateString()}
                    </span>
                    {item.category && (
                      <span className='mx-2 inline-block rounded bg-gray-200 dark:bg-gray-700 py-1 px-3 text-center text-xs font-medium leading-loose'>
                        {item.category}
                      </span>
                    )}
                    <h3>
                      <Link
                        href={`${item.slug}`}
                        className='mb-4 block text-xl font-bold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl'
                      >
                        {item.title}
                      </Link>
                    </h3>
                    <p className='text-base text-body-color dark:text-dark-6'>
                      {item.summary}
                    </p>
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          <div className='text-center py-20 col-span-full'>
            <p className='text-lg text-body-color dark:text-dark-6'>
              {siteConfig('STARTER_ARCHIVE_NO_POSTS', '目前沒有文章')}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogPostArchive
