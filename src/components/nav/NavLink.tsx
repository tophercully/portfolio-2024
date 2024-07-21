interface NavLinkProps {
  url: string;
  label: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ url, label }) => {
  return (
    <a
      className={`flex w-full justify-between gap-2 pt-2 duration-150 ease-in-out hover:m-0 hover:bg-[#1862C8] hover:p-1 hover:pr-4 hover:text-base-50`}
      href={url}
      target="_blank"
    >
      <span>{label}</span>
      <span className="opacity-25">|</span>
    </a>
  );
};
