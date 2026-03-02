# seo-cleanup Specification

## Purpose
TBD - created by archiving change website-optimization-2025. Update Purpose after archive.
## Requirements
### Requirement: Sitemap 排除非內容頁面
sitemap.xml MUST NOT 包含錯誤頁面、測試頁面、已停用功能頁面或 hash 路由。

#### Scenario: 排除錯誤與測試路由
- **WHEN** sitemap.xml 被產生
- **THEN** 不包含 `/500`、`/auth`、`/test-scroll`、`/%23`、`/category`、`/tag` 等非內容路由

### Requirement: Schema.org 結構化資料
首頁 MUST 包含 Organization 和 LocalBusiness 的 JSON-LD 結構化資料，以提升 Google Rich Snippets 呈現。

#### Scenario: 首頁包含 Organization schema
- **WHEN** 使用者載入首頁
- **THEN** HTML 中包含 `<script type="application/ld+json">` 標籤，內含 Organization 類型資料（名稱、地址、電話、logo）

#### Scenario: 產品頁包含 Product schema
- **WHEN** 使用者載入任一產品詳情頁
- **THEN** HTML 中包含 Product 類型的結構化資料（名稱、描述、分類）

### Requirement: 個別化 OG Description
每個頁面的 `og:description` meta 標籤 MUST 反映該頁面的實際內容，不得所有頁面共用同一段描述。

#### Scenario: 不同頁面有不同 OG Description
- **WHEN** 分別檢視首頁、關於頁、產品頁的 HTML
- **THEN** 三個頁面的 `<meta property="og:description">` 內容各不相同

### Requirement: 英文版路由處理
`/en` 路由若無完整英文內容，MUST NOT 對使用者可見，且不應被搜尋引擎索引。

#### Scenario: 英文版未完成時隱藏導覽連結
- **WHEN** 英文內容尚未翻譯完成
- **THEN** 導覽列不顯示 "English" 連結，且 `/en` 頁面回傳 `noindex` meta 標籤

