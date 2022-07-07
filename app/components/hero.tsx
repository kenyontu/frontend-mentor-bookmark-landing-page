import { SectionDescription } from '~/components/typography'
import { ContentContainer } from './content-container'

export function Hero() {
  return (
    <section className="relative lg:pb-[3.5rem] xl:pb-[7.6rem]">
      <span
        aria-hidden
        className="absolute bg-primary-400 h-[12.75rem] sm:h-[15rem] right-0 bottom-0 top-[3rem] left-[19%] sm:top-[3.6rem] sm:left-[calc(50%-8rem)] -z-10 rounded-l-full lg:h-[18rem] lg:top-auto lg:bottom-0 lg:left-[calc(50%+8rem)] xl:h-[22rem] xl:left-[calc(50%+12.85rem)]"
      />
      <ContentContainer className="grid grid-cols-1 mt-11 lg:grid-cols-2 lg:grid-areas-[info_image] xl:mt-1">
        <div className="h-[16rem] lg:grid-in-[image] sm:h-[20rem] xl:pt-[3.4rem] xl:pl-[0.75rem]">
          <img
            src="/images/illustration-hero.svg"
            alt=""
            className="h-[15.7rem] sm:h-[19.5rem] mx-auto lg:w-full lg:h-auto"
          />
        </div>
        <div className="grid grid-cols-2 px-8 gap-3 mt-[3.25rem] lg:grid-in-[info] sm:px-24 md:px-36 lg:px-8 lg:place-content-center xl:pl-[5.25rem] 2xl:pl-[6.875rem] xl:grid-cols-3">
          <h1 className="col-span-2 text-center text-3xl leading-snug font-medium text-neutral-800 lg:text-left lg:text-4xl xl:col-span-3 xl:text-5xl xl:pt-20 xl:leading-[1.1]">
            A Simple Bookmark Manager
          </h1>
          <SectionDescription className="mt-1 mb-5 px-1 col-span-3 lg:text-left xl:mt-3">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </SectionDescription>
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
      </ContentContainer>
    </section>
  )
}
