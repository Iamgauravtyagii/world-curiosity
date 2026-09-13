import Image from "next/image";
import Link from "next/link";
import curiousMind from "@/curious.png";
import { PrimaryNavigation } from "./primary-navigation";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-7 sm:px-10 sm:py-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <Link
            className="inline-flex items-end gap-1 font-display text-3xl leading-none tracking-[-0.04em] sm:gap-2 sm:text-4xl"
            href="/"
          >
            <span>I Got Curious</span>
            <span aria-hidden="true" className="block shrink-0 -mb-px">
              <Image
                alt=""
                className="h-auto w-16 sm:w-24 md:w-28 lg:w-32"
                sizes="(min-width: 1024px) 128px, (min-width: 768px) 112px, (min-width: 640px) 96px, 64px"
                src={curiousMind}
              />
            </span>
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
