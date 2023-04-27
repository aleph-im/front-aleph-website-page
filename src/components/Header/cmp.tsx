import { Logo, NavbarLink, NavbarLinkList } from '@aleph-front/aleph-core'
import Link from 'next/link'

import { StyledHeader, StyledButton, StyledNavbar } from './styles'
import { useCallback, useState } from 'react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleCloseMenu = useCallback(() => setIsOpen(false), [setIsOpen])

  return (
    <StyledHeader>
      <StyledNavbar
        open={isOpen}
        onToggle={setIsOpen}
        logo={
          <Link href="/">
            <Logo />
          </Link>
        }
      >
        <>
          <NavbarLinkList withSlash>
            <NavbarLink>
              <Link
                key="solutions"
                href="/#solutions"
                onClick={handleCloseMenu}
              >
                Solutions
              </Link>
            </NavbarLink>
            <NavbarLink>
              <Link key="roadmap" href="/#roadmap" onClick={handleCloseMenu}>
                Roadmap
              </Link>
            </NavbarLink>
            <NavbarLink>
              <Link key="indexing" href="/#indexing" onClick={handleCloseMenu}>
                Indexing
              </Link>
            </NavbarLink>
          </NavbarLinkList>
          <NavbarLinkList>
            <NavbarLink>
              <StyledButton
                key="cloud-app"
                forwardedAs="a"
                target="_blank"
                href="https://console.aleph.im"
              >
                Launch Cloud dApp
              </StyledButton>
            </NavbarLink>
          </NavbarLinkList>
        </>
      </StyledNavbar>
    </StyledHeader>
  )
}

export default Header
