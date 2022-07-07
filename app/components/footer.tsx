import { FacebookIcon, TwitterIcon } from '~/components/icons'
import { ContentContainer } from './content-container'

export function Footer() {
  return (
    <footer className="bg-neutral-800">
      <ContentContainer className="flex flex-col py-10 items-center text-white md:flex-row md:py-8 md:px-[2rem] xl:px-[6.9rem]">
        <a href="#">
          <img src="/images/logo-bookmark-white.svg" alt="Home" />
        </a>
        <nav
          aria-label="Footer navigation"
          className="flex flex-col items-center gap-[1.75rem] mt-[2.35rem] tracking-[0.175em] text-[0.875rem] uppercase md:flex-1 md:flex-row md:mt-0 md:pl-[2rem] md:text-xs lg:pl-[4rem] lg:gap-[2.6rem]"
        >
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>

          <span className="md:flex-1" />

          <div className="flex items-center mt-4 gap-10 md:mt-0">
            <a href="#">
              <FacebookIcon className="w-6 fill-white" />
            </a>
            <a href="#">
              <TwitterIcon className="w-6 fill-white" />
            </a>
          </div>
        </nav>
      </ContentContainer>
    </footer>
  )
}
