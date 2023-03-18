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
        <button onClick={() => navigate('')}>Home</button>
        <button onClick={() => navigate('blog')}>Blog</button>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
