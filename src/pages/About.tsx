import React from "react";
import { Background } from "../components/global/Background";
import { Header } from "../components/nav/Header";
import { setPageTitle } from "../util/setPageTitle";
import ProfileCard from "../components/global/ProfileCard";

const About: React.FC = () => {
  setPageTitle("Portfolio");

  return (
    <div className="-z-20 flex min-h-screen flex-col items-center justify-start gap-8 bg-none p-4 font-formula lg:gap-16 lg:p-16">
      <Background />
      <Header />
      <ProfileCard />
    </div>
  );
};

export default About;
