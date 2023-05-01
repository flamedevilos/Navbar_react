import "./App.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/startPage" className="logo">
        Logo
      </Link>

      <ul>
        <ActiveLink to="/startPage">Start Page</ActiveLink>
        <ActiveLink to="/page2">Page2</ActiveLink>
        <ActiveLink to="/page3">Page3</ActiveLink>
        <ActiveLink to="/page4">Page4</ActiveLink>
      </ul>
    </nav>
  );
}

function ActiveLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
