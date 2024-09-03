import React from "react";
import ProjectList from "../components/portfolio/ProjectList";
import projects from "../data/projects";
import { Background } from "../components/global/Background";
import { Header } from "../components/nav/Header";
import { setPageTitle } from "../util/setPageTitle";
import { BackgroundColored } from "../components/global/BackgroundColored";

const Portfolio: React.FC = () => {
  setPageTitle("Portfolio");
  return (
    <div className="font-neuehaas -z-20 flex min-h-screen flex-col items-center justify-start gap-8 bg-none p-4 lg:gap-16 lg:p-16">
      <Background />
      <BackgroundColored />
      <Header />
      <ProjectList projects={projects} />
    </div>
  );
};

export default Portfolio;
