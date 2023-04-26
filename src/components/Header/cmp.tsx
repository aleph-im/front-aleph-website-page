import { Logo, NavbarLink, NavbarLinkList } from '@aleph-front/aleph-core'
import Link from 'next/link'

import { StyledHeader, StyledButton, StyledNavbar } from './styles'
import { HeaderProps } from './types'

export const Header = (props: HeaderProps) => {
  return (
    <StyledHeader>
      <StyledNavbar
        logo={
          <Link href="/"><Logo /></Link>
        }
      >
        <>
          <NavbarLinkList withSlash>
            <NavbarLink><Link key="solutions" href="/#solutions">Solutions</Link></NavbarLink>
            <NavbarLink><Link key="roadmap" href="/#roadmap">Roadmap</Link></NavbarLink>
            <NavbarLink><Link key="indexing" href="/#indexing">Indexing</Link></NavbarLink>
          </NavbarLinkList>
          <NavbarLinkList>
            <NavbarLink><StyledButton key="cloud-app" forwardedAs="button">Launch Cloud dApp</StyledButton></NavbarLink>
          </NavbarLinkList>
        </>
      </StyledNavbar>
    </StyledHeader >
  )
}

export default Header
