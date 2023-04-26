import { TypoKind } from '@aleph-front/aleph-core'
import { HTMLAttributes, ReactNode } from 'react'

export type H2Props = HTMLAttributes<HTMLHeadingElement> & {
  color?: string
  type?: TypoKind
  children: ReactNode
}
