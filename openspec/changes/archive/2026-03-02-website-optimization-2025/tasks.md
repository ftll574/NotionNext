## 1. 聯繫資訊修正 (contact-info-fix)

- [x] 1.1 修正 `themes/starter/config.js` 中 `STARTER_CONTACT_GOOGLE_ADDRESS` 為完整地址
- [x] 1.2 驗證 Google Maps 連結在瀏覽器中可正確開啟地圖定位
- [x] 1.3 驗證電話 href 正確解析（確認 regex 能正確提取電話號碼）
- [x] 1.4 驗證 Email mailto 連結正確

## 2. Sitemap 清理 (seo-cleanup)

- [x] 2.1 在 `blog.config.js` 的 `SITEMAP_EXCLUDE` 新增 `/500`、`/test-scroll`、`/%23`、`/category`、`/tag`、`/links`
- [ ] 2.2 執行 `npm run postbuild` 或完整 build 後檢查 `public/sitemap.xml` 確認排除生效

## 3. 首頁 ScrollButton 精簡 (homepage-polish)

- [x] 3.1 從 `About.js` 移除 FixedScrollButton
- [x] 3.2 從 `Features.js` 移除 FixedScrollButton
- [x] 3.3 從 `Pricing.js` 移除 ScrollButton
- [x] 3.4 從 `Blog.js` 移除 ScrollButton
- [x] 3.5 從 `FAQ.js` 移除 ScrollButton
- [x] 3.6 從 `Testimonials.js` 移除 ScrollButton
- [x] 3.7 從 `Team.js` 移除 ScrollButton
- [x] 3.8 清除各檔案中未使用的 ScrollButton/FixedScrollButton import
- [ ] 3.9 本地 dev server 驗證首頁只剩 Hero 的向下箭頭

## 4. Schema.org 結構化資料 (seo-cleanup)

- [x] 4.1 建立 `themes/starter/components/SchemaOrg.js` 元件，輸出 Organization JSON-LD
- [x] 4.2 在 `themes/starter/index.js` LayoutBase 引入 SchemaOrg 元件
- [ ] 4.3 用 Google Rich Results Test 驗證 JSON-LD 語法正確

## 5. OG Description 個別化 (seo-cleanup)

- [x] 5.1 確認各頁面 meta description 已由 LayoutIndex / LayoutSlug / LayoutPostList 自動處理
- [x] 5.2 各頁面已有獨立 og:description（首頁、關於頁、產品頁、文章頁各不相同）

## 6. Notion CMS 操作 (手動)

- [ ] 6.1 刪除 Test 文章
- [ ] 6.2 替換「2025年3月」和「2025年4月」文章的封面圖為產業相關圖片
- [ ] 6.3 移除 Notion MENU 中的 English 連結
