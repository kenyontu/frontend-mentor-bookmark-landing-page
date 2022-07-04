import { useState } from 'react'

import { NavbarItem } from './navbar-item'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button>
        <img src="/images/icon-hamburger.svg" alt="Open menu" />
      </button>
      <nav className="absolute inset-0 hidden" aria-label="Header navigation">
        <ul>
          <li>
            <NavbarItem href="#">Features</NavbarItem>
          </li>
          <li>
            <NavbarItem href="#">Pricing</NavbarItem>
          </li>
          <li>
            <NavbarItem href="#">Contact</NavbarItem>
          </li>
          <li>
            <NavbarItem href="#">Login</NavbarItem>
          </li>
        </ul>
      </nav>
    </>
  )
}
