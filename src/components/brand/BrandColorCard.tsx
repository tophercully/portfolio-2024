import React from "react";
import { hexToHsl, hexToRgba } from "../../util/colorConverters";

interface BrandColorCardProps {
  hex: string;
  name?: string;
}

const BrandColorCard: React.FC<BrandColorCardProps> = ({ hex, name }) => {
  const rgba = hexToRgba(hex);
  const hsl = hexToHsl(hex);
  const getBestContrastingColor = (color: string) => {
    // Remove the '#' if it's there
    const hex = color.replace(/^#/, "");

    // Convert hex to RGB
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    // Calculate relative luminance, these ratios are just rgb relative luminances
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Return white for dark colors, black for light colors
    return luminance > 0.6 ? "black" : "white";
  };
  const bestContrastingColor = getBestContrastingColor(hex);

  return (
    <div
      className={`flex aspect-[4/3] h-full w-full flex-col rounded-md p-2 ${hex === "#FFFFFF" ? "border border-base-300" : ""}]`}
      style={{ backgroundColor: hex, color: bestContrastingColor }}
    >
      {/* <div
        className={`flex-grow-1 mb-4 h-12 w-full rounded-sm ${hex === "#FFFFFF" ? "border border-base-300" : ""}`}
        style={{ backgroundColor: hex }}
      ></div> */}
      <h4 className="w-1/3 text-2xl font-light md:text-5xl">{name}</h4>
      <div className="mt-auto text-xs opacity-50">
        <p className="">HEX: {hex}</p>
        <p className="">RGBA: {rgba}</p>
        <p className="">HSL: {hsl}</p>
      </div>
    </div>
  );
};

export default BrandColorCard;
