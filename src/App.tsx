import { RouterProvider, createHashRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout/MainLayout";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import React from "react";
import ComingSoon from "./components/pages/ComingSoon/ComingSoon";
import Loading from "./components/pages/Loading/Loading";

const About = React.lazy(() => import("./components/pages/About/About"));
const Blog = React.lazy(() => import("./components/pages/Blog/Blog"));

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: (
          <React.Suspense fallback={<Loading />}>
            <About />
          </React.Suspense>
        ),
      },
      {
        path: "about",
        element: (
            <React.Suspense fallback={<Loading />}>
              <About />
            </React.Suspense>
          ),
      },
      {
        path: "blog",
        element: (
            <React.Suspense fallback={<Loading />}>
              <Blog />
            </React.Suspense>
          ),
      },
      {
        path: "projects",
        element: (
            <React.Suspense fallback={<Loading />}>
              <ComingSoon />
            </React.Suspense>
          ),
      },
    ],
  },
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