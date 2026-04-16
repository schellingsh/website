import { NavLink } from "react-router-dom";

const Nav = () => (
  <header className="header">
    <div className="container header-inner">
      <NavLink to="/" className="logo">schelling.sh</NavLink>
      <nav className="nav">
        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/how-it-works" className={({ isActive }) => isActive ? "active" : ""}>How it works</NavLink>
      </nav>
      <div className="nav-actions">
        <NavLink to="/docs" className="btn btn-primary">Install →</NavLink>
      </div>
    </div>
  </header>
);

export default Nav;
