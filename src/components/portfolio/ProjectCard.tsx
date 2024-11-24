import React from "react";
import { Project } from "../../typeinterfaces";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a
      href={project.url}
      target={project.url && project.url.startsWith("/") ? "" : "_blank"}
      className="group relative flex aspect-square w-full flex-col items-center justify-center overflow-hidden rounded-md border border-dashed border-purple-100 bg-stone-100 p-4"
    >
      <div className="flex w-full justify-center p-4">
        <img
          src={project.image}
          className="h-[20svh] rounded-md object-contain shadow-md duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-purple-100"
        />
      </div>
      <div className="absolute bottom-0 flex w-full flex-col gap-8 p-6">
        <div className="flex items-center justify-between gap-2 text-stone-400">
          <div className="flex items-center gap-1">
            <h3 className="flex w-fit gap-2 duration-200">{project.name}</h3>
            {/* {project.logo && (
              <img
                src={project.logo}
                className="h-4 w-4 grayscale filter"
              />
            )} */}
          </div>
          <h2 className="text-stone-300">{project.role}</h2>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
