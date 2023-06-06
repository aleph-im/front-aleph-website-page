import {
  StrapiBulletListComponent,
  StrapiButtonComponent,
  StrapiComponent,
  StrapiH1Component,
  StrapiImageComponent,
  StrapiImageCollectionComponent,
} from '@/helpers/strapi/types'
import { ImageType } from '@/components/Image/types'

export const adaptComponent = (component: StrapiComponent) => {
  let componentProps
  switch (component.__component) {
    case 'generic.h1':
      componentProps = {
        children: (component as StrapiH1Component).title,
        ...component,
      }
      break
    case 'generic.h2':
      componentProps = {
        children: (component as StrapiH1Component).title,
        ...component,
      }
      break
    case 'generic.image':
      componentProps = {
        type: ImageType.strapi,
        src: (component as StrapiImageComponent).image.data.attributes.url,
        ...component,
      }
      break
    case 'generic.image-collection':
      const collection = component as StrapiImageCollectionComponent
      const images = collection.images?.map((image) => {
        return {
          type: ImageType.strapi,
          src: image.image.data.attributes.url,
          ...image,
        }
      })
      componentProps = {
        ...component,
        images,
      }
      break
    case 'generic.bullet-list':
      const comp = component as StrapiBulletListComponent
      const items = comp.items?.map((item) => {
        return {
          size: comp.size,
          kind: item.kind,
          title: item.title,
          text: item.text,
        }
      })
      componentProps = {
        items: items,
        ...component,
      }
      break
    case 'generic.button':
      componentProps = {
        children: (component as StrapiButtonComponent).text,
        ...component,
      }
      break
  }

  return componentProps ? componentProps : component
}
