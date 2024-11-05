import React from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "../../typeinterfaces";

type ProjectListProps = {
  projects: Project[];
};

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="mb-12">
      <div
        style={{ columns: 3 }}
        className="flex w-full max-w-[60ch] flex-col gap-4"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
