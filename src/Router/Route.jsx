import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Favorites from "../Pages/Favorites";
import Login from "../Pages/Login";
import Phone from "../Components/Phones/Phone";
import ErrorPage from "../Pages/ErrorPage";


const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/mobiles.json')
            },
            {
                path: '/phone/:id',
                element: <Phone></Phone>,
                loader: () => fetch('/mobiles.json')
            },
            {
                path: '/favorites',
                element: <Favorites></Favorites>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    }
])

export default myCreatedRoute;