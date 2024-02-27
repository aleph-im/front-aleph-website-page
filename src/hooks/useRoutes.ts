import { useMemo } from 'react'
import { Route } from '@aleph-front/core'

export type UseRoutesReturn = {
  routes: Route[]
}

export function useRoutes(): UseRoutesReturn {
  const routes: Route[] = useMemo(() => {
    return [
      {
        name: 'Solutions',
        href: '/#solutions',
      },
      {
        name: 'Roadmap',
        href: '/#roadmap',
      },
      {
        name: 'Indexing',
        href: '/#indexing',
      },
    ]
  }, [])

  return {
    routes,
  }
}
