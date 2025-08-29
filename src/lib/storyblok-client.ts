"use client";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

export const initStoryblokClient = () => {
  storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOCK_PREVIEW_ACCESS_TOKEN,
    use: [apiPlugin],
    enableFallbackComponent: true,
  });
};