import clsx from 'clsx'

import type { FeatureId } from './feature'
import { features } from './feature'

type Props = {
  selected: FeatureId
  onChange: (featureId: FeatureId) => void
}

export function FeatureTabs({ selected, onChange }: Props) {
  return (
    <div role="radiogroup" className="flex flex-col px-6 mt-6">
      {features.map((feature) => {
        const inputId = `tab-${feature.id}`
        const handleChange = () => onChange(feature.id)

        return (
          <div
            key={feature.id}
            className="relative flex justify-center border-b border-gray-200 first:border-t"
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
              className="text-neutral-800 text-center py-3 relative cursor-pointer"
            >
              {feature.tabName}
              <span
                className={clsx(
                  'absolute h-1 bg-secondary-400 left-1/2 bottom-0 w-0 opacity-0 -translate-x-1/2 transition-[width]',
                  { 'w-[90%] opacity-100': feature.id === selected }
                )}
              ></span>
            </label>
          </div>
        )
      })}
    </div>
  )
}
