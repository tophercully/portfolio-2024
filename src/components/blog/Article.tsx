interface ArticleProps {
  children: React.ReactNode;
}
const Article: React.FC<ArticleProps> = ({ children }) => {
  return (
    <div className="font-neuehaas mb-24 flex w-full max-w-[80ch] flex-col items-center gap-4 rounded-lg border-x border-white bg-white bg-opacity-65 shadow-sm">
      {children}
    </div>
  );
};

export default Article;
