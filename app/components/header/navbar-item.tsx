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
    <li>
      <a
        className={clsx(
          'block text-center uppercase tracking-[0.2em] text-white transition-colors md:text-[0.76rem] md:tracking-[0.125rem]',
          {
            'border-b border-gray-500 py-4 first:border-t hover:text-secondary-400 focus:outline-none focus-visible:text-secondary-400 md:border-0 md:text-neutral-800 md:first:border-0':
              !isButton,
            'mt-5 rounded border-2 border-white py-3 font-medium md:mt-0 md:border-secondary-400 md:bg-secondary-400 md:px-4 md:py-2 md:shadow-lg md:hover:bg-white md:hover:text-secondary-400 md:focus:outline-none md:focus-visible:bg-white md:focus-visible:text-secondary-400 xl:py-[0.55rem] xl:px-[1.9rem]':
              isButton,
          }
        )}
        href={href}
      >
        {children}
      </a>
    </li>
  )
}
