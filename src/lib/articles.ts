import "server-only";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import {
  articleFrontmatterSchema,
  type ArticleFrontmatter,
} from "@/lib/article-schema";

const articlesDirectory = path.join(process.cwd(), "content", "articles");

export type Article = {
  frontmatter: ArticleFrontmatter;
  body: string;
};

async function readArticleFile(filename: string): Promise<Article> {
  const source = await readFile(path.join(articlesDirectory, filename), "utf8");
  const { content, data } = matter(source);

  return {
    frontmatter: articleFrontmatterSchema.parse(data),
    body: content,
  };
}

export async function getAllArticles(): Promise<Article[]> {
  const directoryEntries = await readdir(articlesDirectory, {
    withFileTypes: true,
  });
  const articleFiles = directoryEntries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
    .map((entry) => entry.name);
  const articles = await Promise.all(articleFiles.map(readArticleFile));

  return articles.sort((first, second) =>
    second.frontmatter.date.localeCompare(first.frontmatter.date),
  );
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  const articles = await getAllArticles();

  return articles.find((article) => article.frontmatter.slug === slug);
}
