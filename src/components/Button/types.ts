import {
  ButtonProps as AlephButtonProps,
  IconProps as AlephIconProps,
} from '@aleph-front/aleph-core'

export type ButtonProps = AlephButtonProps & {
  styles?: string
  icon?: AlephIconProps
}
