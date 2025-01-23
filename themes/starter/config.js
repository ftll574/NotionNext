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
  STARTER_HERO_TITLE_1: '北台灣專業塑膠原料供應商',
  STARTER_HERO_TITLE_2: '提供優質塑膠原料，助力您的生產創新',
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: '了解產品',
  STARTER_HERO_BUTTON_1_URL: '/products',
  STARTER_HERO_BUTTON_2_TEXT: '聯繫我們',
  STARTER_HERO_BUTTON_2_URL: '#contact',
  STARTER_HERO_BUTTON_2_ICON: '/images/starter/github.svg', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: '/images/plastic-materials-hero.jpg', // 产品预览图 ，默认读取public目录下图片
  STARTER_HERO_BANNER_IMAGE: 'images/starter/background/home.png', // hero区下方的全宽图

  // 顶部右侧导航按钮
  STARTER_NAV_BUTTON_ENABLE: false, // 是否启用导航按钮
  STARTER_NAV_BUTTON_1_TEXT: 'Sign In',
  STARTER_NAV_BUTTON_1_URL: '/sign-in',

  STARTER_NAV_BUTTON_2_TEXT: 'Sign Up', 
  STARTER_NAV_BUTTON_2_URL: '/sign-up',

  // 特性区块
  STARTER_FEATURE_ENABLE: true,
  STARTER_FEATURE_TITLE: '產品優勢',
  STARTER_FEATURE_TEXT_1: '我們的塑膠原料優勢',
  STARTER_FEATURE_TEXT_2: '多年經驗積累，提供最優質的塑膠原料和解決方案',

  STARTER_FEATURE_1_TITLE_1: '優質材料',
  STARTER_FEATURE_1_TEXT_1: '嚴選全球頂級塑膠原料，確保品質穩定可靠',
  STARTER_FEATURE_1_BUTTON_TEXT: '了解更多',
  STARTER_FEATURE_1_BUTTON_URL: '/quality',

  STARTER_FEATURE_2_TITLE_1: '多樣化選擇',
  STARTER_FEATURE_2_TEXT_1: '提供多種類型塑膠原料，滿足不同行業需求',
  STARTER_FEATURE_2_BUTTON_TEXT: '查看產品',
  STARTER_FEATURE_2_BUTTON_URL: '/products',

  STARTER_FEATURE_3_TITLE_1: '專業服務',
  STARTER_FEATURE_3_TEXT_1: '技術團隊提供專業諮詢，助您選擇最適合的材料',
  STARTER_FEATURE_3_BUTTON_TEXT: '聯繫顧問',
  STARTER_FEATURE_3_BUTTON_URL: '/consultant',

  STARTER_FEATURE_4_TITLE_1: '快速交付',
  STARTER_FEATURE_4_TEXT_1: '完善的供應鏈管理，確保準時交付每一批訂單',
  STARTER_FEATURE_4_BUTTON_TEXT: '配送服務',
  STARTER_FEATURE_4_BUTTON_URL: '/delivery',

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: '專注塑膠原料20年',
  STARTER_ABOUT_TEXT: '我們公司成立於2003年，是一家專業從事塑膠原料進出口貿易的企業。通過與全球知名供應商的長期合作關係，我們為客戶提供穩定可靠的高品質原材料。<br /><br />我們的使命是通過提供優質材料和專業服務，成為客戶值得信賴的長期合作夥伴。',
  STARTER_ABOUT_BUTTON_TEXT: '了解公司歷史',
  STARTER_ABOUT_BUTTON_URL: '/about',
  STARTER_ABOUT_IMAGE_1: '/images/about/factory.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/about/material.jpg',
  STARTER_ABOUT_TIPS_1: '1000+',
  STARTER_ABOUT_TIPS_2: '長期客戶',
  STARTER_ABOUT_TIPS_3: '遍布全球',

  // 首页价格区块
  STARTER_PRICING_ENABLE: true, // 价格区块开关
  STARTER_PRICING_TITLE: '產品系列',
  STARTER_PRICING_TEXT_1: '多樣化的塑膠原料選擇',
  STARTER_PRICING_TEXT_2: '根據您的需求，我們提供不同等級和類型的塑膠原料',

  // 產品系列1
  STARTER_PRICING_1_TITLE: '通用型塑膠',
  STARTER_PRICING_1_PRICE: '電詢', 
  STARTER_PRICING_1_PRICE_CURRENCY: '',
  STARTER_PRICING_1_PRICE_PERIOD: '',
  STARTER_PRICING_1_HEADER: '適用於一般生產需求',
  STARTER_PRICING_1_FEATURES: 'PP聚丙烯,PE聚乙烯,PS聚苯乙烯,定制顏色選項,標準品質保證',
  STARTER_PRICING_1_BUTTON_TEXT: '獲取報價',
  STARTER_PRICING_1_BUTTON_URL: '/quote',

  // 產品系列2
  STARTER_PRICING_2_TITLE: '工程塑料',
  STARTER_PRICING_2_PRICE: '電詢',
  STARTER_PRICING_2_PRICE_CURRENCY: '',
  STARTER_PRICING_2_PRICE_PERIOD: '',
  STARTER_PRICING_2_TAG: '熱銷',
  STARTER_PRICING_2_HEADER: '適用於高要求工業應用',
  STARTER_PRICING_2_FEATURES: 'PA尼龍系列,PC聚碳酸酯,POM聚甲醛,高性能保證,技術支持服務',
  STARTER_PRICING_2_BUTTON_TEXT: '獲取報價',
  STARTER_PRICING_2_BUTTON_URL: '/quote',

  // 產品系列3
  STARTER_PRICING_3_TITLE: '特種塑料',
  STARTER_PRICING_3_PRICE: '電詢',
  STARTER_PRICING_3_PRICE_CURRENCY: '',
  STARTER_PRICING_3_PRICE_PERIOD: '',
  STARTER_PRICING_3_HEADER: '適用於特殊環境和需求',
  STARTER_PRICING_3_FEATURES: 'PEEK聚醚醚酮,PPS聚苯硫醚,液晶聚合物,高溫耐候性,定制解決方案',
  STARTER_PRICING_3_BUTTON_TEXT: '專業咨詢',
  STARTER_PRICING_3_BUTTON_URL: '/special-consultation',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: '客戶評價',
  STARTER_TESTIMONIALS_TEXT_1: '客戶對我們的評價',
  STARTER_TESTIMONIALS_TEXT_2: '來自各行業客戶的真實反饋',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_CONTENT: '通過與這家供應商的合作，我們顯著提高了產品質量，同時降低了材料不穩定導致的生產問題。他們的技術團隊非常專業，提供了很多有價值的建議。',
      STARTER_TESTIMONIALS_ITEM_AVATAR: '/images/testimonials/client1.jpg',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '李總監',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '電子產品製造商',
      STARTER_TESTIMONIALS_ITEM_RATING: 5,
      STARTER_TESTIMONIALS_ITEM_URL: '#'
    },
    {
      STARTER_TESTIMONIALS_ITEM_CONTENT: '作為汽車零部件生產商，我們對原材料的要求非常嚴格。這家公司不僅能提供符合我們標準的高品質材料，還能根據我們的特殊需求進行調整。',
      STARTER_TESTIMONIALS_ITEM_AVATAR: '/images/testimonials/client2.jpg',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '張經理',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '汽車零部件製造商',
      STARTER_TESTIMONIALS_ITEM_RATING: 5,
      STARTER_TESTIMONIALS_ITEM_URL: '#'
    },
    {
      STARTER_TESTIMONIALS_ITEM_CONTENT: '我們與該供應商合作已超過5年，他們始終保持穩定的供應和優質的服務。即使在原材料短缺的時期，他們也能確保我們的訂單優先得到滿足。',
      STARTER_TESTIMONIALS_ITEM_AVATAR: '/images/testimonials/client3.jpg',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '王董事',
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
  STARTER_FAQ_1_ANSWER: '我們提供各種類型的塑膠原料，包括通用塑料（PP、PE、PS等）、工程塑料（PA、PC、POM等）和特種塑料（PEEK、PPS等）。我們可以根據客戶的具體需求提供定制解決方案。',

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
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: '專業團隊',
  STARTER_TEAM_TEXT_1: '我們的核心團隊',
  STARTER_TEAM_TEXT_2: '專業的團隊為您提供優質的產品和服務',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/team/ceo.jpg',
      STARTER_TEAM_ITEM_NICKNAME: '陳總經理',
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
  STARTER_CONTACT_ADDRESS_TEXT: '中國廣東省深圳市南山區高新科技園區88號',

  // 電話
  STARTER_CONTACT_PHONE_TITLE: '聯繫電話',
  STARTER_CONTACT_PHONE_TEXT: '+86 755-8888-7777',

  // 郵箱
  STARTER_CONTACT_EMAIL_TITLE: '電子郵箱',
  STARTER_CONTACT_EMAIL_TEXT: 'info@plasticmaterials.com',

  // 外部留言表單鏈接 (可選)
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://forms.your-form-provider.com/contact-form',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: true, // 合作伙伴开关
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

  STARTER_FOOTER_SLOGAN: '我们通过技术为品牌和公司创造数字体验。',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: '关于我们',
      LINK_GROUP: [
        { TITLE: '官方主页', URL: '/#home' },
        { TITLE: '操作文档', URL: 'https://docs.tangly1024.com/about' },
        {
          TITLE: '帮助支持',
          URL: 'https://docs.tangly1024.com/article/how-to-question'
        },
        {
          TITLE: '合作申请',
          URL: 'https://docs.tangly1024.com/article/my-service'
        }
      ]
    },
    {
      TITLE: '功能特性',
      LINK_GROUP: [
        {
          TITLE: '部署指南',
          URL: 'https://docs.tangly1024.com/article/vercel-deploy-notion-next'
        },
        {
          TITLE: '升级指南',
          URL: 'https://docs.tangly1024.com/article/how-to-update-notionnext'
        },
        { TITLE: '最新版本', URL: 'https://docs.tangly1024.com/article/latest' }
      ]
    },
    {
      TITLE: 'Notion写作',
      LINK_GROUP: [
        {
          TITLE: 'Notion开始写作',
          URL: 'https://docs.tangly1024.com/article/start-to-write'
        },
        {
          TITLE: '快捷键提升效率',
          URL: 'https://docs.tangly1024.com/article/notion-short-key'
        },
        {
          TITLE: '中国大陆使用Notion',
          URL: 'https://docs.tangly1024.com/article/notion-faster'
        }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: '我们似乎找不到您要找的页面。',
  STARTER_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  STARTER_404_BACK: '回到主页',

  // 页面底部的行动呼吁模块
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: '尋找最適合您的塑膠原料？',
  STARTER_CTA_TITLE_2: '立即聯繫我們',
  STARTER_CTA_DESCRIPTION: '我們的專業團隊將為您提供最合適的塑膠原料解決方案，滿足您的生產需求',
  STARTER_CTA_BUTTON: true,
  STARTER_CTA_BUTTON_URL: '/contact',
  STARTER_CTA_BUTTON_TEXT: '免費諮詢',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://blog.tangly1024.com', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
