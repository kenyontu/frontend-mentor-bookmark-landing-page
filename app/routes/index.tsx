import { Header } from '~/components/header'
import { Hero } from '~/components/hero'
import { FeaturesSection } from '~/components/sections/features-section'
import { ExtensionsSection } from '~/components/sections/extensions-section'
import { FaqSection } from '~/components/sections/faq-section'
import { JoinSection } from '~/components/sections/join-section'
import { Footer } from '~/components/footer'

export default function Index() {
  return (
    <div className="">
      <Header />
      <main className="pt-header xl:pt-header-xl">
        <Hero />
        <FeaturesSection />
        <ExtensionsSection />
        <FaqSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  )
}
