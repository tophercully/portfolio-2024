import React from "react";
import { Background } from "../components/global/Background";
import { Header } from "../components/nav/Header";
import CVList from "../components/cv/CVList";
import { setPageTitle } from "../util/setPageTitle";

const CVPage: React.FC = () => {
  setPageTitle("CV");
  return (
    <div className="-z-20 flex min-h-screen flex-col items-center justify-start gap-16 bg-none p-4 font-formula lg:p-16">
      <Background />
      <Header />
      <CVList />
    </div>
  );
};

export default CVPage;
