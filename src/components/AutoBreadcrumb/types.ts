import { BreadcrumbProps } from '@aleph-front/aleph-core'
import { HTMLAttributes } from 'react'

export type AutoBreacrumbProps = HTMLAttributes<HTMLElement> &
  Omit<BreadcrumbProps, 'navLinks'> & {
    name?: string
    includeHome?: boolean
  }
