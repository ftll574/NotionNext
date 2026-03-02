# OpenSpec AI 協作工作流

## 什麼是 OpenSpec？

OpenSpec 是一套**規範驅動的 AI 輔助開發工作流**。核心理念是：在寫程式碼之前，先用結構化的文件（proposal → spec → tasks）定義好要做什麼、為什麼做、怎麼做。

## 目錄結構

```
openspec/
├── config.yaml          # 專案 context + 規則
├── project.md           # 專案概述文件
├── AGENTS.md            # 本文件 — 工作流說明
├── specs/               # 功能規格書（由 proposal 精煉而來）
│   └── {feature-name}/
│       ├── spec.md      # 功能規格
│       └── tasks.md     # 實作任務清單
└── changes/             # 變更提案
    ├── {change-name}/
    │   └── proposal.md  # 變更提案文件
    └── archive/         # 已完成的提案
```

## 工作流程

### Step 1: 提出變更提案 (Proposal)

當你想加新功能或做修改時：

1. 告訴我：「我想要 [功能描述]」
2. 我會在 `openspec/changes/{feature-name}/proposal.md` 建立提案
3. 提案包含：
   - **目標**：要解決什麼問題
   - **方案**：怎麼做
   - **影響範圍**：哪些檔案/模組會被影響
   - **上游合併影響**：會不會造成未來合併 NotionNext 上游的困難
   - **SEO 影響**：對搜尋引擎最佳化的影響
   - **替代方案**：有沒有其他做法
   - **風險**：潛在問題

### Step 2: Review & 迭代

- 你 review 提案，提出修改
- 我們來回討論直到方案確定

### Step 3: 建立規格書 (Spec)

提案確認後：

1. 在 `openspec/specs/{feature-name}/spec.md` 建立詳細規格
2. 在 `openspec/specs/{feature-name}/tasks.md` 分解成具體任務

### Step 4: 執行

- 按照 tasks.md 逐一完成任務
- 每完成一個 task 就標記為 done

### Step 5: 歸檔

- 功能完成後，將 changes 中的 proposal 移到 `archive/`

## 使用範例

```
USER: 我想幫網站加一個產品目錄頁面

AI: 好，我來建立提案 →
    openspec/changes/product-catalog/proposal.md

USER: 看起來不錯，但我想加上過濾功能

AI: 更新提案，加入過濾器設計 →
    更新 proposal.md

USER: OK, approved

AI: 建立規格書 →
    openspec/specs/product-catalog/spec.md
    openspec/specs/product-catalog/tasks.md
    開始執行 task 1...
```

## 本專案的特殊規則

參見 `config.yaml` 中的 `rules` 區塊：

- **Proposal**：繁體中文撰寫、評估上游合併影響、指定影響主題、SEO 影響評估
- **Tasks**：單一任務不超過 2 小時、列出受影響檔案、包含驗證步驟
