// import Link from '@/components/Link'
// import { slug } from 'github-slugger'

// interface Props {
//   text: string
// }

// const Tag = ({ text }: Props) => {
//   return (
//     <Link
//       href={`/tags/${slug(text)}`}
//       className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
//     >
//       {text.split(' ').join('-')}
//     </Link>
//   )
// }

// export default Tag

// Temporary disabled component
const Tag = ({ text }: { text: string }) => {
  return (
    <span className="mr-3 text-sm font-medium text-gray-500 uppercase dark:text-gray-400">
      {text.split(' ').join('-')}
    </span>
  )
}

export default Tag
