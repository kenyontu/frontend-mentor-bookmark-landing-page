import { Header } from '~/components/header'
import { Hero } from '~/components/hero'
import { FeaturesSection } from '~/components/sections/features-section'
import { ExtensionsSection } from '~/components/sections/extensions-section'
import { FaqSection } from '~/components/sections/faq-section'

export default function Index() {
  return (
    <div className="">
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
        <ExtensionsSection />
        <FaqSection />
      </main>
    </div>
  )
}
