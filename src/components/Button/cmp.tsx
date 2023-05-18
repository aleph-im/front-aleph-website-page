import React, { ForwardedRef, forwardRef, useMemo } from 'react'
import { ButtonProps } from './types'
import {
  Button as AlephButton,
  Icon as AlephIcon,
} from '@aleph-front/aleph-core'

export const Button = forwardRef(
  (
    {
      variant = 'primary',
      kind = 'flat',
      size = 'regular',
      color = 'main2',
      as = 'button',
      children,
      hover,
      active,
      focus,
      className,
      styles,
      icon,
      ...rest
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    // @note: Storybook testing purposes
    const classes = useMemo(() => {
      return (
        [
          hover ? '_hover' : '',
          active ? '_active' : '',
          focus ? '_focus' : '',
        ].join(' ') + (className || '')
      )
    }, [hover, active, focus, className])

    return (
      <AlephButton
        css={styles}
        ref={ref}
        variant={variant}
        kind={kind}
        size={size}
        color={color}
        className={classes}
        {...rest}
      >
        {children} {icon ? '\u00A0\u00A0' : null}
        {icon ? <AlephIcon {...icon} /> : null}
      </AlephButton>
    )
  },
)

Button.displayName = 'Button'

export default Button
