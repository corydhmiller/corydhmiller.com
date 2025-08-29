import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const pathname = searchParams.get('pathname') || '/'

  const draft = await draftMode()
  draft.disable()
  
  revalidatePath('/')
  redirect(pathname)
}