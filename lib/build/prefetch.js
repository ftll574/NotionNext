// lib/build/prefetch.js
import pLimit from 'p-limit'
import { fetchNotionPageBlocks } from '@/lib/db/notion/getPostBlocks'
import { getDataFromCache, setDataToCache } from '@/lib/cache/cache_manager'

// lib/build/prefetch.js 中新增，或单独放 lib/build/buildUtils.js

/**
 * 获取所有可公开访问的页面与文章，用于在建置阶段产生完整的静态路由。
 */
export function getRoutablePages(allPages) {
  return (allPages ?? []).filter(
    page => ['Page', 'Post'].includes(page.type) && page.status === 'Published'
  )
}

/**
 * 预热所有页面的 block 数据
 * @param {*} allPages 页面列表
 * @param {*} concurrency 并发数
 */
export async function prefetchAllBlockMaps(allPages, concurrency = 3) {
  const limit = pLimit(concurrency)
  let hit = 0,
    fetched = 0,
    failed = 0

  console.log(`[Prefetch] 开始预热 ${allPages.length} 个页面 block`)
  const start = Date.now()

  await Promise.all(
    allPages.map(page =>
      limit(async () => {
        const cacheKey = `page_block_${page.id}`

        // 已有缓存跳过
        if (await getDataFromCache(cacheKey)) {
          hit++
          return
        }

        try {
          const block = await fetchNotionPageBlocks(page.id, 'prefetch')
          await setDataToCache(cacheKey, block, 1000 * 60 * 60 * 2) // 2小时
          fetched++
        } catch (e) {
          console.warn('[Prefetch Failed]', page.id, e.message)
          failed++
        }
      })
    )
  )

  const elapsed = ((Date.now() - start) / 1000).toFixed(1)
  console.log(
    `[Prefetch] 完成: 命中缓存=${hit} 新拉取=${fetched} 失败=${failed} 耗时=${elapsed}s`
  )
}
