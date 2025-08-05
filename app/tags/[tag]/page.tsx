// import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
// import { allBlogs } from 'contentlayer/generated'
// import { slug } from 'github-slugger'
// import { notFound } from 'next/navigation'
// import ListLayout from '@/layouts/ListLayoutWithTags'

// const POSTS_PER_PAGE = 5

// export const generateStaticParams = async () => {
//   const tagCounts = tagData as Record<string, number>
//   const tagKeys = Object.keys(tagCounts)
//   return tagKeys.map((tag) => ({
//     tag: encodeURI(tag),
//   }))
// }

// export default async function TagPage(props: { params: Promise<{ tag: string }> }) {
//   const params = await props.params
//   const tag = decodeURI(params.tag)
//   const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
//   const filteredPosts = allCoreContent(
//     sortPosts(allBlogs.filter((post) => post.tags && post.tags.map((t) => slug(t)).includes(tag)))
//   )
//   const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
//   const initialDisplayPosts = filteredPosts.slice(0, POSTS_PER_PAGE)
//   const pagination = {
//     currentPage: 1,
//     totalPages: totalPages,
//   }

//   return (
//     <ListLayout
//       posts={filteredPosts}
//       initialDisplayPosts={initialDisplayPosts}
//       pagination={pagination}
//       title={title}
//     />
//   )
// }
  
// Temporary redirect to home page
export default function TagPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Tag Page Disabled</h1>
        <p className="text-gray-600 dark:text-gray-400">
          This page has been temporarily disabled.
        </p>
      </div>
    </div>
  )
}
