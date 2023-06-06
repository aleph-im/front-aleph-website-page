import { HTMLAttributes, ReactNode } from 'react'

export type ParagraphProps = HTMLAttributes<HTMLHeadingElement> & {
  text?: string
  styles?: string
  className?: string
  html: boolean
  children: ReactNode
}
