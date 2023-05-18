import React, { useEffect } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout/MainLayout";
import ReactGA from "react-ga4";
import Loading from "./components/pages/Loading/Loading";

const About = React.lazy(() => import("./components/pages/About/About"));
const Garden = React.lazy(() => import("./components/pages/Garden/Garden").then(module => ({ default: module.Garden })));

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
        path: "garden",
        element: (
            <React.Suspense fallback={<Loading />}>
              <Garden />
            </React.Suspense>
          ),
      },
      {
        path: "login",
        element: (
            <React.Suspense fallback={<Loading />}>
              <></>
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

    return <RouterProvider router={router} />;
}

export default App;