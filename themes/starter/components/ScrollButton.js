import React, { useEffect, useState } from 'react'

/**
 * 滾動按鈕組件 - 點擊後滾動到下一個區塊
 * @param {string} targetId - 目標區塊的ID
 * @param {string} color - 按鈕顏色 (primary, white, dark)
 * @param {boolean} fixed - 是否固定在頁面底部
 * @param {boolean} absolute - 是否使用絕對定位 (用於區塊底部)
 */
export default function ScrollButton({ 
  targetId = 'about-section', 
  color = 'primary',
  fixed = false,
  absolute = false
}) {
  const [isVisible, setIsVisible] = useState(true)
  
  // 如果是固定按鈕，則監聽滾動事件
  useEffect(() => {
    if (fixed) {
      // 監聽滾動事件，當頁面滾動超過一定距離時隱藏按鈕
      const handleScroll = () => {
        const scrollY = window.scrollY
        if (scrollY > window.innerHeight * 0.5) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
      }
      
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [fixed])
  
  // 根據顏色獲取樣式類
  const getColorClasses = () => {
    switch (color) {
      case 'white':
        return 'bg-white text-primary hover:bg-gray-100 shadow-lg'
      case 'dark':
        return 'bg-dark text-white hover:bg-gray-800 shadow-lg'
      case 'primary':
      default:
        return 'bg-primary text-white hover:bg-primary-dark shadow-lg'
    }
  }

  // 點擊處理函數
  const handleClick = (e) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      // 使用更簡單的方法滾動到元素
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      })
    } else {
      // 如果找不到目標元素，簡單地向下滾動一個視窗高度
      window.scrollTo({
        top: window.scrollY + window.innerHeight,
        behavior: 'smooth'
      })
    }
  }

  // 確定容器類
  const containerClass = fixed 
    ? `fixed bottom-12 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}` 
    : absolute 
      ? 'absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10'
      : 'flex justify-center';

  return (
    <div className={containerClass}>
      <button 
        onClick={handleClick} 
        aria-label="滾動到下一區塊" 
        className={`flex items-center justify-center w-12 h-12 rounded-full ${getColorClasses()} hover:shadow-xl transition-all duration-300 animate-bounce`}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        </svg>
      </button>
    </div>
  )
} 