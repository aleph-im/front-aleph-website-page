import { ImagesProps } from './types'
import { ImageType } from '@/components/Image/types'
import { getStrapiUploadsURL } from '@/helpers/strapi/strapi'

export default function ImageCollection({
  children,
  images,
  styles,
  wrapperStyles,
  className,
}: ImagesProps) {
  return wrapperStyles ? (
    <div css={wrapperStyles}>
      <div className={className} css={styles}>
        {children
          ? children
          : images.map((item, i) => (
              <img
                key={i}
                {...item}
                src={
                  item.type == ImageType.strapi
                    ? getStrapiUploadsURL(item.src)
                    : item.src
                }
              />
            ))}
      </div>
    </div>
  ) : (
    <div className={className} css={styles}>
      {children
        ? children
        : images.map((item, i) => (
            <img
              key={i}
              {...item}
              src={
                item.type == ImageType.strapi
                  ? getStrapiUploadsURL(item.src)
                  : item.src
              }
            />
          ))}
    </div>
  )
}
