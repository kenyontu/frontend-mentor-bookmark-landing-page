import { useState } from 'react'

import type { FeatureId } from './feature'
import { SectionDescription, SectionTitle } from '~/components/typography'
import { FeatureTabs } from './feature-tabs'
import { Feature } from './feature'
import { ContentContainer } from '~/components/content-container'

export function FeaturesSection() {
  const [selectedFeature, setSelectedFeature] =
    useState<FeatureId>('simpleBooking')

  return (
    <>
      <section className="relative mt-[9.25rem] lg:mt-[5.75rem]">
        <ContentContainer>
          <div className="px-6 sm:px-24 md:px-36 lg:w-[850px] lg:mx-auto">
            <SectionTitle>Features</SectionTitle>
            <SectionDescription className="mt-6 px-2">
              Our aim is to make it quick and easy for you to access your
              favourite websites. Your bookmarks sync between your devices so
              you can access them on the go.
            </SectionDescription>
          </div>
          <FeatureTabs
            selected={selectedFeature}
            onChange={setSelectedFeature}
          />
        </ContentContainer>
      </section>

      <section className="relative lg:pb-[2rem] xl:pb-[9rem] 2xl:pb-[5.5rem]">
        <span className="absolute h-[12.8rem] sm:h-[16rem] bg-primary-400 left-0 bottom-0 top-[20%] right-[18%] -z-10 rounded-r-full sm:top-[5rem]  sm:right-[calc(50%-8rem)] lg:top-auto lg:right-[calc(50%+10rem)] xl:h-[22rem] 2xl:h-[22rem] 2xl:right-[calc(50%+5rem)]" />
        <ContentContainer>
          <Feature featureId={selectedFeature} />
        </ContentContainer>
      </section>
    </>
  )
}
