import React from "react";
import { Background } from "../components/global/Background";
import { Header } from "../components/nav/Header";
import { setPageTitle } from "../util/setPageTitle";
import { Accordion, AccordionItem } from "../components/global/Accordion";

const About: React.FC = () => {
  setPageTitle("Portfolio");
  return (
    <div className="-z-20 flex min-h-screen flex-col items-center justify-start gap-16 bg-none p-4 font-formula lg:p-16">
      <Background />
      <Header />
      <Accordion>
        <AccordionItem title="Section 1">
          <p>Content for section 1</p>
        </AccordionItem>
        <AccordionItem title="Section 2">
          <p>Content for section 2</p>
        </AccordionItem>
        <AccordionItem title="Section 3">
          <p>Content for section 3</p>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default About;
