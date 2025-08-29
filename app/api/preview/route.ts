import { redirect } from 'next/navigation'
import { getStoryblokApi } from '@/src/lib/storyblok'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')

  if (!secret || !slug) {
    return new Response('Missing secret or slug', { status: 400 })
  }

  if (secret !== process.env.STORYBLOK_PREVIEW_SECRET) {
    return new Response('Invalid secret', { status: 401 })
  }

  try {
    const storyblokApi = getStoryblokApi(true) // Use preview token
    
    // Verify the story exists using getStory method
    const response = await storyblokApi.getStory(slug, {
      version: 'draft',
    })

    if (!response?.data?.story) {
      return new Response('Story not found', { status: 404 })
    }

    // Redirect to dedicated preview route
    if (slug.startsWith('blog/')) {
      redirect(`/preview/${slug.replace('blog/', '')}`)
    }
    
    redirect(`/preview/${slug}`)
  } catch (error) {
    console.error('Preview error:', error)
    return new Response(`Error enabling preview: ${error.message}`, { status: 500 })
  }
}