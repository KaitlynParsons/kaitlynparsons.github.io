import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./components/layouts/Navigation/Navigation";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>
);
