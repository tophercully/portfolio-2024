interface SectionTextProps {
  children: React.ReactNode;
}
const SectionText: React.FC<SectionTextProps> = ({ children }) => {
  return (
    <div className="flex max-w-[80ch] flex-col gap-8 px-4 font-satoshi last:pb-4 lg:px-8 last:lg:pb-8">
      {children}
    </div>
  );
};

export default SectionText;
