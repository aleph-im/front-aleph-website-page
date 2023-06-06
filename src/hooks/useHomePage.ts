import { useAppState } from '@/contexts/appState'
import { useCMSPages } from '@/hooks/useCMSPages'
import { PageProps } from '@/components/Page/types'

export type HomePage = {
  page: PageProps
}

export function useHomePage(): HomePage {
  const [pages] = useCMSPages(5)
  const [appState] = useAppState()

  return {
    page: appState.pages[0] || pages[0],
  }
}
