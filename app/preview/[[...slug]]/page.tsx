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
  
  // Join the full slug path as it comes from the redirect
  const fullSlug = slug.join("/");
  console.log("Preview page slug:", fullSlug);
  
  const client = getStoryblokApi(true);
  
  if (!client) {
    console.error("Storyblok API not initialized");
    notFound();
  }
  
  try {
    const response = await client.getStory(fullSlug, {
      version: "draft",
    });
    
    console.log("Story fetched successfully:", response.data.story.name);
    return <StoryblokStory story={response.data.story} />;
  } catch (error) {
    console.error("Error fetching story:", error);
    console.error("Attempted slug:", fullSlug);
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
  const slug = resolvedParams.slug || ["home"];
  const fullSlug = slug.join("/");
  
  if (!fullSlug) {
    return { title: "Preview" };
  }

  try {
    const client = getStoryblokApi(true);
    if (!client) {
      return { title: "Preview - Error" };
    }
    
    const response = await client.getStory(fullSlug, {
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