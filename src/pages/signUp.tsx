import "./Signup.css";
import { Link } from "react-router-dom";

export default function Signup() {

    

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h2>Create an <span className="highlight">Account</span></h2>
          <p>Sign up to get started</p>
        </div>

        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
            />
          </div>

          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>

        <p className="signup-footer">
          Already have an account? <Link to='/login' >Log in</Link>
        </p>
      </div>
    </div>
  );
}