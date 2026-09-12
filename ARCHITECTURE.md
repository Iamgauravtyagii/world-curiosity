# Architecture

## 1. Architectural goal

Use the simplest architecture that satisfies the current product requirements while leaving clear upgrade paths for future needs.

The website is a personal, content-first editorial journal, not a data-intensive
application. Personal experience often starts a story, while research,
photography, and reflection give it wider context.

## 2. Proposed high-level architecture

```text
                 GitHub repository
                        |
                 Next.js application
                        |
        +---------------+----------------+
        |                                |
   Presentation                     Content
        |                                |
 React components                 Markdown / MDX
 Tailwind CSS                     frontmatter
        |                                |
        +---------------+----------------+
                        |
                 Next.js rendering
                        |
                     Browser
                        |
          +-------------+-------------+
          |                           |
       Images                    Embedded video
       optimized                 external provider
```

## 3. Rendering strategy

Prefer server/static rendering for content pages.

Use client-side React only where interaction genuinely requires it.

Examples of potential client-side features:

- search interface
- image gallery controls
- interactive filters
- future maps or visualizations

Do not make the whole site a client-rendered application.

## 4. Content storage

V1 content will live in the Git repository as Markdown/MDX.

Benefits:

- version history
- simple backup
- reviewable changes
- no database required
- easy local editing
- easy collaboration with Git
- content and code can evolve together

A CMS/database may be introduced later if the editorial workflow demonstrates a real need.

### Editorial flexibility

The shared metadata makes stories discoverable; it must not force every story
into the same presentation. MDX should continue to hold primarily editorial
content, while reusable presentation blocks can be introduced only when real
stories establish a need. Photography-led place stories, book reflections,
technology explorations, and personal essays may use different compositions.

“I GOT CURIOUS →” is an editorial writing device for transitions into deeper
context. It does not require a new frontmatter field or custom component yet.

### V1 directory convention

Store each article as one MDX source file:

```text
content/articles/<article-slug>.mdx
```

Store its web-ready images in a matching public directory:

```text
public/images/articles/<article-slug>/<image-file>
```

The article filename, its frontmatter `slug`, and its image directory use the
same slug. For example, `content/articles/quetedlinburg.mdx` uses images from
`public/images/articles/quetedlinburg/`.

Commit web-ready image derivatives only. Keep original high-resolution source
photographs outside the repository or in an explicitly excluded local archive.

### V1 URL convention

Use explicit, plural route prefixes:

```text
/articles/<article-slug>
/categories/<category-slug>
/tags/<tag-slug>
/archive
```

Article URLs use the validated frontmatter `slug` directly. Category and tag
URLs use a deterministic lowercase, hyphenated slug derived from their display
label. For example, `Ideas / Curiosity` becomes `ideas-curiosity`, while the
visible label remains unchanged. The archive is a single chronological index.

## 5. Content metadata

Article metadata should be schema-validated.

Conceptually:

```text
Article
├── title
├── slug
├── date
├── updated
├── description
├── category
├── tags[]
├── coverImage
└── body
```

### V1 frontmatter schema

Each article MDX file must provide the following frontmatter:

| Field | Type | Rule |
| --- | --- | --- |
| `title` | string | Required, non-empty. |
| `slug` | string | Required, lowercase words separated by hyphens. It must match the filename and image directory. |
| `date` | string | Required publication date in `YYYY-MM-DD` format. |
| `updated` | string | Optional update date in `YYYY-MM-DD` format. |
| `description` | string | Required, non-empty short article summary or personal deck/hook. |
| `category` | string | Required primary category. The controlled category vocabulary will be defined separately. |
| `tags` | string array | Required, with at least one tag. |
| `coverImage` | object | Required. Contains `src`, required non-empty `alt`, and optional `caption`. |
| `gallery` | image object array | Optional. Each item follows the `coverImage` image shape. |
| `video` | object | Optional external embed data: `provider` and `url`. |
| `sources` | source object array | Optional external references, each with `label` and `url`. |

Example:

```yaml
---
title: "A Morning in Quedlinburg"
slug: "a-morning-in-quetedlinburg"
date: "2026-09-11"
description: "A walk through the medieval streets of Quedlinburg."
category: "Travel"
tags:
  - "Germany"
  - "Architecture"
coverImage:
  src: "/images/articles/a-morning-in-quetedlinburg/cover.jpg"
  alt: "Half-timbered houses along a street in Quedlinburg"
  caption: "Quedlinburg, Germany"
---
```

The implementation must validate this schema in one shared server-only module.
Do not create a custom CMS or duplicate validation rules across routes.

## 6. Media architecture

### Images

Use framework-supported image optimization and responsive delivery.

Keep source photographs separate from generated/optimized output.

The eventual presentation layer should allow composed editorial image layouts
(for example, large story tiles, image pairs, and full-width moments) without
requiring every article to use them. Add those blocks only when a story needs
them.

### Video

Prefer external hosting/embedding for large videos.

Do not commit large video binaries to Git.

Object storage/CDN can be added later if local or external video requirements grow.

## 7. Search

V1 should avoid a database-backed search system.

Start with a generated/static search index or another lightweight solution appropriate to the chosen framework.

Upgrade only if the number of articles or search requirements justify it.

## 8. Database

No database in V1.

Reason:

The current product has one author, static/editorial content, no accounts, no comments, and no dynamic user-generated data.

Adding a database now would increase operational and conceptual complexity without solving a current requirement.

## 9. Deployment

The application should be deployable as a modern web application.

The exact provider is a separate decision from the application framework.

Avoid designing the application around provider-specific functionality unless it creates a meaningful benefit.

## 10. Extensibility

Potential future additions should fit around the core:

```text
V1
Git + Markdown/MDX
        |
        +--> future CMS
        +--> future database
        +--> future object storage
        +--> future search service
        +--> future interactive content
```

The architecture should evolve from demonstrated requirements, not hypothetical ones.
