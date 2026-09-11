import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllArticles } from "@/lib/articles";
import { toSlug } from "@/lib/slug";

export async function generateStaticParams() {
  const articles = await getAllArticles();
  const categories = new Set(
    articles.map((article) => article.frontmatter.category),
  );

  return [...categories].map((category) => ({ slug: toSlug(category) }));
}

export default async function CategoryPage({
  params,
}: PageProps<"/categories/[slug]">) {
  const { slug } = await params;
  const articles = await getAllArticles();
  const categoryArticles = articles.filter(
    (article) => toSlug(article.frontmatter.category) === slug,
  );

  if (categoryArticles.length === 0) {
    notFound();
  }

  const category = categoryArticles[0].frontmatter.category;

  return (
    <main
      className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 sm:px-10 sm:py-24"
      id="main-content"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
        Category
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
        {category}
      </h1>
      <div className="mt-12 divide-y divide-black/10 border-y border-black/10">
        {categoryArticles.map((article) => (
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
