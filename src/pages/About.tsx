import React from "react";

import { Header } from "../components/nav/Header";
import { setPageTitle } from "../util/setPageTitle";
import ProfileCard from "../components/global/ProfileCard";
import { BackgroundColored } from "../components/global/BackgroundColored";

const About: React.FC = () => {
  setPageTitle("Portfolio");

  return (
    <div className="font-formula -z-20 flex min-h-screen flex-col items-center justify-start gap-8 bg-none p-4 lg:gap-16 lg:p-16">
      <BackgroundColored />
      <Header />
      <ProfileCard />
    </div>
  );
};

export default About;
