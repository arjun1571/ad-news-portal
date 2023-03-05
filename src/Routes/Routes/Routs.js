import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../../LayOut/Main";
import Categories from "../../Page/Home/Categories/Categories";
import Home from "../../Page/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/categories/:id",
                element: <Categories></Categories>
            }
        ]
    },
])