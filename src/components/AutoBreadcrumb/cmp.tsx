import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { Breadcrumb } from '@aleph-front/aleph-core'
import Link from 'next/link'
import { AutoBreacrumbProps } from './types'

export default function AutoBreadcrumb({
  names = { '/': 'Home' },
  name: nameProp,
  includeHome = true,
  ...rest
}: AutoBreacrumbProps) {
  const router = useRouter()
  const isHome = router.pathname === '/'

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

  const navLinks = useMemo(() => {
    if (isHome) return []

    const links = router.pathname
      .split('/')
      .filter((item) => item !== '')
      .map((item, index, arr) => {
        const name = names[item]

        if (index === arr.length - 1) {
          const [, hash] = router.asPath.split('#')

          const itemName =
            nameProp ||
            (name
              ? typeof name === 'object'
                ? name[hash]
                : name
              : capitalize(item))

          return <span key={item}>{itemName}</span>
        }

        const itemName = name ? (name as string) : capitalize(item)
        return (
          <Link
            key={item}
            href={String('../').repeat(arr.length - (index + 1)) + item}
          >
            {itemName}
          </Link>
        )
      })

    if (includeHome) {
      links.unshift(
        <Link key={'home'} href={'/'}>
          {names['/'] as string}
        </Link>,
      )
    }

    return links
  }, [router.pathname, router.asPath, nameProp, names, isHome, includeHome])

  return isHome ? null : (
    <Breadcrumb navLinks={navLinks} {...rest} tw="py-5 px-6 md:px-16" />
  )
}
