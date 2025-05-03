import {
    createBrowserRouter,
  
  } from "react-router-dom";
import MainLayout from "../MainLayout";
import Home from "../Pages/Home/Home";
import AllMovies from "../Pages/All Movies/AllMovies";
import AddMovie from "../Pages/Add Movie/AddMovie";
import MyFavorites from "../Pages/My Favorites/MyFavorites";
import SignIn from "../Pages/SignIn";
import Register from "../Pages/Register";
import UpdateProfile from "../Pages/UpdateProfile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <h2>Route not found</h2>,
      children: [
        {
           path: "/",
           element: <Home/> 
        },
        {
            path: "/allMovies",
            element: <AllMovies/>
        },
        {
            path: "/addMovie",
            element: <AddMovie/>
        },
        {
            path: "/myFavorites",
            element: <MyFavorites/>
        },
        {
            path: "/updateProfile",
            element: <UpdateProfile/>
        },
        {
            path: "/signIn",
            element: <SignIn/>
        },
        {
            path: "/register",
            element: <Register/>
        },

      ]
    },
  ]);

export default router;