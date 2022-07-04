import { Header } from '~/components/header'
import { Hero } from '~/components/hero'
import { FeaturesSection } from '~/components/sections/featuresSection'
export default function Index() {
  return (
    <div className="">
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
      </main>
    </div>
  )
}
