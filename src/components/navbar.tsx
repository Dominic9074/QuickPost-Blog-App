import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/userAuth";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/">Quick Post</Link>
      </div>

      

      <nav className="navbar-right">
        <NavLink
              to="/add-blog"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              Create Blog
            </NavLink>

            <NavLink
              to="/my-blogs"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              My Blogs
            </NavLink>
        {user ? (
          <>

            <span className="user-greeting">
              {user.displayName || user.email?.split("@")[0]}
            </span>

            <button onClick={logout} className="nav-btn-primary">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-item">
              Login
            </Link>
            <Link to="/signup" className="nav-btn-primary">
              Signup
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}