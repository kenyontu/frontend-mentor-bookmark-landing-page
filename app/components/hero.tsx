import { SectionDescription } from '~/components/typography'
import { ContentContainer } from './content-container'

export function Hero() {
  return (
    <section className="relative lg:pb-[3.5rem] xl:pb-[1rem] 2xl:pb-[1.9rem]">
      <span
        aria-hidden
        className="absolute bg-primary-400 h-[12.75rem] sm:h-[15rem] right-0 bottom-0 top-[3.5rem] left-[calc(50%-7.3rem)] sm:top-[3.6rem] sm:left-[calc(50%-8rem)] -z-10 rounded-l-full lg:h-[18rem] lg:top-auto lg:bottom-0 lg:left-[calc(50%+8rem)] xl:h-[20rem] xl:left-[calc(50%+12.85rem)] 2xl:h-[22rem]"
      />
      <ContentContainer className="grid grid-cols-1 mt-9 lg:grid-cols-2 lg:grid-areas-[info_image] xl:mt-1">
        <div className="lg:grid-in-[image] xl:pt-[3.4rem] xl:pl-[0.75rem]">
          <img
            src="/images/illustration-hero.svg"
            alt=""
            className="h-[15.7rem] sm:h-[19.5rem] mx-auto lg:w-full lg:h-auto"
          />
        </div>
        <div className="px-8 mt-[3.5rem] lg:grid-in-[info] sm:px-24 md:px-36 lg:px-8 xl:pl-[5.25rem] 2xl:pl-[6.875rem]">
          <h1 className="col-span-2 text-center text-3xl leading-snug font-medium text-neutral-800 lg:text-left lg:text-4xl xl:col-span-3 xl:text-5xl xl:pt-20 xl:leading-[1.1]">
            A Simple Bookmark Manager
          </h1>
          <SectionDescription className="mt-4 mb-5 px-1 col-span-3 lg:text-left xl:mt-3 2xl:mt-[1.25rem]">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </SectionDescription>
          <div className="mt-8 grid grid-cols-2 gap-3 xl:grid-cols-3 lg:place-content-center">
            <a
              className="text-center bg-primary-400 rounded py-[0.9rem] tracking-wide text-sm text-white text-medium shadow-lg"
              href=""
            >
              Get it on Chrome
            </a>
            <a
              className="text-center  rounded text-sm text-medium py-[0.9rem] shadow-lg tracking-wide text-neutral-800 bg-gray-100"
              href=""
            >
              Get it on Firefox
            </a>
          </div>
        </div>
      </ContentContainer>
    </section>
  )
}
