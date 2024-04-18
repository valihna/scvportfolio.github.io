import { routes } from "../routes";
import "./Navbar.css";
const Nav = () => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-5 text-sm">
      {routes.map((route, idx) => {
        const { Icon, link, title } = route;
        return (
          <li key={idx}>
            <a
              href={link}
              className="flex items-center gap-1 hover:text-neutral-400 transition-all"
            >
              <Icon />
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
