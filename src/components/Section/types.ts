import { StrapiComponent } from '@/helpers/strapi/types'

export type SectionProps = {
  id: number
  type: SectionType
  styles: string
  className: string
  ref: string
  components: StrapiComponent[]
  components1: StrapiComponent[]
  components2: StrapiComponent[]
  components3: StrapiComponent[]
}

export enum SectionType {
  main = 'main',
  main12 = 'main:1:2',
  main13 = 'main:1:3',
  only11 = 'only:1:1',
  only12 = 'only:1:2',
}
