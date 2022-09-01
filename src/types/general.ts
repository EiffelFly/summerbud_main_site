export type ArticleFrontMatter = {
  title: string;
  slug: string;
  tags: string[];
  publishedAt: string;
  lastModified: string;
  description: string;
  locale: string;
};

export type Nullable<T> = T | null;
