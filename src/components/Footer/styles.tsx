import { addClasses, Button, Icon } from '@aleph-front/aleph-core'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'

export const StyledFooter = styled.footer`
  ${tw`py-11`}
  background-color: #00000033;
  box-sizing: border-box;
  width: 100%;
`

export const StyledButton = styled(Button).attrs(() => {
  return {
    kind: 'neon',
    variant: 'tertiary',
    color: 'main0',
    size: 'big',
  }
})(() => [tw`!block !mb-6 last:!mb-0`])

export const StyledLink = styled.a.attrs((props) => {
  return {
    ...addClasses('tp-nav')(props),
    href: props.href || '#',
  }
})`
  ${({ theme }) => css`
    display: block;
    cursor: pointer;
    font-weight: 700;
    white-space: nowrap;

    color: ${theme.color.text};
    text-decoration: none;

    &:last-child {
      margin-bottom: 0;
    }
  `}
`

export const StyledIcon = styled(Icon).attrs((props) => {
  return {
    size: 'lg',
    ...props,
  }
})(() => [tw`mr-2.5`])

export const StyledIcon2 = styled(Icon).attrs((props) => {
  return {
    size: 'lg',
    ...props,
  }
})(() => [tw`ml-2.5`])
