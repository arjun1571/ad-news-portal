import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../../LayOut/Main";
import Categories from "../../Page/Home/Categories/Categories";
import Home from "../../Page/Home/Home";
import News from "../../Page/Home/News";
import Login from "../../Page/Home/Login/Login";
import Register from "../../Page/Home/Login/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch(`http://localhost:5000/news`)
            },
            {
                path: "/categories/:id",
                element: <Categories></Categories>,
                loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: "/news/:id",
                element: <News></News>,
                loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>     
            }
        ]
    },
])