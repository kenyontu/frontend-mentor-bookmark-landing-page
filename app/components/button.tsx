import { createElement } from 'react'
import type { ComponentProps } from 'react'
import clsx from 'clsx'

type ButtonAppearance = 'primary' | 'secondary' | 'neutral'

type As = 'a' | 'button'

type Props<A extends As> = {
  appearance?: ButtonAppearance
  as: A
} & ComponentProps<A>

export function Button<T extends As>({
  appearance = 'primary',
  className,
  as,
  ...props
}: Props<T>) {
  return createElement(as, {
    className: clsx(
      'rounded border-2 py-[0.775rem] text-center text-sm font-medium tracking-wide shadow-lg transition-colors hover:bg-white focus-visible:bg-white focus:outline-none',
      {
        'border-primary-400 bg-primary-400 text-white hover:text-primary-400 focus-visible:text-primary-400':
          appearance === 'primary',
      },
      {
        'border-secondary-400 bg-secondary-400 text-white hover:text-secondary-400 focus-visible:text-secondary-400':
          appearance === 'secondary',
      },
      {
        'border-gray-100 bg-gray-100 text-neutral-800 hover:border-neutral-800 hover:text-neutral-800 focus-visible:text-neutral-800 focus-visible:border-neutral-800':
          appearance === 'neutral',
      },
      className
    ),
    ...props,
  })
}
