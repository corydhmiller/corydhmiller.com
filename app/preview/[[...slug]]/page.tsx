import { notFound } from 'next/navigation'
import { draftMode } from 'next/headers'
import Article from "@components/Article"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeUnwrapImages from "rehype-unwrap-images"
import { MarkdownComponents } from "@utils/markdownComponents"
import { StoryblokComponent } from "@storyblok/react"
import { getStoryblokApiInstance } from "@/src/lib/storyblok"
import { updateStoryblokImageDimensions } from "@/app/lib/storyblok-image"

// Always fetch draft content in preview mode
async function getPreviewPost(slug: string) {
  try {
    const storyblokApi = getStoryblokApiInstance(true) // Use preview token
    const { data } = await storyblokApi.get(`cdn/stories/blog/${slug}`, {
      version: "draft", // Always draft in preview
    })

    return {
      title: data.story.content.title,
      date: data.story.first_published_at,
      excerpt: data.story.content.excerpt,
      slug: data.story.slug,
      content: data.story.content?.content,
      tags: data.story?.tag_list,
      image: data.story?.content?.image,
      story: data.story, // Full story for Visual Editor
    }
  } catch (error) {
    console.error("Error fetching preview post:", error)
    return null
  }
}

export default async function PreviewPost({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}) {
  // Enable draft mode for this request
  const draft = await draftMode()
  draft.enable()

  const resolvedParams = await params
  const slug = resolvedParams.slug?.[0]
  
  if (!slug) {
    notFound()
  }

  const post = await getPreviewPost(slug)
  
  if (!post) {
    notFound()
  }

  return (
    <div>
      <Article
        data={{
          title: post.title,
          wordCount: 100,
          publishDate: post.date,
          category: "Blog",
          tags: post.tags,
          image: post?.image,
        }}
      >
        {post.story ? (
          // Use StoryblokComponent for Visual Editor integration
          <StoryblokComponent blok={post.story.content} />
        ) : (
          // Fallback to markdown
          <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeUnwrapImages]}
            components={MarkdownComponents}
          >
            {post.content}
          </Markdown>
        )}
      </Article>
    </div>
  )
}

// Generate metadata for preview
export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }) {
  const resolvedParams = await params
  const slug = resolvedParams.slug?.[0]
  
  if (!slug) {
    return { title: "Preview" }
  }

  const post = await getPreviewPost(slug)
  
  if (!post) {
    return { title: "Preview - Post not found" }
  }

  return {
    title: `Preview: ${post.title}`,
    description: post.excerpt,
    robots: { index: false, follow: false }, // Don't index preview pages
  }
}