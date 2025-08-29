import { draftMode } from 'next/headers'
import { StoryblokProvider } from '@/components/StoryblokProvider'
import PreviewToolbar from '@/components/PreviewToolbar'

export default async function PreviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const draft = await draftMode()
  draft.enable()
  
  return (
    <StoryblokProvider>
      <PreviewToolbar enabled={true} />
      {children}
    </StoryblokProvider>
  )
}