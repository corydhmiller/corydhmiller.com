import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { COMPONENTS } from "@/components/Storyblok/components";

export const storyblokComponents = COMPONENTS;

export const getStoryblokApi = (preview = false) => {
  const accessToken = preview
    ? process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN
    : process.env.NEXT_PUBLIC_STORYBLOK_PUBLIC_TOKEN;
  return storyblokInit({
    accessToken: accessToken || process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN, // fallback
    use: [apiPlugin],
    components: storyblokComponents,
    enableFallbackComponent: true,
  })();
};