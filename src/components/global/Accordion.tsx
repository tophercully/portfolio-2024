import { ChevronLeft } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

interface DrawerProps {
  label: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  rounded?: "top" | "bottom" | "both" | false;
  sub?: boolean;
  contentClassName?: string;
}

const Accordion: React.FC<DrawerProps> = ({
  label,
  children,
  defaultOpen = false,
  rounded = false,
  sub = false,
  contentClassName = "",
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const floatingContent =
    !contentClassName?.includes("bg") ||
    !contentClassName?.includes("border") ||
    !contentClassName?.includes("ring");

  useEffect(() => {
    if (defaultOpen && contentRef.current) {
      contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
    }
  }, [defaultOpen]);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
    }
  }, [children, isOpen]);

  const toggleDrawer = () => {
    if (contentRef.current) {
      if (isOpen) {
        contentRef.current.style.height = "0px";
      } else {
        contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
      }
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
      className={`h-fit w-full overflow-hidden ${rounded == "top" || rounded == "both" ? "rounded-t-xl" : ""} ${(rounded == "bottom" || rounded == "both") && (!isOpen || floatingContent) ? "rounded-b-xl" : ""}`}
    >
      <div
        className={`flex cursor-pointer items-center justify-between bg-white py-4`}
        onClick={toggleDrawer}
      >
        <span className={` ${sub ? "text-lg" : "text-xl"}`}>{label}</span>
        <span
          className={`transform text-base-300 transition-transform duration-300 ${
            isOpen ? "-rotate-90" : "rotate-0"
          }`}
        >
          <ChevronLeft />
        </span>
      </div>
      <div
        ref={contentRef}
        style={{
          height: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
        className="transition-height overflow-hidden duration-300 ease-in-out"
      >
        <div
          className={`flex flex-col ${contentClassName} ${(rounded == "bottom" || rounded == "both") && isOpen && !floatingContent ? "rounded-b-xl" : ""}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
