import Link from "next/link";
import { getAllArticles, type Article } from "@/lib/articles";

type ArticlesByYear = Record<string, Article[]>;

export default async function ArchivePage() {
  const articles = await getAllArticles();
  const articlesByYear = articles.reduce<ArticlesByYear>((groups, article) => {
    const year = article.frontmatter.date.slice(0, 4);

    groups[year] ??= [];
    groups[year].push(article);

    return groups;
  }, {});

  return (
    <main
      className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 sm:px-10 sm:py-24"
      id="main-content"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
        Chronological index
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
        Archive
      </h1>
      {articles.length > 0 ? (
        <div className="mt-12 space-y-12">
          {Object.entries(articlesByYear).map(([year, yearArticles]) => (
            <section key={year}>
              <h2 className="text-2xl font-semibold tracking-tight">{year}</h2>
              <ol className="mt-4 divide-y divide-black/10 border-y border-black/10">
                {yearArticles.map((article) => (
                  <li className="py-5" key={article.frontmatter.slug}>
                    <p className="text-sm text-muted">
                      {article.frontmatter.date}
                    </p>
                    <Link
                      className="mt-1 inline-block text-lg font-semibold hover:underline"
                      href={`/articles/${article.frontmatter.slug}`}
                    >
                      {article.frontmatter.title}
                    </Link>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      ) : (
        <p className="mt-12 text-muted">No articles have been published yet.</p>
      )}
    </main>
  );
}
