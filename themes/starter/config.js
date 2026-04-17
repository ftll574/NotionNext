/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 預設只展示Logo文字，如果設置了logo圖片，會在文字左側顯示圖標
  STARTER_LOGO: '/images/starter/logo/logo-04.svg', // 普通logo圖片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '/images/starter/logo/logo-04.svg', // 透明底淺色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 選單部分不在此處配置，請在Notion資料庫中添加MENU

  // 英雄區塊導航
  STARTER_HERO_ENABLE: true, // 開啟英雄區
  STARTER_HERO_TITLE_1: '專業塑膠原料供應商',
  STARTER_HERO_TITLE_2: '30年產業經驗，值得信賴的合作夥伴',
  // 英雄區兩個按鈕，如果TEXT留空則隱藏按鈕
  STARTER_HERO_BUTTON_1_TEXT: '產品目錄',
  STARTER_HERO_BUTTON_1_URL: '/products',
  STARTER_HERO_BUTTON_2_TEXT: '聯繫我們',
  STARTER_HERO_BUTTON_2_URL: '#contact-section',
  STARTER_HERO_BUTTON_2_ICON: '', // 英雄區按鈕2的圖標，不需要則留空

  // 英雄區配圖，如需隱藏，改為空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: 'images/starter/background/home.png', // 產品預覽圖 ，預設讀取public目錄下圖片
  STARTER_HERO_PREVIEW_IMAGES: 'images/starter/background/home.png', // 產品預覽圖 ，預設讀取public目錄下圖片
  STARTER_HERO_BANNER_IMAGE: '', // hero區下方的全寬圖

  // 頂部右側導航按鈕
  STARTER_NAV_BUTTON_ENABLE: false, // 是否啟用導航按鈕
  STARTER_NAV_BUTTON_1_TEXT: '',
  STARTER_NAV_BUTTON_1_URL: '',

  STARTER_NAV_BUTTON_2_TEXT: '',
  STARTER_NAV_BUTTON_2_URL: '',

  // 特性區塊
  STARTER_FEATURE_ENABLE: true,
  STARTER_FEATURE_TITLE: '高品質塑膠原料',
  STARTER_FEATURE_TEXT_1: '多元化的產品線滿足各種需求',
  STARTER_FEATURE_TEXT_2:
    '從通用塑料到特種工程塑料，我們提供全面的塑膠原料解決方案',

  STARTER_FEATURE_1_TITLE_1: '嚴選品質保證',
  STARTER_FEATURE_1_TEXT_1:
    '採用SGS認證標準檢測流程，嚴控每批原料物性穩定，提供可追溯品質報告，杜絕生產隱患',
  STARTER_FEATURE_1_BUTTON_TEXT: '品質管理系統',
  STARTER_FEATURE_1_BUTTON_URL: '/products',

  STARTER_FEATURE_2_TITLE_1: '全系列產品供應',
  STARTER_FEATURE_2_TEXT_1:
    '涵蓋TPE、PVC塑料等通用塑料、彈性塑膠、工程塑料，可依客戶需求調配特性，提供客製化配方',
  STARTER_FEATURE_2_BUTTON_TEXT: '瀏覽產品系列',
  STARTER_FEATURE_2_BUTTON_URL: '/products',

  STARTER_FEATURE_3_TITLE_1: '技術支援服務',
  STARTER_FEATURE_3_TEXT_1:
    '專業工程師團隊提供材料選型建議、應用問題診斷，協助客戶解決加工製程難題，提供物性數據與加工建議',
  STARTER_FEATURE_3_BUTTON_TEXT: '技術諮詢服務',
  STARTER_FEATURE_3_BUTTON_URL: '#contact-section',

  STARTER_FEATURE_4_TITLE_1: '靈活庫存管理',
  STARTER_FEATURE_4_TEXT_1:
    '建立完善供應鏈體系，常規料型現貨供應，特殊需求快速調度，縮短交期至7-10個工作日',
  STARTER_FEATURE_4_BUTTON_TEXT: '了解配送服務',
  STARTER_FEATURE_4_BUTTON_URL: '#contact-section',

  // 首頁ABOUT區塊
  STARTER_ABOUT_ENABLE: true, // ABOUT區塊開關
  STARTER_ABOUT_TITLE: '鑫葳團隊服務業界30年，專注塑膠原料行業',
  STARTER_ABOUT_TEXT:
    '鑫葳塑膠專注於高品質塑膠原料的供應與服務。<br/><br/>憑藉多年的行業經驗和穩定的供應鏈管理，我們為電子、汽車、家電等行業提供可靠的原材料支持，成為眾多製造企業的長期合作夥伴。',
  STARTER_ABOUT_BUTTON_TEXT: '了解更多',
  STARTER_ABOUT_BUTTON_URL: '/about',
  STARTER_ABOUT_IMAGE_1: 'images/starter/meterial/meterial.jpg',
  STARTER_ABOUT_IMAGE_2: 'images/starter/delivery/delivery.jpg',
  STARTER_ABOUT_TIPS_1: '1000+',
  STARTER_ABOUT_TIPS_2: '長期客戶',
  STARTER_ABOUT_TIPS_3: '品質穩定',

  // 首頁價格區塊
  STARTER_PRICING_ENABLE: true, // 價格區塊開關
  STARTER_PRICING_TITLE: '塑膠原料系列',
  STARTER_PRICING_TEXT_1: '專業級塑膠原料供應',
  STARTER_PRICING_TEXT_2: '三十年經驗，提供優質塑膠原料，滿足各行業製造需求',

  // 產品系列1
  STARTER_PRICING_1_TITLE: '通用型塑膠',
  STARTER_PRICING_1_IMAGE: 'images/starter/background/home2.jpg',
  STARTER_PRICING_1_PRICE: '量大優惠',
  STARTER_PRICING_1_PRICE_CURRENCY: '',
  STARTER_PRICING_1_PRICE_PERIOD: '',
  STARTER_PRICING_1_HEADER: '適用於一般消費品製造',
  STARTER_PRICING_1_FEATURES:
    'PP聚丙烯｜射出級/擠出級,PE聚乙烯｜高/低密度,PS聚苯乙烯｜GPPS/HIPS,ABS｜各色標準料/改性料,提供物性數據與加工建議',
  STARTER_PRICING_1_BUTTON_TEXT: '立即詢價',
  STARTER_PRICING_1_BUTTON_URL: '#contact-section',

  // 產品系列2 (彈性塑膠)
  STARTER_PRICING_2_TITLE: '彈性塑膠',
  STARTER_PRICING_2_IMAGE: 'images/starter/background/home2.jpg',
  STARTER_PRICING_2_PRICE: '客製配方',
  STARTER_PRICING_2_PRICE_CURRENCY: '',
  STARTER_PRICING_2_PRICE_PERIOD: '',
  STARTER_PRICING_2_TAG: '熱銷',
  STARTER_PRICING_2_HEADER: '適用於需要彈性與韌性的應用場景',
  STARTER_PRICING_2_FEATURES:
    'TPE熱塑性彈性體｜多種硬度選擇,TPU聚氨酯彈性體｜優異耐磨性,PVC軟質塑膠｜符合環保標準,TPV彈性材料｜耐化學良好,提供物性數據與加工建議',
  STARTER_PRICING_2_BUTTON_TEXT: '了解更多',
  STARTER_PRICING_2_BUTTON_URL: '#contact-section',

  // 產品系列3
  STARTER_PRICING_3_TITLE: '工程級塑料',
  STARTER_PRICING_3_IMAGE: 'images/starter/background/home2.jpg',
  STARTER_PRICING_3_PRICE: '經濟實惠',
  STARTER_PRICING_3_PRICE_CURRENCY: '',
  STARTER_PRICING_3_PRICE_PERIOD: '',
  STARTER_PRICING_3_TAG: '高性能',
  STARTER_PRICING_3_HEADER: '適用於高要求工業應用',
  STARTER_PRICING_3_FEATURES:
    'PA尼龍系列｜PA6/PA66/改性,PC聚碳酸酯｜透明/阻燃級,POM聚甲醛｜高剛性/耐磨,PBT聚對苯二甲酸丁二醇酯,專業技術支援與物性測試',
  STARTER_PRICING_3_BUTTON_TEXT: '技術諮詢',
  STARTER_PRICING_3_BUTTON_URL: '#contact-section',

  // 服務產業信任指標區塊
  STARTER_INDUSTRIES_ENABLE: true,
  STARTER_INDUSTRIES_TITLE: '服務產業',
  STARTER_INDUSTRIES_TEXT_1: '跨產業的可靠原料夥伴',
  STARTER_INDUSTRIES_TEXT_2:
    '30 年深耕，廣獲電子、汽車、家電、醫療、包裝等產業客戶信賴',
  STARTER_INDUSTRIES_STATS: [
    { value: '30+', label: '年產業經驗' },
    { value: '1000+', label: '長期合作客戶' },
    { value: '50+', label: '原料品項' },
    { value: '7-10', label: '工作日交期' }
  ],
  STARTER_INDUSTRIES_ITEMS: [
    {
      name: '電子',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="100%" height="100%"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m16-6h-2m2 6h-2M7 7h10v10H7z"/></svg>'
    },
    {
      name: '汽車',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="100%" height="100%"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 17h14l-1.5-6a2 2 0 00-1.94-1.5H8.44A2 2 0 006.5 11L5 17zm0 0v2m14-2v2M7 14h.01M17 14h.01"/></svg>'
    },
    {
      name: '家電',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="100%" height="100%"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 4h14v16H5V4zm2 3h10M7 11h10M7 15h6"/></svg>'
    },
    {
      name: '醫療',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="100%" height="100%"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v16m-8-8h16"/></svg>'
    },
    {
      name: '包裝',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="100%" height="100%"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4v10l8 4 8-4V7zM4 7l8 4m0 0l8-4m-8 4v10"/></svg>'
    },
    {
      name: '工業',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="100%" height="100%"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 20h18M5 20V10l5 3V10l5 3V8l4 2v10"/></svg>'
    }
  ],

  // 首頁用戶評價區塊
  STARTER_TESTIMONIALS_ENABLE: false, // 評價區塊開關
  STARTER_TESTIMONIALS_TITLE: '客戶評價',
  STARTER_TESTIMONIALS_TEXT_1: '客戶對我們的評價',
  STARTER_TESTIMONIALS_TEXT_2: '來自各行業客戶的真實反饋',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 評分圖標

  // 這裡不支援CONFIG和環境變數，需要一一修改此處程式碼。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_CONTENT:
        '通過與這家供應商的合作，我們顯著提高了產品質量，同時降低了材料不穩定導致的生產問題。他們的技術團隊非常專業，提供了很多有價值的建議。',
      STARTER_TESTIMONIALS_ITEM_AVATAR: '/images/testimonials/client1.jpg',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '李鎮宇',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '電子產品製造商',
      STARTER_TESTIMONIALS_ITEM_RATING: 5,
      STARTER_TESTIMONIALS_ITEM_URL: '#'
    },
    {
      STARTER_TESTIMONIALS_ITEM_CONTENT:
        '作為汽車零部件生產商，我們對原材料的要求非常嚴格。這家公司不僅能提供符合我們標準的高品質材料，還能根據我們的特殊需求進行調整。',
      STARTER_TESTIMONIALS_ITEM_AVATAR: '/images/testimonials/client2.jpg',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '李智宇',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '汽車零部件製造商',
      STARTER_TESTIMONIALS_ITEM_RATING: 5,
      STARTER_TESTIMONIALS_ITEM_URL: '#'
    },
    {
      STARTER_TESTIMONIALS_ITEM_CONTENT:
        '我們與該供應商合作已超過5年，他們始終保持穩定的供應和優質的服務。即使在原材料短缺的時期，他們也能確保我們的訂單優先得到滿足。',
      STARTER_TESTIMONIALS_ITEM_AVATAR: '/images/testimonials/client3.jpg',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '李綺',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '家用電器製造商',
      STARTER_TESTIMONIALS_ITEM_RATING: 5,
      STARTER_TESTIMONIALS_ITEM_URL: '#'
    }
  ],

  // FAQ 常見問題模組
  STARTER_FAQ_ENABLE: true, // 常見問題模組開關
  STARTER_FAQ_TITLE: '常見問題',
  STARTER_FAQ_TEXT_1: '您可能想了解的問題',
  STARTER_FAQ_TEXT_2: '關於我們產品和服務的常見問題解答',

  // 問題1
  STARTER_FAQ_1_QUESTION: '你們提供哪些類型的塑膠原料？',
  STARTER_FAQ_1_ANSWER:
    '我們提供各種類型的塑膠原料，包括通用塑料（PP、PE、PS等）、工程塑料（PA、PC、POM等）。我們可以根據客戶的具體需求提供定制解決方案。',

  // 問題2
  STARTER_FAQ_2_QUESTION: '如何確保原料的品質？',
  STARTER_FAQ_2_ANSWER:
    '我們與全球知名供應商建立了長期穩定的合作關係，所有原料均經過嚴格的品質檢測流程。我們擁有專業的檢測設備和團隊，確保每批原料符合國際標準和客戶要求。',

  // 問題3
  STARTER_FAQ_3_QUESTION: '訂單交付時間是多久？',
  STARTER_FAQ_3_ANSWER:
    '常備塑料產品通常在確認訂單後1-3個工作日內交付，視訂單量和運輸方式而定。針對長期合作客戶，我們提供庫存預留服務，可以實現更快的交付時間。',

  // 問題4
  STARTER_FAQ_4_QUESTION: '你們是否提供樣品測試？',
  STARTER_FAQ_4_ANSWER:
    '是的，我們提供樣品測試服務。客戶可以在下大訂單前申請樣品進行測試，確保材料符合生產需求。部分特殊材料可能會收取樣品費用，具體請諮詢我們的銷售團隊。',

  // 團隊成員區塊
  STARTER_TEAM_ENABLE: false, // 團隊成員區塊開關
  STARTER_TEAM_TITLE: '專業團隊',
  STARTER_TEAM_TEXT_1: '我們的核心團隊',
  STARTER_TEAM_TEXT_2: '專業的團隊為您提供優質的產品和服務',

  // 這裡不支援CONFIG和環境變數，需要一一修改此處程式碼。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/team/ceo.jpg',
      STARTER_TEAM_ITEM_NICKNAME: '李憲明',
      STARTER_TEAM_ITEM_DESCRIPTION: '創始人兼首席執行官',
      STARTER_TEAM_ITEM_URL: '#'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/team/technical.jpg',
      STARTER_TEAM_ITEM_NICKNAME: '劉工程師',
      STARTER_TEAM_ITEM_DESCRIPTION: '技術總監',
      STARTER_TEAM_ITEM_URL: '#'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/team/sales.jpg',
      STARTER_TEAM_ITEM_NICKNAME: '林經理',
      STARTER_TEAM_ITEM_DESCRIPTION: '銷售總監',
      STARTER_TEAM_ITEM_URL: '#'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/team/quality.jpg',
      STARTER_TEAM_ITEM_NICKNAME: '黃主管',
      STARTER_TEAM_ITEM_DESCRIPTION: '品質控制主管',
      STARTER_TEAM_ITEM_URL: '#'
    }
  ],

  // 文章歸檔頁面
  STARTER_ARCHIVE_ENABLE: true, // 是否啟用歸檔頁面
  STARTER_ARCHIVE_TITLE: '塑料最新報價', // 歸檔頁面標題
  STARTER_ARCHIVE_DESCRIPTION: '瀏覽我們的塑料原料最新報價及行業資訊', // 歸檔頁面描述
  STARTER_ARCHIVE_POSTS_PER_PAGE: 12, // 每頁顯示的文章數量
  STARTER_ARCHIVE_GRID_COLUMNS: 3, // 網格佈局列數 (手機端1列，平板2列，電腦根據此設置)
  STARTER_ARCHIVE_SHOW_CATEGORY_FILTER: true, // 是否顯示類別過濾器
  STARTER_ARCHIVE_DEFAULT_CATEGORY: 'all', // 預設選中的類別，'all'表示顯示全部

  // 文章卡片樣式
  STARTER_ARCHIVE_CARD_STYLE: 'modern', // 卡片樣式: 'modern', 'simple', 'compact'
  STARTER_ARCHIVE_SHOW_COVER: true, // 是否顯示文章封面圖
  STARTER_ARCHIVE_SHOW_SUMMARY: true, // 是否顯示文章摘要
  STARTER_ARCHIVE_SHOW_DATE: true, // 是否顯示文章日期
  STARTER_ARCHIVE_SHOW_CATEGORY_BADGE: true, // 是否顯示類別標籤
  STARTER_ARCHIVE_ANIMATION: true, // 是否啟用滾動動畫效果

  // 部落格文章區塊
  STARTER_BLOG_ENABLE: true, // 首頁部落格區塊開關
  STARTER_BLOG_TITLE: '行業資訊',
  STARTER_BLOG_COUNT: 3, // 首頁部落格區塊預設展示前3篇文章
  STARTER_BLOG_TEXT_1: '最新塑膠行業動態',
  STARTER_BLOG_TEXT_2: '了解塑膠原料市場趨勢和應用案例',

  // 聯絡模組
  STARTER_CONTACT_ENABLE: true, // 聯絡模組開關
  STARTER_CONTACT_TITLE: '聯繫我們',
  STARTER_CONTACT_TEXT_1: '隨時為您服務',
  STARTER_CONTACT_TEXT_2: '如有任何問題或合作意向，請隨時聯繫我們',

  // 地址
  STARTER_CONTACT_ADDRESS_TITLE: '公司地址',
  STARTER_CONTACT_GOOGLE_ADDRESS: '244新北市林口區湖北里10鄰17之20號',
  STARTER_CONTACT_ADDRESS_TEXT: '244 新北市林口區湖北里10鄰17之20號',

  // 電話
  STARTER_CONTACT_PHONE_TITLE: '聯繫電話與傳真',
  STARTER_CONTACT_PHONE_TEXT: '電話：(02) 2602-6961~2',
  STARTER_CONTACT_FAX_TEXT: '傳真：(02) 2602-6967',
  // 郵箱
  STARTER_CONTACT_EMAIL_TITLE: '電子郵箱',
  STARTER_CONTACT_EMAIL_TEXT: 'tw.xinwei@gmail.com',

  // 營業時間（支援多行；以 \n 分隔）
  STARTER_CONTACT_HOURS_TITLE: '營業時間',
  STARTER_CONTACT_HOURS: '週一至週五: 8:00 - 17:00\n週六、日: 休息',

  // 外部留言表單連結 (可選)
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/wtefer',

  // 合作夥伴的圖標
  STARTER_BRANDS_ENABLE: false, // 合作夥伴開關
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN:
    '專業塑膠原料供應商，為您的生產提供優質材料與全方位服務。',

  // 頁尾三列選單組
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: '關於我們',
      LINK_GROUP: [
        { TITLE: '公司首頁', URL: '/#home' },
        { TITLE: '關於鑫葳', URL: '/about' },
        {
          TITLE: '員工招募',
          URL: 'https://www.104.com.tw/company/1a2x6blwrp?jobsource=google'
        }
      ]
    },
    {
      TITLE: '泛用塑膠特性',
      LINK_GROUP: [
        {
          TITLE: 'PE 特性',
          URL: '/pe-feature'
        },
        {
          TITLE: 'PP 特性',
          URL: '/pp-feature'
        },
        {
          TITLE: 'PS 特性',
          URL: '/ps-feature'
        },
        {
          TITLE: 'PVC 特性',
          URL: '/pvc-feature'
        },
        {
          TITLE: 'ABS 特性',
          URL: '/abs-feature'
        }
      ]
    },
    {
      TITLE: '產品目錄',
      LINK_GROUP: [
        {
          TITLE: '所有產品',
          URL: '/products'
        },
        {
          TITLE: 'U-Pellet台灣優粒子TPE',
          URL: '/products#u-pellet-tpe'
        },
        {
          TITLE: '南亞系列',
          URL: '/products#nan-yia'
        },
        {
          TITLE: '台化系列',
          URL: '/products#formosa-chemical'
        },
        {
          TITLE: '台化PP',
          URL: '/products#formosa-chemical-pp'
        },
        {
          TITLE: '李長榮PP',
          URL: '/products#lcy-pp'
        },
        {
          TITLE: '台塑PP',
          URL: '/products#formosa-plastic-pp'
        },
        {
          TITLE: '奇美系列',
          URL: '/products#chi-mei'
        },
        {
          TITLE: '台聚系列',
          URL: '/products#formosa-polymer'
        },
        {
          TITLE: '台塑系列',
          URL: '/products#formosa-plastic'
        },
        {
          TITLE: '其他',
          URL: '/products#other'
        }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '法律聲明',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '',

  // 404頁面的提示語
  STARTER_404_TITLE: '我們似乎找不到您要找的頁面。',
  STARTER_404_TEXT: '抱歉！您要查找的頁面不存在。可能已經移動或刪除。',
  STARTER_404_BACK: '回到主頁',

  // 頁面底部的行動呼籲模組
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: '需要專業的塑膠原料解決方案？',
  STARTER_CTA_TITLE_2: '立即聯繫我們',
  STARTER_CTA_DESCRIPTION: '我們的專業團隊隨時為您提供技術諮詢和產品建議',
  STARTER_CTA_BUTTON: true,
  STARTER_CTA_BUTTON_URL: '#contact',
  STARTER_CTA_BUTTON_TEXT: '免費獲取諮詢',

  STARTER_POST_REDIRECT_ENABLE: true, // 預設開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://xin-wei.com/', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false, // 是否開啟郵件訂閱 請先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp

  STARTER_MENU_ARCHIVE: true
}
export default CONFIG
