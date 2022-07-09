import { SectionDescription } from '~/components/typography'
import { ContentContainer } from '~/components/content-container'
import { Button } from '~/components/button'

export function Hero() {
  return (
    <section className="relative lg:pb-[3.5rem] xl:pb-[1rem] 2xl:pb-[1.9rem]">
      <span
        aria-hidden
        className="absolute right-0 bottom-0 top-[3.5rem] left-[calc(50%-7.3rem)] -z-10 h-[12.75rem] rounded-l-full bg-primary-400 sm:top-[3.6rem] sm:left-[calc(50%-8rem)] sm:h-[15rem] lg:top-auto lg:bottom-0 lg:left-[calc(50%+8rem)] lg:h-[18rem] xl:left-[calc(50%+12.85rem)] xl:h-[20rem] 2xl:h-[22rem]"
      />
      <ContentContainer className="mt-9 grid grid-cols-1 lg:grid-cols-2 lg:grid-areas-[info_image] xl:mt-1">
        <div className="lg:grid-in-[image] xl:pt-[3.4rem] xl:pl-[0.75rem]">
          <img
            src="/images/illustration-hero.svg"
            alt=""
            className="mx-auto h-[15.7rem] sm:h-[19.5rem] lg:h-auto lg:w-full"
          />
        </div>
        <div className="mt-[3.5rem] px-8 sm:px-24 md:px-36 lg:px-8 lg:grid-in-[info] xl:pl-[5.25rem] 2xl:pl-[6.875rem]">
          <h1 className="col-span-2 text-center text-3xl font-medium leading-snug text-neutral-800 lg:text-left lg:text-4xl xl:col-span-3 xl:pt-20 xl:text-5xl xl:leading-[1.1]">
            A Simple Bookmark Manager
          </h1>
          <SectionDescription className="col-span-3 mt-4 mb-5 px-1 lg:text-left xl:mt-3 2xl:mt-[1.25rem]">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </SectionDescription>
          <div className="mt-8 grid grid-cols-2 gap-3 lg:place-content-center xl:grid-cols-3">
            <Button as="a" href="#">
              Get it on Chrome
            </Button>
            <Button as="a" href="#" appearance="neutral">
              Get it on Firefox
            </Button>
          </div>
        </div>
      </ContentContainer>
    </section>
  )
}
