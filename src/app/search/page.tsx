import { ArticleSearch } from "@/components/article-search";
import type { Metadata } from "next";
import { getAllStories } from "@/lib/stories";

export const metadata: Metadata = {
  description: "Search the I Got Curious story library.",
  robots: { follow: true, index: false },
  title: "Search",
};

export default async function SearchPage() {
  const articles = await getAllStories();
  const searchArticles = articles.map(({ frontmatter }) => ({
    title: frontmatter.title,
    description: frontmatter.description,
    category: frontmatter.category,
    tags: frontmatter.tags,
    slug: frontmatter.slug,
  }));

  return (
    <main
      className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 sm:px-10 sm:py-24"
      id="main-content"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
        Find an article
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
        Search
      </h1>
      <ArticleSearch articles={searchArticles} />
    </main>
  );
}
