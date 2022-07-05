type Props = {
  iconImgSrc: string
  name: string
  minVersion: string
  link: string
}

export function ExtensionCard({ iconImgSrc, name, minVersion, link }: Props) {
  return (
    <div className="shadow-lg rounded-xl">
      <div className="flex flex-col items-center pt-16 pb-8">
        <img className="h-20" src={iconImgSrc} alt="" />
        <h3 className="mt-6 text-neutral-800 text-lg font-medium">
          Add to {name}
        </h3>
        <p className="mt-1 text-neutral-400 text-sm">
          Minimum version {minVersion}
        </p>
      </div>
      <div className="p-5 bg-dot-pattern bg-repeat-x bg-top">
        <a
          href={link}
          className="block bg-primary-400 rounded text-center text-white py-3 text-sm font-medium"
        >
          Add & Install Extension
        </a>
      </div>
    </div>
  )
}
