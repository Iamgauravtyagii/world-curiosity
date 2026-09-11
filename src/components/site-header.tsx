import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-black/10">
      <div className="mx-auto w-full max-w-6xl px-6 py-6 sm:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            className="text-sm font-semibold uppercase tracking-[0.18em]"
            href="/"
          >
            World Curiosity
          </Link>
          <nav aria-label="Primary navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <li>
                <Link className="hover:underline" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/categories">
                  Categories
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/tags">
                  Tags
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/archive">
                  Archive
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="mt-4 text-sm text-muted">
          A journal of places, culture, history, and ideas.
        </p>
      </div>
    </header>
  );
}
