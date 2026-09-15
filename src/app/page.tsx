import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { StoryTile } from "@/components/story-tile";
import { getAllStories, storyImageUrl } from "@/lib/stories";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default async function Home() {
  const articles = await getAllStories();
  const leadArticle = articles[0];
  const cinematicArticle = articles[1] ?? leadArticle;
  const supportingArticles = articles.slice(2, 4);
  const remainingArticles = articles.slice(4);

  return (
    <main className="flex-1" id="main-content">
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rust">
          A personal notebook
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-6xl leading-[0.92] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
          <span className="block">Somewhere between</span>
          <span className="block">
            <span className="text-headline-wondering">wondering</span> and{" "}
            <span className="text-headline-wandering">wandering.</span>
          </span>
        </h1>
        <div className="mt-10 max-w-2xl space-y-5 text-lg leading-8 text-muted sm:text-xl sm:leading-9">
          <p>Hey, I’m Gaurav. I’m curious about far too many things.</p>
          <p>
            Places send me digging into history, museum objects into rabbit holes, and books, art, technology, food, and random ideas usually leave me with more questions than answers.
          </p>
          <p>
            <strong>“I Got Curious”</strong> is where I keep those detours — the
            things I experience, learn, photograph, and keep thinking about.
          </p>
        </div>
      </section>

      {leadArticle ? (
        <>
          <section className="border-y border-border bg-white">
            <div
              className={`mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 sm:py-24 ${
                supportingArticles.length > 0
                  ? "grid gap-12 lg:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.55fr)] lg:items-end"
                  : "max-w-4xl"
              }`}
            >
              <article>
                <Link
                  className="group block"
                  href={`/articles/${leadArticle.frontmatter.slug}`}
                >
                  <div className="overflow-hidden bg-olive/10">
                    <Image
                      alt={leadArticle.frontmatter.coverImage.alt}
                      className="aspect-[4/3] w-full object-cover transition duration-700 ease-out group-hover:scale-[1.025] group-hover:brightness-90 group-focus-visible:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-focus-visible:scale-100"
                      height={1200}
                      priority
                      sizes="(min-width: 1024px) 720px, (min-width: 640px) calc(100vw - 5rem), calc(100vw - 3rem)"
                      src={storyImageUrl(
                        leadArticle.frontmatter.coverImage,
                        1600,
                        1200,
                      )}
                      width={1600}
                    />
                  </div>
                  <div className="mt-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rust">
                      {leadArticle.frontmatter.category}
                      <span aria-hidden="true" className="mx-2 text-muted">
                        ·
                      </span>
                      <time
                        className="text-muted"
                        dateTime={leadArticle.frontmatter.date}
                      >
                        {leadArticle.frontmatter.date}
                      </time>
                    </p>
                    <h2 className="mt-4 max-w-3xl font-display text-5xl leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl group-hover:underline group-focus-visible:underline">
                      {leadArticle.frontmatter.title}
                    </h2>
                    <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                      {leadArticle.frontmatter.description}
                    </p>
                  </div>
                </Link>
              </article>

              {supportingArticles.length > 0 ? (
                <aside aria-label="More recent stories">
                  <p className="mb-7 text-xs font-semibold uppercase tracking-[0.18em] text-olive">
                    More to explore
                  </p>
                  <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
                    {supportingArticles.map((article) => (
                      <StoryTile article={article} key={article.frontmatter.slug} />
                    ))}
                  </div>
                </aside>
              ) : null}
            </div>
          </section>

          <section className="border-b border-olive/25 bg-olive/10">
            <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-olive">
                A quiet interlude
              </p>
              <h2 className="mt-5 max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl">
                Lately, I’ve been curious about…
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                learning German · human behaviour · consciousness · astrology · geopolitics · baking · woodworking · whatever comes next
              </p>
            </div>
          </section>

          {cinematicArticle ? (
            <section className="bg-cinema text-cinema-foreground">
              <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 sm:px-10 sm:py-24 md:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] md:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cinema-muted">
                    A story to keep following
                  </p>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-cinema-muted">
                    {cinematicArticle.frontmatter.category}
                    <span aria-hidden="true" className="mx-2">
                      ·
                    </span>
                    <time dateTime={cinematicArticle.frontmatter.date}>
                      {cinematicArticle.frontmatter.date}
                    </time>
                  </p>
                  <h2 className="mt-4 font-display text-5xl leading-[0.98] tracking-[-0.05em] sm:text-6xl">
                    {cinematicArticle.frontmatter.title}
                  </h2>
                  <p className="mt-5 max-w-xl text-lg leading-8 text-cinema-muted">
                    {cinematicArticle.frontmatter.description}
                  </p>
                  <Link
                    className="mt-8 inline-block font-semibold text-cinema-foreground underline decoration-rust decoration-2 underline-offset-6 hover:text-cinema-muted"
                    href={`/articles/${cinematicArticle.frontmatter.slug}`}
                  >
                    Read the story <span aria-hidden="true">→</span>
                  </Link>
                </div>
                <Link
                  aria-label={`Read ${cinematicArticle.frontmatter.title}`}
                  className="group block overflow-hidden bg-foreground"
                  href={`/articles/${cinematicArticle.frontmatter.slug}`}
                >
                  <Image
                    alt={cinematicArticle.frontmatter.coverImage.alt}
                    className="aspect-[4/3] w-full object-cover opacity-90 transition duration-700 ease-out group-hover:scale-[1.025] group-hover:opacity-75 group-focus-visible:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-focus-visible:scale-100"
                    height={1000}
                    sizes="(min-width: 1280px) 540px, (min-width: 768px) 45vw, calc(100vw - 3rem)"
                    src={storyImageUrl(
                      cinematicArticle.frontmatter.coverImage,
                      1400,
                      1050,
                    )}
                    width={1400}
                  />
                </Link>
              </div>
            </section>
          ) : null}

          {remainingArticles.length > 0 ? (
            <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rust">
                More stories
              </p>
              <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                {remainingArticles.map((article) => (
                  <StoryTile article={article} key={article.frontmatter.slug} />
                ))}
              </div>
            </section>
          ) : null}
        </>
      ) : (
        <section className="border-y border-border">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
            <p className="max-w-xl font-display text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl">
              The notebook is just getting started.
            </p>
          </div>
        </section>
      )}
    </main>
  );
}
