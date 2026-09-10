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

**Status:** Provisional

Use **Tailwind CSS**, subject to validation during the initial UI implementation.

### Why

- rapid responsive layout development
- strong ecosystem
- predictable utility-based styling
- easy collaboration with AI coding tools
- avoids introducing a component library before the visual identity is known

### Rejected for now

Do not add a large component library such as Material UI, Chakra, or similar at project initialization.

The visual language of the site should be custom and editorial.

---

## Decision 005 — Content format

**Status:** Accepted

Use **Markdown/MDX-based content** for V1.

### Why

- human-readable
- Git-friendly
- easy to edit
- excellent for long-form articles
- supports metadata/frontmatter
- MDX allows richer React components when necessary

### Important constraint

MDX should not become an excuse to embed arbitrary application logic into articles.

Articles remain primarily content.

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

**Status:** Rejected for V1

No headless CMS initially.

### Reason

Git-based Markdown/MDX provides:

- version control
- simple authoring
- reproducibility
- low operational overhead

A CMS becomes relevant if publishing from a phone, non-technical editing, multiple authors, or remote editorial workflows become important.

---

## Decision 008 — Image handling

**Status:** Provisional

Use Next.js-supported image optimization and a repository-friendly source-image workflow initially.

Do not introduce Cloudinary, S3, Cloudflare R2, or another media platform until actual media volume/requirements justify it.

### Reason

The site will be image-heavy, but external media infrastructure is an operational dependency. Start simple, measure, then introduce it when needed.

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

## Decision 011 — Authentication

**Status:** Rejected for V1

No user authentication.

The initial product is a public publication with one author.

---

## Decision 012 — AI coding workflow

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
