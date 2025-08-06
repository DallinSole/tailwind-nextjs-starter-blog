import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer.js'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)

  // Filter out specific posts you don't want to display
  const filteredPosts = posts.filter((post) => {
    // Remove draft posts
    if (post.draft === true) {
      return false
    }

    // Remove posts by title
    const excludedTitles = ['My fancy title']
    if (excludedTitles.includes(post.title)) {
      return false
    }

    // Remove posts by slug
    const excludedSlugs = ['my-fancy-title']
    if (excludedSlugs.includes(post.slug)) {
      return false
    }

    // Remove posts by tags
    const excludedTags = ['draft']
    if (post.tags && post.tags.some((tag) => excludedTags.includes(tag))) {
      return false
    }

    return true
  })

  return <Main posts={filteredPosts} />
}
