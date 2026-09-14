import "server-only";
import {
  contentRevalidateSeconds,
  sanityClient,
} from "@/sanity/lib/client";
import {
  publishedStoriesQuery,
  publishedStoryBySlugQuery,
} from "@/sanity/lib/queries";
import type { SanityStory } from "@/sanity/lib/types";

export async function getPublishedSanityStories(): Promise<SanityStory[]> {
  if (!sanityClient) {
    return [];
  }

  return sanityClient.fetch<SanityStory[]>(publishedStoriesQuery, {}, {
    next: { revalidate: contentRevalidateSeconds },
  });
}

export async function getPublishedSanityStoryBySlug(
  slug: string,
): Promise<SanityStory | undefined> {
  if (!sanityClient) {
    return undefined;
  }

  return (
    (await sanityClient.fetch<SanityStory | null>(
      publishedStoryBySlugQuery,
      { slug },
      { next: { revalidate: contentRevalidateSeconds } },
    )) ?? undefined
  );
}
