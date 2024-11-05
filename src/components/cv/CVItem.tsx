import { CVData } from "../../data/cvData";

interface CVItemProps {
  project: CVData;
}

export const CVItem: React.FC<CVItemProps> = ({ project }) => {
  const { name, link, when, subtitle } = project;
  return (
    <a
      className={`font-overused flex w-full flex-col justify-start border-b bg-base-50 bg-opacity-15 py-2 pl-1 duration-75 ease-in-out hover:bg-blue-500 hover:text-base-50 lg:flex-row lg:gap-12`}
      href={link}
      target="_blank"
    >
      {/* <span className="hidden opacity-25 lg:flex">|</span> */}
      <span className="max-w-[20ch] font-semibold lg:w-1/5">{name}</span>
      {/* <span className="opacity-25">|</span> */}
      <span className="font-base lg:w-1/3">{subtitle}</span>
      {/* <span className="hidden opacity-25 lg:flex">|</span> */}
      <span className="font-light opacity-50 lg:w-1/3">{when}</span>
    </a>
  );
};
