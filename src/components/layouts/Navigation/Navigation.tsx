import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Navigation.scss";
import { IContact } from "../../../interfaces/IContact";
import github from "../../../assets/github.svg";
import linkedin from "../../../assets/linkedin.svg";
// import email from "../../../assets/email.svg";

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
  // {
  //   image: {
  //       link: email,
  //       alt: 'email'
  //   },
  //   href: 'mailto:'
  // }
];

const Navigation = () => {
  const contactsForDisplay = contact.map((detail, index) => {
    return (
      <a key={index} href={detail.href} target="_blank" rel="noreferrer">
        <img src={detail.image.link} alt={detail.image.alt} />
      </a>
    );
  });

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
    <div className="margin-lr">
      <nav>
        {/* <a onClick={() => navigate('blog')}>Blog</a> */}
        <a onClick={() => navigate('')}>About</a>
      </nav>
      <section className="mainSection">
        <Outlet />
      </section>
      <footer>
          {contactsForDisplay}
      </footer>
    </div>
  );
};

export default Navigation;
