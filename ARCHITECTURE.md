# Architecture

## 1. Architectural goal

Use the simplest architecture that satisfies the current product requirements while leaving clear upgrade paths for future needs.

The website is a personal, content-first editorial journal, not a data-intensive
application. Personal experience often starts a story, while research,
photography, and reflection give it wider context.

## 2. Proposed high-level architecture

```text
                    Sanity CMS
                        |
                 Next.js application
                        |
        +---------------+----------------+
        |                                |
   Presentation                     Content
        |                                |
 React components                 Sanity documents
 Tailwind CSS                     Portable Text + images
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

Published Sanity queries use 60-second time-based revalidation. This preserves
static delivery while allowing routine Studio publishing and edits to reach the
website automatically without a manual build or deployment. New dynamic route
slugs render on their first request and then follow the same revalidation rule.

Use client-side React only where interaction genuinely requires it.

Examples of potential client-side features:

- search interface
- image gallery controls
- interactive filters
- future maps or visualizations

Do not make the whole site a client-rendered application.

## 4. Content storage

Sanity is the source of truth for published stories, categories, Portable Text
bodies, and story images. Next.js queries published documents server-side and
adapts them into a presentation-focused Story view model. The repository holds
application code and local branding/UI assets; routine publishing no longer
requires editing article files in Git.

### Editorial flexibility

The shared metadata makes stories discoverable; it must not force every story
into the same presentation. Portable Text holds editorial content, while
reusable presentation blocks are introduced only when real stories establish a
need. Photography-led place stories, book reflections, technology explorations,
and personal essays may use different compositions.

“I GOT CURIOUS →” is an editorial writing device for transitions into deeper
context. It does not require a new Sanity field or custom component yet.

### Story media

Story images are uploaded and managed through Sanity. Image dimensions are
derived from Sanity asset metadata; image URLs use Sanity's image service so
editor-selected crop and hotspot data can be respected. Keep local `/public`
assets for branding, icons, and other interface assets only.

### V1 URL convention

Use explicit, plural route prefixes:

```text
/articles/<article-slug>
/categories/<category-slug>
/tags/<tag-slug>
/archive
```

Article URLs use the validated Sanity `slug` directly. Category URLs use the
authored Category document slug. Tag URLs use a deterministic lowercase,
hyphenated slug derived from their display label. For example, `Ideas /
Curiosity` becomes `ideas-curiosity`, while the visible label remains unchanged.
The archive is a single chronological index.

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

### Sanity story contract

The Sanity Studio `story` schema validates required title, slug, publication
date, description, category, tags, hero image, alt text, and Portable Text
body. Categories are separate referenced documents; tags remain flexible
strings. Public queries fetch only published stories, never drafts.

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

The public Next.js application is deployed on Vercel, while Sanity Studio is
deployed separately. This operational choice does not add application-level
coupling to Vercel; content continues to reach the site through published
Sanity queries and 60-second time-based revalidation.

Avoid provider-specific application features unless they create a meaningful
benefit.

## 10. Extensibility

Potential future additions should fit around the core:

```text
V1
Sanity CMS + Next.js
        +--> future database
        +--> future object storage
        +--> future search service
        +--> future interactive content
```

The architecture should evolve from demonstrated requirements, not hypothetical ones.
