import React from "react";
import { Project } from "../../typeinterfaces";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a
      href={project.url}
      target={project.url.startsWith("/") ? "" : "_blank"}
      className="group relative flex aspect-auto h-full w-full cursor-pointer flex-col overflow-hidden rounded-sm border-b bg-white py-4 md:w-[60ch]"
    >
      <div className="flex h-full w-full gap-8 p-2">
        {project.logo && (
          <img
            src={project.logo}
            className="h-10 w-10 grayscale filter"
          />
        )}
        <div className="flex flex-col gap-2">
          <div className="flex items-end gap-4">
            <h3 className="w-full text-xl font-medium text-base-950 duration-200 group-hover:underline">
              {project.name}
            </h3>
          </div>
          <div className="flex items-end justify-between">
            <p className="w-fit text-nowrap text-sm text-base-400 duration-200">
              {project.desc}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex h-full w-full flex-col items-end justify-end p-2 transition-opacity duration-300"></div>
    </a>
  );
};

export default ProjectCard;
