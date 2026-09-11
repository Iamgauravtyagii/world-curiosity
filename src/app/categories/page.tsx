import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import { toSlug } from "@/lib/slug";

export default async function CategoriesPage() {
  const articles = await getAllArticles();
  const categoryCounts = new Map<string, number>();

  articles.forEach((article) => {
    const category = article.frontmatter.category;

    categoryCounts.set(category, (categoryCounts.get(category) ?? 0) + 1);
  });

  const categories = [...categoryCounts.entries()].sort(([first], [second]) =>
    first.localeCompare(second),
  );

  return (
    <main
      className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 sm:px-10 sm:py-24"
      id="main-content"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
        Browse by subject
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
        Categories
      </h1>
      {categories.length > 0 ? (
        <ul className="mt-12 divide-y divide-black/10 border-y border-black/10">
          {categories.map(([category, count]) => (
            <li key={category}>
              <Link
                className="flex items-center justify-between gap-6 py-6 hover:underline"
                href={`/categories/${toSlug(category)}`}
              >
                <span className="text-xl font-semibold tracking-tight">
                  {category}
                </span>
                <span className="text-sm text-muted">
                  {count} {count === 1 ? "article" : "articles"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-12 text-muted">No categories are available yet.</p>
      )}
    </main>
  );
}
