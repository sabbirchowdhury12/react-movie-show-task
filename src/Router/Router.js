import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ShowDeatails from "../Pages/ShowDeatails/ShowDeatails";
import BookList from "../Pages/BookList/BookList";


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
                path: '/list',
                element: <BookList />
            },
            {
                path: '/show/:id',
                loader: ({ params }) => fetch(`https://api.tvmaze.com/shows/${params.id}`),
                element: <ShowDeatails />
            }
        ]
    }
]);