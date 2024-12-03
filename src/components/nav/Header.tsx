import { useState } from "react";
import { createPortal } from "react-dom";
import { NavButton } from "./NavButton";

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex w-full flex-col gap-2 font-overused text-sm lg:flex-row lg:items-center lg:justify-between lg:gap-8">
      <div className="flex w-full items-center justify-between lg:w-auto">
        <a
          className="text-3xl font-thin hover:bg-[#FC4C4E] hover:text-base-50"
          href="/"
        >
          CHRIS MCCULLY
        </a>
        <button
          className="lg:hidden"
          onClick={toggleDrawer}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div className="hidden w-1/2 flex-row justify-between gap-4 lg:flex">
        <NavButton
          path="/"
          label="Portfolio"
          hoverColor="#FFFFFF"
        />
        <NavButton
          path="/cv"
          label="All Projects"
          hoverColor="#FFFFFF"
        />
        <NavButton
          path="/about"
          label="About"
          hoverColor="#FFFFFF"
        />
        <NavButton
          path="https://medium.com/@chriswmccully"
          label="Blog"
          hoverColor="#FC4C4E"
        />
      </div>
      {isDrawerOpen &&
        createPortal(
          <div className="fixed inset-0 z-50 flex h-[100svh] flex-col items-end bg-black bg-opacity-50 lg:hidden dark:invert">
            <div className="flex h-full w-1/2 flex-col justify-center gap-4 bg-white p-4 pb-[80%]">
              <button
                className="mb-auto mt-2 self-end justify-self-start"
                onClick={toggleDrawer}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
              <NavButton
                path="/"
                label="Portfolio"
                hoverColor="#FFFFFF"
              />
              <NavButton
                path="/cv"
                label="All Projects"
                hoverColor="#FFFFFF"
              />
              <NavButton
                path="/about"
                label="About"
                hoverColor="#FFFFFF"
              />
              <NavButton
                path="https://blog.chrismccully.com"
                label="Blog"
                hoverColor="#FC4C4E"
              />
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};
