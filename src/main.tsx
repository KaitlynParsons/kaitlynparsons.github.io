import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Blog from "./components/pages/Blog/Blog";
import Home from "./components/pages/Home/Home";
import "./index.scss";

const BASE_PATH = "/KaitlynParsons/";

const router = [
    {
      path: "",
      element: <Home />,
    },
    {
      path: "blog",
      element: <Blog />,
    },
  ];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={BASE_PATH}>
      <Routes>
        {router.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
