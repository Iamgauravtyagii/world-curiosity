# Architecture

## 1. Architectural goal

Use the simplest architecture that satisfies the current product requirements while leaving clear upgrade paths for future needs.

The website is primarily a content publication, not a data-intensive application.

## 2. Proposed high-level architecture

```text
                 GitHub repository
                        |
                 Next.js application
                        |
        +---------------+----------------+
        |                                |
   Presentation                     Content
        |                                |
 React components                 Markdown / MDX
 Tailwind CSS                     frontmatter
        |                                |
        +---------------+----------------+
                        |
                 Next.js rendering
                        |
                     Browser
                        |
          +-------------+-------------+
          |                           |
       Images                    Embedded video
       optimized                 external provider
```

## 3. Rendering strategy

Prefer server/static rendering for content pages.

Use client-side React only where interaction genuinely requires it.

Examples of potential client-side features:

- search interface
- image gallery controls
- interactive filters
- future maps or visualizations

Do not make the whole site a client-rendered application.

## 4. Content storage

V1 content will live in the Git repository as Markdown/MDX.

Benefits:

- version history
- simple backup
- reviewable changes
- no database required
- easy local editing
- easy collaboration with Git
- content and code can evolve together

A CMS/database may be introduced later if the editorial workflow demonstrates a real need.

## 5. Content metadata

Article metadata should be schema-validated.

Conceptually:

```text
Article
├── title
├── slug
├── date
├── updated
├── description
├── category
├── tags[]
├── coverImage
└── body
```

The exact implementation should use the capabilities of the selected content solution rather than creating an unnecessary custom CMS.

## 6. Media architecture

### Images

Use framework-supported image optimization and responsive delivery.

Keep source photographs separate from generated/optimized output.

### Video

Prefer external hosting/embedding for large videos.

Do not commit large video binaries to Git.

Object storage/CDN can be added later if local or external video requirements grow.

## 7. Search

V1 should avoid a database-backed search system.

Start with a generated/static search index or another lightweight solution appropriate to the chosen framework.

Upgrade only if the number of articles or search requirements justify it.

## 8. Database

No database in V1.

Reason:

The current product has one author, static/editorial content, no accounts, no comments, and no dynamic user-generated data.

Adding a database now would increase operational and conceptual complexity without solving a current requirement.

## 9. Deployment

The application should be deployable as a modern web application.

The exact provider is a separate decision from the application framework.

Avoid designing the application around provider-specific functionality unless it creates a meaningful benefit.

## 10. Extensibility

Potential future additions should fit around the core:

```text
V1
Git + Markdown/MDX
        |
        +--> future CMS
        +--> future database
        +--> future object storage
        +--> future search service
        +--> future interactive content
```

The architecture should evolve from demonstrated requirements, not hypothetical ones.
