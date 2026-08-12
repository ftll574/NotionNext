import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { fetchGlobalAllData, resolvePostProps } from '@/lib/db/SiteDataApi'
import Slug from '..'
import { checkSlugHasOneSlash } from '@/lib/utils/post'
import { isExport } from '@/lib/utils/buildMode'
import { getRoutablePages, prefetchAllBlockMaps } from '@/lib/build/prefetch'

/**
 * 根据notion的slug访问页面
 * 解析二级目录 /article/about
 * @param {*} props
 * @returns
 */
const PrefixSlug = props => {
  return <Slug {...props} />
}

export async function getStaticPaths() {
  const from = 'slug-paths'
  const { allPages } = await fetchGlobalAllData({ from })
  const pages = getRoutablePages(allPages).filter(row =>
    checkSlugHasOneSlash(row)
  )
  await prefetchAllBlockMaps(pages)

  return {
    paths: pages.map(row => ({
      params: {
        prefix: row.slug.split('/')[0],
        slug: row.slug.split('/')[1]
      }
    })),
    // 未知路徑直接使用靜態 404，避免每個掃描請求都啟動 Function。
    fallback: false
  }
}

export async function getStaticProps({ params: { prefix, slug }, locale }) {
  const props = await resolvePostProps({
    prefix,
    slug,
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
