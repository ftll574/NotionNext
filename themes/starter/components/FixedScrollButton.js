import React, { useState } from 'react'

/**
 * 修復版的滾動按鈕 - 簡化實現以解決點擊問題
 */
export default function FixedScrollButton({
  targetId = 'about-section',
  color = 'primary',
  pulseEffect = false
}) {
  // 簡化版的顏色類
  const colorClasses =
    color === 'white'
      ? 'bg-white text-primary hover:bg-gray-100'
      : 'bg-primary text-white hover:bg-primary-dark'

  // 動畫效果類
  const animationClass = pulseEffect ? 'animate-pulse-slow' : 'animate-bounce'

  function handleButtonClick() {
    const element =
      typeof document !== 'undefined' ? document.getElementById(targetId) : null

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (typeof window !== 'undefined') {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
    }
  }

  return (
    <div className='flex justify-center items-center'>
      <button
        onClick={handleButtonClick}
        type='button'
        aria-label='滾動到下一區塊'
        className={`flex items-center justify-center w-12 h-12 rounded-full ${colorClasses} shadow-lg hover:shadow-xl transition-all duration-300 ${animationClass} backdrop-blur-sm hover:scale-110 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2`}
      >
        <svg viewBox='0 0 24 24' fill='currentColor' width='24' height='24'>
          <path d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z' />
        </svg>
      </button>
    </div>
  )
}
