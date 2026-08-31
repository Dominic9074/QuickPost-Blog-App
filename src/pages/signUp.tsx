import { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/userAuth";
import { toast } from "react-toastify";

export default function Signup() {

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')

    const {signup}=useAuth()
    const navigate=useNavigate()

    const handleSignin=async (e:React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault()

        if(password !== confirmPassword){
            toast.error('password does not match')
            return;
        }

        try{
            await signup(email,password)
            navigate('/blogs')
        }catch(error){
            toast.error('failed to create Account')
        }

    }   


  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h2>Create an <span className="highlight">Account</span></h2>
          <p>Sign up to get started</p>
        </div>

        <form className="signup-form" onSubmit={handleSignin} >
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              autoComplete="off"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              autoComplete="off"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
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