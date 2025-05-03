import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from './../assets/image/logo1.png' 
import AuthContext from "../Context/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const {user,  signOutUser} = useContext(AuthContext);

  const handleLogOut = () =>{
    signOutUser()
    .then(() =>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successful sign out",
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch(error =>{
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to sign out",
        showConfirmButton: false,
        timer: 1500
      });
    })
  }
    const links = (
        <>
            <li><NavLink to='/'> Home </NavLink></li>
            <li><NavLink to='/allMovies'> All Movies </NavLink></li>
            <li> <NavLink to='/addMovie'> Add Movie </NavLink></li>
            <li><NavLink to='/myFavorites'> My Favorites </NavLink></li>
            <li> <NavLink to='/updateProfile'> Update Profile </NavLink></li>
        </>
    )
  return (
    <div className="navbar bg-base-100 shadow-sm">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        </div>
       
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          {links}
        </ul>
      </div>
      <img src={logo} className="w-40 h-20"  alt="" />
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      {links}
      </ul>
    </div>
    <div className="navbar-end">
      {
        user ? <>
          <Link to='/logout bg-red-500 text-white mt-4'><button onClick={handleLogOut}>Log Out</button></Link>
        </> : <>
          <Link to='/register'>Register</Link>
          <Link to='/signIn'><button className="btn bg-red-500 text-white mt-4">Sign In</button></Link>
        </>
      }
      
    </div>
  </div>
  );
};

export default Navbar;
