import React, { useEffect } from "react";
import { Outlet, RouterProvider, createHashRouter } from "react-router-dom";
import ReactGA from "react-ga4";

const Home = React.lazy(() => import("./components/pages/Home"));

const router = createHashRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "",
        element: (
          <React.Suspense fallback={<>Loading...</>}>
            <Home />
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