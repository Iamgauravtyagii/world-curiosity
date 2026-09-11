# World Curiosity

A personal-curated digital publication for interesting things about the world, collected through travel, history, culture, art, technology, and curiosity.

The site is intentionally broader than a conventional travel blog. The author is the curator/narrator; the subjects, stories, discoveries, and knowledge are the focus.

## Project status

**Phase:** Phase 5 — Media and responsive refinement (in progress)

The Next.js application baseline, editorial site shell, Git-managed MDX content
foundation, article pages, and discovery routes are in place. The current work
focuses on responsive image delivery and media conventions.

The next implementation milestone after Phase 5 is search and publishing
metadata.

## Working principle

> Interesting things about the world, collected through travel, history, culture, art, technology, and curiosity.

## Planned content model

- **Categories:** a small controlled set of broad subjects.
- **Tags:** flexible cross-cutting labels such as places, periods, people, technologies, themes, and subjects.
- **Articles:** primarily text + photographs, with occasional embedded video and custom interactive/media components where useful.

## Initial goals

1. Build a fast, content-first website.
2. Make articles easy to write, organize, edit, and discover.
3. Support rich photography without making media management unnecessarily complex.
4. Keep the architecture simple enough to understand and maintain.
5. Treat the repository as a real software-engineering project suitable for GitHub.
6. Use AI coding assistance (Codex) as a pair-programming/implementation tool, not as a substitute for architectural decisions or understanding.

## Documentation

- [Requirements](REQUIREMENTS.md)
- [Architecture](ARCHITECTURE.md)
- [Technology decisions](DECISIONS.md)
- [Development guide](DEVELOPMENT.md)

## Current technology decision

**Proposed:** Next.js + TypeScript + React + Tailwind CSS, with Markdown/MDX-based content.

This decision is documented in `DECISIONS.md` and should be treated as the current baseline until implementation reveals a concrete reason to change it.
