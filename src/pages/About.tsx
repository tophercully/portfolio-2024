import React from "react";

import { Header } from "../components/nav/Header";
import { setPageTitle } from "../util/setPageTitle";
import ProfileCard from "../components/global/ProfileCard";

const About: React.FC = () => {
  setPageTitle("Portfolio");

  return (
    <div className="-z-20 flex min-h-screen flex-col items-center justify-start gap-2 bg-base-50 bg-none p-4 font-overused lg:gap-4 lg:p-4">
      <Header />
      <ProfileCard />
    </div>
  );
};

export default About;
