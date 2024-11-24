import { Project } from "../../typeinterfaces";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

type ProjectListProps = {
  projects: Project[];
};
const ExperienceSection: React.FC<ProjectListProps> = ({ projects }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const ProjectSelector = () => {
    return (
      <div className="flex flex-col justify-between gap-4 md:w-1/3">
        {projects.map((project, index) => (
          <>
            <button
              key={project.name}
              onClick={() => setCurrentProjectIndex(index)}
              className={`text-align-left flex w-full items-start text-2xl ${
                index === currentProjectIndex ?
                  "border-b border-base-900 text-base-900"
                : "text-base-400"
              }`}
            >
              {project.name}
            </button>
            <div
              className={`overflow-hidden duration-200 md:hidden ${
                index === currentProjectIndex ? "max-h-screen" : "max-h-0"
              }`}
            >
              <ProjectCard project={projects[currentProjectIndex]} />
            </div>
          </>
        ))}
      </div>
    );
  };
  return (
    <div className="flex w-full max-w-[100ch] flex-col gap-4">
      <h2 className="font-bold">My Work</h2>
      <div className="flex w-full gap-16">
        <ProjectSelector />
        <div className="hidden w-full md:flex">
          <ProjectCard project={projects[currentProjectIndex]} />
        </div>
      </div>
    </div>
  );
};
export default ExperienceSection;
