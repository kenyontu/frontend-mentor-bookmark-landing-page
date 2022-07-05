import { useState } from 'react'
import { FaqListItem } from './faq-list-item'

const faqs = [
  {
    id: '1',
    question: 'What is Bookmark?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
  },
  {
    id: '2',
    question: 'How can I request a new browser?',
    answer:
      'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
  },
  {
    id: '3',
    question: 'Is there a mobile app?',
    answer:
      'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.',
  },
  {
    id: '4',
    question: 'What about other Chromium browsers?',
    answer:
      'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
  },
]

export function FaqList() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  return (
    <div className="mt-10">
      {faqs.map((faq) => (
        <FaqListItem
          key={faq.id}
          open={faq.id === openQuestion}
          question={faq.question}
          answer={faq.answer}
          onClick={() =>
            setOpenQuestion((openQuestion) =>
              openQuestion === faq.id ? null : faq.id
            )
          }
        />
      ))}
    </div>
  )
}
