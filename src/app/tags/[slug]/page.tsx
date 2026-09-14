import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllStories,
  getStoriesByTagSlug,
  getStoryTagsIndex,
} from "@/lib/stories";

export async function generateStaticParams() {
  const tags = getStoryTagsIndex(await getAllStories());

  return tags.map((tag) => ({ slug: tag.slug }));
}

export default async function TagPage({ params }: PageProps<"/tags/[slug]">) {
  const { slug } = await params;
  const stories = await getAllStories();
  const tagArticles = getStoriesByTagSlug(stories, slug);

  if (tagArticles.length === 0) {
    notFound();
  }

  const tag = getStoryTagsIndex(tagArticles).find(
    (candidate) => candidate.slug === slug,
  );

  return (
    <main
      className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 sm:px-10 sm:py-24"
      id="main-content"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
        Tag
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
        {tag?.title}
      </h1>
      <div className="mt-12 divide-y divide-black/10 border-y border-black/10">
        {tagArticles.map((article) => (
          <article className="py-8" key={article.frontmatter.slug}>
            <p className="text-sm text-muted">{article.frontmatter.date}</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              <Link
                className="hover:underline"
                href={`/articles/${article.frontmatter.slug}`}
              >
                {article.frontmatter.title}
              </Link>
            </h2>
            <p className="mt-3 leading-7 text-muted">
              {article.frontmatter.description}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
