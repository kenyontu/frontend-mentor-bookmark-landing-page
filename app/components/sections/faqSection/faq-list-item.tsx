import clsx from 'clsx'

type Props = {
  open: boolean
  question: string
  answer: string
  onClick: () => void
}

export function FaqListItem({ open, question, answer, onClick }: Props) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full bg-white border-none text-start py-3 text-sm text-neutral-800 cursor-pointer flex items-center justify-between"
      >
        <span className="flex-1">{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 12"
          className={clsx('transition-transform w-3', {
            'rotate-180': open,
          })}
        >
          <path
            fill="none"
            strokeWidth="3"
            d="M1 1l8 8 8-8"
            className={clsx('stroke-primary-400', {
              'stroke-secondary-400': open,
            })}
          />
        </svg>
      </button>
      <div
        className={clsx(
          'overflow-hidden bg-white transition-[max-height] max-h-0 ease-out duration-300',
          {
            'max-h-[10rem]': open,
          }
        )}
      >
        <p className="py-3 text-sm text-neutral-500 leading-loose">{answer}</p>
      </div>
    </div>
  )
}
