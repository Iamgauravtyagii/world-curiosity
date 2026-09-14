import Image from "next/image";
import Link from "next/link";
import { storyImageUrl, type Story } from "@/lib/stories";

type StoryTileProps = {
  article: Story;
};

export function StoryTile({ article }: StoryTileProps) {
  const { category, coverImage, date, description, slug, title } =
    article.frontmatter;

  return (
    <article>
      <Link className="group block" href={`/articles/${slug}`}>
        <div className="overflow-hidden bg-olive/10">
          <Image
            alt={coverImage.alt}
            className="aspect-[4/3] w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-90 group-focus-visible:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-focus-visible:scale-100"
            height={900}
            sizes="(min-width: 1024px) 360px, (min-width: 640px) calc((100vw - 7.5rem) / 2), calc(100vw - 3rem)"
            src={storyImageUrl(coverImage, 1200, 900)}
            width={1200}
          />
        </div>
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rust">
            {category}
            <span aria-hidden="true" className="mx-2 text-muted">
              ·
            </span>
            <time className="text-muted" dateTime={date}>
              {date}
            </time>
          </p>
          <h2 className="mt-3 font-display text-3xl leading-[1.05] tracking-[-0.03em] group-hover:underline group-focus-visible:underline">
            {title}
          </h2>
          <p className="mt-3 leading-7 text-muted">{description}</p>
        </div>
      </Link>
    </article>
  );
}
