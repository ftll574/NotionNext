import Link from 'next/link'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { zhTW } from 'date-fns/locale'

/**
 * 博客歸檔列表 - 2025版本優化，支持類別篩選
 * @param posts 所有文章
 * @param archiveTitle 歸檔標題
 * @returns {JSX.Element}
 * @constructor
 */
const BlogPostArchive = ({ posts = [], archiveTitle }) => {
  const [groupedPosts, setGroupedPosts] = useState({})
  const [activeYear, setActiveYear] = useState(null)
  const [view, setView] = useState('list') // 'list' 或 'grid'
  const [activeCategory, setActiveCategory] = useState('全部') // 默認選中全部
  const [categories, setCategories] = useState(['全部'])
  const [filteredPosts, setFilteredPosts] = useState([])
  
  // 收集所有類別並設置初始值
  useEffect(() => {
    if (!posts || posts.length === 0) return
    
    // 收集所有可用的類別
    const uniqueCategories = ['全部']
    posts.forEach(post => {
      const category = post.category || '未分類'
      if (!uniqueCategories.includes(category)) {
        uniqueCategories.push(category)
      }
    })
    
    setCategories(uniqueCategories)
    setActiveCategory('全部')
    
    // 設置最初的過濾文章為所有文章
    setFilteredPosts(posts)
  }, [posts])
  
  // 根據選中的類別進行文章過濾
  useEffect(() => {
    if (!posts || posts.length === 0) return
    
    let filtered = posts
    if (activeCategory !== '全部') {
      filtered = posts.filter(post => (post.category || '未分類') === activeCategory)
    }
    
    setFilteredPosts(filtered)
  }, [activeCategory, posts])
  
  // 對過濾後的文章按年份和月份進行分組
  useEffect(() => {
    if (!filteredPosts || filteredPosts.length === 0) return
    
    const grouped = {}
    filteredPosts.forEach(post => {
      const date = new Date(post.publishDate || post.date)
      const year = date.getFullYear()
      const month = date.getMonth()
      
      if (!grouped[year]) {
        grouped[year] = {}
      }
      
      if (!grouped[year][month]) {
        grouped[year][month] = []
      }
      
      grouped[year][month].push(post)
    })
    
    setGroupedPosts(grouped)
    
    // 更新活動年份
    const years = Object.keys(grouped).sort().reverse()
    setActiveYear(years.length > 0 ? years[0] : null)
  }, [filteredPosts])
  
  if (!posts || posts.length === 0) {
    return <></>
  }
  
  // 獲取所有年份並排序
  const years = Object.keys(groupedPosts).sort().reverse()
  
  // 月份名稱
  const monthNames = Array.from({ length: 12 }, (_, i) => 
    format(new Date(2021, i, 1), 'MMMM', { locale: zhTW })
  )
  
  // 處理類別切換
  const handleCategoryChange = (category) => {
    setActiveCategory(category)
  }
  
  return (
    <div className="container mx-auto px-4 py-16">
      {archiveTitle && (
        <h1 className="text-3xl font-bold text-center mb-12 dark:text-white">
          {archiveTitle}
        </h1>
      )}
      
      {/* 類別選擇標籤 */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-3 py-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-md whitespace-nowrap transition-all ${
                activeCategory === category 
                  ? 'bg-primary text-white font-medium' 
                  : 'bg-gray-100 dark:bg-dark-2 dark:text-white hover:bg-gray-200 dark:hover:bg-dark-3'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* 切換視圖按鈕 */}
      <div className="flex justify-end mb-8">
        <div className="flex bg-gray-100 dark:bg-dark-2 rounded-lg p-1">
          <button 
            onClick={() => setView('list')}
            className={`px-4 py-2 rounded-md ${view === 'list' 
              ? 'bg-primary text-white' 
              : 'dark:text-white'}`}
          >
            <i className="fas fa-list mr-2"></i>列表
          </button>
          <button 
            onClick={() => setView('grid')}
            className={`px-4 py-2 rounded-md ${view === 'grid' 
              ? 'bg-primary text-white' 
              : 'dark:text-white'}`}
          >
            <i className="fas fa-th-large mr-2"></i>網格
          </button>
        </div>
      </div>
      
      {/* 年份選擇標籤 */}
      {years.length > 0 && (
        <div className="mb-10 overflow-x-auto">
          <div className="flex space-x-3 py-2">
            {years.map(year => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-4 py-2 rounded-md whitespace-nowrap transition-all ${
                  activeYear === year 
                    ? 'bg-primary text-white font-medium' 
                    : 'bg-gray-100 dark:bg-dark-2 dark:text-white hover:bg-gray-200 dark:hover:bg-dark-3'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* 文章列表 */}
      {activeYear && years.length > 0 ? (
        <div className="wow fadeInUp" data-wow-delay="0.2s">
          {Object.keys(groupedPosts[activeYear])
            .sort((a, b) => b - a) // 按月份降序排序
            .map(month => (
              <div key={month} className="mb-12">
                <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 dark:text-white">
                  {monthNames[month]}
                </h3>
                
                {view === 'list' ? (
                  <ul className="space-y-4">
                    {groupedPosts[activeYear][month].map((post, index) => (
                      <li key={index} className="group">
                        <div className="flex items-start transition-all p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-2">
                          <div className="text-gray-400 dark:text-gray-500 mr-4 text-sm whitespace-nowrap">
                            {format(new Date(post.publishDate || post.date), 'MM-dd')}
                          </div>
                          <Link href={`${post.slug}`} className="flex-1">
                            <div className="font-medium text-lg group-hover:text-primary dark:text-white">
                              {post.title}
                            </div>
                            {post.summary && (
                              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 line-clamp-2">
                                {post.summary}
                              </p>
                            )}
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {groupedPosts[activeYear][month].map((post, index) => (
                      <Link href={`${post.slug}`} key={index}>
                        <div className="group h-full bg-white dark:bg-dark-2 rounded-lg shadow-md hover:shadow-lg p-5 transition-all">
                          <div className="text-gray-400 dark:text-gray-500 text-sm mb-2">
                            {format(new Date(post.publishDate || post.date), 'MM-dd')}
                          </div>
                          <h4 className="font-medium text-lg mb-3 group-hover:text-primary dark:text-white">
                            {post.title}
                          </h4>
                          {post.summary && (
                            <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3">
                              {post.summary}
                            </p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          當前類別下沒有文章
        </div>
      )}
    </div>
  )
}

export default BlogPostArchive 