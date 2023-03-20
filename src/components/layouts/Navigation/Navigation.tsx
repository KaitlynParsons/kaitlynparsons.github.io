import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  const [navigateState, setNavigateState] = useState(false);
  const navigating = useNavigate();

  const navigate = (path: string) => {
    navigating(path);
    setNavigateState(true);
  }

  useEffect(() => {
    if (navigateState) {
      setNavigateState(false);
    }

  }, [navigateState]);

  return (
    <>
      <nav>
        <a onClick={() => navigate('blog')}>Blog</a>
        <a onClick={() => navigate('')}>About</a>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
