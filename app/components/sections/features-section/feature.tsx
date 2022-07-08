import { ContentContainer } from '~/components/content-container'
import { SectionDescription, SectionTitle } from '~/components/typography'

export type FeatureId = 'simpleBooking' | 'speedySearching' | 'easySharing'

export const features: {
  id: FeatureId
  tabName: string
  pictureImgSrc: string
  title: string
  message: string
}[] = [
  {
    id: 'simpleBooking',
    tabName: 'Simple Bookmarking',
    pictureImgSrc: '/images/illustration-features-tab-1.svg',
    title: 'Bookmark in one click',
    message:
      'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
  },
  {
    id: 'speedySearching',
    tabName: 'Speedy Searching',
    pictureImgSrc: '/images/illustration-features-tab-2.svg',
    title: 'Intelligent search',
    message:
      'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
  },
  {
    id: 'easySharing',
    tabName: 'Easy Sharing',
    pictureImgSrc: '/images/illustration-features-tab-3.svg',
    title: 'Share your bookmarks',
    message:
      'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
  },
]

type Props = {
  featureId: FeatureId
}

export function Feature({ featureId }: Props) {
  const feature =
    features.find((feature) => feature.id === featureId) ?? features[0]

  return (
    <div className="mt-[4.65rem] grid lg:grid-cols-2 lg:mt-[4.5rem]">
      <div className="px-6 flex justify-center lg:items-center lg:justify-end 2xl:pl-0 2xl:pr-[0.95rem]">
        <img
          src={feature.pictureImgSrc}
          alt=""
          className="h-[15.1rem] w-auto sm:h-[17.5rem] xl:h-[20rem] 2xl:h-[26rem]"
        />
      </div>
      <div className="px-6 mt-[2.45rem] sm:mt-[4.1rem] sm: sm:px-24 md:px-36 lg:mt-0 lg:px-8 xl:pl-[3rem] xl:pr-[7rem] xl:mt-[2rem] 2xl:mt-[4.1rem] 2xl:pl-[6.85rem]">
        <SectionTitle className="lg:text-left">{feature.title}</SectionTitle>
        <SectionDescription className="mt-[0.85rem] px-2 lg:px-0 lg:text-left lg:mt-[1.75rem]">
          {feature.message}
        </SectionDescription>
        <a
          href="#"
          className="hidden text-sm text-white bg-primary-400 rounded lg:inline-block font-medium px-[1.6rem] py-[0.85rem] mt-8 shadow-lg"
        >
          More Info
        </a>
      </div>
    </div>
  )
}
