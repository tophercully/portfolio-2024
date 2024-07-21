import { NavButton } from "./NavButton";
import { NavLink } from "./NavLink";
export const Header = () => {
  return (
    <div className="flex w-full flex-col py-2 text-xs font-normal backdrop-blur-lg">
      <div className="flex flex-col gap-2">
        <a
          className="w-fit text-3xl font-bold hover:bg-[#FC4C4E] hover:text-base-50"
          href="/"
        >
          CHRIS MCCULLY
        </a>
        <span className="font-montrealmono flex flex-wrap text-lg lg:w-1/3">
          <span className="mr-2">{`WEB DEVELOPER &`}</span>
          <span>{`GRAPHICS PROGRAMMER`}</span>
        </span>
      </div>
      <div className="px-auto font-montrealmono my-10 grid h-fit w-full grid-cols-1 grid-rows-2 gap-8 lg:grid-cols-3 lg:grid-rows-1">
        <div className="hidden w-full flex-col gap-2 lg:flex">
          {/* <span className="flex w-full justify-between pt-2 font-medium tracking-wide">
            <p>WEB DEVELOPER & GRAPHICS PROGRAMMER</p>
            <p className="opacity-25">|</p>
          </span> */}
        </div>
        <div className="flex w-full flex-col justify-end">
          <NavButton
            path="/portfolio"
            label="PORTFOLIO"
            hoverColor="#FC4C4E"
          />
          <NavButton
            path="/cv"
            label="FULL CV"
            hoverColor="#FC4C4E"
          />
          <NavButton
            path="/about"
            label="ABOUT"
            hoverColor="#FC4C4E"
          />
          <NavButton
            path="https://medium.com/@chriswmccully"
            label="BLOG"
            hoverColor="#FC4C4E"
          />
        </div>
        <div className="flex w-full flex-col justify-end">
          <NavLink
            url="mailto:chriswmccully@gmail.com"
            label="EMAIL"
          />
          <NavLink
            url="https://github.com/tophercully"
            label="GITHUB"
          />
          <NavLink
            url="https://twitter.com/spinkdinky"
            label="TWITTER"
          />
          <NavLink
            url="https://www.linkedin.com/in/chris-mccully-165042150/"
            label="LINKEDIN"
          />
        </div>
      </div>
    </div>
  );
};
