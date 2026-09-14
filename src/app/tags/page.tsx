import Link from "next/link";
import type { Metadata } from "next";
import { getAllStories, getStoryTagsIndex } from "@/lib/stories";

export const metadata: Metadata = {
  alternates: { canonical: "/tags" },
  description: "Browse I Got Curious stories by topic and recurring thread.",
  title: "Tags",
};

export default async function TagsPage() {
  const tags = getStoryTagsIndex(await getAllStories());

  return (
    <main
      className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 sm:px-10 sm:py-24"
      id="main-content"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
        Browse across subjects
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
        Tags
      </h1>
      {tags.length > 0 ? (
        <ul className="mt-12 divide-y divide-black/10 border-y border-black/10">
          {tags.map((tag) => (
            <li key={tag.slug}>
              <Link
                className="flex items-center justify-between gap-6 py-6 hover:underline"
                href={`/tags/${tag.slug}`}
              >
                <span className="text-xl font-semibold tracking-tight">
                  {tag.title}
                </span>
                <span className="text-sm text-muted">
                  {tag.count} {tag.count === 1 ? "article" : "articles"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-12 text-muted">No tags are available yet.</p>
      )}
    </main>
  );
}
