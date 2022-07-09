import { useEffect, useState } from 'react'
import clsx from 'clsx'

import { TwitterIcon, FacebookIcon } from '~/components/icons'
import { ContentContainer } from '~/components/content-container'
import { Navbar } from './navbar'
import { NavbarItem } from './navbar-item'

export function Header() {
  const [isScrollOnPageTop, setIsScrollOnPageTop] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      setIsScrollOnPageTop(window.scrollY === 0)
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx('fixed top-0 right-0 left-0 z-10 bg-white', {
        'shadow-lg': !isScrollOnPageTop,
      })}
    >
      <ContentContainer
        className={clsx(
          'xl:mx-aut flex items-center justify-between px-8 transition-[height] xl:pl-[5.6rem] xl:pr-[5.25rem] 2xl:pl-[7.25rem] 2xl:pr-[6.8rem]',
          {
            'h-header xl:h-header-xl': isScrollOnPageTop,
            'h-16': !isScrollOnPageTop,
          }
        )}
      >
        <a
          href="#"
          className="rounded focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-800"
        >
          <img src="/images/logo-bookmark.svg" alt="Home" />
        </a>

        <Navbar shrinkHeader={!isScrollOnPageTop}>
          <ul className="flex flex-1 flex-col md:flex-row md:items-center md:gap-8 xl:gap-[2.85rem]">
            <NavbarItem href="#">Features</NavbarItem>
            <NavbarItem href="#">Pricing</NavbarItem>
            <NavbarItem href="#">Contact</NavbarItem>
            <NavbarItem href="#" appearance="button">
              Login
            </NavbarItem>
          </ul>

          <div className="mt-3 flex items-center gap-8 self-center md:hidden">
            <a href="#">
              <FacebookIcon className="w-5 fill-white" />
            </a>
            <a href="#">
              <TwitterIcon className="w-5 fill-white" />
            </a>
          </div>
        </Navbar>
      </ContentContainer>
    </header>
  )
}
