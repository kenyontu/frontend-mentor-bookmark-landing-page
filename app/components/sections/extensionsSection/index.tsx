import { ExtensionCard } from './extension-card'

export function ExtensionsSection() {
  return (
    <section className="mt-32 px-12">
      <h2 className="text-lg text-neutral-800 text-center font-medium">
        Download the extension
      </h2>
      <p className="text-sm text-neutral-400 text-center mt-3">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>

      <div className="flex flex-col gap-3">
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
        />
        <ExtensionCard
          iconImgSrc="/images/logo-opera.svg"
          name="Opera"
          minVersion="46"
          link="#"
        />
      </div>
    </section>
  )
}
