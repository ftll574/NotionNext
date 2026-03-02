import Head from 'next/head'
import { siteConfig } from '@/lib/config'

/**
 * Schema.org 結構化資料（JSON-LD）
 * 輸出 Organization + LocalBusiness 資料
 */
const SchemaOrg = () => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': ['Organization', 'LocalBusiness'],
        name: '鑫葳貿易有限公司',
        url: 'https://xin-wei.com',
        logo: 'https://xin-wei.com/images/starter/logo/logo-04.svg',
        description: siteConfig(
            'DESCRIPTION',
            '鑫葳貿易有限公司 - 專業塑膠原料供應商'
        ),
        address: {
            '@type': 'PostalAddress',
            streetAddress: '湖北里10鄰17之20號',
            addressLocality: '林口區',
            addressRegion: '新北市',
            postalCode: '244',
            addressCountry: 'TW'
        },
        telephone: '+886-2-2602-6961',
        email: 'tw.xinwei@gmail.com',
        openingHours: 'Mo-Fr 08:00-17:00',
        foundingDate: '1995',
        numberOfEmployees: {
            '@type': 'QuantitativeValue',
            value: '10-50'
        },
        areaServed: {
            '@type': 'Country',
            name: 'Taiwan'
        },
        sameAs: []
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
