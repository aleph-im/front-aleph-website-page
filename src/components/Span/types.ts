import { HTMLAttributes, ReactNode } from 'react'

export type SpanProps = HTMLAttributes<HTMLHeadingElement> & {
  text?: string
  styles?: string
  className?: string
  html: boolean
  children: ReactNode
}
