import Link from "next/link";
import type { Metadata } from "next";
import { EditorialPageCard } from "@/components/editorial-page-card";
import { getAllStories, type Story } from "@/lib/stories";

export const metadata: Metadata = {
  alternates: { canonical: "/archive" },
  description: "A chronological archive of stories from I Got Curious.",
  title: "Archive",
};

type StoriesByYear = Record<string, Story[]>;

export default async function ArchivePage() {
  const articles = await getAllStories();
  const articlesByYear = articles.reduce<StoriesByYear>((groups, article) => {
    const year = article.frontmatter.date.slice(0, 4);

    groups[year] ??= [];
    groups[year].push(article);

    return groups;
  }, {});

  return (
    <EditorialPageCard>
      <div className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
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
      </div>
    </EditorialPageCard>
  );
}
