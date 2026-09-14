# Development Guide

## Development philosophy

This project is intentionally being built as a real engineering project rather than as a one-shot AI-generated website.

The workflow is:

```text
Requirements
    ↓
Architecture
    ↓
Technology decisions
    ↓
Small implementation task
    ↓
Run / test
    ↓
Review
    ↓
Commit
    ↓
Next task
```

## Codex working rules

When working in this repository, Codex should:

1. Read `README.md`, `REQUIREMENTS.md`, `ARCHITECTURE.md`, and `DECISIONS.md` before substantial changes.
2. Treat these documents as the current project contract.
3. Explain important architectural decisions before implementing them when requested.
4. Prefer the smallest change that satisfies the requirement.
5. Do not add dependencies without explaining why they are needed.
6. Do not introduce a database, CMS, authentication, or external infrastructure unless a requirement justifies it.
7. Run lint/typecheck/tests/build where appropriate.
8. Report what changed and why.
9. Never silently replace an existing technology decision.
10. Keep commits focused and understandable.

## Phased implementation plan

Work proceeds in phases. A phase is a product milestone, not permission to make
many changes at once. Within each phase, complete only one small, reviewable
chunk at a time: usually one file, one component, one function, or one focused
piece of logic.

After each chunk:

1. Explain what changed, why it exists, and its impact.
2. Run the relevant small verification.
3. Stop for review.
4. Continue only after the user confirms they understand it or asks questions.

## Current implementation status

This section is the contributor-facing timeline. Update it when a phase reaches
a meaningful milestone, rather than relying only on commit history.

- **Phase 0 — Application baseline:** complete.
  - Next.js App Router, TypeScript, Tailwind CSS, and ESLint are initialized.
  - Linting, type checking, local development startup, and a production build
    have been verified.
- **Phase 1 — Editorial site shell:** complete.
  - Shared metadata, header, footer, global styling, a responsive home-page
    introduction, keyboard skip link, and primary navigation are complete.
- **Phase 2 — Content foundation:** complete.
  - The initial MDX proof of concept has been retired after the Sanity cutover.
  - Sanity Studio is now the validated source of truth for story metadata,
    Portable Text bodies, categories, tags, and story images.
- **Phase 3 — Article reading experience:** complete.
  - Static article routes render published Sanity metadata, cover images,
    captions, topic links, and Portable Text bodies.
- **Phase 4 — Discovery and navigation:** complete.
  - Home-page discovery, category and tag indexes/pages, and chronological
    archive browsing are complete.
  - Related-article rules remain deferred until enough real content exists to
    evaluate them.
- **Phase 5 — Media and responsive refinement:** complete.
  - Sanity image metadata, accessible alt text/captions, `next/image`,
    responsive image `sizes`, and manual responsive/keyboard checks are complete.
- **Phase 6 — Search and publishing metadata:** complete.
  - Lightweight static article search is complete.
  - Sanity-backed metadata, canonical URLs, sitemap, robots, sharing metadata,
    and 60-second sitemap refresh are complete. RSS remains deferred until its
    maintenance value is demonstrated.
- **Visual editorial direction:** complete.
  - The warm, photography-led I Got Curious visual system is implemented across
    the public site.
- **Phase 7 — Quality, deployment, and real content:** complete for release.
  - Sanity Studio and the Vercel production site are deployed.
  - Publish-to-live updates, production routes, and mobile layout have been
    verified.

### Phase 0 — Application baseline

Goal: initialize the approved Next.js, TypeScript, React, Tailwind, and ESLint
baseline without adding product features.

- Generate the application structure.
- Verify development startup, linting, type checking, and production build.
- Review the generated files before changing starter code.

### Phase 1 — Editorial site shell

Goal: replace the starter presentation with an accessible publication shell.

- Establish shared document metadata and the root layout.
- Establish base typography and global styles.
- Create the initial home-page structure.
- Add responsive primary navigation.

### Phase 2 — Content foundation

Goal: make Sanity-authored story content reliable before designing all discovery
pages.

- Define and validate the Sanity Story and Category schemas.
- Implement server-only published-story queries.
- Add and validate a published Sanity story.

### Phase 3 — Article reading experience

Goal: render a complete article page from validated content.

- Generate article routes from slugs.
- Render article metadata and Portable Text body.
- Add cover-image and caption conventions.
- Add a simple, accessible article layout.

### Phase 4 — Discovery and navigation

Goal: let readers move through the collection by topic and time.

- Generate category pages.
- Generate tag pages.
- Build chronological archive browsing.
- Add related-article rules only after enough content exists to test them.

### Phase 5 — Media and responsive refinement

Goal: make photography first-class without complicating media infrastructure.

- Document repository image conventions.
- Add responsive optimized image rendering.
- Add gallery support only when a real article needs it.
- Verify mobile layout, captions, and alt text.

The next visual work should apply the documented **I Got Curious** editorial
direction: warm personal introduction, typography-led hierarchy, photography
composition, and restrained motion. Treat this as a separate series of focused
implementation chunks, not as permission for a one-shot redesign.

### Phase 6 — Search and publishing metadata

Goal: improve discovery and sharing while keeping the site static-first.

- Select a lightweight search approach based on actual content volume.
- Implement search as a separate focused chunk.
- Add page metadata, canonical URLs, sitemap, robots, and sharing metadata.
  This is complete with Sanity-backed article metadata and a 60-second sitemap
  refresh cadence.
- Add RSS if its maintenance cost remains practical.

### Phase 7 — Quality, deployment, and real content

Goal: prepare a reliable public release.

- Perform accessibility and performance review.
- Verify representative pages and mobile behavior.
- Choose a deployment provider without provider-specific coupling.
- Deploy and replace sample content with real articles incrementally.

The production deployment and baseline QA are complete. Continue publishing
real stories incrementally; revisit only focused quality improvements that real
content demonstrates are needed.

## Git discipline

Prefer small commits such as:

```text
chore: initialize next.js project
feat: add site shell
feat: add article content model
feat: render article pages
feat: add category navigation
feat: add tag pages
feat: add responsive images
feat: add search
fix: improve mobile navigation
docs: update architecture
```

Avoid giant commits such as:

```text
final website
```

## Local verification

At each meaningful milestone verify:

- development server starts
- TypeScript passes
- lint passes
- production build passes
- important pages render
- mobile layout remains usable

The exact package-manager commands will be documented after project initialization.
