import "./About.scss";
import profile from "../../assets/profile.jpg";
import github from "../../assets/contact/github.svg";
import linkedin from "../../assets/contact/linkedin.svg";
import email from "../../assets/contact/email.svg";
import { IContact } from "../../interfaces/IContact";

const contact: IContact[] = [
  {
    image: {
      link: email,
      alt: "email",
    },
    href: "mailto:kaitlynparsons@outlook.com.au",
  },
  {
    image: {
      link: github,
      alt: "github",
    },
    href: "https://github.com/KaitlynParsons",
  },
  {
    image: {
      link: linkedin,
      alt: "linkedin",
    },
    href: "https://www.linkedin.com/in/kpars/",
  },
];

const About = () => {
  return (
    <section className="page">
      <section className="content-section">
        <img className="profile" src={profile} />
        <div>
          <h1>
            kaitlyn<span>parsons</span>
          </h1>
          Software Engineer
          <div className="icon-container">
            <div>
              {contact.map((detail, index) => {
                return (
                  <a
                    key={index}
                    href={detail.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={detail.image.link} alt={detail.image.alt} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
