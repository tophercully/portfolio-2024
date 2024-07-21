import { CVData } from "../../data/cvData";

interface CVItemProps {
  project: CVData;
}

export const CVItem: React.FC<CVItemProps> = ({ project }) => {
  const { name, link, when, subtitle } = project;
  return (
    <a
      className={`font-montrealmono my-2 flex w-full flex-col justify-start bg-base-50 bg-opacity-15 py-2 pl-1 duration-75 ease-in-out hover:m-0 hover:bg-[#1862C8] hover:p-4 hover:pr-4 hover:text-base-50 lg:flex-row lg:gap-12`}
      href={link}
      target="_blank"
    >
      <span className="hidden opacity-25 lg:flex">|</span>
      <span className="max-w-[20ch] font-bold lg:w-1/5">{name}</span>
      {/* <span className="opacity-25">|</span> */}
      <span className="font-normal lg:w-1/3">{subtitle}</span>
      <span className="hidden opacity-25 lg:flex">|</span>
      <span className="font-light opacity-50 lg:w-1/3">{when}</span>
    </a>
  );
};
