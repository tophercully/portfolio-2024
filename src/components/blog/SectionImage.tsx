interface SectionImageProps {
  path: string;
}
const SectionImage: React.FC<SectionImageProps> = ({ path }) => {
  return (
    <img
      src={path}
      className="rounded-md"
    />
  );
};

export default SectionImage;
