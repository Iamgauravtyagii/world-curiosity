import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import { toSlug } from "@/lib/slug";

export async function generateStaticParams() {
  const articles = await getAllArticles();

  return articles.map((article) => ({ slug: article.frontmatter.slug }));
}

export default async function ArticlePage({
  params,
}: PageProps<"/articles/[slug]">) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const { coverImage, category, date, description, tags, title } =
    article.frontmatter;

  return (
    <main className="flex-1" id="main-content">
      <article>
        <header className="mx-auto w-full max-w-6xl px-6 pb-12 pt-20 sm:px-10 sm:pb-16 sm:pt-28">
          <div className="max-w-4xl">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.18em]">
              <Link
                className="text-rust underline decoration-rust/50 underline-offset-4 hover:text-olive"
                href={`/categories/${toSlug(category)}`}
              >
                {category}
              </Link>
              <span aria-hidden="true" className="text-muted">
                ·
              </span>
              <time className="text-muted" dateTime={date}>
                {date}
              </time>
            </p>
            <h1 className="mt-7 max-w-4xl font-display text-5xl leading-[0.94] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              {title}
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-muted sm:text-2xl sm:leading-9">
              {description}
            </p>
          </div>
        </header>

        <figure className="mx-auto w-full max-w-6xl px-6 sm:px-10">
          <div className="bg-olive/10">
            <Image
              alt={coverImage.alt}
              className="h-auto w-full"
              height={900}
              priority
              sizes="(min-width: 1280px) 1152px, (min-width: 640px) calc(100vw - 5rem), calc(100vw - 3rem)"
              src={coverImage.src}
              width={1600}
            />
          </div>
          {coverImage.caption ? (
            <figcaption className="mt-4 max-w-2xl text-sm leading-6 text-muted">
              {coverImage.caption}
            </figcaption>
          ) : null}
        </figure>

        <div className="mx-auto w-full max-w-6xl px-6 pb-20 pt-14 sm:px-10 sm:pb-28 sm:pt-20">
          <div className="article-prose">
            <MDXRemote source={article.body} />
          </div>

          <footer className="mt-16 max-w-[42rem] border-t border-border pt-8 sm:mt-20">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-olive">
              Filed under
            </p>
            <nav aria-label="Article tags" className="mt-4">
              <ul className="flex flex-wrap gap-x-5 gap-y-3">
                {tags.map((tag) => (
                  <li key={tag}>
                    <Link
                      className="text-sm text-muted underline decoration-border decoration-2 underline-offset-4 hover:text-foreground hover:decoration-rust"
                      href={`/tags/${toSlug(tag)}`}
                    >
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </footer>
        </div>
      </article>
    </main>
  );
}
