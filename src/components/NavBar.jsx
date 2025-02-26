import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex justify-between bg-gray-950 p-8">
      <div>
        <Link to="/">Movie App</Link>
      </div>
      <ul className="flex items-center justify-center gap-4">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/movies">Movies</NavLink>

        <NavLink to="/shows">Shows</NavLink>

        <NavLink to="/favorites">Favorites</NavLink>
      </ul>
    </nav>
  );
}

const NavLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="text-gray-200 hover:text-blue-500 transition-colors duration-200"
    >
      {children}
    </Link>
  </li>
);

export default NavBar;
