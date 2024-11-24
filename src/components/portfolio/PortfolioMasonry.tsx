import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../../data/projects";

const PortfolioMasonry: React.FC = () => {
  return (
    <div className="mt-[33svh] grid w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <div
          key={project.name}
          className=""
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};

export default PortfolioMasonry;
