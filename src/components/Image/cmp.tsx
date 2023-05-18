import { ImageProps, ImageType } from './types'
import { getStrapiUploadsURL } from '@/helpers/strapi/strapi'

export default function Image({
  children,
  type,
  styles,
  wrapperStyles,
  src,
  className,
}: ImageProps) {
  return wrapperStyles ? (
    <div css={wrapperStyles}>
      <div className={className} css={styles}>
        <img src={type == ImageType.strapi ? getStrapiUploadsURL(src) : src}>
          {children}
        </img>
      </div>
    </div>
  ) : (
    <div className={className} css={styles}>
      <img src={type == ImageType.strapi ? getStrapiUploadsURL(src) : src}>
        {children}
      </img>
    </div>
  )
}
