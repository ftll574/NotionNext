## Why

鑫葳官網 (xin-wei.com) 上線後經全站分析，發現多處品質問題嚴重影響專業形象與 SEO 排名：測試內容外洩、footer 聯繫連結全為 null、文章封面使用無關太空照片、sitemap 包含錯誤/測試頁面、英文版無實際翻譯。這些問題需立即修正以維護企業信譽並改善搜尋引擎表現。

## What Changes

- 清理測試內容（刪除 Test 文章、移除不相關的星雲封面圖）
- 修正 footer 聯繫資訊（Google Maps query、tel、mailto 目前皆為 null）
- 優化 sitemap 排除 `/500`、`/auth`、`/test-scroll`、`/#` 等不應索引的路由
- 改善產品目錄頁 UX（加入產品圖片、減少 Notion 風格）
- 減少首頁重複的向下滾動箭頭（目前出現 6 次）
- 移除或替換 NoteForms 表單浮水印
- 加入 Schema.org 結構化資料
- 修正英文版 `/en` 頁面（暫時移除或完成翻譯）
- 個別化各頁面 OG Description

## Capabilities

### New Capabilities
- `seo-cleanup`: 修正 sitemap 排除清單、加入結構化資料、個別化 meta descriptions、處理文章 URL slug 化
- `contact-info-fix`: 修正 footer / 聯繫頁面的地址、電話、Email 資料，確保所有連結正確
- `homepage-polish`: 減少重複向下箭頭、修正破圖色塊、提升視覺層次

### Modified Capabilities
<!-- 目前 openspec/specs/ 為空，無既有 capability 需修改 -->

## Impact

- **Notion CMS**：需刪除 Test 文章、替換封面圖、補上聯繫資訊
- **`next-sitemap.config.js`**：加入排除路由清單
- **`themes/starter/`**：修改首頁向下箭頭元件、產品卡片樣式、footer 聯繫區塊
- **`pages/_document.js` / SEO 元件**：加入 Schema.org JSON-LD
- **`conf/contact.config.js`**：補上正確的公司聯繫資訊
- **上游合併影響**：低風險，修改集中在 starter 主題與設定檔
- **SEO 影響**：正面，修正 sitemap + 結構化資料將改善搜尋排名
