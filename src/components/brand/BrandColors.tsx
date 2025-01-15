import BrandColorCard from "./BrandColorCard";

interface BrandColorsProps {
  colors: { name?: string; hex: string }[];
}

const BrandColors: React.FC<BrandColorsProps> = ({ colors }) => {
  return (
    <div className="grid w-full grid-cols-2 gap-4 py-4 md:w-4/5 md:grid-cols-4">
      {colors.map((color, index) => (
        <BrandColorCard
          key={index}
          hex={color.hex}
          name={color.name}
        />
      ))}
    </div>
  );
};

export default BrandColors;
