import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./components/pages/Blog/Blog";
import Home from "./components/pages/Home/Home";
import "./index.scss";

const BASE_PATH = "/";

const router = createBrowserRouter([
  {
    path: BASE_PATH,
    element: <Home />,
  },
  {
    path: `${BASE_PATH}/blog`,
    element: <Blog />
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
