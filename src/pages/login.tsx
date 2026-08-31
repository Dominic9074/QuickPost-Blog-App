import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import useAuth from "../hooks/userAuth";

export default function Login() {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {login}=useAuth()
    const navigate=useNavigate()

    const handleLogin=async (e:React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault()

        try{
            await login(email,password)
            navigate('/blogs')
        }catch(error){
            console.log(error)
        }
    }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Welcome <span className="highlight">Back</span></h2>
          <p>Please enter your details to sign in</p>
        </div>

        <form className="login-form" onSubmit={handleLogin} >
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              autoComplete="off"
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
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
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
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





