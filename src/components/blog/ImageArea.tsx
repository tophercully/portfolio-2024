interface ImageAreaProps {
  children: React.ReactNode;
}
const ImageArea: React.FC<ImageAreaProps> = ({ children }) => {
  return (
    <div className="flex w-full flex-col gap-4 overflow-hidden rounded-xl px-4 pb-4 last:pb-4 lg:px-8 last:lg:pb-8">
      {children}
    </div>
  );
};

export default ImageArea;
