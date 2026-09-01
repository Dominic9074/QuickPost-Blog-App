import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/">Quick Post</Link>
      </div>

      <nav className="navbar-right">
        <Link to="/add-blog" className="nav-item">
          Create Blog
        </Link>
        <Link to="/my-blogs" className="nav-item active">
          My Blogs
        </Link>
        <button className="nav-logout-btn">Logout</button>
      </nav>
    </header>
  );
}