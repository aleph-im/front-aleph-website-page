import { HTMLAttributes } from 'react'

export type ImageProps = HTMLAttributes<HTMLHeadingElement> & {
  type: ImageType
  styles: string
  wrapperStyles: string
  className: string
  src: string
}

export enum ImageType {
  local = 'local',
  strapi = 'strapi',
}
