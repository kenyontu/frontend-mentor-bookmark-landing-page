import type { ActionFunction } from '@remix-run/node'
import { json } from '@remix-run/node'

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()

  const email: string = (formData.get('email') ?? '') as string

  if (!email) {
    return json(
      { success: false, message: 'Email is required' },
      { status: 400 }
    )
  }

  if (!/^.+@.+\..+$/.test(email)) {
    return json(
      { success: false, message: "Whoops, make sure it's an email" },
      { status: 400 }
    )
  }

  return json({ success: true })
}
