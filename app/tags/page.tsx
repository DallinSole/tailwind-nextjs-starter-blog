// import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
// import { allBlogs } from 'contentlayer/generated'
// import { genPageMetadata } from 'app/seo'
// import ListLayout from '@/layouts/ListLayoutWithTags'

// const POSTS_PER_PAGE = 5

// export const metadata = genPageMetadata({ title: 'Tags' })

// export default async function TagsPage() {
//   const posts = allCoreContent(sortPosts(allBlogs))
//   const tagCounts = tagData as Record<string, number>
//   const tagKeys = Object.keys(tagCounts)
//   const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

//   return (
//     <>
//       <div className="divide-y divide-gray-200 dark:divide-gray-700">
//         <div className="space-y-2 pt-6 pb-8 md:space-y-5">
//           <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
//             Tags
//           </h1>
//         </div>
//         <div className="container py-12">
//           <div className="flex flex-wrap">
//             {Object.keys(tagCounts).map((t) => {
//               return (
//                 <div key={t} className="mb-2 mr-5 mt-2">
//                   <Tag text={t} />
//                   <Link
//                     href={`/tags/${slug(t)}`}
//                     className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
//                     aria-label={`View posts tagged ${t}`}
//                   >
//                     {` (${tagCounts[t]})`}
//                   </Link>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// Temporary redirect to home page
export default function TagsPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Tags Page Disabled</h1>
        <p className="text-gray-600 dark:text-gray-400">
          This page has been temporarily disabled.
        </p>
      </div>
    </div>
  )
}
