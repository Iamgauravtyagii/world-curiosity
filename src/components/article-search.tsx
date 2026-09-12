"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type SearchArticle = {
  category: string;
  description: string;
  slug: string;
  tags: string[];
  title: string;
};

type ArticleSearchProps = {
  articles: SearchArticle[];
};

function matchesQuery(article: SearchArticle, query: string) {
  const searchableText = [
    article.title,
    article.description,
    article.category,
    ...article.tags,
  ]
    .join(" ")
    .toLowerCase();

  return searchableText.includes(query);
}

export function ArticleSearch({ articles }: ArticleSearchProps) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const results = useMemo(
    () =>
      normalizedQuery
        ? articles.filter((article) => matchesQuery(article, normalizedQuery))
        : [],
    [articles, normalizedQuery],
  );

  return (
    <>
      <label className="mt-12 block text-sm font-semibold" htmlFor="search-query">
        Search articles
      </label>
      <input
        className="mt-3 w-full rounded-sm border border-black/20 bg-transparent px-4 py-3 text-lg outline-offset-4 placeholder:text-muted"
        id="search-query"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Try a topic, place, or idea"
        type="search"
        value={query}
      />

      <section aria-live="polite" className="mt-10">
        {normalizedQuery ? (
          results.length > 0 ? (
            <>
              <p className="text-sm text-muted">
                {results.length} {results.length === 1 ? "article" : "articles"} found
              </p>
              <ul className="mt-4 divide-y divide-black/10 border-y border-black/10">
                {results.map((article) => (
                  <li key={article.slug}>
                    <Link
                      className="block py-6 hover:underline"
                      href={`/articles/${article.slug}`}
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                        {article.category}
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                        {article.title}
                      </h2>
                      <p className="mt-3 leading-7 text-muted">
                        {article.description}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-muted">No articles match “{query.trim()}”.</p>
          )
        ) : (
          <p className="text-muted">Enter a search term to find articles.</p>
        )}
      </section>
    </>
  );
}
