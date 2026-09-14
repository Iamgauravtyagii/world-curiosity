import { defineQuery } from "next-sanity";

const storyProjection = `{
  _updatedAt,
  title,
  "slug": slug.current,
  publishedAt,
  description,
  "category": category->{title, "slug": slug.current},
  tags,
  "heroImage": heroImage{
    alt,
    caption,
    crop,
    hotspot,
    "asset": asset->{
      _id,
      url,
      metadata{dimensions}
    }
  },
  body[]{
    ...,
    _type == "curiosity" => {
      ...,
      content[]
    },
    _type == "editorialImage" => {
      ...,
      image{
        crop,
        hotspot,
        "asset": asset->{_id, url, metadata{dimensions}}
      }
    },
    _type == "imagePair" => {
      ...,
      leftImage{
        crop,
        hotspot,
        "asset": asset->{_id, url, metadata{dimensions}}
      },
      rightImage{
        crop,
        hotspot,
        "asset": asset->{_id, url, metadata{dimensions}}
      }
    }
  }
}`;

// The explicit drafts filter remains even though the public client uses the
// published perspective, so this public data contract is unambiguous.
export const publishedStoriesQuery = defineQuery(`
  *[
    _type == "story" &&
    defined(publishedAt) &&
    defined(slug.current) &&
    defined(category) &&
    !(_id in path("drafts.**"))
  ] | order(publishedAt desc) ${storyProjection}
`);

export const publishedStoryBySlugQuery = defineQuery(`
  *[
    _type == "story" &&
    slug.current == $slug &&
    defined(publishedAt) &&
    defined(category) &&
    !(_id in path("drafts.**"))
  ][0] ${storyProjection}
`);
