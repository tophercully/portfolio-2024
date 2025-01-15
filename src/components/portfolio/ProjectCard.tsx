import React from "react";
import { Project } from "../../typeinterfaces";

type ProjectCardProps = {
  project: Project;
  onClick: () => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative flex aspect-square w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-md bg-stone-50 p-4"
    >
      <div className="flex w-full justify-center p-4">
        <img
          src={project.image}
          className="max-h-[30svh] max-w-[66%] rounded-md bg-base-100 object-contain shadow-md duration-[400ms] ease-in-out group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-purple-100"
        />
      </div>
      <div className="absolute bottom-0 flex w-full flex-col gap-8 p-6">
        <div className="flex items-center justify-between gap-2 text-stone-400">
          <div className="flex items-center gap-1">
            <h3 className="flex w-fit gap-2 duration-200">{project.name}</h3>
          </div>
          {/* {project.logo && (
            <img
              src={project.logo}
              className="h-4 w-4 opacity-50 grayscale filter"
            />
          )} */}
          <h2 className="text-stone-300">{project.role}</h2>
          {project.url && (
            <a
              href={project.url}
              className="sr-only"
            >
              Visit {project.name}
            </a>
          )}
          {project.blogUrl && (
            <a
              href={project.url}
              className="sr-only"
            >
              Read about {project.name}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
