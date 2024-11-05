interface NavButtonProps {
  hoverColor: string;
  path: string;
  label: string;
}

export const NavButton: React.FC<NavButtonProps> = ({ path, label }) => {
  return (
    <a
      className={`group flex w-full justify-between gap-2 bg-opacity-50 py-1 pl-2 duration-100 ease-in-out hover:bg-base-100`}
      href={path}
    >
      <div className="flex w-fit gap-2 group-hover:text-base-950">
        <span className="duration-0">
          {window.location.pathname == path ? "➤" : "⦾"}
        </span>
        <span
          className={`group-hover:underline ${window.location.pathname == path ? "font-medium" : ""}`}
        >
          {label}
        </span>
      </div>
      {/* <span className="justify-self-end opacity-25 group-hover:font-bold group-hover:text-base-950">
        |
      </span> */}
    </a>
  );
};
