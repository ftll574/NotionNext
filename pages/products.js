import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

// 極簡產品頁，不使用任何可能有問題的組件
export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Head>
        <title>產品目錄</title>
      </Head>
      
      {/* 簡單頁頭 */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            您的公司
          </Link>
          <nav>
            <Link href="/" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              首頁
            </Link>
          </nav>
        </div>
      </header>
      
      {/* 主要內容 */}
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">產品目錄</h1>
        
        {/* 簡單產品列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-800">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">產品 {item}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">這是示例產品描述，用於測試頁面是否正常顯示。</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">型號: EXAMPLE-{item}00</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      {/* 簡單頁尾 */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} 您的公司. 保留所有權利.</p>
        </div>
      </footer>
    </div>
  )
} 