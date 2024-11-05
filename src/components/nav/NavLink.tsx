interface NavLinkProps {
  url: string;
  label: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ url, label }) => {
  return (
    <a
      className={`group flex w-full justify-between gap-2 py-1 duration-150 ease-in-out hover:bg-base-50 hover:pr-4 hover:invert`}
      href={url}
      target="_blank"
    >
      <span className="duration-0 group-hover:underline">{label}</span>
      <span className="opacity-25">|</span>
    </a>
  );
};
