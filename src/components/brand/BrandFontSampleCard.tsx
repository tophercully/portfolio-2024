import React from "react";
import { BrandFont } from "../../typeinterfaces";

interface BrandFontSampleCardProps {
  font: BrandFont;
}

const BrandFontSampleCard: React.FC<BrandFontSampleCardProps> = ({ font }) => {
  const { name, url, usage, desc } = font;
  const getFontFormat = (url: string) => {
    const extension = url.split(".").pop();
    switch (extension) {
      case "ttf":
        return "truetype";
      case "otf":
        return "opentype";
      case "woff":
        return "woff";
      case "woff2":
        return "woff2";
      default:
        return "truetype";
    }
  };

  return (
    <div className="flex w-full flex-col items-start gap-4 md:flex-row md:gap-12">
      <style>
        {`
          @font-face {
            font-family: ${name};
            src: url(${url}) format(${getFontFormat(url)});
          }
        `}
      </style>
      <div
        className="flex w-full flex-col gap-8 md:w-1/2"
        style={{ fontFamily: name }}
      >
        <h2 className="w-full text-5xl font-bold">{name}</h2>
        <p className="text-balance text-xl font-light italic text-base-600 md:text-2xl">
          {usage}
        </p>
        <p className="mb-12 text-balance text-xl font-light text-base-400 md:text-2xl">
          {desc}
        </p>
      </div>
      <div
        className="grid w-full grid-cols-2 gap-12 text-nowrap text-xl md:w-1/2"
        style={{ fontFamily: name }}
      >
        <p className="font-thin">Thin</p>
        <p className="font-thin italic">Thin Italic</p>
        <p className="font-light">Light</p>
        <p className="font-light italic">Light Italic</p>
        <p className="font-normal">Normal</p>
        <p className="font-normal italic">Normal Italic</p>
        <p className="font-medium">Medium</p>
        <p className="font-medium italic">Medium Italic</p>
        <p className="font-semibold">Semibold</p>
        <p className="font-semibold italic">Semibold Italic</p>
        <p className="font-bold">Bold</p>
        <p className="font-bold italic">Bold Italic</p>
        <p className="font-black">Black </p>
        <p className="font-black italic">Black Italic</p>
      </div>
    </div>
  );
};

export default BrandFontSampleCard;
