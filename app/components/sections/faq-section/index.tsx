import { ContentContainer } from '~/components/content-container'
import { SectionDescription, SectionTitle } from '~/components/typography'
import { FaqList } from './faq-list'

export function FaqSection() {
  return (
    <section>
      <ContentContainer className="mt-[8.75rem] flex flex-col px-8 sm:px-24 md:px-36 xl:mt-[10rem] xl:!w-[540px] xl:px-0">
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <SectionDescription className="mt-4 xl:mt-[1.6rem]">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </SectionDescription>
        <FaqList />
        <a
          href="#"
          className="mt-12 inline-block self-center rounded bg-primary-400 py-[0.9rem] px-6 text-sm font-medium text-white xl:mt-[2.875rem]"
        >
          More Info
        </a>
      </ContentContainer>
    </section>
  )
}
