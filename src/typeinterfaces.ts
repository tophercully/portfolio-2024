export type Project = {
  name: string;
  url: string;
  image: string;
  desc: string;
  projectKey: string;
  subtitle?: string;
  role?: string;
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
