import React, { useEffect } from "react";
import { Outlet, RouterProvider, createHashRouter } from "react-router-dom";
import ReactGA from "react-ga4";

const About = React.lazy(() => import("./components/pages/About"));

const router = createHashRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "",
        element: (
          <React.Suspense fallback={<>Loading...</>}>
            <About />
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