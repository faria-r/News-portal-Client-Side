import { createBrowserRouter, useFetcher } from "react-router-dom";
import Main from "../LayuOut/Main";
import Category from "../Pages/category/Category";
import Home from "../Pages/Home/Home/Home";
import Profile from "../Pages/Home/Shared/Header/Profile";
import LogIn from "../Pages/Login/LogIn";
import Register from "../Pages/Login/Register";
import News from "../Pages/News/News";
import TermsandCondiotions from "../Pages/terms and conditions/TermsandCondiotions";
import PrivateRoutes from "./Privateroutes/PrivateRoutes";

export const routes= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=>fetch('http://localhost:5000/news'),
            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader:({params}) => fetch(`http://localhost:5000/category/${params.id}`),
            },
            {
                path:'/news/:id',
                element:<PrivateRoutes><News></News></PrivateRoutes>,
                loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/terms',
                element:<TermsandCondiotions></TermsandCondiotions>
            },
            {
                path:'/profile',
                element:<PrivateRoutes>
                    <Profile></Profile>
                </PrivateRoutes>
            },
        ],
    }
]);