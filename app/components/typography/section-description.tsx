import clsx from 'clsx'
import type { ComponentProps } from 'react'

type Props = ComponentProps<'p'>

export function SectionDescription({ children, className, ...props }: Props) {
  return (
    <p
      className={clsx(
        'col-span-2 text-center text-sm leading-[1.75em] tracking-wide text-neutral-400 lg:text-lg lg:tracking-normal',
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}
