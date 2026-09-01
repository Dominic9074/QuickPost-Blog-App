import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        {/* Brand / Logo */}
        <div className="navbar-brand">
          <Link to="/">
            Blog<span className="nav-highlight">Pulse</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="navbar-links">
          <Link to="/" className="nav-link active">Home</Link>
          <Link to="/blogs" className="nav-link">Blogs</Link>
          <Link to="/create" className="nav-link">Write</Link>
          <Link to="/about" className="nav-link">My blogs</Link>
        </nav>

        {/* Auth / Action Controls */}
        <div className="navbar-actions">
          <Link to="/login" className="nav-btn-secondary">
            Sign In
          </Link>
          <Link to="/signup" className="nav-btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}