import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { COMPONENTS } from "@/components/Storyblok/components";

export const storyblokComponents = COMPONENTS;

export const getStoryblokApi = (preview = false) => {
  const accessToken = preview
    ? process.env.NEXT_PUBLIC_STORYBLOCK_PREVIEW_ACCESS_TOKEN
    : process.env.STORYBLOCK_PUBLIC_ACCESS_TOKEN;
  return storyblokInit({
    accessToken,
    use: [apiPlugin],
    components: storyblokComponents,
    enableFallbackComponent: true,
  })();
};