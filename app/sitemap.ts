import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  // Get all posts
  const posts = allBlogs
    .filter((post) => post.draft === false)
    .map((post) => ({
      url: `${siteUrl}/${post._raw.flattenedPath}`,
      lastModified: post.lastmod || post.date,
    }))

  const routes = ['', 'blog', 'about'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...posts]
}
