import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./MainLayout.scss";
import { IContact } from "../../../interfaces/IContact";
import github from "../../../assets/contact/github.svg";
import linkedin from "../../../assets/contact/linkedin.svg";
import email from "../../../assets/contact/email.svg";
import menu from "../../../assets/actions/burger-menu.svg";
import cross from "../../../assets/actions/cross.svg";
import logo from "../../../assets/code-merge.svg";
import Navigation from "../Navigation/Navigation";
import { useEffect, useState } from "react";
import Coding from "../../widgets/Coding/Coding";
import Login from "../../pages/Login/Login";
import { NightSky } from "../NightSky/NightSky";

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

const MainLayout = () => {
  const location = useLocation();
  const [showNavigation, setShowNavigation] = useState(false);
  const [showCoding, setShowCoding] = useState(false);
  const [showUser, setShowUser] = useState(location.pathname.slice(1) === 'login');
  const navigating = useNavigate();

  const titleClicked = () => {
    navigating('');
    closeNavigation();
    setShowUser(false);
  }

  const toggleCoding = () => {
    setShowCoding(!showCoding);
    closeNavigation();
  }

  const toggleNavigation = () => {
    setShowNavigation(!showNavigation);
    setShowCoding(false);
    document.body.style.overflow = !showNavigation ? 'hidden' : 'auto';
  }

  const closeNavigation = () => {
    if (showNavigation) {
      setShowNavigation(false);
      document.body.style.overflow = 'auto';
    }
  }

  useEffect(() => {
    setShowUser(location.pathname.slice(1) === 'login');
  })

  return (
    <div className="margin-lr">
      <header className="navHeading">
        <div>
          <h1 onClick={() => titleClicked()} className="title">kaitlyn<span>parsons</span></h1>
        </div>
        <div>
        <img onClick={() => toggleCoding()} className="logo" src={logo} alt='fork' />
        {showUser && <Login />}
        <img onClick={() => toggleNavigation()} className="burger-menu" src={!showNavigation ? menu : cross} alt='menu' />
        </div>
      </header>
      {showCoding && <Coding />}
      {showNavigation && <Navigation nav={toggleNavigation} />}
      {showNavigation && <section onClick={() => toggleNavigation()} className="sectionOverlay" />}
      <NightSky />
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

export default MainLayout;
