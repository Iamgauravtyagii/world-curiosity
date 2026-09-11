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
- **Phase 1 — Editorial site shell:** in progress.
  - Shared metadata, header, footer, global styling, a responsive home-page
    introduction, and a keyboard skip link are complete.
  - Primary navigation links are deferred until the corresponding routes exist.
- **Phase 2 onward:** not started.

### Phase 0 — Application baseline

Goal: initialize the approved Next.js, TypeScript, React, Tailwind, and ESLint
baseline without adding product features.

- Generate the application structure.
- Verify development startup, linting, type checking, and production build.
- Review the generated files before changing starter code.

### Phase 1 — Editorial site shell

Goal: replace the starter presentation with a minimal, accessible publication
shell.

- Establish shared document metadata and the root layout.
- Establish base typography and global styles.
- Create the initial home-page structure.
- Add calm, responsive primary navigation.

### Phase 2 — Content foundation

Goal: make Git-managed article content reliable before designing all discovery
pages.

- Choose and document the article directory convention.
- Define one schema for article frontmatter.
- Implement server-only article loading.
- Add and validate one small sample article.

### Phase 3 — Article reading experience

Goal: render a complete article page from validated content.

- Generate article routes from slugs.
- Render article metadata and body.
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

### Phase 6 — Search and publishing metadata

Goal: improve discovery and sharing while keeping the site static-first.

- Select a lightweight search approach based on actual content volume.
- Implement search as a separate focused chunk.
- Add page metadata, canonical URLs, sitemap, robots, and sharing metadata.
- Add RSS if its maintenance cost remains practical.

### Phase 7 — Quality, deployment, and real content

Goal: prepare a reliable public release.

- Perform accessibility and performance review.
- Verify representative pages and mobile behavior.
- Choose a deployment provider without provider-specific coupling.
- Deploy and replace sample content with real articles incrementally.

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
