import type { Metadata } from "next";
import { StoryTile } from "@/components/story-tile";
import { getAllStories } from "@/lib/stories";

export const metadata: Metadata = {
  alternates: { canonical: "/stories" },
  title: "Stories",
  description:
    "A chronological library of stories about places, history, culture, art, technology, and ideas.",
};

export default async function StoriesPage() {
  const stories = await getAllStories();

  return (
    <main className="flex-1" id="main-content">
      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rust">
          The complete notebook
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
          Stories
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          Places, ideas, detours, and the things worth looking at twice.
        </p>
      </section>

      {stories.length > 0 ? (
        <section className="border-t border-border">
          <div className="mx-auto grid w-full max-w-6xl gap-x-8 gap-y-14 px-6 py-16 sm:grid-cols-2 sm:px-10 sm:py-20 lg:grid-cols-3">
            {stories.map((story) => (
              <StoryTile article={story} key={story.frontmatter.slug} />
            ))}
          </div>
        </section>
      ) : (
        <section className="border-y border-border">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
            <p className="max-w-xl font-display text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl">
              The story library is just getting started.
            </p>
          </div>
        </section>
      )}
    </main>
  );
}
