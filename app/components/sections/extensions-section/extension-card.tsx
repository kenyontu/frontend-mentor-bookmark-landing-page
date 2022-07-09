import clsx from 'clsx'
import { Button } from '~/components/button'

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
    <div className={clsx('flex-1 rounded-xl shadow-lg', className)}>
      <div className="flex flex-col items-center pt-12 pb-[2.15rem]">
        <img className="h-[6.25rem]" src={iconImgSrc} alt="" />
        <h3 className="mt-[2rem] text-xl font-medium tracking-wide text-neutral-800">
          Add to {name}
        </h3>
        <p className="mt-2 text-sm tracking-wider text-neutral-400">
          Minimum version {minVersion}
        </p>
      </div>
      <div className="bg-dot-pattern bg-top bg-repeat-x px-6 pt-7 pb-6">
        <Button as="a" href={link} className="block">
          Add & Install Extension
        </Button>
      </div>
    </div>
  )
}
