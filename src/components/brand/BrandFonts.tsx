import React from "react";
import { BrandFont } from "../../typeinterfaces";
import BrandFontSampleCard from "./BrandFontSampleCard";

interface BrandFontsProps {
  fonts: BrandFont[];
}

const BrandFonts: React.FC<BrandFontsProps> = ({ fonts }) => {
  return (
    <div className="grid h-fit w-4/5 grid-cols-1 gap-4">
      {fonts.map((font, index) => (
        <BrandFontSampleCard
          key={index}
          font={font}
        />
      ))}
    </div>
  );
};

export default BrandFonts;
