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
      className="mt-10 grid grid-cols-1 px-8 sm:grid-cols-3 sm:justify-evenly md:mt-[2.5rem] md:px-6 lg:mx-auto lg:w-[777px]"
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
              className="relative cursor-pointer py-[1rem] text-center tracking-wide text-neutral-800 sm:w-full sm:px-2 xl:py-[1.75rem]"
            >
              {feature.tabName}
              <span
                className={clsx(
                  'absolute left-1/2 bottom-0 h-1 w-0 -translate-x-1/2 bg-secondary-400 opacity-0  transition-[width]',
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
