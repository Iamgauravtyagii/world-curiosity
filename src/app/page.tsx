import Image from "next/image";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export default async function Home() {
  const articles = await getAllArticles();

  return (
    <main
      className="mx-auto w-full max-w-6xl flex-1 px-6 py-16 sm:px-10 sm:py-24"
      id="main-content"
    >
      <section className="max-w-3xl">
        <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
          World Curiosity
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted">
          Interesting things about the world, collected through travel, history,
          culture, art, technology, and curiosity.
        </p>
      </section>

      {articles.length > 0 ? (
        <section className="mt-20 border-t border-black/10 pt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
            Latest articles
          </p>
          <div className="mt-6 grid gap-10 sm:grid-cols-2">
            {articles.map((article) => (
              <article key={article.frontmatter.slug}>
                <Link
                  className="group block"
                  href={`/articles/${article.frontmatter.slug}`}
                >
                  <Image
                    alt={article.frontmatter.coverImage.alt}
                    className="aspect-video w-full rounded-sm object-cover transition-opacity group-hover:opacity-85"
                    height={900}
                    sizes="(min-width: 1280px) 516px, (min-width: 640px) 50vw, 100vw"
                    src={article.frontmatter.coverImage.src}
                    width={1600}
                  />
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                    {article.frontmatter.category}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight group-hover:underline">
                    {article.frontmatter.title}
                  </h2>
                  <p className="mt-3 leading-7 text-muted">
                    {article.frontmatter.description}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
