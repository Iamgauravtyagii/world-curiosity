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
    <main
      className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10 sm:py-24"
      id="main-content"
    >
      <Link
        className="text-sm font-semibold uppercase tracking-[0.16em] text-muted hover:underline"
        href={`/categories/${toSlug(category)}`}
      >
        {category}
      </Link>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
        {description}
      </p>
      <time className="mt-6 block text-sm text-muted" dateTime={date}>
        Published {date}
      </time>
      <nav aria-label="Article tags" className="mt-6">
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <Link
                className="rounded-full border border-black/10 px-3 py-1 text-sm text-muted hover:border-black/30 hover:text-foreground"
                href={`/tags/${toSlug(tag)}`}
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <figure className="mt-10">
        <Image
          alt={coverImage.alt}
          className="aspect-video w-full rounded-sm object-cover"
          height={900}
          priority
          src={coverImage.src}
          width={1600}
        />
        {coverImage.caption ? (
          <figcaption className="mt-3 text-sm text-muted">
            {coverImage.caption}
          </figcaption>
        ) : null}
      </figure>
      <div className="mt-12 text-lg leading-8 [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-semibold [&_p]:mt-6">
        <MDXRemote source={article.body} />
      </div>
    </main>
  );
}
