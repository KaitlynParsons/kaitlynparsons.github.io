import { useEffect, useState } from "react";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home";
import "./Navigation.scss";

const pages = [
  {
    name: "Home",
    component: <Home />,
  },
  {
    name: "Blog",
    component: <Blog />,
  },
];

const Navigation = () => {
  const [component, setComponent] = useState(<Home />);
  const [pageChanged, setPageChanged] = useState(false);

  const updatePage = (component: JSX.Element) => {
    setComponent(component);
    setPageChanged(true);
  };

  useEffect(() => {
    if (pageChanged) {
      return setPageChanged(false);
    }
  }, [pageChanged]);

  return (
    <div className="nav-wrapper">
      <div className="nav">
        {pages.map((page, index) => (
          <button key={index} onClick={() => updatePage(page.component)}>
            {page.name}
          </button>
        ))}
      </div>
      <div className="content">{component}</div>
    </div>
  );
};

export default Navigation;
