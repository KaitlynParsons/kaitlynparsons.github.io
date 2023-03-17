import { Outlet } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {

  return (
    <header>
      <nav></nav>
      <Outlet />
    </header>
  );
};

export default Navigation;
