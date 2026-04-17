import Head from 'next/head'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

const SITE_URL = 'https://xin-wei.com'

// 把顯示字串轉為 E.164 格式的電話，擷取失敗回傳原字串
const toE164 = (raw, defaultCountry = '+886') => {
  if (!raw) return ''
  const digits = raw.replace(/[^0-9]/g, '')
  if (!digits) return raw
  // 台灣區碼：若以 0 開頭則用 +886 取代前面那個 0
  if (digits.startsWith('0')) {
    return `${defaultCountry}-${digits.slice(1)}`
  }
  return `${defaultCountry}-${digits}`
}

/**
 * Schema.org 結構化資料（JSON-LD）
 * 輸出 Organization + LocalBusiness 資料
 */
const SchemaOrg = () => {
  const emailText = siteConfig('STARTER_CONTACT_EMAIL_TEXT', '', CONFIG)
  const phoneText = siteConfig('STARTER_CONTACT_PHONE_TEXT', '', CONFIG)
  const addressText = siteConfig('STARTER_CONTACT_ADDRESS_TEXT', '', CONFIG)

  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: '鑫葳貿易有限公司',
    alternateName: 'Xinwei Plastics',
    url: SITE_URL,
    logo: `${SITE_URL}/images/starter/logo/logo-04.svg`,
    image: `${SITE_URL}/images/starter/logo/logo-04.svg`,
    description: siteConfig(
      'DESCRIPTION',
      '鑫葳貿易有限公司 - 專業塑膠原料供應商，30 年產業經驗'
    ),
    address: {
      '@type': 'PostalAddress',
      streetAddress: '湖北里10鄰17之20號',
      addressLocality: '林口區',
      addressRegion: '新北市',
      postalCode: '244',
      addressCountry: 'TW'
    },
    telephone: toE164(phoneText) || '+886-2-2602-6961',
    email: emailText || 'tw.xinwei@gmail.com',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00'
      }
    ],
    foundingDate: '1995',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: '10-50' },
    areaServed: { '@type': 'Country', name: 'Taiwan' },
    priceRange: 'NT$$',
    sameAs: [],
    // 保留原始地址字串方便搜尋引擎 fallback 解析
    ...(addressText ? { addressRaw: addressText } : {})
  }

  return (
    <Head>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  )
}

export default SchemaOrg
