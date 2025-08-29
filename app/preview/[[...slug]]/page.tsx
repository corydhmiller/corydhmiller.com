import { getStoryblokApi } from "@/src/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { notFound } from 'next/navigation';

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || ["home"];
  
  const client = getStoryblokApi(true);
  
  try {
    const response = await client.getStory(`blog/${slug.join("/")}`, {
      version: "draft",
    });
    
    return <StoryblokStory story={response.data.story} />;
  } catch (error) {
    console.error("Error fetching story:", error);
    notFound();
  }
}

// Generate metadata for preview
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug?: string[] }> 
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug?.[0];
  
  if (!slug) {
    return { title: "Preview" };
  }

  try {
    const client = getStoryblokApi(true);
    const response = await client.getStory(`blog/${slug}`, {
      version: "draft",
    });
    
    return {
      title: `Preview: ${response.data.story.content.title || 'Draft Post'}`,
      description: response.data.story.content.excerpt || 'Preview of draft content',
      robots: { index: false, follow: false }, // Don't index preview pages
    };
  } catch (error) {
    return { 
      title: "Preview - Post not found",
      robots: { index: false, follow: false }
    };
  }
}