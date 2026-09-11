import "server-only";
import { z } from "zod";

function isValidCalendarDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  const parsedDate = new Date(Date.UTC(year, month - 1, day));

  return (
    parsedDate.getUTCFullYear() === year &&
    parsedDate.getUTCMonth() === month - 1 &&
    parsedDate.getUTCDate() === day
  );
}

const dateSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD format.")
  .refine(isValidCalendarDate, "Use a valid calendar date.");

const imageSchema = z
  .object({
    src: z.string().startsWith("/images/articles/"),
    alt: z.string().trim().min(1, "Image alt text is required."),
    caption: z.string().trim().min(1).optional(),
  })
  .strict();

export const articleFrontmatterSchema = z
  .object({
    title: z.string().trim().min(1, "Article title is required."),
    slug: z
      .string()
      .regex(
        /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
        "Use lowercase words separated by hyphens.",
      ),
    date: dateSchema,
    updated: dateSchema.optional(),
    description: z.string().trim().min(1, "Article description is required."),
    category: z.string().trim().min(1, "Article category is required."),
    tags: z.array(z.string().trim().min(1)).min(1, "Add at least one tag."),
    coverImage: imageSchema,
    gallery: z.array(imageSchema).optional(),
    video: z
      .object({
        provider: z.string().trim().min(1),
        url: z.url(),
      })
      .strict()
      .optional(),
    sources: z
      .array(
        z
          .object({
            label: z.string().trim().min(1),
            url: z.url(),
          })
          .strict(),
      )
      .optional(),
  })
  .strict()
  .superRefine((article, context) => {
    const imageDirectory = `/images/articles/${article.slug}/`;
    const images = [article.coverImage, ...(article.gallery ?? [])];

    images.forEach((image, index) => {
      if (!image.src.startsWith(imageDirectory)) {
        context.addIssue({
          code: "custom",
          message: `Image paths must start with ${imageDirectory}`,
          path: index === 0 ? ["coverImage", "src"] : ["gallery", index - 1, "src"],
        });
      }
    });
  });

export type ArticleFrontmatter = z.infer<typeof articleFrontmatterSchema>;
