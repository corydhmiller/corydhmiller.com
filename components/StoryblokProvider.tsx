"use client";
import { initStoryblokClient } from "@/src/lib/storyblok-client";

const isVisualEditor =
  typeof window !== 'undefined' &&
  window.self !== window.top &&
  window.location.search.includes("_storyblok");

export const StoryblokProvider = ({ children }: React.PropsWithChildren) => {
  if (isVisualEditor) initStoryblokClient();
  return <>{children}</>;
};