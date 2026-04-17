/* eslint-disable react/no-unknown-property */

/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return <style jsx global>{`

  #theme-starter .sticky{
    position: fixed;
    z-index: 20;
    background-color: rgb(255 255 255 / 0.85);
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    backdrop-filter: blur(8px);
  }

  #theme-starter .dark .sticky{
    background-color: rgb(31 41 55 / 0.85);
  }

  #theme-starter .main {
    min-height: 100vh;
    padding-top: 0;
  }

  /* 漸變背景色效果 */
  .gradient-bg {
    background: linear-gradient(135deg, #00629B 0%, #004A76 100%);
    position: relative;
    z-index: 1;
  }
  
  .gradient-bg::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #0096DB 0%, #00629B 100%);
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: -1;
  }
  
  .gradient-bg:hover::before {
    opacity: 1;
  }
  
  /* 玻璃擬態效果 */
  .glassmorphism {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
    transition: all 0.3s ease;
  }
  
  .dark .glassmorphism {
    background: rgba(31, 41, 55, 0.7);
    border: 1px solid rgba(31, 41, 55, 0.18);
  }
  
  /* 懸停縮放效果 */
  .hover-scale-img {
    transition: transform 0.5s ease;
  }
  
  .hover-scale-img:hover {
    transform: scale(1.02);
  }
  
  /* 動畫下劃線 */
  .animated-underline {
    position: relative;
    display: inline-block;
  }
  
  .animated-underline::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #00629B;
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }
  
  .animated-underline:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  
  .dark .animated-underline::after {
    background-color: #33A7FF;
  }
  
  /* 文字陰影效果 */
  .text-shadow {
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .dark .text-shadow {
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  /* 卡片懸停效果 */
  .card-hover {
    transition: all 0.3s ease;
  }
  
  .card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  }
  
  /* 按鈕懸停效果 */
  .btn-hover {
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: all 0.3s ease;
  }
  
  .btn-hover:hover {
    transform: translateY(-2px);
  }
  
  .btn-hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
    z-index: -1;
  }
  
  .btn-hover:hover::before {
    transform: translateX(0);
  }

  /* 針對特定元素的動畫效果 */
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  
  .float-animation {
    animation: float 3s ease-in-out infinite;
  }
  
  /* 頁面滾動動畫 */
  .scroll-fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  
  .scroll-fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* 漸變文字 */
  .text-gradient {
    background: linear-gradient(90deg, #00629B, #33A7FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
  
  .dark .text-gradient {
    background: linear-gradient(90deg, #0091FF, #66BDFF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
  
  /* 圖片增強效果 */
  .image-enhance {
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
    transition: filter 0.3s ease;
  }
  
  .image-enhance:hover {
    filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.2));
  }
  
  /* 立體卡片效果 */
  .card-3d {
    transform-style: preserve-3d;
    perspective: 1000px;
  }
  
  .card-3d-inner {
    transition: transform 0.6s;
    transform: rotateY(0deg);
  }
  
  .card-3d:hover .card-3d-inner {
    transform: rotateY(5deg);
  }
  
  /* 漸變卡片效果 */
  .gradient-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: all 0.3s ease;
  }
  
  .gradient-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(140deg, rgba(0, 98, 155, 0.08) 0%, rgba(0, 150, 219, 0.03) 100%);
    z-index: -1;
  }
  
  .gradient-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
  
  .dark .gradient-card {
    background: #1f2937;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }
  
  .dark .gradient-card::before {
    background: linear-gradient(140deg, rgba(0, 150, 219, 0.08) 0%, rgba(0, 98, 155, 0.03) 100%);
  }
  
  /* 響應式調整 */
  @media (max-width: 768px) {
    .glassmorphism {
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
    }
    
    .hover-scale-img:hover {
      transform: none;
    }
  }
  `}</style>
}

export default Style
