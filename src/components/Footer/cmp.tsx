import { Footer as BaseFooter, LinkComponent } from '@aleph-front/core'
import Link from 'next/link'

export const Footer = () => {
  return (
    <BaseFooter
      {...{
        Link: Link as LinkComponent,
        small: false,
        buttons: [
          {
            label: 'Staking',
            href: 'https://account.aleph.im/earn/staking/',
            target: '_blank',
            props: {
              variant: 'primary',
            },
          },
          {
            label: 'Try our cloud',
            href: 'https://www.twentysix.cloud/',
            target: '_blank',
          },
          {
            label: 'Install a node',
            href: 'https://docs.aleph.im/nodes/core/',
            target: '_blank',
          },
        ],
        media: [
          {
            name: 'x',
            icon: 'x',
            label: 'Follow us',
            href: 'https://twitter.com/aleph_im',
            target: '_blank',
            small: true,
          },
          {
            name: 'telegram',
            icon: 'telegram',
            label: 'Telegram',
            href: 'https://t.me/alephim',
            target: '_blank',
          },
          {
            name: 'linkedin',
            icon: 'linkedin',
            label: 'Linkedin',
            href: 'https://www.linkedin.com/company/aleph-im',
            target: '_blank',
          },
          {
            name: 'medium',
            icon: 'medium',
            label: 'Medium',
            href: 'https://medium.com/aleph-im',
            target: '_blank',
            small: true,
          },
          {
            name: 'github',
            icon: 'github',
            label: 'Github',
            href: 'https://github.com/aleph-im',
            target: '_blank',
          },
        ],
        mainLinks: [
          {
            label: 'Documentation',
            href: 'https://docs.aleph.im',
            target: '_blank',
          },
          {
            label: 'Telegram Developers',
            href: 'https://t.me/alephim/119590',
            target: '_blank',
          },
        ],
        links: [
          {
            title: 'Developers',
            links: [
              {
                label: 'Documentation',
                href: 'https://docs.aleph.im',
                target: '_blank',
              },
              {
                label: 'SDK',
                href: 'https://docs.aleph.im/libraries/Aleph.im-Python-SDK/',
                target: '_blank',
              },
              {
                label: 'Explorer',
                href: 'https://explorer.aleph.im/',
                target: '_blank',
              },
              {
                label: 'Core Node',
                href: 'https://account.aleph.im/earn/ccn/',
                target: '_blank',
              },
              {
                label: 'Compute Node',
                href: 'https://account.aleph.im/earn/crn/',
                target: '_blank',
              },
            ],
          },
          {
            title: 'About',
            links: [
              {
                label: 'Media kit',
                href: 'https://ipfs.aleph.cloud/ipfs/QmaFMoSzV3tncoHsD4bDKKqLHWrAQjGM2hWeDXSwoD2DCs?filename=twentysix-media.zip',
                target: '_blank',
              },
              {
                label: 'What is Twentysix Cloud?',
                href: 'https://www.twentysix.cloud/what-is-twentysix-cloud/',
                target: '_blank',
              },
              {
                label: 'Bridge',
                href: 'https://swap.aleph.im/',
                target: '_blank',
              },
            ],
          },
        ],
      }}
    />
  )
}

export default Footer
