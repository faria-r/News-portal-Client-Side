import { createBrowserRouter } from "react-router-dom";
import Main from "../LayuOut/Main";
import Category from "../Pages/category/Category";
import Home from "../Pages/Home/Home/Home";
import News from "../Pages/News/News";

export const routes= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/category/:id',
                element:<Category></Category>
            },
            {
                path:'/news/:id',
                element:<News></News>,
            }
        ],
    }
]);