/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '/images/starter/logo/logo-04.svg', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '/images/starter/logo/logo-04.svg', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: '專業塑膠原料供應商',
  STARTER_HERO_TITLE_2: '30年行業經驗，值得信賴的合作夥伴',
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: '產品目錄',
  STARTER_HERO_BUTTON_1_URL: '/products',
  STARTER_HERO_BUTTON_2_TEXT: '聯繫我們',
  STARTER_HERO_BUTTON_2_URL: '#contact',
  STARTER_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: 'images/starter/background/home.png', // 产品预览图 ，默认读取public目录下图片
  STARTER_HERO_PREVIEW_IMAGES: 'images/starter/background/home.png,images/starter/background/home3.jpg,images/starter/background/home4.jpg', // 产品预览图 ，默认读取public目录下图片
  STARTER_HERO_BANNER_IMAGE: '', // hero区下方的全宽图

  // 顶部右侧导航按钮
  STARTER_NAV_BUTTON_ENABLE: false, // 是否启用导航按钮
  STARTER_NAV_BUTTON_1_TEXT: '',
  STARTER_NAV_BUTTON_1_URL: '',

  STARTER_NAV_BUTTON_2_TEXT: '', 
  STARTER_NAV_BUTTON_2_URL: '',

  // 特性区块
  STARTER_FEATURE_ENABLE: true,
  STARTER_FEATURE_TITLE: '高品質塑膠原料',
  STARTER_FEATURE_TEXT_1: '多元化的產品線滿足各種需求',
  STARTER_FEATURE_TEXT_2: '從通用塑料到特種工程塑料，我們提供全面的塑膠原料解決方案',

  STARTER_FEATURE_1_TITLE_1: '嚴選品質保證',
  STARTER_FEATURE_1_TEXT_1: '採用SGS認證標準檢測流程，嚴控每批原料物性穩定，提供可追溯品質報告，杜絕生產隱患',
  STARTER_FEATURE_1_BUTTON_TEXT: '品質管理系統',
  STARTER_FEATURE_1_BUTTON_URL: '/quality',

  STARTER_FEATURE_2_TITLE_1: '全系列產品供應',
  STARTER_FEATURE_2_TEXT_1: '涵蓋PE、PP、PS、ABS等通用塑料及工程塑料，可依客戶需求調配特性，提供客製化配方',
  STARTER_FEATURE_2_BUTTON_TEXT: '瀏覽產品系列',
  STARTER_FEATURE_2_BUTTON_URL: '/products',

  STARTER_FEATURE_3_TITLE_1: '技術支援服務',
  STARTER_FEATURE_3_TEXT_1: '專業工程師團隊提供材料選型建議、應用問題診斷，協助客戶解決加工製程難題',
  STARTER_FEATURE_3_BUTTON_TEXT: '技術諮詢服務',
  STARTER_FEATURE_3_BUTTON_URL: '#contact',

  STARTER_FEATURE_4_TITLE_1: '靈活庫存管理',
  STARTER_FEATURE_4_TEXT_1: '建立完善供應鏈體系，常規料型現貨供應，特殊需求快速調度，縮短交期至7-10個工作日',
  STARTER_FEATURE_4_BUTTON_TEXT: '了解配送服務',
  STARTER_FEATURE_4_BUTTON_URL: '#contact',

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: '鑫葳團隊服務業界30年，專注塑膠原料行業',
  STARTER_ABOUT_TEXT: '鑫葳塑膠專注於高品質塑膠原料的供應與服務。<br/><br/>憑藉多年的行業經驗和穩定的供應鏈管理，我們為電子、汽車、家電等行業提供可靠的原材料支持，成為眾多製造企業的長期合作夥伴。',
  STARTER_ABOUT_BUTTON_TEXT: '了解更多',
  STARTER_ABOUT_BUTTON_URL: '/about',
  STARTER_ABOUT_IMAGE_1: 'images/starter/meterial/meterial.jpg',
  STARTER_ABOUT_IMAGE_2: 'images/starter/delivery/delivery.jpg',
  STARTER_ABOUT_TIPS_1: '1000+',
  STARTER_ABOUT_TIPS_2: '長期客戶',
  STARTER_ABOUT_TIPS_3: '品質穩定',

  // 首页价格区块
  STARTER_PRICING_ENABLE: true, // 价格区块开关
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
  STARTER_PRICING_1_FEATURES: 'PP聚丙烯｜射出級/擠出級,PE聚乙烯｜高/低密度,PS聚苯乙烯｜GPPS/HIPS,ABS｜各色標準料/改性料,提供物性數據與加工建議',
  STARTER_PRICING_1_BUTTON_TEXT: '立即詢價',
  STARTER_PRICING_1_BUTTON_URL: '/quote',

  // 產品系列2 (彈性塑膠)
  STARTER_PRICING_2_TITLE: '彈性塑膠',
  STARTER_PRICING_2_IMAGE: 'images/starter/background/home2.jpg',
  STARTER_PRICING_2_PRICE: '經濟實惠',
  STARTER_PRICING_2_PRICE_CURRENCY: '',
  STARTER_PRICING_2_PRICE_PERIOD: '',
  STARTER_PRICING_2_TAG: '熱銷',
  STARTER_PRICING_2_HEADER: '適用於需要彈性與韌性的應用場景',
  STARTER_PRICING_2_FEATURES: 'TPE熱塑性彈性體｜多種硬度選擇,TPU聚氨酯彈性體｜優異耐磨性,PVC軟質塑膠｜符合環保標準,矽膠類彈性材料｜耐高溫應用,熱塑性橡膠｜良好回彈性能,提供物性測試報告與加工建議',
  STARTER_PRICING_2_BUTTON_TEXT: '了解更多',
  STARTER_PRICING_2_BUTTON_URL: '/flexible-materials',

  // 產品系列2
  STARTER_PRICING_3_TITLE: '工程級塑料',
  STARTER_PRICING_3_IMAGE: 'images/starter/background/home2.jpg',
  STARTER_PRICING_3_PRICE: '客製配方',
  STARTER_PRICING_3_PRICE_CURRENCY: '',
  STARTER_PRICING_3_PRICE_PERIOD: '',
  STARTER_PRICING_3_TAG: '高性能',
  STARTER_PRICING_3_HEADER: '適用於高要求工業應用',
  STARTER_PRICING_3_FEATURES: 'PA尼龍系列｜PA6/PA66/改性,PC聚碳酸酯｜透明/阻燃級,POM聚甲醛｜高剛性/耐磨,PBT聚對苯二甲酸丁二醇酯,專業技術支援與物性測試',
  STARTER_PRICING_3_BUTTON_TEXT: '技術諮詢',
  STARTER_PRICING_3_BUTTON_URL: '/quote',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: false, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: '客戶評價',
  STARTER_TESTIMONIALS_TEXT_1: '客戶對我們的評價',
  STARTER_TESTIMONIALS_TEXT_2: '來自各行業客戶的真實反饋',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_CONTENT: '通過與這家供應商的合作，我們顯著提高了產品質量，同時降低了材料不穩定導致的生產問題。他們的技術團隊非常專業，提供了很多有價值的建議。',
      STARTER_TESTIMONIALS_ITEM_AVATAR: '/images/testimonials/client1.jpg',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '李鎮宇',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '電子產品製造商',
      STARTER_TESTIMONIALS_ITEM_RATING: 5,
      STARTER_TESTIMONIALS_ITEM_URL: '#'
    },
    {
      STARTER_TESTIMONIALS_ITEM_CONTENT: '作為汽車零部件生產商，我們對原材料的要求非常嚴格。這家公司不僅能提供符合我們標準的高品質材料，還能根據我們的特殊需求進行調整。',
      STARTER_TESTIMONIALS_ITEM_AVATAR: '/images/testimonials/client2.jpg',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '李智宇',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '汽車零部件製造商',
      STARTER_TESTIMONIALS_ITEM_RATING: 5,
      STARTER_TESTIMONIALS_ITEM_URL: '#'
    },
    {
      STARTER_TESTIMONIALS_ITEM_CONTENT: '我們與該供應商合作已超過5年，他們始終保持穩定的供應和優質的服務。即使在原材料短缺的時期，他們也能確保我們的訂單優先得到滿足。',
      STARTER_TESTIMONIALS_ITEM_AVATAR: '/images/testimonials/client3.jpg',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '李綺',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '家用電器製造商',
      STARTER_TESTIMONIALS_ITEM_RATING: 5,
      STARTER_TESTIMONIALS_ITEM_URL: '#'
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: '常見問題',
  STARTER_FAQ_TEXT_1: '您可能想了解的問題',
  STARTER_FAQ_TEXT_2: '關於我們產品和服務的常見問題解答',

  // 問題1
  STARTER_FAQ_1_QUESTION: '你們提供哪些類型的塑膠原料？',
  STARTER_FAQ_1_ANSWER: '我們提供各種類型的塑膠原料，包括通用塑料（PP、PE、PS等）、工程塑料（PA、PC、POM等）。我們可以根據客戶的具體需求提供定制解決方案。',

  // 問題2
  STARTER_FAQ_2_QUESTION: '如何確保原料的品質？',
  STARTER_FAQ_2_ANSWER: '我們與全球知名供應商建立了長期穩定的合作關係，所有原料均經過嚴格的品質檢測流程。我們擁有專業的檢測設備和團隊，確保每批原料符合國際標準和客戶要求。',

  // 問題3
  STARTER_FAQ_3_QUESTION: '訂單交付時間是多久？',
  STARTER_FAQ_3_ANSWER: '常規產品通常在確認訂單後7-15個工作日內交付，視訂單量和運輸方式而定。針對長期合作客戶，我們提供庫存預留服務，可以實現更快的交付時間。',

  // 問題4
  STARTER_FAQ_4_QUESTION: '你們是否提供樣品測試？',
  STARTER_FAQ_4_ANSWER: '是的，我們提供樣品測試服務。客戶可以在下大訂單前申請樣品進行測試，確保材料符合生產需求。部分特殊材料可能會收取樣品費用，具體請咨詢我們的銷售團隊。',

  // 团队成员区块
  STARTER_TEAM_ENABLE: false, // 团队成员区块开关
  STARTER_TEAM_TITLE: '專業團隊',
  STARTER_TEAM_TEXT_1: '我們的核心團隊',
  STARTER_TEAM_TEXT_2: '專業的團隊為您提供優質的產品和服務',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
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

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: '行業資訊',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '最新塑膠行業動態',
  STARTER_BLOG_TEXT_2: '了解塑膠原料市場趨勢和應用案例',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: '聯繫我們',
  STARTER_CONTACT_TEXT_1: '隨時為您服務',
  STARTER_CONTACT_TEXT_2: '如有任何問題或合作意向，請隨時聯繫我們',

  // 地址
  STARTER_CONTACT_ADDRESS_TITLE: '公司地址',
  STARTER_CONTACT_GOOGLE_ADDRESS: '鑫葳貿易股份有限公司',
  STARTER_CONTACT_ADDRESS_TEXT: '244 新北市林口區湖北里10鄰17之20號',

  // 電話
  STARTER_CONTACT_PHONE_TITLE: '聯繫電話與傳真',
  STARTER_CONTACT_PHONE_TEXT: '電話：(02) 2602-6961~2',
  STARTER_CONTACT_FAX_TEXT: '傳真：(02) 2602-6967',
  // 郵箱
  STARTER_CONTACT_EMAIL_TITLE: '電子郵箱',
  STARTER_CONTACT_EMAIL_TEXT: 'tw.xinwei@gmail.com',

  // 外部留言表單鏈接 (可選)
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/wtefer',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: false, // 合作伙伴开关
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

  STARTER_FOOTER_SLOGAN: '專業塑膠原料供應商，為您的生產提供優質材料與全方位服務。',

  // 页脚三列菜单组
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
          TITLE: '南亞系列',
          URL: '/nan-yia'
        },
        {
          TITLE: '台化系列',
          URL: '/formosa-chemical'
        },
        {
          TITLE: 'U-Pellet台灣優粒子TPR',
          URL: '/u-pellet-tpr'
        },
        {
          TITLE: '福聚系列',
          URL: '/fu-ju'
        },
        {
          TITLE: '永嘉系列',
          URL: '/yongjia'
        },
        {
          TITLE: '奇美系列',
          URL: '/chi-mei'
        },
        {
          TITLE: '台聚系列',
          URL: '/formosa-polymer'
        },
        {
          TITLE: '台塑系列',
          URL: '/formosa-plastic'
        }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隱私政策',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律聲明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服務協議',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: '我們似乎找不到您要找的頁面。',
  STARTER_404_TEXT: '抱歉！您要查找的頁面不存在。可能已經移動或刪除。',
  STARTER_404_BACK: '回到主頁',

  // 页面底部的行动呼吁模块
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: '需要專業的塑膠原料解決方案？',
  STARTER_CTA_TITLE_2: '立即聯繫我們',
  STARTER_CTA_DESCRIPTION: '我們的專業團隊隨時為您提供技術諮詢和產品建議',
  STARTER_CTA_BUTTON: true,
  STARTER_CTA_BUTTON_URL: '#contact',
  STARTER_CTA_BUTTON_TEXT: '免費獲取諮詢',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://xin-wei.com/', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否開啟郵件訂閱 請先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
