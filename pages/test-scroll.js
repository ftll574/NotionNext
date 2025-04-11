import React from 'react'
import ScrollButton from '@/themes/starter/components/ScrollButton'

export default function TestScrollPage() {
  return (
    <div className="min-h-screen">
      <div className="h-screen flex items-center justify-center bg-blue-500">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-6">測試滾動按鈕</h1>
          <p className="text-white mb-10">點擊下方按鈕滾動到下一個區域</p>
          <div className="flex justify-center">
            <ScrollButton targetId="test-section" color="white" />
          </div>
        </div>
      </div>
      
      <section id="test-section" className="h-screen flex items-center justify-center bg-green-500">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">目標區域</h2>
          <p className="text-white mt-4">如果您看到這個區域，說明滾動功能正常工作！</p>
        </div>
      </section>
    </div>
  )
} 