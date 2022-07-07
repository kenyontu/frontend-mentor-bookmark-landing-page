import { ContentContainer } from '~/components/content-container'
import { SectionDescription, SectionTitle } from '~/components/typography'
import { FaqList } from './faq-list'

export function FaqSection() {
  return (
    <section>
      <ContentContainer className="px-8 mt-[8.75rem] flex flex-col sm:px-24 md:px-36 xl:px-0 xl:mt-[10rem] xl:!w-[540px]">
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <SectionDescription className="mt-4 xl:mt-[1.6rem]">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </SectionDescription>
        <FaqList />
        <a
          href="#"
          className="inline-block text-sm text-white bg-primary-400 py-[0.9rem] px-6 rounded mt-12 self-center font-medium xl:mt-[2.875rem]"
        >
          More Info
        </a>
      </ContentContainer>
    </section>
  )
}
