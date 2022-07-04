import { Navbar } from './navbar'

export function Header() {
  return (
    <div className="flex items-center py-8 px-6 justify-between">
      <a href="#">
        <img src="/images/logo-bookmark.svg" alt="Home" />
      </a>
      <Navbar />
    </div>
  )
}
