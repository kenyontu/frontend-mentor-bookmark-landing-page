import { ContentContainer } from '~/components/content-container'
import { SectionDescription, SectionTitle } from '~/components/typography'
import { ExtensionCard } from './extension-card'

export function ExtensionsSection() {
  return (
    <section className="mt-[9.3rem] lg:mt-[10rem]">
      <ContentContainer className="px-12 sm:px-32 md:px-40">
        <div className="lg:px-12 xl:px-56">
          <SectionTitle>Download the extension</SectionTitle>
          <SectionDescription className="mt-3 lg:mt-[1.675rem]">
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </SectionDescription>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 md:px-16 xl:mt-[3rem] xl:grid-cols-3 xl:items-start xl:gap-8 2xl:px-[3.1rem]">
          <ExtensionCard
            iconImgSrc="/images/logo-chrome.svg"
            name="Chrome"
            minVersion="62"
            link="#"
          />
          <ExtensionCard
            iconImgSrc="/images/logo-firefox.svg"
            name="Firefox"
            minVersion="55"
            link="#"
            className="xl:mt-10"
          />
          <ExtensionCard
            iconImgSrc="/images/logo-opera.svg"
            name="Opera"
            minVersion="46"
            link="#"
            className="xl:mt-20"
          />
        </div>
      </ContentContainer>
    </section>
  )
}
