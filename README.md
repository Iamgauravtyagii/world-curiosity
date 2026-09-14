# I Got Curious

A visual personal journal of places, history, culture, art, technology, books,
ideas, experiments, hobbies, and personal reflections.

Stories begin with Gaurav's experiences, photographs, observations, and
curiosity, then can expand into research, history, culture, technology, or
reflection. It is personal without being a self-centred diary or a photo dump.

The Git repository remains named `world-curiosity`; only the public-facing brand
is now **I Got Curious**.

## Project status

**Phase:** Phase 7 — Production deployment and QA (complete)

The application baseline, Sanity content foundation, editorial visual system,
article pages, discovery routes, responsive image handling, lightweight static
search, and production SEO foundation are complete. Sanity Studio and the Vercel
production site are deployed, and the publish-to-live update flow has been
verified.

Routine work now consists of publishing real stories and making only focused
improvements justified by use.

## Working principle

> I experience something → I notice something → I get curious → I learn about it → I tell the story or reflect on it.

## Planned content model

- **Categories:** a small controlled set of broad subjects.
- **Tags:** flexible cross-cutting labels such as places, periods, people, technologies, themes, and subjects.
- **Stories:** flexible combinations of narrative, photographs, research, and
  reflection. Their form should follow the subject rather than a rigid template.

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

**Current:** Next.js + TypeScript + React + Tailwind CSS, with Sanity as the
story CMS and content source of truth.

Next.js renders the public experience; stories and story images are authored in
Sanity Studio. Local `/public` assets remain appropriate for branding and UI
assets rather than published story content.
