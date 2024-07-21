import { useNavigate } from "react-router-dom";

interface NavButtonProps {
  hoverColor: string;
  path: string;
  label: string;
}

export const NavButton: React.FC<NavButtonProps> = ({
  hoverColor,
  path,
  label,
}) => {
  const navigate = useNavigate();
  return (
    <button
      className={`group flex w-full justify-between gap-2 pt-2 duration-150 ease-in-out hover:m-0 hover:pr-4 hover:bg-[${hoverColor}] hover:p-1`}
      onClick={() => navigate(path)}
    >
      <div className="flex w-fit gap-2 duration-150 group-hover:text-base-50">
        <span className="duration-0">
          {window.location.pathname == path ? "➤" : "⦾"}
        </span>
        <span className="duration-0">{label}</span>
      </div>
      <span className="justify-self-end opacity-25 duration-0 group-hover:text-base-50">
        |
      </span>
    </button>
  );
};
