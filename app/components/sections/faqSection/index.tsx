import { FaqList } from './faq-list'

export function FaqSection() {
  return (
    <section className="px-6 mt-32 flex flex-col">
      <h2 className="text-lg text-neutral-800 font-medium text-center">
        Frequently Asked Questions
      </h2>
      <p className="mt-3 text-sm text-neutral-400 text-center">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <FaqList />
      <a
        href="#"
        className="text-sm text-white bg-primary-400 py-2 px-4 rounded mt-10 self-center font-medium"
      >
        More Info
      </a>
    </section>
  )
}
