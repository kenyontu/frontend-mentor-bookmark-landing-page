import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

type Props = {
  open: boolean
  question: string
  answer: string
  onClick: () => void
}

export function FaqListItem({ open, question, answer, onClick }: Props) {
  const [maxHeight, setMaxHeight] = useState(-1)
  const answerContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (maxHeight < 0) setMaxHeight(answerContainer.current?.scrollHeight ?? 0)
  }, [maxHeight])

  useEffect(() => {
    const onResize = () => setMaxHeight(-1)

    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div className="relative border-b border-gray-200 xl:first:border-t">
      <button
        onClick={onClick}
        className="flex w-full cursor-pointer items-center justify-between border-none bg-white py-[1.35rem] text-start text-sm tracking-wide text-neutral-800 transition-colors hover:text-secondary-400 focus:text-secondary-400 focus:outline-none lg:text-lg lg:tracking-normal xl:pt-[1.35rem] xl:pb-[1.1rem] xl:pr-6"
      >
        <span className="flex-1">{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 12"
          className={clsx('w-4 transition-transform', {
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
        ref={answerContainer}
        style={{ maxHeight: maxHeight < 0 ? undefined : open ? maxHeight : 0 }}
        className={clsx(
          'overflow-hidden bg-white transition-[max-height] duration-300 ease-in-out',
          {
            'invisible absolute': maxHeight < 0,
          }
        )}
      >
        <p className="py-3 text-sm leading-loose text-neutral-500 lg:text-base lg:leading-9">
          {answer}
        </p>
      </div>
    </div>
  )
}
