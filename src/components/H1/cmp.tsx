import { StyledH1 } from './styles'
import { H1Props } from './types'

export default function H1({ children, styles, ...rest }: H1Props) {
  return (
    <StyledH1 {...rest} css={styles}>
      {children}
    </StyledH1>
  )
}
