import { useAppState } from '@/contexts/appState'
import { ActionTypes } from '@/helpers/store'
import { useCallback } from 'react'
import { useRequest } from './useRequest'
import { RequestState } from './useRequestState'
import { getPages } from '@/helpers/strapi/strapi'
import { PageProps } from '@/components/Page/types'

export function useCMSPages(
  pageId: number,
): [PageProps[], RequestState<unknown>] {
  const [appState, dispatch] = useAppState()

  const { pages } = appState

  const doRequest = useCallback(async () => {
    return await getPages(pageId)
  }, [])

  const onSuccess = useCallback(
    (pages: PageProps[]) => {
      dispatch({ type: ActionTypes.fill, payload: { pages } })
    },
    [dispatch],
  )

  const reqState = useRequest({ doRequest, onSuccess, triggerOnMount: true })

  return [pages, reqState]
}
