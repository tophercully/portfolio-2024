import React from "react";
import { Project } from "../../typeinterfaces";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a
      href={project.url}
      target="_blank"
      className="group relative overflow-hidden rounded-sm border border-dashed border-black bg-black bg-opacity-10 shadow-lg backdrop-blur-lg duration-300 hover:scale-[102%] hover:bg-[#FC4C4E]"
    >
      <div className="flex flex-col gap-2 p-2">
        <h3 className="w-full text-xl font-medium text-base-950 duration-200 group-hover:text-base-50">
          {project.name}
        </h3>

        <div className="flex items-end justify-between">
          <p className="w-fit text-sm font-light text-base-950 duration-200 group-hover:text-base-50">
            {project.role}
          </p>
          <p className="w-fit text-xs font-light text-base-950 duration-200 group-hover:text-base-50">
            {project.desc}
          </p>
        </div>
      </div>
      <img
        src={project.image}
        alt={project.name}
        className="h-fit w-fit object-contain transition-transform duration-300"
      />
      <div className="absolute inset-0 flex h-full w-full flex-col items-end justify-end p-2 transition-opacity duration-300">
        {/* <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
              <h2 className="text-4xl font-bold">{project.name}</h2>
              {project.subtitle && (
                <p className="text-sm mt-2">{project.subtitle}</p>
              )}
            </div> */}
        {/* <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center self-end rounded-sm bg-white p-2 text-black opacity-0 transition-opacity duration-300 hover:bg-gray-200 group-hover:opacity-100"
        >
          <img
            src="/opennew.svg"
            className="invert"
          />
        </a> */}
      </div>
    </a>
  );
};

export default ProjectCard;
