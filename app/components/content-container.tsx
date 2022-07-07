import clsx from 'clsx'
import type { ComponentProps } from 'react'

type Props = ComponentProps<'div'>

function ContentContainer({ children, className, ...props }: Props) {
  return (
    <div
      className={clsx(
        'lg:mx-auto lg:w-max-lg xl:w-max-xl 2xl:w-max-2xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { ContentContainer }
