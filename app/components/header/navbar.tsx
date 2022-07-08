import clsx from 'clsx'
import { useState } from 'react'
import { ClientOnly } from 'remix-utils'
import { MobileMenu } from './mobile-menu'

type Props = {
  children: React.ReactNode
  shrinkHeader?: boolean
}

export function Navbar({ children, shrinkHeader }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex items-center">
      <nav className="hidden md:block">{children}</nav>

      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className={clsx('md:hidden', { 'opacity-0': isOpen })}
      >
        <img src="/images/icon-hamburger.svg" alt="Open menu" />
      </button>

      <ClientOnly>
        {() => (
          <MobileMenu open={isOpen} onClose={() => setIsOpen(false)}>
            <div
              className={clsx('flex items-center justify-between', {
                'h-header': !shrinkHeader,
                'h-16': shrinkHeader,
              })}
            >
              <img
                src="/images/logo-bookmark-all-white.svg"
                alt="Home"
                className="filter grayscale"
              />

              <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
                <img src="/images/icon-close.svg" alt="Close menu" />
              </button>
            </div>
            <nav
              className={clsx('flex flex-col flex-1 justify-between', {
                hidden: !isOpen,
                block: isOpen,
              })}
              aria-label="Header navigation"
            >
              {children}
            </nav>
          </MobileMenu>
        )}
      </ClientOnly>
    </div>
  )
}
