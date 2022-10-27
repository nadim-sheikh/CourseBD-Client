import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Page/Blog/Blog";
import Category from "../Page/Category/Category";
import Course from "../Page/Course/Course";
import CourseDetails from "../Page/Course/CourseDetails/CourseDetails";
import CourseS from "../Page/Course/CourseS/CourseS";
import Error from "../Page/Error/Error";
import FAQ from "../Page/FAQ/FAQ";
import Home from "../Page/Home/Home";
import LogIn from "../Page/LogIn/LogIn";
import SignUp from "../Page/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/courses',
                element: <PrivateRoute><Course /></PrivateRoute>,
                children: [
                    {
                        path: '/courses/category/:id',
                        element: <Category />,
                        loader: ({ params }) => fetch(`https://server-55.vercel.app/category/${params.id}`)
                    },
                    {
                        path: '/courses/',
                        element: <CourseS />,
                        loader: () => fetch('https://server-55.vercel.app/course'),
                    },
                ]
            },
            {
                path: '/details/:id',
                element: <CourseDetails />,
                loader: ({ params }) => fetch(`https://server-55.vercel.app/course/${params.id}`)
            },
            {
                path: '/faq',
                element: <PrivateRoute> <FAQ /></PrivateRoute>
            },
            {
                path: '/blog',
                element: <PrivateRoute><Blog /></PrivateRoute>
            },
            {
                path: '/login',
                element: <LogIn />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '*',
                element: <Error/>
            },
        ]
    }
])