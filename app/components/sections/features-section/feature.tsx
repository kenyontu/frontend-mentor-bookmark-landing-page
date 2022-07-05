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
    <div className="mt-2">
      <div className="relative h-[20rem] px-6 flex items-center justify-center">
        <img src={feature.pictureImgSrc} alt="" className="h-[14rem] w-auto " />
        <span className="absolute h-[14rem] bg-primary-400 left-0 bottom-0 top-[27%] right-14 -z-10 rounded-r-full" />
      </div>
      <div className="px-6 mt-8">
        <h2 className="text-center text-lg text-neutral-800 font-medium">
          {feature.title}
        </h2>
        <p className="mt-3 text-center text-sm text-neutral-400">
          {feature.message}
        </p>
      </div>
    </div>
  )
}
