import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import AuthContext from '../Context/AuthContext';
import { Link } from 'react-router-dom';


const Register = () => {

  const {createUser} = useContext(AuthContext);
  const [error, setError] = useState("");

    const handleRegister = e =>{
        e.preventDefault();
        setError("");
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);

        // Password Validation

        if(!/[a-z]/.test(password)){
          setError("Password must have a Lowercase letter")
          return;
        }
        if(!/[A-Z]/.test(password)){
          setError("Password must have an Uppercase letter")
          return;
        }
        if(password.length < 6) {
          setError("Password must be at least 6 characters long")
          return;
        }

        createUser(email, password) 
          .then(result => {
            console.log(result.user)
          })
          .catch(error=> {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: error.message,
            });
          })

         
        
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content ">
          <div className="text-center lg:text-left">
            
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-4xl font-bold">Register now!</h1>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input type="text" name='name' className="input" placeholder="Name" required/>
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />
                <label className="label">Photo URL</label>
                <input type="url" name='photo' className="input" placeholder="Photo URL" required/>
                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" required/>
                {
                  error && <p className='text-red-500 text-center'>{error}</p>
                }
               <div className='text-center'>
               <button className="btn bg-red-500 text-white mt-4">Register</button>
               </div>
              </fieldset>

            </form>
            <p className='text-center mb-4'>Already have an account? Please 
              <Link className='text-blue-500' to='/signIn'> login</Link>.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Register;