import type { ComponentProps } from 'react'

type Props = {} & ComponentProps<'a'>

export function NavbarItem({ children, className, ...rest }: Props) {
  return (
    <a className={''} {...rest}>
      Features
    </a>
  )
}
