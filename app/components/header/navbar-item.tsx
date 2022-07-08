import clsx from 'clsx'

type Props = {
  appearance?: 'list-item' | 'button'
  children: string
  href: string
}

export function NavbarItem({
  appearance = 'list-item',
  children,
  href,
}: Props) {
  const isButton = appearance === 'button'

  return (
    <li
      className={clsx('text-white md:text-[0.76rem]', {
        'border-b border-gray-500 first:border-t md:border-0 md:text-neutral-800 md:first:border-0':
          !isButton,
        'mt-5 rounded border-2 border-white font-medium md:mt-0 md:border-0 md:bg-secondary-400 md:shadow-lg':
          isButton,
      })}
    >
      <a
        className={clsx(
          'block text-center uppercase tracking-[0.2em] md:tracking-[0.125rem]',
          {
            'py-4': !isButton,
            'py-3 md:px-4 md:py-2 xl:py-[0.75rem] xl:px-[2.1rem]': isButton,
          }
        )}
        href={href}
      >
        {children}
      </a>
    </li>
  )
}
