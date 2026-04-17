import Image from 'next/image'
import { useState } from 'react'
import { siteConfig } from '@/lib/config'

/**
 * 基於 next/image 的圖片組件，具有懶加載和漸進式加載效果
 * 
 * @param {Object} props - 組件屬性
 * @param {string} props.src - 圖片來源 URL
 * @param {string} props.alt - 圖片替代文字，對 SEO 和無障礙性很重要
 * @param {number} [props.width] - 圖片寬度
 * @param {number} [props.height] - 圖片高度
 * @param {string} [props.className] - 額外的 CSS 類名
 * @param {boolean} [props.priority] - 是否優先加載圖片
 * @param {object} [props.style] - 自定義樣式
 * @param {string} [props.id] - 圖片 ID
 * @param {string} [props.title] - 圖片標題
 * @param {function} [props.onClick] - 點擊事件處理函數
 * @param {function} [props.onLoad] - 圖片載入完成回調
 * @returns {JSX.Element}
 */
export default function NextImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  style,
  id,
  title,
  onClick,
  onLoad
}) {
  const [isLoading, setLoading] = useState(true)
  const defaultWidth = siteConfig('IMAGE_COMPRESS_WIDTH', 800)
  const defaultClass = 'transition-all duration-200'
  
  // 如果沒有提供 src，返回空的 div
  if (!src) {
    return <div className={`w-full h-full bg-gray-200 ${className}`} style={style} />
  }
  
  // 尺寸計算
  const imgWidth = width || defaultWidth
  const imgHeight = height || (width ? Math.floor(width * 9 / 16) : null)
  
  // 處理加載完成事件
  const handleLoad = e => {
    setLoading(false)
    if (typeof onLoad === 'function') {
      onLoad(e)
    }
  }
  
  // 處理錯誤情況
  const handleError = () => {
    setLoading(false)
    console.warn(`圖片加載失敗: ${src}`)
  }
  
  // 避免 Notion 圖片 URL 問題
  let imgSrc = src
  if (src.startsWith('https://www.notion.so/image/')) {
    // 確保 Notion 圖片有正確的寬度參數
    if (!src.includes('width=')) {
      imgSrc = `${src}${src.includes('?') ? '&' : '?'}width=${imgWidth}`
    }
  }
  
  // 構建圖片屬性
  const imageProps = {
    src: imgSrc,
    alt: alt || '圖片',
    width: imgWidth,
    height: imgHeight,
    quality: 85,
    className: `${defaultClass} ${className} ${isLoading ? 'blur-sm scale-105' : 'blur-0 scale-100'}`,
    priority,
    style: { ...style, objectFit: 'cover' },
    onLoad: handleLoad,
    onError: handleError,
    onClick
  }
  
  // 添加可選屬性
  if (id) imageProps.id = id
  if (title) imageProps.title = title
  
  return (
    <div className="overflow-hidden relative">
      <Image {...imageProps} />
      
      {/* 加載中的背景效果 */}
      {isLoading && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse"
          style={{ backgroundColor: 'rgba(229, 231, 235, 0.5)' }}
        />
      )}
    </div>
  )
} 