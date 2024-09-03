import { useEffect, useState } from "react";
import { BackgroundColored } from "../../components/global/BackgroundColored";
import { setPageTitle } from "../../util/setPageTitle";
import Article from "../../components/blog/Article";
import Section from "../../components/blog/Section";
import { BlogArticle } from "../../typeinterfaces";

interface BlogPageProps {
  article: BlogArticle;
}

const BlogPage: React.FC<BlogPageProps> = ({ article }) => {
  setPageTitle("Snippp Project Overview");
  const [activeSection, setActiveSection] = useState("");
  const articleSections = article.content;

  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const targetId = target.getAttribute("href")?.slice(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    // Set up Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Observe all section elements
    articleSections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <div className="font-neuehaas min-h-screen bg-none lg:flex">
      <BackgroundColored />

      <div
        id="project-details"
        className="w-full bg-white bg-opacity-35 p-4 backdrop-blur-md lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-1/4 lg:overflow-y-auto lg:p-16"
      >
        <a
          href="/portfolio"
          className="mb-12 block w-fit rounded-sm hover:bg-blood hover:text-white"
        >
          Back
        </a>
        <div
          id="project-title"
          className="flex flex-col gap-1"
        >
          <a
            href="https://snippp.io"
            target="_blank"
            className="w-fit text-5xl font-bold"
          >
            {article.title}
          </a>
          {article.subtitleA && (
            <p className="text-xs text-base-500">{article.subtitleA}</p>
          )}
          {article.subtitleB && (
            <p className="text-xs text-base-500">{article.subtitleB}</p>
          )}
        </div>
        <div
          id="project-description"
          className="z-10 flex max-w-[60ch] flex-col gap-4 text-base-600"
        ></div>
        {article.link && (
          <a
            href={article.link}
            target="_blank"
            className="my-12 flex w-fit items-center gap-2 self-center rounded-sm bg-black px-3 py-2 text-white hover:bg-base-600"
          >
            Visit Site
            <img
              src="/opennew.svg"
              className="inline"
            />
          </a>
        )}
        <div className="mt-8">
          <h3 className="mb-4 text-xl font-semibold">Jump to Section:</h3>
          <ul className="flex flex-col gap-4">
            {articleSections.map((targetSection, index) => {
              const { id } = targetSection;
              const isSubsection = targetSection.type === "subsection";

              return (
                <li
                  key={index}
                  className="flex items-center gap-2"
                >
                  <p
                    className={`duration-200 ${activeSection == id ? "text-base-300" : "text-base-200"}`}
                  >
                    {isSubsection ? "-" : "|"}
                  </p>
                  <a
                    href={`#${id}`}
                    className={`inline-block origin-left text-sm transition-all duration-200 ease-in-out hover:underline ${
                      activeSection === id ?
                        "scale-110 font-bold"
                      : "scale-90 font-normal"
                    } ${isSubsection ? "pl-6" : ""}`}
                  >
                    {targetSection.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div
        id="scrollable-content"
        className="w-full overflow-y-auto scroll-smooth px-1 lg:ml-[25%] lg:flex-1 lg:px-16"
      >
        <div
          id="project-flow"
          className="mt-2 flex max-w-[80ch] flex-col items-center gap-8"
        >
          {/* <a
            href="https://snippp.io"
            target="_blank"
            className="mb-16 h-fit w-fit shadow-lg duration-200 hover:shadow-lg hover:brightness-95 lg:w-full"
          >
            <img
              src="/snippets.png"
              className="w-full"
            />
          </a> */}

          <div
            id="sections"
            className="flex w-full flex-col items-center"
          >
            <Article>
              {/* // populate article content from articleSections */}
              {articleSections.map((section, index) => (
                <Section
                  title={section.title}
                  key={index}
                  sectionId={section.id}
                  isSubsection={section.type === "subsection"}
                >
                  {section.content}
                </Section>
              ))}
            </Article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
