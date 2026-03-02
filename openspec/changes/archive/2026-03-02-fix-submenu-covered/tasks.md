## 1. 移除不當的 Overflow 限制

- [x] 1.1 修改 `themes/starter/components/MenuList.js`，將 `<style jsx global>` 中的 `overflow: hidden` 移除。
- [x] 1.2 於本機運行 `npm run dev` 並透過瀏覽器懸停測試，確認第三層選單已能完整顯示不被裁切。

## 2. 圓角樣式修復 (Hover Aesthetics)

- [x] 2.1 修改 `themes/starter/components/MenuItem.js`，在渲染第二層選單時，傳入 `index` 以及 `length` 以判斷第一項與最後一項。
- [x] 2.2 針對第二層的選項，若是第一項，為 hover background 元素或 `<a>` / `<button>` 追加 `rounded-t-md`。
- [x] 2.3 若是最後一項，追加 `rounded-b-md`。
- [x] 2.4 測試滑鼠懸停於第二層菜單的頂部與底部項目，確認反白背景不會呈直角凸出選單框。

## 3. Z-Index 與行動版迴歸測試

- [x] 3.1 檢查第三層選單的 `<div>` 樣式是否需加上 `z-50` 以確保覆蓋下方頁面內容。
- [x] 3.2 使用 Chrome 開發者工具切換至行動版尺寸，測試漢堡選單展開、第二層選單折疊、第三層選單折疊，確認未受 `overflow` 修改的副作用影響。
