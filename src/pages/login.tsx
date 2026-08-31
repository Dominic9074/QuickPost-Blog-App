import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Welcome <span className="highlight">Back</span></h2>
          <p>Please enter your details to sign in</p>
        </div>

        <form className="login-form">
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
            <div className="label-row">
              <label htmlFor="password">Password</label>
            </div>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="submit-btn">
            Sign In
          </button>
        </form>

        <p className="login-footer">
          Don't have an account? <Link to={'/signup'} >Sign Up</Link>
        </p>
      </div>
    </div>
  );
}





