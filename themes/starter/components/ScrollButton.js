import React from 'react'
import Link from 'next/link'

/**
 * 滾動按鈕組件 - 點擊後滾動到下一個區塊
 */
export default function ScrollButton({ targetId }) {
  
  const handleClick = (e) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="scroll-button-container">
      <button 
        onClick={handleClick} 
        aria-label="滾動到下一區塊" 
        className="scroll-button"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        </svg>
      </button>
    </div>
  )
} 