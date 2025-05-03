import React, { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const SignIn = () => {
  const {signInUser, signInGoogle} = useContext(AuthContext);
  const [error, setError] = useState("");

  // login with email and password
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // const logInInfo = {email,password}
        console.log(email,password);
        signInUser(email, password)
        .then(result =>{
          console.log(result.user)
        })
        .catch(error =>{
          console.log(error.message)
        });
        
    }

    // login with Google
   const handleGoogleLogin = e=>{
    e.preventDefault();
    signInGoogle()
    .then((result) =>{
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Logged in successfully",
        showConfirmButton: false,
        timer: 2000,
      });
    })

   }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
        <h1 className="text-4xl text-red-500 font-bold text-center mt-4">Login now</h1>
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
              <label className="label" >Email</label>
              <input type="email" name='email' className="input" placeholder="Email" required/>
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" required/>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
             <div className="text-center"> 
             <button className="btn bg-red-500  text-white mt-4">Login</button>
             </div>
             <div className="divider">OR</div>
             <div className="flex">
              <button onClick={handleGoogleLogin} className="text-lg btn"><FcGoogle /> Login with Google</button>
             </div>
            </fieldset>
          </form>
          {
            error && <p className="text-red-500 text-center mb-2">{error}</p>
          }
          <p className="text-center mb-4">New user? Register<Link to="/register" className="text-blue-500"> here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
