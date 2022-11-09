import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AskQuestion from "../../Pages/AskQuestion/AskQuestion";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import SingleCourse from "../../Pages/SingleCourse/SingleCourse";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import WrongRoute from "../WrongRoute/WrongRoute";


export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/courses',
                element:<Courses></Courses>,
                loader:()=> fetch('https://pl-education-server.vercel.app/courses')
            },
            {
                path:'/courses/:id',
                element:<PrivateRoute><SingleCourse></SingleCourse></PrivateRoute>,
                loader:({params})=> fetch(`https://pl-education-server.vercel.app/courses/${params.id}`)
            },
            {
                path:'/category/:id',
                element:<Courses></Courses>,
                loader:({params})=> fetch(`https://pl-education-server.vercel.app/category/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/FAQ',
                element:<AskQuestion></AskQuestion>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'*',
                element:<WrongRoute></WrongRoute>
            }
        ]
    }
])