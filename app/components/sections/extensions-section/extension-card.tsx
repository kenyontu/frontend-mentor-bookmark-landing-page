import clsx from 'clsx'

type Props = {
  iconImgSrc: string
  name: string
  minVersion: string
  link: string
  className?: string
}

export function ExtensionCard({
  iconImgSrc,
  name,
  minVersion,
  link,
  className,
}: Props) {
  return (
    <div className={clsx('shadow-lg rounded-xl flex-1', className)}>
      <div className="flex flex-col items-center pt-12 pb-[2.15rem]">
        <img className="h-[6.25rem]" src={iconImgSrc} alt="" />
        <h3 className="mt-[2rem] text-neutral-800 text-xl font-medium tracking-wide">
          Add to {name}
        </h3>
        <p className="mt-2 text-neutral-400 text-sm tracking-wider">
          Minimum version {minVersion}
        </p>
      </div>
      <div className="px-6 pt-7 pb-6 bg-dot-pattern bg-repeat-x bg-top">
        <a
          href={link}
          className="block bg-primary-400 rounded text-center text-white py-[0.875rem] text-sm font-medium"
        >
          Add & Install Extension
        </a>
      </div>
    </div>
  )
}
