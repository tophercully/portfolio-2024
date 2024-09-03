interface SectionProps {
  title: string;
  sectionId: string;
  children: React.ReactNode | null;
  isSubsection?: boolean;
}
const Section: React.FC<SectionProps> = ({
  title,
  sectionId,
  children,
  isSubsection = false,
}) => {
  return (
    <li
      key={title}
      id={sectionId}
      className={`flex w-full max-w-[80ch] scroll-mt-24 flex-col gap-4 overflow-hidden rounded-b-lg text-base ${isSubsection ? "shadow-md" : ""} md:text-xl`}
    >
      {isSubsection ?
        <h3 className="px-4 py-4 font-semibold text-black lg:px-8 lg:pb-2 lg:pt-8 lg:text-2xl">
          {title}
        </h3>
      : <div className="">
          <div className="h-1 w-full bg-blood"></div>
          <h2
            className={`text-wrap bg-gradient-to-b from-transparent to-white/80 px-4 py-2 pt-16 text-3xl font-semibold text-black lg:px-8 lg:py-4 lg:pt-24`}
          >
            {title}
          </h2>
        </div>
      }
      {children}
    </li>
  );
};

export default Section;
