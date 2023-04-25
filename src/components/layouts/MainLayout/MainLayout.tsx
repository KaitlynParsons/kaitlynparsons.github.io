import { Outlet } from "react-router-dom";
import "./MainLayout.scss";
import { IContact } from "../../../interfaces/IContact";
import github from "../../../assets/github.svg";
import linkedin from "../../../assets/linkedin.svg";
import email from "../../../assets/email.svg";
import { yearsSinceFormatter } from "../../../helpers/DateHelper";

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
  const timeCoding = `${yearsSinceFormatter('2018-04-24')} YEARS`;

  return (
    <div className="margin-lr">
      <header className="navHeading">
        <div>
          <h1 className="title-desktop">Kaitlyn Parsons</h1>
          <h1 className="title-tablet">KP</h1>
        </div>
        <div>👩‍💻 {timeCoding}</div>
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

export default MainLayout;
