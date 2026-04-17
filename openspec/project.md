# 鑫葳貿易 NotionNext 企業官網

## 概述

本專案為 [NotionNext](https://github.com/tangly1024/NotionNext) v4.8.3 的客製化 fork，用於建構鑫葳貿易有限公司的企業官方網站。以 Notion 作為 CMS 後台，部署於 Vercel。

**域名**：https://xin-wei.com  
**公司**：鑫葳貿易有限公司 — 專業塑膠原料供應商，30年產業經驗  
**產品線**：PP聚丙烯、PE聚乙烯、PS聚苯乙烯、ABS 等全系列塑膠原料

## Tech Stack

| 層級 | 技術 | 版本 |
|------|------|------|
| Framework | Next.js (Pages Router) | 14.2.4 |
| UI | React | 18.x |
| Styling | Tailwind CSS | 3.x |
| CMS | Notion API (notion-client + react-notion-x) | 6.15.6 / 6.16.0 |
| Auth | Clerk (已停用) | — |
| Deployment | Vercel | — |
| Language | JavaScript / TypeScript (漸進式) | — |
| Linting | ESLint + Prettier | — |
| Testing | Jest | — |

## 專案結構

```
NotionNext/
├── pages/              # Next.js 頁面路由
├── themes/             # 多主題系統（21 個主題）
│   └── starter/        # ← 目前使用的主題
├── components/         # 共用 React 元件
├── lib/                # 工具函式、Notion API 邏輯
├── conf/               # 模組化設定檔
│   ├── analytics.config.js
│   ├── comment.config.js
│   ├── contact.config.js
│   ├── post.config.js
│   ├── image.config.js
│   ├── font.config.js
│   └── ...
├── blog.config.js      # 主設定檔（env vars 可覆寫）
├── next.config.js      # Next.js 設定
├── tailwind.config.js  # Tailwind 設定（含品牌色系）
├── public/             # 靜態資源
├── styles/             # 全域樣式
└── openspec/           # OpenSpec 規範目錄
```

## 品牌色系

- **Primary**: `#00629B`（藍色系，漸層至 `#0096db`）
- **Secondary**: `#FF7E00`（橘色系，漸層至 `#FFAB33`）
- 日間背景：`#ffffff`
- 夜間背景：`#111827`

## 關鍵慣例

### 程式碼風格（Prettier）
- 單引號、無分號
- trailingComma: none
- arrowParens: avoid
- printWidth: 80
- JSX 單引號

### SEO
- Canonical URL prefix: `https://xin-wei.com`
- Sitemap 自動生成（next-sitemap）
- Google Search Console 已驗證
- CSP / 安全 headers 已配置

### 主題系統
- 透過 `blog.config.js` 的 `THEME` 切換
- Webpack alias `@theme-components` 動態對應到所選主題目錄
- 目前使用 `starter` 主題

### 分支策略
- `main` — 對應上游 NotionNext 的乾淨版本
- `zhenyu/feature/xinwei_design` — 鑫葳客製化分支

## 注意事項

1. **上游同步風險**：NotionNext 仍在積極開發，合併上游更新需注意檔案結構變動
2. **主題耦合**：客製化盡量集中在 `starter` 主題和 `conf/` 設定檔中，減少對核心程式碼的修改
3. **環境變數**：大部分設定可透過 Vercel env vars 覆寫，不需要改程式碼
