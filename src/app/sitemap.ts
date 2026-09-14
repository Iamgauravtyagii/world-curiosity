import type { MetadataRoute } from "next";
import {
  getAllStories,
  getStoryCategories,
  getStoryTagsIndex,
} from "@/lib/stories";
import { absoluteUrl } from "@/lib/site";

// Route-segment configuration must be statically analyzable by Next.js. Keep
// this aligned with contentRevalidateSeconds in the Sanity client.
export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const stories = await getAllStories();
  const categories = getStoryCategories(stories);
  const tags = getStoryTagsIndex(stories);

  return [
    { url: absoluteUrl("/") },
    { url: absoluteUrl("/stories") },
    { url: absoluteUrl("/categories") },
    ...categories.map((category) => ({
      url: absoluteUrl(`/categories/${category.slug}`),
    })),
    { url: absoluteUrl("/tags") },
    ...tags.map((tag) => ({ url: absoluteUrl(`/tags/${tag.slug}`) })),
    { url: absoluteUrl("/archive") },
    { url: absoluteUrl("/about") },
    ...stories.map((story) => ({
      lastModified: story.frontmatter.updatedAt,
      url: absoluteUrl(`/articles/${story.frontmatter.slug}`),
    })),
  ];
}
