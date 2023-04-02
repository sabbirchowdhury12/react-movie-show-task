import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ShowDeatails from "../Pages/ShowDeatails/ShowDeatails";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/show/:id',
                loader: ({ params }) => fetch(`https://api.tvmaze.com/shows/${params.id}`),
                element: <ShowDeatails />
            }
        ]
    }
]);