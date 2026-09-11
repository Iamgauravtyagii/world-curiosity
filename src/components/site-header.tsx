import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-black/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <Link
          className="text-sm font-semibold uppercase tracking-[0.18em]"
          href="/"
        >
          World Curiosity
        </Link>
        <p className="text-sm text-muted">
          A journal of places, culture, history, and ideas.
        </p>
      </div>
    </header>
  );
}
