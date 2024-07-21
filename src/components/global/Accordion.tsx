import React, { useState, ReactNode, useRef, useEffect } from "react";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  startOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  startOpen,
}) => {
  const [isOpen, setIsOpen] = useState(startOpen ? startOpen : false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(0);

  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current;
      setHeight(contentEl?.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-dashed border-black bg-white bg-opacity-15">
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
      <div
        className="overflow-hidden transition-[height] duration-100 ease-in-out"
        style={{ height: height }}
      >
        <div
          ref={contentRef}
          className="px-6 pb-4"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

interface AccordionProps {
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ children }) => {
  return (
    <div className="w-full rounded-sm border border-gray-200 shadow-md">
      {children}
    </div>
  );
};

export { Accordion, AccordionItem };
