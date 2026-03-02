## Context

鑫葳官網基於 NotionNext v4.8.3 fork，使用 `starter` 主題，Notion 作為 CMS，部署在 Vercel。目前存在以下問題：

1. **Footer 聯繫資訊**：`STARTER_CONTACT_GOOGLE_ADDRESS` 設為公司名而非完整地址，導致 Google Maps query 失效。電話 href 因包含中文前綴「電話：」導致解析異常。Email 正確但 footer 區塊的 null 可能來自其他配置缺失。
2. **Sitemap**：`blog.config.js` 的 `SITEMAP_EXCLUDE` 已排除部分路由，但仍遺漏 `/500`、`/test-scroll`、`/%23`、`/category`、`/tag`。
3. **ScrollButton**：在 About、Features、Pricing、Blog、FAQ、Testimonials、Team、Contact 等 8 個元件中使用，每個 section 底部都放一個，首頁最多可出現 6+ 個箭頭。
4. **英文版**：`English` 連結來自 Notion MENU 設定，非硬編碼。需在 Notion CMS 刪除或在程式碼層處理。
5. **NoteForms 浮水印**：使用免費版 NoteForms 嵌入 iframe，浮水印在 iframe 內部，無法從外部 CSS 移除。

## Goals / Non-Goals

**Goals:**
- 修正所有聯繫資訊連結（Maps、電話、Email）
- 清理 sitemap 排除清單
- 將首頁 ScrollButton 從每個 section 移除，僅保留 Hero 的 FixedScrollButton
- 加入基礎 Schema.org 結構化資料（Organization）

**Non-Goals:**
- 文章 URL slug 化（影響太大，延後）
- 完整英文翻譯（延後）
- NoteForms 浮水印移除（需付費升級或替換表單方案，延後）
- 產品頁圖片/CTA 優化（需要收集實際產品照片，延後）

## Decisions

### 1. Google Maps 地址修正
用完整地址取代公司名：`STARTER_CONTACT_GOOGLE_ADDRESS` 改為 `244 新北市林口區湖北里10鄰17之20號`。

### 2. Sitemap 排除
直接在 `blog.config.js` 的 `SITEMAP_EXCLUDE` 陣列新增路由。簡單直接，不需要改 `next-sitemap.js`。

### 3. ScrollButton 移除策略
從 About、Features、Pricing、Blog、FAQ、Testimonials、Team 元件中移除 `<ScrollButton>` 和 `<FixedScrollButton>` 呼叫（保留 Hero 的 FixedScrollButton）。不刪除 ScrollButton 元件本身，以防未來需要。

### 4. Schema.org 結構化資料
在 `themes/starter/components/Footer.js` 或創建獨立的 `SchemaOrg.js` 元件，輸出 `<script type="application/ld+json">`。選擇在 starter 的 LayoutBase 中加入，避免修改全域 `_document.js`（減少上游衝突風險）。

### 5. 英文版處理
暫時在 Notion CMS 中移除 English 選單項目即可。不修改程式碼。

### 6. Test 文章和封面圖
純 CMS 操作，不涉及程式碼修改。在 Notion 中刪除 Test 文章、替換封面圖。

## Risks / Trade-offs

- **ScrollButton 移除**：部分使用者可能依賴箭頭進行導航，但實際上瀏覽器原生滾動已足夠。→ 保留回到頂部按鈕（BackToTopButton）不受影響。
- **Schema.org**：首次加入，需確保 JSON-LD 語法正確，否則 Google Search Console 會報錯。→ 用 Google Rich Results Test 驗證。
- **Sitemap 變更**：已被 Google 索引的排除頁面可能在一段時間後才會從搜尋結果消失。→ 無風險，這些頁面本來就不該被索引。
