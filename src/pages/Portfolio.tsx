import React from "react";
import ProjectList from "../components/portfolio/ProjectList";
import projects from "../data/projects";
import { Header } from "../components/nav/Header";
import { setPageTitle } from "../util/setPageTitle";

const Portfolio: React.FC = () => {
  setPageTitle("Portfolio");
  return (
    <div className="font-overused -z-20 flex min-h-screen flex-col justify-start gap-2 bg-base-50 bg-none p-4 lg:gap-4 lg:p-4 dark:invert">
      {/* <Background /> */}
      {/* <BackgroundColored /> */}
      <Header />
      <ProjectList projects={projects} />
    </div>
  );
};

export default Portfolio;
