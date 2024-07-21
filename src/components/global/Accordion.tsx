import React, { useState, ReactNode } from "react";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex w-full items-center justify-between px-6 py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{title}</span>
        <span
          className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>
      {isOpen && <div className="px-6 pb-4">{children}</div>}
    </div>
  );
};

interface AccordionProps {
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ children }) => {
  return <div className="rounded-lg border border-gray-200">{children}</div>;
};

export { Accordion, AccordionItem };
