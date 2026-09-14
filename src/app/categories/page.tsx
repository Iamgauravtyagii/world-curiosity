import Link from "next/link";
import type { Metadata } from "next";
import { EditorialPageCard } from "@/components/editorial-page-card";
import { getAllStories, getStoryCategories } from "@/lib/stories";

export const metadata: Metadata = {
  alternates: { canonical: "/categories" },
  description: "Browse I Got Curious stories by subject.",
  title: "Categories",
};

export default async function CategoriesPage() {
  const categories = getStoryCategories(await getAllStories());

  return (
    <EditorialPageCard>
      <div className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
        Browse by subject
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
        Categories
      </h1>
      {categories.length > 0 ? (
        <ul className="mt-12 divide-y divide-black/10 border-y border-black/10">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link
                className="flex items-center justify-between gap-6 py-6 hover:underline"
                href={`/categories/${category.slug}`}
              >
                <span className="text-xl font-semibold tracking-tight">
                  {category.title}
                </span>
                <span className="text-sm text-muted">
                  {category.count} {category.count === 1 ? "article" : "articles"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-12 text-muted">No categories are available yet.</p>
      )}
      </div>
    </EditorialPageCard>
  );
}
