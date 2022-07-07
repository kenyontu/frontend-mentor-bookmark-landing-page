import { Form } from '@remix-run/react'

import { ContentContainer } from '../content-container'
import { SectionTitle } from '../typography'

export function JoinSection() {
  return (
    <section className="mt-[7.65rem] bg-primary-400 xl:mt-[9.35rem]">
      <ContentContainer className="pt-[4.45rem] pb-[3.8rem] px-8 sm:px-24 md:px-24 md:pt-[4.25rem] md:pb-[4.5rem]">
        <p className="uppercase text-[0.8rem] font-medium text-center text-white tracking-[0.33em] md:tracking-[0.4em]">
          35.000+ already joined
        </p>
        <SectionTitle className="!text-white leading-tight mt-[0.55rem] md:mt-[2.1rem] md:w-[450px] md:mx-auto">
          Stay up-to-date with what we're doing
        </SectionTitle>
        <Form className="flex flex-col mt-[1.8rem] md:w-[440px] md:mx-auto md:flex-row md:gap-4 md:mt-[2.325rem]">
          <input
            placeholder="Enter your email address"
            className="rounded py-[0.9rem] px-4 text-sm tracking-wide md:flex-1"
          />
          <button
            type="submit"
            className="bg-secondary-400 text-white text-sm mt-[1rem] py-[0.85rem] px-4 font-medium rounded md:col-span-3 md:mt-0 md:px-[1.55rem]"
          >
            Contact Us
          </button>
        </Form>
      </ContentContainer>
    </section>
  )
}
