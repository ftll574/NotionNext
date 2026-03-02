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
      : 'bg-primary text-white hover:bg-primary-dark';
  
  // 動畫效果類
  const animationClass = pulseEffect 
    ? 'animate-pulse-slow' 
    : 'animate-bounce';
  
  // 超簡化版本的點擊處理函數
  function handleButtonClick() {
    try {
      // 使用DOM API直接獲取元素
      const element = document.getElementById(targetId);
      
      // 如果找到元素，則滾動到元素位置
      if (element) {
        console.log('找到目標元素，正在滾動到:', targetId);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        console.log('未找到目標元素:', targetId);
        // 如果找不到目標元素，向下滾動一個視窗高度
        window.scrollBy({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      }
    } catch (error) {
      console.error('滾動處理出錯:', error);
    }
  }

  return (
    <div className="flex justify-center items-center">
      <button 
        onClick={handleButtonClick}
        type="button"
        aria-label="滾動到下一區塊" 
        className={`flex items-center justify-center w-12 h-12 rounded-full ${colorClasses} shadow-lg hover:shadow-xl transition-all duration-300 ${animationClass} backdrop-blur-sm hover:scale-110`}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        </svg>
      </button>
    </div>
  )
} 