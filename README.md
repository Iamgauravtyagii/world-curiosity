# I Got Curious

A visual personal journal of places, history, culture, art, technology, books,
ideas, experiments, hobbies, and personal reflections.

Stories begin with Gaurav's experiences, photographs, observations, and
curiosity, then can expand into research, history, culture, technology, or
reflection. It is personal without being a self-centred diary or a photo dump.

The Git repository remains named `world-curiosity`; only the public-facing brand
is now **I Got Curious**.

## Project status

**Phase:** Phase 6 — Search and publishing metadata (in progress)

The application baseline, MDX content foundation, article pages, discovery
routes, responsive image handling, and lightweight static search are in place.
The remaining Phase 6 work is publishing metadata. The new visual editorial
direction is documented but has not yet been implemented in application code.

The next focused implementation work is publishing metadata, followed by the
documented visual editorial system.

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

**Proposed:** Next.js + TypeScript + React + Tailwind CSS, with Markdown/MDX-based content.

This decision is documented in `DECISIONS.md` and should be treated as the current baseline until implementation reveals a concrete reason to change it.
