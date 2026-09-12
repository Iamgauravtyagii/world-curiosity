# I Got Curious — Agent Instructions

## Instruction hierarchy

1. Explicit user instructions have the highest priority.
2. `README.md`, `REQUIREMENTS.md`, `ARCHITECTURE.md`, `DECISIONS.md`, and
   `DEVELOPMENT.md` are the source of truth for project decisions.
3. This file defines persistent working rules and engineering context.
4. Do not override explicit user decisions based on assumptions.

## Project context

I Got Curious is a public, visual personal editorial journal about places,
history, culture, art, technology, books, ideas, experiments, hobbies, and
personal reflections. The repository remains named `world-curiosity`.

Personal experience, photographs, and observations usually begin a story; the
story can then expand into research, context, or reflection. The product is not
a self-centred diary, photo dump, SaaS application, or formal corporate
magazine.

V1 stack:

- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- Markdown/MDX content stored in Git

## Before substantial changes

Read:

1. `README.md`
2. `REQUIREMENTS.md`
3. `ARCHITECTURE.md`
4. `DECISIONS.md`
5. `DEVELOPMENT.md`

Treat these documents as the project contract. Do not change an accepted
architectural decision without explicit user approval.

Before modifying files:

1. Inspect `git status`.
2. Preserve all unrelated uncommitted changes.
3. Never overwrite or delete user work without explicit approval.

## Git rules

- Do not create commits unless the user explicitly asks.
- Do not push to GitHub unless the user explicitly asks.
- Do not change Git remotes unless the user explicitly asks.
- Keep any user-requested commits focused and descriptive.

## V1 architecture boundaries

Do not introduce without explicit approval:

- databases or ORMs
- CMS platforms
- authentication, comments, or user accounts
- external media infrastructure
- large UI component libraries
- database-backed search
- other major infrastructure
- large video binaries in Git

Ask before changing URL conventions, the content schema, category taxonomy, or
other user-facing contracts.

Prefer server/static rendering. Add client components only when interaction
requires them.

## Content and media rules

- Store content in Git-managed Markdown/MDX.
- Keep content loading and filesystem access server-only.
- Validate all article frontmatter through one consistent schema.
- Each article has one primary category and flexible tags.
- Keep MDX primarily editorial; do not use it for arbitrary application logic.
- Preserve accessible alt text and captions where appropriate.
- Keep source media separate from generated or optimized output.
- Do not commit large video files by default.

## Visual and editorial direction

- Preserve the warm, personal, curious, editorial, visual, and slightly playful
  character of **I Got Curious**.
- Prefer expressive serif display typography, understated sans-serif utility
  typography, earthy editorial colours, and photography-led composition.
- Do not revert to generic minimal/docs styling or introduce a different colour
  system for every category.
- Treat “I GOT CURIOUS →” as a recurring editorial device. Do not add a schema
  field or custom component for it until a focused implementation task asks for
  one.
- Keep visual systems flexible: add reusable editorial blocks only in response
  to real content needs, rather than imposing one rigid article template.

## Implementation and verification

Use small, reviewable changes:

requirements → implementation → verification → review → focused commit

Before adding a dependency, explain why it is needed and prefer built-in
framework capabilities where practical.

After meaningful changes, run the relevant checks:

- development server
- lint
- type checking
- production build
- important page rendering and responsive behavior

Report what changed, why it changed, verification performed, and any remaining
decision or risk.

## Learning partnership

When introducing an unfamiliar technical concept, briefly explain what it is,
why it is needed, and which problem it solves.

Prefer teaching engineering reasoning rather than simply producing code.
Challenge weak assumptions with concrete reasoning instead of blindly agreeing.

## Current implementation order

1. Initialize Next.js + TypeScript.
2. Verify development, linting, type checking, and production build.
3. Establish base layout and typography.
4. Build navigation/sidebar.
5. Define content schema.
6. Add one sample article.
7. Build article page.
8. Build category and tag pages.
9. Add responsive image handling.
10. Build archive.
11. Add search.
12. Add SEO metadata, sitemap, RSS, and sharing metadata.
13. Implement the documented I Got Curious editorial visual system in focused
    reviewable chunks.
14. Add visual polish and accessibility improvements.
15. Deploy.
16. Replace sample content with real content.
