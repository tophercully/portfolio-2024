import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "../../typeinterfaces";
import ProjectModal from "./ProjectModal";

type ProjectListProps = {
  projects: Project[];
};

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const [projectInModal, setProjectInModal] = useState<number | null>(null);
  const handleOpenProjectInModal = (index: number) => {
    setProjectInModal(index);
    console.log("Project in modal: ", projects[index].name);
  };
  return (
    <div className="max-w-screen mb-12">
      {projectInModal !== null && (
        <ProjectModal
          project={projects[projectInModal]}
          open={projectInModal !== null}
          onClose={() => setProjectInModal(null)}
        />
      )}
      <div
        style={{ columns: 3 }}
        className="flex w-full flex-col gap-12"
      >
        {projects.map((project, index) => (
          <ProjectCard
            onClick={() => handleOpenProjectInModal(index)}
            key={project.name}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
