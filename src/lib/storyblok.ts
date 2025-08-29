import { getStoryblokApi } from "@storyblok/react"

// Get the appropriate access token based on context
export function getAccessToken(preview = false) {
  if (preview) {
    return process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN || process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN
  }
  return process.env.NEXT_PUBLIC_STORYBLOK_PUBLIC_TOKEN || process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN
}

// Get Storyblok API instance with appropriate token
export function getStoryblokApiInstance(preview = false) {
  return getStoryblokApi({
    accessToken: getAccessToken(preview)
  })
}