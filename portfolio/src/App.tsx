import React, { useEffect } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout/MainLayout";
import ReactGA from "react-ga4";
import Loading from "./components/pages/Loading/Loading";

const About = React.lazy(() => import("./components/pages/About/About"));
const Blog = React.lazy(() => import("./components/pages/Blog/Blog"));
const ComingSoon = React.lazy(() => import("./components/pages/ComingSoon/ComingSoon"));

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