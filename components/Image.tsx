import NextImage, { ImageProps } from 'next/image'

const Image = ({ src, ...rest }: ImageProps) => {
  // Use a more robust approach for handling basePath
  const basePath = process.env.BASE_PATH || ''
  const imageSrc = src
    ? typeof src === 'string' && src.startsWith('http')
      ? src
      : `${basePath}${src}`
    : src

  return <NextImage src={imageSrc} {...rest} />
}

export default Image
