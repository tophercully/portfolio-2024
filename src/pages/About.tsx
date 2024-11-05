import React from "react";

import { Header } from "../components/nav/Header";
import { setPageTitle } from "../util/setPageTitle";
import ProfileCard from "../components/global/ProfileCard";

const About: React.FC = () => {
  setPageTitle("Portfolio");

  return (
    <div className="font-overused -z-20 flex min-h-screen flex-col items-center justify-start gap-2 bg-base-50 bg-none p-4 lg:gap-4 lg:p-4 dark:invert">
      <Header />
      <ProfileCard />
    </div>
  );
};

export default About;
