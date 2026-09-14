import type { PortableTextBlock } from "@portabletext/types";
import type { SanityImageObject } from "@sanity/image-url";

export type SanityImage = SanityImageObject & {
  alt: string;
  caption?: string;
  asset: SanityImageObject["asset"] & {
    metadata?: {
      dimensions?: {
        height: number;
        width: number;
      };
    };
    url?: string;
  };
};

export type SanityStory = {
  _updatedAt: string;
  body: PortableTextBlock[];
  category: {
    slug: string;
    title: string;
  } | null;
  description: string;
  heroImage: SanityImage;
  publishedAt: string;
  slug: string;
  tags: string[];
  title: string;
};
