import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { BreakpointId } from '@aleph-front/core'
import { UseRoutesReturn, useRoutes } from './useRoutes'

// -----------------------------

export type UseHeaderReturn = UseRoutesReturn & {
  pathname: string
  breakpoint: BreakpointId
  isOpen: boolean
  handleToggle: (isOpen: boolean) => void
}

export function useHeader(): UseHeaderReturn {
  const { routes } = useRoutes()
  const router = useRouter()
  const { pathname } = router

  // --------------------

  const breakpoint = 'lg'

  // --------------------

  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = useCallback((open: boolean) => setIsOpen(open), [])

  // -----------------------

  return {
    pathname,
    routes,
    breakpoint,
    isOpen,
    handleToggle,
  }
}
