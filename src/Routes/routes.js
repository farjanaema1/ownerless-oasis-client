import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/home";
import LogIn from "../pages/LogIn/logIn";
import Signup from "../pages/SignUp/signUp";
import Contact from "../pages/Contact/contact";
import DashBoardLayout from "../Layout/dashboardLayout";
import Orders from "../pages/dashboard/orders";
import AllUsers from "../pages/dashboard/allusers";
import Details from "../pages/products/details";
import AddProducts from "../pages/dashboard/addProducts";

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
             {
                path:'/details/:id',
                element:<Details></Details>,
                loader:({params}) => 
                fetch(`products.json/${params.id}`)
            },
            
          
        ]
    },
    {
        path:'/dashboard',
        element:<DashBoardLayout></DashBoardLayout>,
    
        children:[
             {
                path:'/dashboard',
                 element:<Orders></Orders>

             },
            {
                path:'/dashboard/allusers',
                // element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
                 element:<AllUsers></AllUsers>
            },
            {
                path:'/dashboard/addProduct',
                element:<AddProducts></AddProducts>

            },
            // {
            //     path:'/dashboard/manageCar',
            //     element:<ManageCars></ManageCars>

            // },
            // {
            //     path:'/dashboard/payment/:id',
            //     element:<Payment></Payment>,
            //     loader:({params}) => fetch(`http://localhost:5000/orders2/${params.id}`)

            // }
        ]
    }
])
export default router;