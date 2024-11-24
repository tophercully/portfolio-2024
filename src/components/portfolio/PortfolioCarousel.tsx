import React from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "../../typeinterfaces";
import ProfileCard from "../global/ProfileCard";

type PortfolioCarouselProps = {
  projects: Project[];
};

const PortfolioCarousel: React.FC<PortfolioCarouselProps> = ({ projects }) => {
  return (
    <div className="relative h-full w-screen">
      <div className="flex w-full snap-x snap-mandatory overflow-x-auto object-contain">
        <>
          <div className="flex w-full flex-shrink-0 snap-center items-center justify-center">
            <ProfileCard />
          </div>
          {projects.map((project) => (
            <div
              key={project.name}
              className="w-full flex-shrink-0 snap-center"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default PortfolioCarousel;
