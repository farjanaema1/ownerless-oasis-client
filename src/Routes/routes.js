import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/home";
import LogIn from "../pages/LogIn/logIn";
import Signup from "../pages/SignUp/signUp";
import Contact from "../pages/Contact/contact";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            
            {
                path:'/signup',
                element:<Signup></Signup>
             },
            {
                path:'/contact',
                element:<Contact></Contact>
             },
            
          
        ]
    },
])
export default router;