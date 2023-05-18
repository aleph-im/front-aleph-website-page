import { SignMeUpButtonProps, SignMeUpFormProps, SignMeUpProps } from './types'
import H1 from '@/components/H1'
import { Button, TextInput, useResponsiveMin } from '@aleph-front/aleph-core'

export const SignMeUpButton = ({ text }: SignMeUpButtonProps) => (
  <Button
    type="submit"
    value="Subscribe"
    name="subscribe"
    id="mc-embedded-subscribe"
    color="main0"
    kind="neon"
    size="big"
    variant="primary"
    tw="!block !mx-auto"
  >
    {text}
  </Button>
)

export const SignMeUpForm = ({ buttonText }: SignMeUpFormProps) => {
  const isDesktop = useResponsiveMin('md')

  return (
    <form
      action="https://aleph.us17.list-manage.com/subscribe/post?u=40af570491d53f28c5ae6f1ab&amp;id=4850a3195f"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      rel="noopener noreferrer"
      noValidate
    >
      <div tw="mb-4 w-full">
        <div
          style={{ position: 'absolute', left: '-4500px' }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_40af570491d53f28c5ae6f1ab_4850a3195f"
            tabIndex={-1}
            defaultValue=""
          />
        </div>
        {isDesktop ? (
          <TextInput
            type="email"
            defaultValue=""
            name="EMAIL"
            id="mce-EMAIL"
            placeholder="email address"
            required
            buttonStyle="stuck"
            button={<SignMeUpButton text={buttonText} />}
          />
        ) : (
          <TextInput
            type="email"
            defaultValue=""
            name="EMAIL"
            id="mce-EMAIL"
            placeholder="email address"
            required
          />
        )}
      </div>
      {!isDesktop && <SignMeUpButton text={buttonText} />}
    </form>
  )
}

export default function SignMeUp({
  text,
  styles,
  title,
  signMeUpForm,
}: SignMeUpProps) {
  return (
    <div css={styles}>
      <H1 color={title.color} type={title.type} css={title.styles}>
        {title.title}
      </H1>
      <p className="fs-md text-base0" tw="mt-0 mb-4">
        {text}
      </p>
      <SignMeUpForm buttonText={signMeUpForm.buttonText} />
    </div>
  )
}
