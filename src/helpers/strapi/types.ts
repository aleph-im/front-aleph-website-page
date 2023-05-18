import { SectionType } from '@/components/Section'

export type StrapiPage = {
  id: number
  attributes: {
    createdAt: string
    updatedAt: string
    publishedAt: string
    Name: string
    sections: {
      data: StrapiSection[]
    }
  }
}

export type StrapiSection = {
  id: number
  attributes: {
    createdAt: string
    updatedAt: string
    Name: string
    styles: string
    type: SectionType
    ref: string
    className: string
    components: StrapiComponent[]
    components1: StrapiComponent[]
    components2: StrapiComponent[]
    components3: StrapiComponent[]
  }
}

export type StrapiBaseComponent = {
  id: number
  __component: string
}

export type StrapiH1Component = StrapiBaseComponent & {
  type: string
  title?: string
  className?: string
  color?: string
  styles?: string
}

export type StrapiH2Component = StrapiBaseComponent & {
  type: string
  title?: string
  className?: string
  color?: string
  styles?: string
}

export type StrapiPComponent = StrapiBaseComponent & {
  text?: string
  className?: string
  html?: boolean
  styles?: string
}

export type StrapiSpanComponent = StrapiBaseComponent & {
  text?: string
  className?: string
  html?: boolean
  styles?: string
}

export type StrapiImageComponent = StrapiBaseComponent & {
  className?: string
  styles?: string
  wrapperStyles?: string
  image: StrapiMediaComponent
}

export type StrapiImageCollectionComponent = StrapiBaseComponent & {
  className?: string
  styles?: string
  wrapperStyles?: string
  images: StrapiImageComponent[]
}

export type StrapiMediaComponent = {
  data: {
    attributes: {
      ext: string
      height: number
      mime: string
      name: string
      provider: string
      size: number
      url: string
      width: number
    }
  }
}

export type StrapiBulletListComponent = StrapiBaseComponent & {
  size: string
  gap: string
  items: StrapiBulletListItemComponent[]
}

export type StrapiBulletListItemComponent = StrapiBaseComponent & {
  title: string
  kind: string
  text: string
  size: string
}

export type StrapiBlockTagComponent = StrapiBaseComponent & {
  title: string
  content: string
  styles: string
}

export type StrapiButtonComponent = StrapiBaseComponent & {
  size: string
  as: string
  text: string
  variant: string
  kind: string
  hover: boolean
  active: boolean
  focus: boolean
  disable: boolean
  color: string
  icon?: StrapiIconDataComponent
  href: string
  target: string
  styles: string
}

export type StrapiIconDataComponent = {
  data: {
    attributes: StrapiIconComponent
  }
}

export type StrapiIconComponent = StrapiBaseComponent & {
  name: string
  size: string
  prefix: string
  styles: string
}

export type StrapiComponent =
  | StrapiBaseComponent
  | StrapiH1Component
  | StrapiH2Component
  | StrapiPComponent
  | StrapiSpanComponent
  | StrapiImageComponent
  | StrapiImageCollectionComponent
  | StrapiBulletListComponent
  | StrapiBulletListItemComponent
  | StrapiBlockTagComponent
  | StrapiButtonComponent
  | StrapiIconComponent
