import Image from "next/image";
import type { ReactNode } from "react";

type EditorialImage = {
  alt: string;
  caption?: string;
  height: number | string;
  src: string;
  width: number | string;
};

type CuriosityProps = {
  children: ReactNode;
  title: string;
};

type PullQuoteProps = {
  children: ReactNode;
};

type ImagePairProps = {
  leftAlt: string;
  leftCaption?: string;
  leftHeight: number | string;
  leftSrc: string;
  leftWidth: number | string;
  rightAlt: string;
  rightCaption?: string;
  rightHeight: number | string;
  rightSrc: string;
  rightWidth: number | string;
};

function validateImage(image: EditorialImage, componentName: string) {
  if (!image.alt.trim()) {
    throw new Error("Editorial images require meaningful alt text.");
  }

  const width = Number(image.width);
  const height = Number(image.height);

  if (
    !Number.isFinite(width) ||
    !Number.isFinite(height) ||
    width <= 0 ||
    height <= 0
  ) {
    throw new Error(
      `${componentName} requires positive width and height values. Received width: ${image.width}, height: ${image.height}.`,
    );
  }

  return { ...image, height, width };
}

function EditorialImageContent({
  componentName,
  image,
  sizes,
}: {
  componentName: string;
  image: EditorialImage;
  sizes: string;
}) {
  const validatedImage = validateImage(image, componentName);

  return (
    <>
      <Image
        alt={validatedImage.alt}
        className="h-auto w-full"
        height={validatedImage.height}
        sizes={sizes}
        src={validatedImage.src}
        width={validatedImage.width}
      />
      {validatedImage.caption ? (
        <figcaption className="mt-3 text-sm leading-6 text-muted">
          {validatedImage.caption}
        </figcaption>
      ) : null}
    </>
  );
}

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

export function WideImage(image: EditorialImage) {
  return (
    <figure className="my-12 xl:-mx-20 xl:w-[calc(100%+10rem)]">
      <EditorialImageContent
        componentName="WideImage"
        image={image}
        sizes="(min-width: 1280px) 832px, (min-width: 640px) 672px, calc(100vw - 3rem)"
      />
    </figure>
  );
}

export function ImagePair({
  leftAlt,
  leftCaption,
  leftHeight,
  leftSrc,
  leftWidth,
  rightAlt,
  rightCaption,
  rightHeight,
  rightSrc,
  rightWidth,
}: ImagePairProps) {
  const left = {
    alt: leftAlt,
    caption: leftCaption,
    height: leftHeight,
    src: leftSrc,
    width: leftWidth,
  };
  const right = {
    alt: rightAlt,
    caption: rightCaption,
    height: rightHeight,
    src: rightSrc,
    width: rightWidth,
  };

  return (
    <div className="my-12 grid gap-8 sm:grid-cols-2 xl:-mx-20 xl:w-[calc(100%+10rem)]">
      <figure>
        <EditorialImageContent
          componentName="ImagePair left image"
          image={left}
          sizes="(min-width: 1280px) 400px, (min-width: 640px) calc((100vw - 7.5rem) / 2), calc(100vw - 3rem)"
        />
      </figure>
      <figure>
        <EditorialImageContent
          componentName="ImagePair right image"
          image={right}
          sizes="(min-width: 1280px) 400px, (min-width: 640px) calc((100vw - 7.5rem) / 2), calc(100vw - 3rem)"
        />
      </figure>
    </div>
  );
}
