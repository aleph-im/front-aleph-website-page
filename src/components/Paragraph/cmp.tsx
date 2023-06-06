import { ParagraphProps } from './types'

export default function Paragraph({
  text,
  styles,
  html,
  children,
  ...rest
}: ParagraphProps) {
  return html && text ? (
    <p css={styles} {...rest} dangerouslySetInnerHTML={{ __html: text }} />
  ) : (
    <p css={styles} {...rest}>
      {children ? children : text}
    </p>
  )
}
