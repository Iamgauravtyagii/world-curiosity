import "server-only";
import type { PortableTextBlock } from "@portabletext/types";
import { toSlug } from "@/lib/slug";
import { sanityImageUrl } from "@/sanity/lib/image";
import {
  getPublishedSanityStories,
  getPublishedSanityStoryBySlug,
} from "@/sanity/lib/stories";
import type { SanityImage, SanityStory } from "@/sanity/lib/types";

export type StoryImage = {
  alt: string;
  caption?: string;
  height: number;
  sanityImage: SanityImage;
  src: string;
  width: number;
};

export type StoryFrontmatter = {
  category: string;
  categorySlug: string;
  coverImage: StoryImage;
  date: string;
  description: string;
  publishedAt: string;
  slug: string;
  tags: string[];
  title: string;
  updatedAt: string;
};

export type Story = {
  body: PortableTextBlock[];
  frontmatter: StoryFrontmatter;
};

export type StoryTerm = {
  count: number;
  slug: string;
  title: string;
};

function dimensionsFor(image: SanityImage) {
  return image.asset.metadata?.dimensions ?? { height: 900, width: 1600 };
}

function fromSanityStory(story: SanityStory): Story | undefined {
  if (!story.category || !story.heroImage.asset) {
    return undefined;
  }

  const { height, width } = dimensionsFor(story.heroImage);

  return {
    body: story.body,
    frontmatter: {
      category: story.category.title,
      categorySlug: story.category.slug,
      coverImage: {
        alt: story.heroImage.alt,
        caption: story.heroImage.caption,
        height,
        sanityImage: story.heroImage,
        src: sanityImageUrl(story.heroImage),
        width,
      },
      date: story.publishedAt.slice(0, 10),
      description: story.description,
      publishedAt: story.publishedAt,
      slug: story.slug,
      tags: story.tags,
      title: story.title,
      updatedAt: story._updatedAt,
    },
  };
}

export function storyImageUrl(image: StoryImage, width?: number, height?: number) {
  return sanityImageUrl(image.sanityImage, width, height);
}

export function getStoryCategory(story: Story) {
  return {
    slug: story.frontmatter.categorySlug,
    title: story.frontmatter.category,
  };
}

export function getStoryCategories(stories: Story[]): StoryTerm[] {
  const categories = new Map<
    string,
    { count: number; title: string }
  >();

  stories.forEach((story) => {
    const category = getStoryCategory(story);
    const current = categories.get(category.slug);

    if (current) {
      categories.set(category.slug, { ...current, count: current.count + 1 });
      return;
    }

    categories.set(category.slug, {
      count: 1,
      title: category.title,
    });
  });

  return [...categories.entries()]
    .map(([slug, { count, title }]) => ({ count, slug, title }))
    .sort((first, second) => first.title.localeCompare(second.title));
}

export function getStoriesByCategorySlug(stories: Story[], slug: string) {
  return stories.filter((story) => getStoryCategory(story).slug === slug);
}

export function getStoryTags(story: Story) {
  return story.frontmatter.tags.map((title) => ({ slug: toSlug(title), title }));
}

export function getStoryTagsIndex(stories: Story[]): StoryTerm[] {
  const tags = new Map<
    string,
    { count: number; title: string }
  >();

  stories.forEach((story) => {
    const seenSlugs = new Set<string>();

    getStoryTags(story).forEach((tag) => {
      if (seenSlugs.has(tag.slug)) {
        return;
      }

      seenSlugs.add(tag.slug);
      const current = tags.get(tag.slug);

      if (current) {
        tags.set(tag.slug, { ...current, count: current.count + 1 });
        return;
      }

      tags.set(tag.slug, {
        count: 1,
        title: tag.title,
      });
    });
  });

  return [...tags.entries()]
    .map(([slug, { count, title }]) => ({ count, slug, title }))
    .sort((first, second) => first.title.localeCompare(second.title));
}

export function getStoriesByTagSlug(stories: Story[], slug: string) {
  return stories.filter((story) =>
    getStoryTags(story).some((tag) => tag.slug === slug),
  );
}

export async function getAllStories(): Promise<Story[]> {
  const sanityStories = await getPublishedSanityStories();

  return sanityStories
    .map(fromSanityStory)
    .filter((story): story is Story => Boolean(story))
    .sort((first, second) =>
    second.frontmatter.date.localeCompare(first.frontmatter.date),
  );
}

export async function getStoryBySlug(slug: string): Promise<Story | undefined> {
  const sanityStory = await getPublishedSanityStoryBySlug(slug);
  return sanityStory ? fromSanityStory(sanityStory) : undefined;
}
