import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import useAuth from "../../hooks/userAuth";
import { toast } from "react-toastify";
import {useForm} from 'react-hook-form'

interface LoginFormData{
    email:string,
    password:string;
}


export default function Login() {

    const {register,handleSubmit,formState:{errors}}=useForm<LoginFormData>()
    
    const {login}=useAuth()
    const navigate=useNavigate()

    const handleLogin=async (data:LoginFormData)=>{

        try{
            await login(data.email,data.password)
            navigate('/')
        }catch(error){
           toast.error('invalid email or password')
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

        <form className="login-form" onSubmit={handleSubmit(handleLogin)} >
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
            <div className="label-row">
              <label htmlFor="password">Password</label>
            </div>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              {...register('password',{
                required:'password is required',
                minLength:{value:6,message:'password must be at least 6 character'}
              })}
            />
            {errors.password && (<p style={{ color: "#e74c3c",fontSize: "12px",margin: "5px 0 0"}}>{errors.password.message}</p>)}
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





