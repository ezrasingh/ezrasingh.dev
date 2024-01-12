import cx from "classnames";

export const NavItem: React.FC<{ href: string } & React.PropsWithChildren> = ({
  href,
  children,
}) => (
  <li>
    <a className="group flex items-center py-3 active" href={href}>
      <span
        className={cx(
          "nav-indicator",
          "mr-4",
          "h-px",
          "w-8",
          "bg-slate-600",
          "transition-all",
          "group-hover:w-16",
          "group-hover:bg-slate-200",
          "group-focus-visible:w-16",
          "group-focus-visible:bg-slate-200",
          "motion-reduce:transition-none"
        )}
      />
      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
        {children}
      </span>
    </a>
  </li>
);
