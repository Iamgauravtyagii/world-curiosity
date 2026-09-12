import Link from "next/link";
import { PrimaryNavigation } from "./primary-navigation";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-7 sm:px-10 sm:py-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <Link
            className="font-display text-3xl leading-none tracking-[-0.04em] sm:text-4xl"
            href="/"
          >
            I Got Curious
          </Link>
          <PrimaryNavigation />
        </div>
        <p className="mt-5 max-w-xl text-sm leading-6 text-muted">
          Stories, photographs, and the things I get curious about.
        </p>
      </div>
    </header>
  );
}
