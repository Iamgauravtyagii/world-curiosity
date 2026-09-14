import type { ReactNode } from "react";

type CuriosityProps = {
  children: ReactNode;
  title: string;
};

type PullQuoteProps = {
  children: ReactNode;
};

export function Curiosity({ children, title }: CuriosityProps) {
  return (
    <section
      aria-label={`I got curious: ${title}`}
      className="my-14 border-y border-olive/30 py-10 sm:my-20 sm:py-14"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rust">
        I Got Curious <span aria-hidden="true">→</span>
      </p>
      <p className="mt-4 max-w-2xl font-display text-3xl leading-[1.08] tracking-[-0.03em] sm:text-4xl">
        {title}
      </p>
      <div className="mt-5 max-w-xl text-muted [&_p:first-child]:mt-0 [&_p]:mt-4">
        {children}
      </div>
    </section>
  );
}

export function PullQuote({ children }: PullQuoteProps) {
  return (
    <figure className="my-14 border-l-2 border-rust pl-6 sm:my-20 sm:pl-8">
      <blockquote className="max-w-2xl font-display text-3xl leading-[1.15] tracking-[-0.03em] text-olive sm:text-4xl">
        {children}
      </blockquote>
    </figure>
  );
}
