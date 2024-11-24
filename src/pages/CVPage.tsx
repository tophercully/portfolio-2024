import React from "react";
import { Header } from "../components/nav/Header";
import CVList from "../components/cv/CVList";
import { setPageTitle } from "../util/setPageTitle";

export const CV: React.FC = () => {
  setPageTitle("CV");
  return (
    <div className="-z-20 flex min-h-screen flex-col items-center justify-start gap-2 bg-base-50 bg-none p-4 font-overused lg:gap-4 lg:p-4">
      <Header />
      <CVList />
    </div>
  );
};
