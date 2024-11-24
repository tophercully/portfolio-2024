import React from "react";
import { CVData, cvData } from "../../data/cvData";
import { CVItem } from "./CVItem";

const CVList: React.FC = () => {
  return (
    <div className="mb-12 mt-[33svh] w-full">
      <div className="flex w-full flex-col justify-start">
        {cvData.map((project, index) => (
          <div
            key={project.name}
            className="animate-fade-in opacity-0"
            style={{
              animationDelay: `${index * 50}ms`,
              animationFillMode: "forwards",
            }}
          >
            <CVItem project={project as CVData} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Add this to your tailwind.config.js:
// {
//   theme: {
//     extend: {
//       keyframes: {
//         'fade-in': {
//           '0%': { opacity: '0', transform: 'translateY(10px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' }
//         }
//       },
//       animation: {
//         'fade-in': 'fade-in 0.5s ease-out'
//       }
//     }
//   }
// }

export default CVList;
