# Requirements

## 1. Product vision

Create a public, visual personal journal called **I Got Curious**. It collects
stories about places, history, culture, art, technology, books, ideas,
experiments, hobbies, and personal reflections.

The recurring narrative pattern is: personal experience or observation →
curiosity → learning or research → story or reflection. Personal experience is
usually the entry point, but the result should not feel like a self-centred diary
or a photo dump. A story may move naturally into historical, cultural,
technical, philosophical, or reflective territory.

## 2. Content areas

Initial broad categories may include:

- Places and travel
- History, architecture, and museums
- Art and culture
- Food and books
- Technology and AI
- Ideas, mythology, religion, and consciousness
- Experiments, hobbies, and skills
- Personal reflections

The exact category list is intentionally not frozen yet.

## 3. Content model

Each article should support at least:

- title
- slug
- publication date
- optional updated date
- short description/excerpt
- category
- tags
- cover image
- article body
- optional image gallery
- optional embedded video
- optional external references/sources

Article structure should remain flexible. A photography-led place story, book
reflection, technology rabbit hole, and personal essay may use different
combinations of narrative and media while sharing the same reliable metadata.

### Categories vs tags

Categories are controlled, broad areas.

Tags are flexible labels that allow cross-topic discovery.

Example:

**Category:** Travel

**Tags:** Germany, Quedlinburg, Medieval, Architecture, History

An article may belong to one primary category while carrying many tags.

## 4. Discovery and navigation

The site should support:

- home page
- category pages
- tag pages
- article pages
- archive / chronological browsing
- search
- related/recommended articles where useful
- clear navigation/sidebar
- links between related topics

The current category, tag, and archive routes remain useful discovery tools.
Future public navigation should feel human and story-led—likely centred on
Stories, Places, Ideas, About, and Search—but route and taxonomy changes require
a separate decision.

## 5. Media

### Images

Images are a first-class part of the website.

Requirements:

- responsive image rendering
- optimized image delivery
- captions where useful
- alt text
- support for galleries
- sensible handling of high-resolution photographs

### Video

Video is secondary.

Initial support:

- embedded YouTube/Vimeo or equivalent external video
- optional locally hosted short clips if justified

Large video files should not be committed to Git by default.

## 6. Editorial experience

Initially there is one author.

The first version does **not** require:

- multi-user accounts
- public comments
- authentication
- admin dashboard
- database-backed CMS
- live editing

Writing content in version-controlled Markdown/MDX is preferred for V1.

## 7. Design

The site should feel like a warm, photography-led personal editorial journal:
curious, thoughtful, human, and slightly playful. It should avoid generic
Tailwind/docs presentation, corporate magazine polish, chaotic portfolio energy,
and a travel-only identity.

Priorities:

1. expressive, readable editorial typography
2. central, intentionally composed photography
3. strong story presentation and visual rhythm
4. warm, calm, accessible navigation
5. responsive behaviour and visual consistency

### Visual direction

- Use a warm paper/ivory base, charcoal text, terracotta or rust accent, muted
  olive secondary accent, and occasional deep-charcoal cinematic sections.
- Use an expressive serif for large display headings and article titles, with an
  understated sans-serif for navigation, metadata, captions, and labels.
- Mix warm reading areas with selected dark or photographic transitions rather
  than using a single uniform surface.
- Prefer large editorial story tiles, mixed-size image grids, image pairs,
  portrait/landscape combinations, captions, and full-width visual moments over
  identical small cards.
- Keep motion restrained and purposeful: subtle image zoom/darken, gentle
  reveals, and soft section transitions only.

### Homepage and article rhythm

The homepage should read like a visual personal notebook: a human introduction,
photography-led featured stories, a cinematic story moment, mixed-topic stories,
and quiet personal interludes. Categories, tags, archive, and search support
discovery but should not dominate the identity.

Article pages should support a composed visual narrative: concise metadata, a
large title and personal hook, a hero image, readable prose, captions, and
optional reusable editorial blocks such as image pairs, pull quotes, or
contextual sections. The phrase **“I GOT CURIOUS →”** is a recurring editorial
device for a story's deeper rabbit holes; its eventual visual implementation is
separate from the content schema.

## 8. Technical requirements

- TypeScript
- modern React-based web framework
- responsive design
- SEO-friendly rendering
- accessible HTML and navigation
- optimized images
- clean URLs
- Git/GitHub workflow
- deployable to a modern hosting platform

## 9. Performance

The site should avoid unnecessary client-side JavaScript.

Prefer server/static rendering where possible.

Images and video should be treated as the most likely performance bottlenecks.

## 10. SEO and sharing

Articles should support:

- meaningful page titles
- descriptions
- canonical URLs
- Open Graph metadata
- Twitter/X metadata where appropriate
- sitemap
- robots configuration
- RSS feed if practical

## 11. Future possibilities

These are explicitly out of scope for V1 but should not be made impossible by poor architecture:

- headless CMS
- database
- author/admin interface
- multiple authors
- user accounts
- comments
- newsletter
- advanced full-text search
- external object storage/CDN for media
- interactive maps
- richer data visualizations

## 12. Non-goals

Do not turn V1 into:

- a social network
- a general-purpose CMS
- a travel booking platform
- a community platform
- a complex SaaS application
