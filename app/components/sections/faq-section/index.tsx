import { ContentContainer } from '~/components/content-container'
import { Button } from '~/components/button'
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
        <Button
          as="a"
          href="#"
          className="mt-12 inline-block self-center px-[1.45rem] xl:mt-[2.875rem]"
        >
          More Info
        </Button>
      </ContentContainer>
    </section>
  )
}
