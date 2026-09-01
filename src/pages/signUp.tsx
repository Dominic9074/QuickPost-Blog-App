import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/userAuth";
import { toast } from "react-toastify";
import {useForm} from 'react-hook-form'

interface SignupFormData{
    name:string;
    email:string;
    password:string;
    confirmPassword:string;
}

export default function Signup() {

    const {register,handleSubmit,getValues,formState:{errors}}=useForm<SignupFormData>()

    const {signup}=useAuth()
    const navigate=useNavigate()

    const handleSignin=async (data:SignupFormData)=>{
        try{
            await signup(data.email,data.password);
            toast.success("Account created successfully!");
            navigate("/blogs");
        }catch(error){
            toast.error('failed to create account')
        }
    }   


  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h2>Create an <span className="highlight">Account</span></h2>
          <p>Sign up to get started</p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit(handleSignin)} >
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              autoComplete="off"
              {...register('name',{
                required:'name is required',
                minLength:{value:3,message:'min 3 character'}
              })}
            />
            {errors.name &&(
                <p style={{color: "#e74c3c",fontSize: "12px",margin: "5px 0 0"}}>{errors.name.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              autoComplete="off"
              {...register('email',{
                required:'email is required',
                pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email &&(
                <p style={{color: "#e74c3c",fontSize: "12px",margin: "5px 0 0"}}>{errors.email.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              {...register('password',{
                required:'password is required',
                minLength:{
                    value:6,message:'password should be at least 6 character'
                }
              })}
            />
            {errors.password && (<p style={{ color: "#e74c3c",fontSize: "12px",margin: "5px 0 0"}}>{errors.password.message}</p>)}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              {...register('confirmPassword',{
                required:'confirmPassword is required',
                validate:(value)=>{
                    return value===getValues('password') || 'password does not match'
                }
              })}
            />
            {errors.confirmPassword && ( <p style={{ color: "#e74c3c",  fontSize: "12px",  margin: "5px 0 0" }}>
                   {errors.confirmPassword.message}
                 </p>)}
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