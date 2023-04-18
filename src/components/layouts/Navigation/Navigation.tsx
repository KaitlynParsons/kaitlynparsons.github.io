import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Navigation.scss";
import { IContact } from "../../../interfaces/IContact";
import github from "../../../assets/github.svg";
import linkedin from "../../../assets/linkedin.svg";
import email from "../../../assets/email.svg";

const contact: IContact[] = [
  {
      image: {
          link: github,
          alt: 'github'
      },
      href: 'https://github.com/KaitlynParsons'
  },
  {
      image: {
          link: linkedin,
          alt: 'linkedin'
      },
      href: 'https://www.linkedin.com/in/kpars/'
  },
  {
    image: {
        link: email,
        alt: 'email'
    },
    href: 'mailto:kaitlynparsons@outlook.com.au'
  }
];

const navigationItems = [
  {
    title: 'Projects',
    link: 'projects'
  },
  {
    title: 'Blog',
    link: 'blog'
  },
  {
      title: 'About',
      link: 'about'
  }
];

const Navigation = () => {
  const [navigateState, setNavigateState] = useState(false);
  const [selectedNav, setSelectedNav] = useState(navigationItems[2]);
  const navigating = useNavigate();

  const navigate = (path: string) => {
    const newRoute = navigationItems.find(nav => nav.link === path);
    newRoute && setSelectedNav(newRoute);
    navigating(path);
    setNavigateState(true);
  }

  useEffect(() => {
    if (navigateState) {
      setNavigateState(false);
    }

  }, [navigateState]);

  return (
    <div className="margin-lr">
      <header className="navHeading">
        <h1 className="title-desktop">Kaitlyn Parsons</h1>
        <h1 className="title-tablet">KP</h1>
        <nav>
          {navigationItems.map((item, index) => {
            return <a 
            className={selectedNav.link === item.link ? "active" : ""}
            key={index}
            onClick={() => navigate(item.link)}>
              {item.title}
            </a>;
          })}
        </nav>
      </header>
      <section className="mainSection">
        <Outlet />
      </section>
      <footer>
        {contact.map((detail, index) => {
          return (
            <a key={index} href={detail.href} target="_blank" rel="noreferrer">
              <img src={detail.image.link} alt={detail.image.alt} />
            </a>
          );
        })}
      </footer>
    </div>
  );
};

export default Navigation;
