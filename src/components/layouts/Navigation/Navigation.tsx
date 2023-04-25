import { useLocation, useNavigate } from "react-router-dom";
import "./Navigation.scss";
import { useEffect, useState } from "react";

const navigationItems = [
  {
    title: "About",
    link: "about",
  },
  {
    title: "Projects",
    link: "projects",
  },
  {
    title: "Blog",
    link: "blog",
  },
];

const Navigation = () => {
  const navigating = useNavigate();
  const location = useLocation();
  const existingPath = navigationItems.find(
    (item) => item.link === location.pathname.slice(1)
  );

  const [navigateState, setNavigateState] = useState(false);
  const [selectedNav, setSelectedNav] = useState(
    existingPath || navigationItems[2]
  );

  const navigate = (path: string) => {
    const newRoute = navigationItems.find((nav) => nav.link === path);
    newRoute && setSelectedNav(newRoute);
    navigating(path);
    setNavigateState(true);
  };

  useEffect(() => {
    if (navigateState) {
      setNavigateState(false);
    }
  }, [navigateState]);

  return (
    <nav className="main-navigation">
      {navigationItems.map((item, index) => {
        return (
          <a
            className={selectedNav.link === item.link ? "active" : ""}
            key={index}
            onClick={() => navigate(item.link)}
          >
            {item.title}
          </a>
        );
      })}
    </nav>
  );
};

export default Navigation;
