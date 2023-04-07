import { RouterProvider, createHashRouter } from "react-router-dom";
import Navigation from "./components/layouts/Navigation/Navigation";
import Blog from "./components/pages/Blog/Blog";
import ReactGA from "react-ga4";
import About from "./components/pages/About/About";
import { useEffect } from "react";

const router = createHashRouter([
    {
        path: '/',
        element: <Navigation />,
        children: [
            {
                path: '',
                element: <About />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'blog',
                element: <Blog />
            }
        ]
    }
]);

const App = () => {
    const isProd = import.meta.env.PROD;
    
    useEffect(() => {
        if (isProd) {
            ReactGA.initialize("G-SXHJ261CZ0");
        }
    });

    return <RouterProvider router={router} />
}

export default App;