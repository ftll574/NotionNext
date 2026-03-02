## ADDED Requirements

### Requirement: Footer 聯繫連結正確性
Footer 中的 Google Maps、電話、Email 連結 MUST 包含正確的公司資訊，不得為 null 或空值。

#### Scenario: Google Maps 連結可正常開啟
- **WHEN** 使用者點擊 footer 的「在 Google 地圖查看」連結
- **THEN** 開啟 Google Maps 並定位到公司地址「244 新北市林口區湖北里10鄰17之20號」

#### Scenario: 電話連結可正常撥打
- **WHEN** 使用者點擊 footer 的「立即撥打」連結
- **THEN** 觸發撥號動作至 `(02) 2602-6961`，`href` 屬性為 `tel:02-2602-6961`

#### Scenario: Email 連結可正常寄信
- **WHEN** 使用者點擊 footer 的「寄送郵件」連結
- **THEN** 開啟郵件客戶端，收件人為 `tw.xinwei@gmail.com`

### Requirement: 聯繫表單無第三方浮水印
聯繫表單 MUST NOT 顯示「Made with NoteForms」或其他第三方服務的浮水印。

#### Scenario: 表單無浮水印
- **WHEN** 使用者瀏覽聯繫表單區塊
- **THEN** 表單區塊內不出現任何第三方品牌標誌或連結
