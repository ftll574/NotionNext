# homepage-polish Specification

## Purpose
TBD - created by archiving change website-optimization-2025. Update Purpose after archive.
## Requirements
### Requirement: 首頁向下滾動箭頭精簡化
首頁的向下滾動提示箭頭 MUST NOT 重複出現超過 1 次。

#### Scenario: 僅 Hero section 顯示向下箭頭
- **WHEN** 使用者載入首頁
- **THEN** 只有 Hero section 底部有一個向下滾動箭頭，其餘 section 之間不再出現

### Requirement: 清除測試與不相關內容
首頁與新聞頁 MUST NOT 顯示測試文章或與產業無關的佔位圖片。

#### Scenario: 無 Test 文章出現
- **WHEN** 使用者瀏覽首頁的「最新塑膠行業動態」區塊
- **THEN** 不出現標題為「Test」的文章卡片

#### Scenario: 文章封面圖與產業相關
- **WHEN** 使用者瀏覽首頁或新聞頁的文章列表
- **THEN** 每篇文章的封面圖為塑膠原料、工廠、物流等產業相關圖片，而非太空星雲照片

### Requirement: 修正首頁破圖佔位色塊
「服務特色」卡片區塊下方 MUST NOT 出現未載入的圖片佔位或異常色塊。

#### Scenario: 無視覺瑕疵
- **WHEN** 使用者滾動到服務特色區塊下方
- **THEN** 不出現米色半圓佔位色塊，背景呈現正常

