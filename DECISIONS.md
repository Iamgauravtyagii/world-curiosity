# Technology Decisions

## Decision 001 — Web framework

**Status:** Accepted

### Options considered

1. Next.js
2. Astro
3. SvelteKit

### Decision

Use **Next.js with the App Router** for V1.

### Why

The project is content-heavy, but the author also wants this repository to be a credible software-engineering project and expects to use Codex heavily inside VS Code.

Next.js gives us:

- a very large React ecosystem
- strong TypeScript support
- extensive documentation
- a large developer community
- broad availability of examples and third-party integrations
- a transferable React/full-stack skillset
- room to add interactive features later without changing frameworks

The additional complexity compared with a purely content-oriented framework is acceptable because learning and ecosystem depth are explicit project goals.

### Why not Astro?

Astro is an excellent fit for content-first websites and may be simpler for this particular product.

However, the current project prioritizes ecosystem breadth, familiarity to AI coding tools, transferable React skills, and future flexibility. Astro would optimize more strongly for content simplicity, while Next.js better matches the combined product + learning + portfolio goals.

### Why not SvelteKit?

SvelteKit is capable and has a good developer experience, but its ecosystem and React interoperability are not as useful for this project as the Next.js/React ecosystem.

---

## Decision 002 — Language

**Status:** Accepted

Use **TypeScript**.

### Why

- static type checking
- strong IDE support
- excellent integration with React and Next.js
- large ecosystem
- improves maintainability
- useful portfolio skill

Plain JavaScript is intentionally not selected.

---

## Decision 003 — UI framework

**Status:** Accepted

Use **React**, through Next.js.

### Why

React is the underlying component model used by Next.js and has a very large ecosystem.

The project should avoid adding another UI abstraction unless a real requirement appears.

---

## Decision 004 — Styling

**Status:** Accepted

Use **Tailwind CSS**.

### Why

- rapid responsive layout development
- strong ecosystem
- predictable utility-based styling
- easy collaboration with AI coding tools
- supports a custom warm editorial visual system without a component library

### Rejected for now

Do not add a large component library such as Material UI, Chakra, or similar at project initialization.

The visual language of **I Got Curious** should be custom, warm, photography-led,
and editorial: expressive serif display type, understated sans-serif utility
type, and restrained earthy accents. Tailwind is an implementation tool, not a
visual identity.

---

## Decision 005 — Content format

**Status:** Accepted

Use **Sanity Portable Text** for story content.

### Why

- GUI-based authoring and publishing
- structured metadata, categories, and images
- Portable Text supports long-form editorial writing
- custom editorial blocks retain flexible composition

### Important constraint

Portable Text should not become an excuse to embed arbitrary application logic into articles.

Articles remain primarily content.

Reusable Portable Text blocks are introduced deliberately rather than making
every article a fixed template. Markdown/MDX was the original content approach
and has been retired after the Sanity migration.

---

## Decision 006 — Database

**Status:** Rejected for V1

No PostgreSQL, MongoDB, Supabase database, Prisma ORM, or equivalent will be introduced initially.

### Reason

There is currently:

- one author
- no authentication
- no comments
- no user-generated content
- no transactional data
- no requirement for dynamic persistence

A database would add complexity without solving a current problem.

Revisit if requirements change.

---

## Decision 007 — CMS

**Status:** Accepted

Use **Sanity** as the headless CMS and source of truth for stories.

### Reason

The editorial workflow now benefits from GUI-based authoring, media management,
and structured Portable Text blocks. Next.js remains responsible for the public
presentation and fetches published documents only; no draft preview is in scope.

---

## Decision 008 — Image handling

**Status:** Provisional

Use Next.js image optimization with Sanity-hosted story images.

Do not introduce Cloudinary, S3, Cloudflare R2, or another media platform until actual media volume/requirements justify it.

### Reason

Sanity stores story images, crop/hotspot choices, alt text, and captions. Local
`/public` assets remain for branding and UI needs. Do not add another media
provider until requirements justify it.

---

## Decision 009 — Video

**Status:** Accepted for V1

Prefer externally hosted video embeds for large video.

YouTube/Vimeo or an equivalent provider can be embedded into articles.

Large binary video files should not normally live in Git.

---

## Decision 010 — Search

**Status:** Provisional

Start without a database-backed search engine.

Generate/use a lightweight search index suitable for a static/content-oriented site.

Revisit after the article collection becomes large enough that the simple approach is insufficient.

---

## Decision 011 — Content freshness

**Status:** Accepted

Use **60-second time-based Next.js revalidation** for published Sanity content.

### Why

This keeps the editorial site statically delivered without a manual rebuild for
routine publishing. A webhook is intentionally deferred: a short delay is
acceptable, and time-based revalidation needs no webhook endpoint, secret, or
Sanity dashboard configuration.

---

## Decision 012 — Authentication

**Status:** Rejected for V1

No user authentication.

The initial product is a public publication with one author.

---

## Decision 013 — AI coding workflow

**Status:** Accepted

Use **OpenAI Codex inside VS Code** as an implementation and pair-programming tool.

### Rules

Codex should:

- inspect the repository before making architectural changes
- explain unfamiliar concepts when requested
- make small, reviewable changes
- run relevant tests/lint/build commands
- avoid introducing dependencies without justification
- avoid changing architecture without explicit approval
- not create unnecessary infrastructure

Human decisions remain authoritative for requirements and architecture.
