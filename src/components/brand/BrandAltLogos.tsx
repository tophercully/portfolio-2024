import React from "react";
import { Brand } from "../../typeinterfaces";

interface BrandAltLogosProps {
  images: Brand["logo"]["variants"];
}

const BrandAltLogos: React.FC<BrandAltLogosProps> = ({ images }) => {
  return (
    <div className="flex w-full max-w-[80ch] flex-row flex-wrap items-center justify-around gap-8">
      {images?.map((image, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-4"
        >
          <h3 className="w-full text-center text-2xl text-base-300">
            {image.name}
          </h3>
          <img
            className={`${image.name == "Favicon" ? "rounded-xl border shadow-lg" : ""} bg-base-50`}
            key={index}
            src={image?.imagePath as string}
            alt={`Brand logo ${index + 1}`}
            style={{ maxHeight: "100px" }}
          />
        </div>
      ))}
    </div>
  );
};

export default BrandAltLogos;
