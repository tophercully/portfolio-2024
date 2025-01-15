import { useParams } from "react-router-dom";
import brands from "../data/brands";
import { Brand, BrandElement } from "../typeinterfaces";
import BrandColors from "../components/brand/BrandColors";
import BrandAltLogos from "../components/brand/BrandAltLogos";
import { Header } from "../components/nav/Header";
import { ChevronDown } from "lucide-react";
import BrandFonts from "../components/brand/BrandFonts";
import { useEffect, useState } from "react";
import BrandElements from "../components/brand/BrandElements";

const BrandPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const brand = brands.find((thisBrand: Brand) => thisBrand.id === projectId);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const container = document.querySelector(".snap-mandatory");

    const handleScroll = (e: Event) => {
      setIsScrolled((e.target as HTMLElement)?.scrollTop > 500);
    };

    container?.addEventListener("scroll", handleScroll);
    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getBestContrastingColor = (hexColor: string) => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 155 ? "black" : "white";
  };

  const bestContrastingColor =
    brand?.colors[0] ? getBestContrastingColor(brand.colors[0].hex) : "black";
  document.title = `${brand?.name} - Brand Overview`;

  return (
    <div className="flex max-h-screen min-h-screen w-full flex-col items-center justify-start bg-base-50 p-4 pb-0">
      <Header />
      {/* Conditional Subheader */}
      <div
        className={`fixed left-0 top-12 max-h-[90svh] w-full transform transition-all duration-300 ${isScrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className="container px-4 py-2">
          <h2
            className="w-fit text-2xl font-medium"
            style={{
              backgroundColor: brand?.colors[0].hex,
              color: bestContrastingColor,
            }}
          >
            {brand?.name}
          </h2>
        </div>
      </div>

      <div className="h-screen w-full snap-y snap-mandatory overflow-y-auto scroll-smooth">
        {/* Hero Section */}
        <section className="flex min-h-[90svh] w-full snap-start snap-always flex-col justify-center rounded-lg bg-white">
          <div className="flex h-full flex-col items-start justify-center">
            <div className="flex w-fit flex-col justify-center gap-2 self-start overflow-hidden">
              <h2
                className="text-7xl font-medium md:text-9xl"
                style={{
                  backgroundColor: brand?.colors[0].hex,
                  color: bestContrastingColor,
                }}
              >
                {brand?.name}
              </h2>
              <h3 className="text-3xl md:text-3xl">
                Branding and Design Overview
              </h3>
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-base-200">
              <ChevronDown
                size={30}
                className={`duration-200 ${isScrolled ? "opacity-0" : "opacity-100"}`}
              />
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        {brand?.brandingPhilisophy && (
          <section className="flex min-h-[90svh] w-full snap-start snap-always flex-col justify-center overflow-hidden rounded-lg bg-white pt-12">
            <div className="flex h-full flex-col items-center justify-center">
              <h4 className="max-w-[60ch] text-3xl font-light text-base-500">
                {brand?.brandingPhilisophy}
              </h4>
            </div>
          </section>
        )}

        {/* Logo Section */}
        <section className="flex min-h-[90svh] w-full snap-start snap-always flex-col justify-center overflow-hidden rounded-lg bg-white pt-12">
          <div className="flex h-full flex-col items-center justify-center gap-16">
            <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden">
              <span className="mb-12 text-nowrap text-5xl font-light text-base-150">
                Logo Logo Logo Logo Logo Logo Logo Logo Logo
                <span className="text-base-950"> Logo </span>
                Logo Logo Logo Logo Logo Logo Logo Logo Logo
              </span>
              <img
                className="max-h-52"
                src={brand?.logo.path}
              />
            </div>
            {brand?.logo.variants && (
              <BrandAltLogos
                images={brand?.logo.variants as Brand["logo"]["variants"]}
              />
            )}
            <p className="max-w-[60ch] text-xl font-light text-base-500 md:text-2xl">
              {brand?.logo.desc}
            </p>
          </div>
        </section>

        {/* Colors Section */}
        <section className="flex min-h-[90svh] w-full snap-start snap-always flex-col justify-center overflow-hidden rounded-lg bg-white pt-12">
          <div className="flex h-full flex-col items-center justify-center gap-12">
            <span className="mb-12 text-nowrap text-5xl font-thin text-base-150">
              Colors Colors Colors Colors Colors Colors Colors Colors
              <span className="font-light text-base-950"> Colors </span>
              Colors Colors Colors Colors Colors Colors Colors Colors
            </span>
            <p className="max-w-[60ch] text-xl font-light text-base-500 md:text-2xl">
              {brand?.colorUsage}
            </p>
            <BrandColors
              colors={brand?.colors as { name?: string; hex: string }[]}
            />
          </div>
        </section>

        {/* Fonts Section */}
        <section className="flex min-h-[90svh] w-full snap-start snap-always flex-col justify-center overflow-hidden rounded-lg bg-white pt-12">
          <div className="mb-24 flex h-full flex-col items-center justify-center gap-16">
            <span className="mb-12 text-nowrap text-5xl font-thin text-base-150">
              Fonts Fonts Fonts Fonts Fonts Fonts Fonts Fonts Fonts
              <span className="font-light text-base-950"> Fonts </span>
              Fonts Fonts Fonts Fonts Fonts Fonts Fonts Fonts Fonts
            </span>
            <BrandFonts fonts={brand?.fonts as Brand["fonts"]} />
            {/* <BrandFonts fonts={brand?.fonts as Brand["fonts"]} /> */}
          </div>
        </section>

        {/* Elements Section */}
        {brand?.elements && (
          <BrandElements
            elements={brand?.elements as BrandElement[]}
            color={brand?.colors[0].hex}
          />
        )}
      </div>
    </div>
  );
};

export default BrandPage;
