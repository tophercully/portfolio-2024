import React from "react";
import { Header } from "../components/nav/Header";
import CVList from "../components/cv/CVList";
import { setPageTitle } from "../util/setPageTitle";
import { BackgroundColored } from "../components/global/BackgroundColored";

export const CV: React.FC = () => {
  setPageTitle("CV");
  return (
    <div className="font-formula -z-20 flex min-h-screen flex-col items-center justify-start gap-8 bg-none p-4 lg:gap-16 lg:p-16">
      <BackgroundColored />
      <Header />
      <CVList />
    </div>
  );
};
