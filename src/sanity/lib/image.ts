import "server-only";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { sanityProject } from "@/sanity/lib/client";

const imageBuilder = sanityProject
  ? createImageUrlBuilder(sanityProject)
  : null;

export function sanityImageUrl(
  image: SanityImageSource,
  width?: number,
  height?: number,
) {
  if (!imageBuilder) {
    throw new Error("Sanity image settings are not configured.");
  }

  let builder = imageBuilder.image(image).auto("format");

  if (width && height) {
    // Sanity applies an editor-selected crop/hotspot when it creates this crop.
    builder = builder.width(width).height(height).fit("crop");
  } else if (width) {
    builder = builder.width(width);
  }

  return builder.url();
}
