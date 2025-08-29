"use client";
import { initStoryblokClient } from "@/src/lib/storyblok-client";
import { useEffect } from "react";

const isVisualEditor = typeof window !== 'undefined' &&
  window.self !== window.top &&
  window.location.search.includes("_storyblok");

export const StoryblokProvider = ({ children }: React.PropsWithChildren) => {
  useEffect(() => {
    if (isVisualEditor) {
      initStoryblokClient();
    }
  }, []);

  return <>{children}</>;
};