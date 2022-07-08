import { Form } from '@remix-run/react'

import { ContentContainer } from '../content-container'
import { SectionTitle } from '../typography'

export function JoinSection() {
  return (
    <section className="mt-[7.65rem] bg-primary-400 xl:mt-[9.35rem]">
      <ContentContainer className="px-8 pt-[4.45rem] pb-[3.8rem] sm:px-24 md:px-24 md:pt-[4.25rem] md:pb-[4.5rem]">
        <p className="text-center text-[0.8rem] font-medium uppercase tracking-[0.33em] text-white md:tracking-[0.4em]">
          35.000+ already joined
        </p>
        <SectionTitle className="mt-[0.55rem] leading-tight !text-white md:mx-auto md:mt-[2.1rem] md:w-[450px]">
          Stay up-to-date with what we're doing
        </SectionTitle>
        <Form className="mt-[1.8rem] flex flex-col md:mx-auto md:mt-[2.325rem] md:w-[440px] md:flex-row md:gap-4">
          <input
            placeholder="Enter your email address"
            className="rounded py-[0.9rem] px-4 text-sm tracking-wide md:flex-1"
          />
          <button
            type="submit"
            className="mt-[1rem] rounded bg-secondary-400 py-[0.85rem] px-4 text-sm font-medium text-white md:col-span-3 md:mt-0 md:px-[1.55rem]"
          >
            Contact Us
          </button>
        </Form>
      </ContentContainer>
    </section>
  )
}