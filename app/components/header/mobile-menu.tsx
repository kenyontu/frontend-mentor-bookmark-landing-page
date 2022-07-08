import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

type Props = {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

export function MobileMenu({ open, onClose, children }: Props) {
  return (
    <Transition show={open}>
      <Dialog onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Panel className="fixed inset-0 z-20 flex flex-col bg-neutral-800/90 px-8 pb-10">
            {children}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}
