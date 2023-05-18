import { TypoKind } from '@aleph-front/aleph-core'
import { HTMLAttributes, ReactNode } from 'react'

export type H1Props = HTMLAttributes<HTMLHeadingElement> & {
  color?: string
  styles?: string
  type?: TypoKind
  children: ReactNode
}
