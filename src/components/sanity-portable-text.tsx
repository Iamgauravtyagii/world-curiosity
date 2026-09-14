import Image from "next/image";
import {
  PortableText,
  type PortableTextComponents,
} from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { Curiosity, PullQuote } from "@/components/editorial-primitives";
import { sanityImageUrl } from "@/sanity/lib/image";
import type { SanityImage } from "@/sanity/lib/types";

type EditorialImageValue = {
  alt: string;
  caption?: string;
  image: SanityImage;
  layout: "standard" | "wide";
};

type ImagePairValue = {
  leftAlt: string;
  leftCaption?: string;
  leftImage: SanityImage;
  rightAlt: string;
  rightCaption?: string;
  rightImage: SanityImage;
};

type CuriosityValue = {
  content: PortableTextBlock[];
  title: string;
};

type PullQuoteValue = {
  quote: string;
};

function imageDimensions(image: SanityImage) {
  return image.asset.metadata?.dimensions ?? { height: 900, width: 1600 };
}

function EditorialImage({
  alt,
  caption,
  image,
  sizes,
}: {
  alt: string;
  caption?: string;
  image: SanityImage;
  sizes: string;
}) {
  const { height, width } = imageDimensions(image);

  return (
    <>
      <Image
        alt={alt}
        className="h-auto w-full"
        height={height}
        sizes={sizes}
        src={sanityImageUrl(image)}
        width={width}
      />
      {caption ? (
        <figcaption className="mt-3 text-sm leading-6 text-muted">
          {caption}
        </figcaption>
      ) : null}
    </>
  );
}

const textComponents: PortableTextComponents = {
  block: {
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
    h1: ({ children }) => <h2>{children}</h2>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h3>{children}</h3>,
    normal: ({ children }) => <p>{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => {
      const href = value?.href ?? "";
      const isExternal = href.startsWith("http://") || href.startsWith("https://");

      return (
        <a
          href={href}
          rel={isExternal ? "noreferrer" : undefined}
          target={isExternal ? "_blank" : undefined}
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong>{children}</strong>,
  },
};

const storyComponents: PortableTextComponents = {
  ...textComponents,
  types: {
    curiosity: ({ value }) => {
      const curiosity = value as CuriosityValue;

      return (
        <Curiosity title={curiosity.title}>
          <PortableText components={textComponents} value={curiosity.content} />
        </Curiosity>
      );
    },
    editorialImage: ({ value }) => {
      const editorialImage = value as EditorialImageValue;
      const image = (
        <EditorialImage
          alt={editorialImage.alt}
          caption={editorialImage.caption}
          image={editorialImage.image}
          sizes="(min-width: 1280px) 672px, (min-width: 640px) 672px, calc(100vw - 3rem)"
        />
      );

      return editorialImage.layout === "wide" ? (
        <figure className="my-12 xl:-mx-20 xl:w-[calc(100%+10rem)]">{image}</figure>
      ) : (
        <figure className="my-12">{image}</figure>
      );
    },
    imagePair: ({ value }) => {
      const imagePair = value as ImagePairValue;

      return (
        <div className="my-12 grid gap-8 sm:grid-cols-2 xl:-mx-20 xl:w-[calc(100%+10rem)]">
          <figure>
            <EditorialImage
              alt={imagePair.leftAlt}
              caption={imagePair.leftCaption}
              image={imagePair.leftImage}
              sizes="(min-width: 1280px) 400px, (min-width: 640px) calc((100vw - 7.5rem) / 2), calc(100vw - 3rem)"
            />
          </figure>
          <figure>
            <EditorialImage
              alt={imagePair.rightAlt}
              caption={imagePair.rightCaption}
              image={imagePair.rightImage}
              sizes="(min-width: 1280px) 400px, (min-width: 640px) calc((100vw - 7.5rem) / 2), calc(100vw - 3rem)"
            />
          </figure>
        </div>
      );
    },
    pullQuote: ({ value }) => (
      <PullQuote>{(value as PullQuoteValue).quote}</PullQuote>
    ),
  },
};

export function SanityPortableText({ value }: { value: PortableTextBlock[] }) {
  return <PortableText components={storyComponents} value={value} />;
}
