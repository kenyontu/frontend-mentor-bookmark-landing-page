import clsx from 'clsx'
import type { ComponentProps } from 'react'

type Props = ComponentProps<'h2'>

export function SectionTitle({ children, className, ...props }: Props) {
  return (
    <h2
      className={clsx(
        'text-2xl font-medium text-neutral-800 text-center lg:text-[2rem]',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
}
