import React from "react";
import projects from "../data/projects";
import { Header } from "../components/nav/Header";
import ProfileCard from "../components/global/ProfileCard";
import { NavLink } from "../components/nav/NavLink";
import PortfolioCarousel from "../components/portfolio/PortfolioCarousel";
import ProjectList from "../components/portfolio/ProjectList";
import PortfolioMasonry from "../components/portfolio/PortfolioMasonry";

const Portfolio: React.FC = () => {
  return (
    <div className="box-border flex h-screen max-h-screen w-screen flex-col items-center justify-start bg-base-50 p-4 font-overused lg:p-4">
      <Header />
      {/* <ProfileCard /> */}
      {/* <ExperienceSection projects={projects} /> */}
      {/* <PortfolioCarousel projects={projects} /> */}
      <PortfolioMasonry />
      {/* <div className="mb-24 w-full max-w-[60ch]">
      <h2 className="font-bold">Find me:</h2>
      <div className="w-full">
        <NavLink
        url="mailto:chriswmccully@gmail.com"
        label="Email"
        />
        <NavLink
        url="https://github.com/tophercully"
        label="Github"
        />
        <NavLink
        url="https://twitter.com/spinkdinky"
        label="Twitter"
        />
        <NavLink
        url="https://www.linkedin.com/in/chris-mccully-165042150/"
        label="LinkedIn"
        />
      </div>
      </div> */}
      {/* <ProjectList projects={projects} /> */}
    </div>
  );
};

export default Portfolio;
