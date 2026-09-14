import Link from "next/link";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cinema text-cinema-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8 sm:px-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-xl tracking-[-0.03em]">I Got Curious</p>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-3 text-xs uppercase tracking-[0.14em] text-cinema-muted">
              <li>
                <Link className="hover:text-cinema-foreground hover:underline" href="/stories">
                  Stories
                </Link>
              </li>
              <li>
                <Link className="hover:text-cinema-foreground hover:underline" href="/categories">
                  Categories
                </Link>
              </li>
              <li>
                <Link className="hover:text-cinema-foreground hover:underline" href="/tags">
                  Tags
                </Link>
              </li>
              <li>
                <Link className="hover:text-cinema-foreground hover:underline" href="/archive">
                  Archive
                </Link>
              </li>
              <li>
                <Link className="hover:text-cinema-foreground hover:underline" href="/about">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="text-xs uppercase tracking-[0.14em] text-cinema-muted">
          © {currentYear} I Got Curious
        </p>
      </div>
    </footer>
  );
}
