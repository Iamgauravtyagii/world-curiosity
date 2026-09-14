import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About",
  description:
    "I Got Curious is a visual personal journal of places, ideas, photographs, and the questions they lead to.",
};

export default function AboutPage() {
  return (
    <main className="flex-1" id="main-content">
      <section className="mx-auto w-full max-w-4xl px-6 py-20 sm:px-10 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rust">
          About this notebook
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
          A place to follow the interesting bits.
        </h1>
        <p className="mt-8 max-w-2xl text-xl leading-8 text-muted sm:text-2xl sm:leading-9">
          I Got Curious is a visual personal journal about places, history,
          culture, art, technology, and ideas.
        </p>
      </section>

      <section className="border-y border-border bg-white">
        <div className="mx-auto grid w-full max-w-4xl gap-12 px-6 py-16 sm:px-10 sm:py-20 md:grid-cols-3">
          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-olive">
              What this is
            </p>
            <p className="mt-5 leading-8 text-muted">
              A notebook for observations that deserve more room than a passing
              thought.
            </p>
          </article>
          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-olive">
              How stories begin
            </p>
            <p className="mt-5 leading-8 text-muted">
              Experience and photography are often the starting point. Then a
              detail raises a question, and the question leads somewhere else.
            </p>
          </article>
          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-olive">
              What I explore
            </p>
            <p className="mt-5 leading-8 text-muted">
              Research, context, and reflection can follow—but this is not a
              generic magazine or encyclopedia. It is a record of curiosity in
              motion.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
