# Proposal: 修復 Menu 產品目錄 Submenu 被遮住的問題

## Why
目前導覽列菜單中的第二層選單設定了 `overflow: hidden`，導致展開含有第三層菜單（Submenu）的項目（例如「產品介紹」）時，第三層菜單超出第二層選單範圍的部分會被裁切遮罩。這會造成使用者無法順利看到及點選所有產品項目，急需修補以恢復網站的正常導覽功能。

## What Changes
1. 移除 `themes/starter/components/MenuList.js` 的 `<style jsx global>` 內對第二層子菜單的 `overflow: hidden;` 設定。
2. 調整 `themes/starter/components/MenuItem.js`，將圓角樣式 (`rounded-md`、`rounded-t-md`、`rounded-b-md`) 確實套用到連結元素或其容器上，以取代原本透過 `overflow: hidden` 所達到的邊界裁切效果。
3. 確認第三層菜單具備足夠的 `z-index` 防止被其他元素重疊覆蓋。

## Capabilities

### New Capabilities
- `menu-interaction`: 規範 Navbar 的第二層與第三層選單的展開邏輯與可見度。

### Modified Capabilities

## Impact
- **檔案**： `themes/starter/components/MenuList.js`, `themes/starter/components/MenuItem.js`
- **上游合併影響**：低，因為變更僅集中在目前客製化的 `starter` 主題程式中，不涉及 NotionNext 核心庫與底層資料。
- **SEO 影響**：無，純粹前端樣式修正，DOM 樹不改變。
- **風險**：移除 `overflow: hidden` 後，須確保選項的 hover 背景色不會凸出選單外框的圓角。
