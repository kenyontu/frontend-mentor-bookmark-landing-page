export function Hero() {
  return (
    <section className="flex flex-col mt-10">
      <div className="relative px-1 h-[16rem]">
        <img src="/images/illustration-hero.svg" alt="" className="w-auto" />
        <span className="absolute bg-primary-400 h-[12.5rem] right-0 bottom-0 top-[22%] left-14 -z-10 rounded-l-full" />
      </div>
      <div className="grid grid-cols-2 px-6 mt-12 gap-3">
        <h1 className="col-span-2 text-center text-2xl font-medium text-neutral-800">
          A Simple Bookmark Manager
        </h1>
        <p className="col-span-2 text-center mb-4 text-sm text-neutral-400">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <a
          className="text-center bg-primary-400 rounded py-3 text-sm text-white text-medium shadow-lg"
          href=""
        >
          Get it on Chrome
        </a>
        <a
          className="text-center  rounded py-3 text-sm text-medium shadow-lg text-neutral-800 bg-gray-100"
          href=""
        >
          Get it on Firefox
        </a>
      </div>
    </section>
  )
}
