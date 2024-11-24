export type Project = {
  name: string;
  url: string;
  blogUrl?: string;
  image: string;
  desc: string;
  projectKey: string;
  subtitle?: string;
  role?: string;
  logo?: string;
  date?: string;
  stack?: string[];
};

export interface ArticleSection {
  title: string;
  shortcutTitle?: string;
  type: "section" | "subsection";
  id: string;
  content: JSX.Element;
}
export interface BlogArticle {
  title: string;
  subtitleA: string;
  subtitleB: string;
  link: string;
  content: ArticleSection[];
}
