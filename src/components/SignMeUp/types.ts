import { HTMLAttributes, ReactNode } from 'react'
import { H1Props } from '@/components/H1'

export type SignMeUpProps = HTMLAttributes<HTMLHeadingElement> & {
  title: H1Props
  signMeUpForm: SignMeUpFormProps
  text?: string
  styles?: string
  className?: string
  children: ReactNode
}

export type SignMeUpFormProps = {
  buttonText?: string
}

export type SignMeUpButtonProps = {
  text?: string
}
