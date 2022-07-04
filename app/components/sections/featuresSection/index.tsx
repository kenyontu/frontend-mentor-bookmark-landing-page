import { FeatureTabs } from './feature-tabs'
import { Feature } from './feature'
import { useState } from 'react'

import type { FeatureId } from './feature'

export function FeaturesSection() {
  const [selectedFeature, setSelectedFeature] =
    useState<FeatureId>('simpleBooking')

  return (
    <section className="mt-32">
      <div className="px-6">
        <h2 className="text-lg font-medium text-neutral-800 text-center">
          Features
        </h2>
        <p className="text-sm text-neutral-400 text-center pt-3">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <FeatureTabs selected={selectedFeature} onChange={setSelectedFeature} />
      <Feature featureId={selectedFeature} />
    </section>
  )
}
