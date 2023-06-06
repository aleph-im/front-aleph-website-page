import dynamic from 'next/dynamic'
import { BulletList, Icon, Checkbox } from '@aleph-front/aleph-core'
import { StrapiComponent } from '@/helpers/strapi/types'
import { ComponentManagerProps } from '@/components/ComponentManager/types'

const H1 = dynamic(() => import('../H1'), {
  ssr: true,
})

const H2 = dynamic(() => import('../H2'), {
  ssr: true,
})

const Paragraph = dynamic(() => import('../Paragraph'), {
  ssr: true,
})

const Image = dynamic(() => import('../Image'), {
  ssr: true,
})

const ImageCollection = dynamic(() => import('../ImageCollection'), {
  ssr: true,
})

const BlockTag = dynamic(() => import('../BlockTag'), {
  ssr: true,
})

const Button = dynamic(() => import('../Button'), {
  ssr: true,
})

const Span = dynamic(() => import('../Span'), {
  ssr: true,
})

const SignMeUp = dynamic(() => import('../SignMeUp'), {
  ssr: true,
})

const getBlockComponent = ({ __component, ...rest }: any, index: number) => {
  let Component

  switch (__component) {
    case 'generic.h1':
      Component = H1
      break
    case 'generic.h2':
      Component = H2
      break
    case 'generic.p':
      Component = Paragraph
      break
    case 'generic.image':
      Component = Image
      break
    case 'generic.image-collection':
      Component = ImageCollection
      break
    case 'generic.bullet-list':
      Component = BulletList
      break
    case 'generic.block-tag':
      Component = BlockTag
      break
    case 'generic.button':
      Component = Button
      break
    case 'generic.icon':
      Component = Icon
      break
    case 'generic.span':
      Component = Span
      break
    case 'generic.checkbox':
      Component = Checkbox
      break
    case 'generic.sign-me-up-section':
      Component = SignMeUp
      break
  }

  return Component ? <Component key={`index-${index}`} {...rest} /> : null
}

const ComponentManager = ({ components }: ComponentManagerProps) => {
  return (
    <>
      {components && components.length > 0
        ? components.map(getBlockComponent)
        : null}
    </>
  )
}

const components: StrapiComponent[] = []

ComponentManager.defaultProps = {
  components,
}

export default ComponentManager
