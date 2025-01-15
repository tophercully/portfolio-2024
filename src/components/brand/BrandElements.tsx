import React from "react";
import { BrandElement } from "../../typeinterfaces";

interface BrandElementsProps {
  elements: BrandElement[];
  color: string;
}

const BrandElements: React.FC<BrandElementsProps> = ({ elements, color }) => {
  return (
    <div className="brand-elements">
      {elements.map((element, index) => (
        <section
          className="flex min-h-[90svh] w-full snap-start snap-always flex-col items-center justify-center overflow-hidden rounded-lg bg-white pt-12"
          key={index}
        >
          {index == 0 && (
            <span className="mb-12 self-center justify-self-start text-nowrap pb-12 text-5xl font-thin text-base-150">
              Elements Elements Elements Elements Elements Elements
              <span className="font-light text-base-950"> Elements </span>
              Elements Elements Elements Elements Elements Elements
            </span>
          )}
          <div className="grid w-full grid-cols-1 items-center justify-center gap-12 p-2 md:w-11/12 md:grid-cols-2">
            <div className="flex h-full w-fit flex-col gap-4">
              <h2 className="w-full text-5xl font-bold">
                <span
                  style={{
                    backgroundColor: color,
                  }}
                  className="bg-base-300 text-base-50"
                >
                  {index + 1}
                </span>{" "}
                {element.name}
              </h2>
              {element.desc && (
                <p className="flex h-full max-w-[60ch] flex-col justify-center text-balance py-8 text-xl font-light text-base-400 md:text-2xl">
                  {element.desc}
                </p>
              )}
            </div>
            {/* <div className="flex w-full flex-col gap-8 px-8 pb-4 md:w-1/2"> */}
            {element.imagePath &&
              element.imagePath.map((path, imgIndex) => (
                <img
                  key={imgIndex}
                  src={path}
                  alt={`${element.name} ${imgIndex + 1}`}
                  className="mx-auto flex max-h-[30svh] items-center justify-center rounded-md object-contain shadow-lg"
                />
              ))}
            {/* </div> */}
          </div>
        </section>
      ))}
    </div>
  );
};

export default BrandElements;
