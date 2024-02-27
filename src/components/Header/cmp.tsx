import Link from 'next/link'
import { LinkComponent, Logo } from '@aleph-front/core'
import { StyledHeader, StyledButton, StyledNavbar } from './styles'
import { useHeader } from '@/hooks/useHeader'

export const Header = () => {
  const { pathname, routes, isOpen, breakpoint, handleToggle } = useHeader()

  return (
    <StyledHeader>
      <StyledNavbar
        {...{
          open: isOpen,
          onToggle: handleToggle,
          breakpoint,
          pathname,
          routes,
          Link: Link as LinkComponent,
          logo: (
            <Link href="/">
              <Logo text />
            </Link>
          ),
        }}
      >
        <StyledButton
          key="cloud-app"
          forwardedAs="a"
          target="_blank"
          href="https://console.aleph.im"
        >
          Launch Cloud dApp
        </StyledButton>
      </StyledNavbar>
    </StyledHeader>
  )
}

export default Header
