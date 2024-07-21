import React from "react";
import { CVData, cvData } from "../../data/cvData";
import { CVItem } from "./CVItem";

const CVList: React.FC = () => {
  return (
    <div className="mb-12 w-full">
      <div className="flex w-full flex-col justify-start">
        {cvData.map((project) => (
          <CVItem
            key={project.name}
            project={project as CVData}
          />
        ))}
      </div>
    </div>
  );
};

export default CVList;
