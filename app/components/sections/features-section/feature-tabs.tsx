import clsx from 'clsx'

import type { FeatureId } from './feature'
import { features } from './feature'

type Props = {
  selected: FeatureId
  onChange: (featureId: FeatureId) => void
}

export function FeatureTabs({ selected, onChange }: Props) {
  return (
    <div
      role="radiogroup"
      className="grid grid-cols-1 sm:grid-cols-3 sm:justify-evenly px-8 md:px-6 mt-10 md:mt-[2.5rem] lg:w-[777px] lg:mx-auto"
    >
      {features.map((feature) => {
        const inputId = `tab-${feature.id}`
        const handleChange = () => onChange(feature.id)

        return (
          <div
            key={feature.id}
            className="relative flex justify-center border-b border-gray-200 first:border-t sm:first:border-t-0"
          >
            <input
              id={inputId}
              type="radio"
              checked={feature.id === selected}
              onClick={handleChange}
              onChange={handleChange}
              className="absolute opacity-0"
            />
            <label
              htmlFor={inputId}
              className="text-neutral-800 text-center py-[1rem] relative cursor-pointer tracking-wide sm:px-2 sm:w-full xl:py-[1.75rem]"
            >
              {feature.tabName}
              <span
                className={clsx(
                  'absolute h-1 bg-secondary-400 left-1/2 -translate-x-1/2 bottom-0 w-0 opacity-0  transition-[width]',
                  {
                    'w-[90%] opacity-100 sm:w-full': feature.id === selected,
                  }
                )}
              ></span>
            </label>
          </div>
        )
      })}
    </div>
  )
}
