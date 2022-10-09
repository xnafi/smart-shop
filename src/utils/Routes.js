import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home";
import About from "../components/About";
import Shop from "../components/Shop";
import Cart from "../components/Cart";
import ErrorPage from "../components/ErrorPage";
import { GetData } from "../Loader/GetData";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        loader: GetData,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'shop',
                element: <Shop />
            },
            {
                path: 'cart',
                element: <Cart />
            },
        ]
    }
])