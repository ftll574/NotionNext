# Design: 修復 Menu 產品目錄 Submenu 被遮住的問題

## 系統架構影響
本變更僅影響前端 UI 的 CSS 樣式展示與少部分 React 元件的 class 綁定，並不涉及資料結構、API 或 Notion 解析邏輯的改動。受影響的模組為 `themes/starter` 內的導覽列組件。

## 實作細節

### 1. 調整 `MenuList.js` 全域 CSS
為了解除 `overflow: hidden` 對第三層子選單的限制，我們將在 `themes/starter/components/MenuList.js` 的 `<style jsx global>` 區塊中：
- 刪除或註解掉 `.desktop-menu .group ul li div > div` 的 `overflow: hidden;` 設定。

### 2. 修復 `MenuItem.js` 的圓角邊界 (Hover Aesthetics)
由於移除了父容器的 `overflow: hidden`，內部 `<a>` 或 `<button>` 元素在 hover 時產生的背景色將不再被父容器裁切，從而可能使外框失去圓角效果。
- 在 `themes/starter/components/MenuItem.js` 中，針對第二層選單的每一個 `<li>` 項目，判斷它是否為第一個或最後一個元素。
- 第一個元素加上 `rounded-t-md`。
- 最後一個元素加上 `rounded-b-md`。
- 這樣即使沒有 `overflow: hidden`，hover 反白時邊角依然會是圓的。

### 3. 第三層選單 (Submenu) 可見度確保
- 確保 MenuItem 中渲染第三層選單的容器（原定 `absolute left-full top-0 w-[220px]`）具備必要的 `z-index`（如有需要可補上 `z-50`），並且不會被行動版 (Mobile) 的 CSS 干擾。

## 邊界情況處理
- **行動版 (Mobile)**：由於行動版採用的是側邊導覽列 (Drawer) 搭配手風琴 (Accordion) 折疊效果，第三層選單並非「絕對定位向右展開」，而是「向下推移展開」。因此 `overflow` 設定的變更不應影響行動版的正常運作。
- **僅有一項子選單**：若第二層選單只有一個項目，該項目會同時獲得 `rounded-t-md` 與 `rounded-b-md`（即 `rounded-md`）。

## 安全與效能考量
純 CSS 與 HTML class 的變更，無額外效能負擔或安全性漏洞風險。
