import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SanityPortableText } from "@/components/sanity-portable-text";
import {
  getAllStories,
  getStoryCategory,
  getStoryBySlug,
  getStoryTags,
  storyImageUrl,
} from "@/lib/stories";
import { absoluteUrl } from "@/lib/site";

export async function generateMetadata({
  params,
}: PageProps<"/articles/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = await getStoryBySlug(slug);

  if (!article) {
    return {
      robots: { follow: false, index: false },
      title: "Story not found",
    };
  }

  const { coverImage, description, publishedAt, title, updatedAt } =
    article.frontmatter;
  const canonicalPath = `/articles/${slug}`;
  const socialImageUrl = storyImageUrl(coverImage, 1200, 630);

  return {
    alternates: { canonical: canonicalPath },
    description,
    openGraph: {
      description,
      images: [
        {
          alt: coverImage.alt,
          height: 630,
          url: socialImageUrl,
          width: 1200,
        },
      ],
      publishedTime: publishedAt,
      modifiedTime: updatedAt,
      title,
      type: "article",
      url: canonicalPath,
    },
    title,
    twitter: {
      card: "summary_large_image",
      description,
      images: [socialImageUrl],
      title,
    },
  };
}

export async function generateStaticParams() {
  const articles = await getAllStories();

  return articles.map((article) => ({ slug: article.frontmatter.slug }));
}

export default async function ArticlePage({
  params,
}: PageProps<"/articles/[slug]">) {
  const { slug } = await params;
  const article = await getStoryBySlug(slug);

  if (!article) {
    notFound();
  }

  const { category, coverImage, date, description, title } =
    article.frontmatter;

  const articleUrl = absoluteUrl(`/articles/${article.frontmatter.slug}`);

  return (
    <main className="flex-1" id="main-content">
      <article>
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              dateModified: article.frontmatter.updatedAt,
              datePublished: article.frontmatter.publishedAt,
              description,
              headline: title,
              image: storyImageUrl(coverImage, 1200, 630),
              mainEntityOfPage: articleUrl,
              url: articleUrl,
            }).replace(/</g, "\\u003c"),
          }}
          type="application/ld+json"
        />
        <header className="mx-auto w-full max-w-6xl px-6 pb-12 pt-20 sm:px-10 sm:pb-16 sm:pt-28">
          <div className="max-w-4xl">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.18em]">
              <Link
                className="text-rust underline decoration-rust/50 underline-offset-4 hover:text-olive"
                href={`/categories/${getStoryCategory(article).slug}`}
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
              height={coverImage.height}
              priority
              sizes="(min-width: 1280px) 1152px, (min-width: 640px) calc(100vw - 5rem), calc(100vw - 3rem)"
              src={storyImageUrl(coverImage)}
              width={coverImage.width}
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
            <SanityPortableText value={article.body} />
          </div>

          <footer className="mt-16 max-w-[42rem] border-t border-border pt-8 sm:mt-20">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-olive">
              Filed under
            </p>
            <nav aria-label="Article tags" className="mt-4">
              <ul className="flex flex-wrap gap-x-5 gap-y-3">
                {getStoryTags(article).map((tag) => (
                  <li key={tag.slug}>
                    <Link
                      className="text-sm text-muted underline decoration-border decoration-2 underline-offset-4 hover:text-foreground hover:decoration-rust"
                      href={`/tags/${tag.slug}`}
                    >
                      {tag.title}
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
