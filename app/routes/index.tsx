import { Header } from '~/components/header'
import { Hero } from '~/components/hero'
import { FeaturesSection } from '~/components/sections/featuresSection'
import { ExtensionsSection } from '~/components/sections/extensionsSection'
export default function Index() {
  return (
    <div className="">
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
        <ExtensionsSection />
      </main>
    </div>
  )
}
