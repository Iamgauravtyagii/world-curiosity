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

## Initial implementation order

1. Initialize Next.js + TypeScript project.
2. Verify local development, linting, type checking, and production build.
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
13. Add visual polish and accessibility improvements.
14. Deploy.
15. Replace sample content with real content.

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
