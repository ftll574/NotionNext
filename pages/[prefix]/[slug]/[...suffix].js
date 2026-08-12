import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { fetchGlobalAllData, resolvePostProps } from '@/lib/db/SiteDataApi'
import { checkSlugHasMorThanTwoSlash } from '@/lib/utils/post'
import Slug from '..'
import { isExport } from '@/lib/utils/buildMode'
import { getPublishedPages, prefetchAllBlockMaps } from '@/lib/build/prefetch'

/**
 * 根据notion的slug访问页面
 * 解析三级以上目录 /article/2023/10/29/test
 * @param {*} props
 * @returns
 */
const PrefixSlug = props => {
  return <Slug {...props} />
}

export async function getStaticPaths() {
  const from = 'slug-paths'
  const { allPages } = await fetchGlobalAllData({ from })
  const pages = getPublishedPages(allPages).filter(row =>
    checkSlugHasMorThanTwoSlash(row)
  )
  await prefetchAllBlockMaps(pages)

  return {
    paths: pages.map(row => ({
      params: {
        prefix: row.slug.split('/')[0],
        slug: row.slug.split('/')[1],
        suffix: row.slug.split('/').slice(2)
      }
    })),
    // 未知路徑直接使用靜態 404，避免每個掃描請求都啟動 Function。
    fallback: false
  }
}

/**
 * 抓取页面数据
 * @param {*} param0
 * @returns
 */
export async function getStaticProps({
  params: { prefix, slug, suffix },
  locale
}) {
  const props = await resolvePostProps({
    prefix,
    slug,
    suffix,
    locale
  })

  return {
    props,
    revalidate: isExport()
      ? undefined
      : siteConfig(
          'NEXT_REVALIDATE_SECOND',
          BLOG.NEXT_REVALIDATE_SECOND,
          props.NOTION_CONFIG
        ),
    notFound: !props.post
  }
}

export default PrefixSlug
