import { HTMLAttributes } from 'react'
import { ImageProps } from '@/components/Image'

export type ImagesProps = HTMLAttributes<HTMLHeadingElement> & {
  styles: string
  wrapperStyles: string
  className: string
  images: ImageProps[]
}
