import { formatDescription } from "../../util/formatDescription";
import { NavLink } from "../nav/NavLink";

const ProfileCard = () => {
  const bio = `Hi, I'm Chris, a web developer. 
  
  I make tools for people, artists, developers, and designers. I write about design, procedural graphics, and web dev.
            
  I like solving problems, and I'm always looking for new ways to make life easier, faster, and more beautiful. Aesthetics are important to me, and I believe and understanding of design principles makes for great experiences.
            
            I make art with code, and I've been a curated artist by Dawn Contemporary and had my work shown at NFC Paris.`;

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
    <div className="font-overused flex w-full max-w-[80ch] flex-col items-center gap-16 rounded-sm pt-8">
      <div className="flex w-full flex-col gap-8 rounded-sm lg:gap-10">
        <img
          src="/pfp.jpg"
          className={`h-full w-[50vw] self-center rounded-sm object-contain md:w-[20vw] dark:invert`}
          alt="Profile"
          style={{ objectPosition: "top" }}
        />
        <div
          id="allInfo"
          className="flex h-full max-w-[80ch] flex-1 flex-col justify-between gap-4 self-center"
        >
          <div className="flex h-full w-full flex-1 flex-grow flex-col gap-4">
            <h1
              className="font-overused text-lg font-medium"
              dangerouslySetInnerHTML={{ __html: formatDescription(bio) }}
            ></h1>
          </div>
        </div>
      </div>
      <div className="w-full">
        <h2 className="font-bold">Find me:</h2>
        <div className="w-full">
          <NavLink
            url="mailto:chriswmccully@gmail.com"
            label="Email"
          />
          <NavLink
            url="https://github.com/tophercully"
            label="Github"
          />
          <NavLink
            url="https://twitter.com/spinkdinky"
            label="Twitter"
          />
          <NavLink
            url="https://www.linkedin.com/in/chris-mccully-165042150/"
            label="LinkedIn"
          />
        </div>
      </div>
      <div className="gap-4 border-black">
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
      </div>
    </div>
  );
};

export default ProfileCard;
