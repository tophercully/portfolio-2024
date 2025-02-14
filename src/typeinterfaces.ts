export type Project = {
  name: string;
  url: string;
  blogUrl?: string;
  brandingUrl?: string;
  image: string;
  desc: string;
  projectKey: string;
  subtitle?: string;
  role?: string;
  logo?: string;
  date?: string;
  stack?: string[];
};

export interface LogoVariant {
  name: string;
  imagePath: string;
}
export interface BrandFont {
  name: string;
  url: string;
  usage?: string;
  desc?: string;
}

export interface BrandElement {
  name: string;
  imagePath: string[];
  desc?: string;
}

export interface Brand {
  id: string;
  name: string;
  desc?: string;
  coverImage?: string;
  tagline?: string;
  brandingPhilisophy?: string;
  mission: string;
  tone: string;
  logo: {
    path: string;
    variants?: LogoVariant[];
    desc?: string;
    usage?: string;
  };
  colors: { name: string; hex: string }[];
  colorUsage?: string;
  fonts: BrandFont[];
  fontUsage?: string;
  elements?: BrandElement[];
  links?: { [platform: string]: string };
}

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
