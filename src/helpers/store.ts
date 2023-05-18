import { PageProps } from '@/components/Page/types'

export enum ActionTypes {
  fill,
}

export type State = {
  pages: PageProps[]
}

export type Action = {
  type: ActionTypes
  payload: any
}

export const initialState: State = {
  pages: [],
}

export const reducer = (
  state: State = initialState,
  { type, payload }: Action,
) => {
  switch (type) {
    case ActionTypes.fill:
      return {
        ...state,
        pages: payload.pages,
      }

    default:
      return state
  }
}
