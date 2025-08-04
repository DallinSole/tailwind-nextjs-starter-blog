// import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
// import { allBlogs } from 'contentlayer/generated'
// import { slug } from 'github-slugger'
// import { notFound } from 'next/navigation'
// import ListLayout from '@/layouts/ListLayoutWithTags'

// const POSTS_PER_PAGE = 5

// export const generateStaticParams = async () => {
//   const tagCounts = tagData as Record<string, number>
//   const tagKeys = Object.keys(tagCounts)
//   const paths = []
//   for (const tag of tagKeys) {
//     const filteredPosts = allCoreContent(
//       sortPosts(allBlogs.filter((post) => post.tags && post.tags.map((t) => slug(t)).includes(tag)))
//     )
//     const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
//     for (let i = 1; i <= totalPages; i++) {
//       paths.push({
//         tag: encodeURI(tag),
//         page: i.toString(),
//       })
//     }
//   }
//   return paths
// }

// export default async function Page(props: { params: Promise<{ tag: string; page: string }> }) {
//   const params = await props.params
//   const tag = decodeURI(params.tag)
//   const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
//   const filteredPosts = allCoreContent(
//     sortPosts(allBlogs.filter((post) => post.tags && post.tags.map((t) => slug(t)).includes(tag)))
//   )
//   const pageNumber = parseInt(params.page as string)
//   const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)

//   if (pageNumber <= 0 || pageNumber > totalPages) {
//     return notFound()
//   }
//   const initialDisplayPosts = filteredPosts.slice(
//     POSTS_PER_PAGE * (pageNumber - 1),
//     POSTS_PER_PAGE * pageNumber
//   )
//   const pagination = {
//     currentPage: pageNumber,
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
