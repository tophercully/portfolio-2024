import { formatDescription } from "../../util/formatDescription";

const ProfileCard = () => {
  const commonTechTag =
    "flex justify-center items-center w-fit px-2 py-1 select-none rounded-sm shadow-md text-black dark:text-white";

  const bio = `Hi, I'm Chris, a web developer. 
            
            I like solving problems, and I'm always looking for new ways to make life easier, faster, and more beautiful.
            
            I've worked in visual media for 10 years, including film production, fashion photography, and graphics programming.`;

  return (
    <div className="flex w-full flex-col gap-4 rounded-sm bg-base-50 p-4 shadow-md dark:bg-base-950 dark:text-base-50">
      <div className="flex w-full flex-col gap-8 rounded-sm p-4 lg:flex-row lg:gap-10 dark:text-base-50">
        <div className="relative aspect-square w-full lg:w-96">
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocL9cR86oy7GLrovZC-xZQTnlc1TE88p1Woo8gaIPh14xn2dzb5XjQ=s400-c"
            className={`h-full w-full rounded-sm object-contain`}
            alt="Profile"
            style={{ objectPosition: "top" }}
          />
        </div>
        <div
          id="allInfo"
          className="flex h-full flex-1 flex-col justify-between gap-4"
        >
          <div className="flex h-full w-full flex-1 flex-grow flex-col gap-4">
            <h1
              className="text-normal font-montrealmono lg:text-2xl"
              dangerouslySetInnerHTML={{ __html: formatDescription(bio) }}
            ></h1>
          </div>
        </div>
      </div>
      <div className="mt-8 gap-4 border-t border-dashed border-black p-4 lg:mt-0">
        <h1 className="text-2xl font-semibold">Stack:</h1>
        <div className="grid w-full grid-cols-2 gap-4 py-4 lg:flex dark:text-white">
          <span className={`border border-typescript ${commonTechTag}`}>
            TypeScript
          </span>
          <span
            className={`border border-javascript ${commonTechTag} text-black`}
          >
            JavaScript
          </span>
          <span className={`border border-react ${commonTechTag} text-black`}>
            React.js
          </span>
          <span className={`border border-html5 ${commonTechTag}`}>HTML5</span>
          <span className={`border border-css ${commonTechTag}`}>CSS</span>
          <span className={`border border-tailwind ${commonTechTag}`}>
            Tailwind
          </span>
          <span className={`border border-nodejs ${commonTechTag}`}>
            Node.js
          </span>
          <span className={`border border-next ${commonTechTag}`}>Next</span>
          <span className={`border border-p5js ${commonTechTag}`}>p5.js</span>
          <span className={`border border-threejs ${commonTechTag}`}>
            three.js
          </span>
          <span className={`border border-opengl ${commonTechTag}`}>
            OpenGL
          </span>
          <span className={`border border-cpp ${commonTechTag}`}>C++</span>
          <span className={`border border-figma ${commonTechTag}`}>Figma</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
