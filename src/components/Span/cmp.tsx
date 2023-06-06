import { SpanProps } from './types'

export default function Span({
  text,
  styles,
  html,
  children,
  ...rest
}: SpanProps) {
  return html && text ? (
    <span css={styles} {...rest} dangerouslySetInnerHTML={{ __html: text }} />
  ) : (
    <span css={styles} {...rest}>
      {children ? children : text}
    </span>
  )
}
