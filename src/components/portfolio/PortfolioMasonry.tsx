import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../../data/projects";
import ProjectModal from "./ProjectModal";

const PortfolioMasonry: React.FC = () => {
  const [projectInModal, setProjectInModal] = useState<number | null>(null);
  const handleOpenProjectInModal = (index: number) => {
    setProjectInModal(index);
    console.log("Project in modal: ", projects[index].name);
  };
  return (
    <div className="mt-[33svh] grid w-full grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
      {projectInModal !== null && (
        <ProjectModal
          project={projects[projectInModal]}
          open={projectInModal !== null}
          onClose={() => setProjectInModal(null)}
        />
      )}
      {projects.map((project, index) => (
        <div
          key={project.name}
          className="animate-fade-in opacity-0"
          style={{
            animationDelay: `${index * 150}ms`,
            animationFillMode: "forwards",
          }}
        >
          <ProjectCard
            onClick={() => handleOpenProjectInModal(index)}
            project={project}
          />
        </div>
      ))}
    </div>
  );
};

export default PortfolioMasonry;
