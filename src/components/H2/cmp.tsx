import { StyledH2 } from './styles'
import { H2Props } from './types'

export default function H2({ children, styles, ...rest }: H2Props) {
  return (
    <StyledH2 css={styles} {...rest}>
      {children}
    </StyledH2>
  )
}
