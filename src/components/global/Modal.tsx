import React, { ReactNode, useEffect, useState } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

const Modal = ({
  open,
  onClose,
  children,
  contentClassName = "p-4 md:p-10",
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  contentClassName?: string;
}) => {
  // Control animation states
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (open) {
      // Trigger animations when opened
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    } else {
      setIsAnimating(false);
    }
  }, [open]);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Modal content (always rendered but hidden when closed)
  const modalContent = (
    <div
      className={`fixed inset-0 z-[1000] flex h-[100svh] w-full items-center justify-center bg-base-950 bg-opacity-20 p-2 transition-opacity duration-300 ease-in-out ${
        open && isAnimating ? "opacity-100" : (
          "sr-only pointer-events-none opacity-0"
        )
      }`}
      style={{ backdropFilter: "blur(4px)" }}
      onMouseDown={handleOutsideClick}
      aria-hidden={!open} // Accessibility for screen readers
    >
      <div
        className={`relative flex max-h-[90vh] w-full max-w-[60ch] flex-col gap-6 overflow-y-auto rounded-md bg-white shadow-xl transition-all duration-300 ease-in-out ${contentClassName} ${
          open && isAnimating ?
            "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
        }`}
      >
        <X
          className="absolute right-1 top-1 h-10 w-10 cursor-pointer rounded-tr-sm p-2 hover:bg-gray-100"
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default Modal;
