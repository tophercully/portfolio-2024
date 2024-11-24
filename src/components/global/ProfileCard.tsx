import { formatDescription } from "../../util/formatDescription";

const ProfileCard = () => {
  const bio = `Hi, I'm Chris, a front-end developer and designer.

  I'm passionate about design, music, and community. My personal philosophy is all about creating things that supplement the human experience. 
  
  I'm currently developing Snippp.io and Cocoon and maintaining ongoing freelance clients. I prefer to work across multiple projects, as it lets me look at each project with fresh eyes and bring lessons from one project to another. 
  
  I like to make tools for people, artists, developers, and designers. I write about design, procedural graphics, and web dev.
            
  Aesthetics are important to me, and I believe and understanding of design principles makes for great experiences. I make art with code, and I've been a curated artist by Dawn Contemporary and had my work shown at NFC Paris.`;

  const StackCard = ({ label }: { label: string }) => {
    return (
      <span
        className={`flex w-fit select-none items-center justify-center text-nowrap rounded-sm border border-base-500 px-2 py-1 text-black shadow-md`}
      >
        {label}
      </span>
    );
  };

  return (
    <div className="relative flex h-fit w-fit max-w-[100ch] flex-col items-center justify-center rounded-sm font-overused">
      <div className="flex w-full flex-col gap-8 rounded-sm md:flex-row lg:gap-10">
        <img
          src="/unnamed.jpg"
          className={`w-1/2 self-center rounded object-contain md:w-1/3`}
          alt="Profile"
          style={{ objectPosition: "top" }}
        />
        <div
          id="allInfo"
          className="flex h-full max-w-[60ch] flex-1 flex-col justify-between gap-4 self-center"
        >
          <div className="flex h-full w-full flex-1 flex-grow flex-col gap-4 p-4">
            <h1
              className="font-overused"
              dangerouslySetInnerHTML={{ __html: formatDescription(bio) }}
            ></h1>
          </div>
        </div>
      </div>

      {/* <div className="gap-4 border-black">
        <div className="flex w-full max-w-[60ch] grid-cols-2 flex-wrap justify-center gap-4 py-4 lg:flex dark:text-white">
          <StackCard label="TypeScript" />
          <StackCard label="JavaScript" />
          <StackCard label="React.js" />
          <StackCard label="React Native" />
          <StackCard label="HTML5" />
          <StackCard label="CSS" />
          <StackCard label="Tailwind" />
          <StackCard label="Node.js" />
          <StackCard label="Next" />
          <StackCard label="p5.js" />
          <StackCard label="three.js" />
          <StackCard label="OpenGL" />
          <StackCard label="C++" />
          <StackCard label="Figma" />
        </div>
      </div> */}
    </div>
  );
};

export default ProfileCard;
