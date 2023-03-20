import icon from "../../../../assets/corgi.png";
import { IContact } from "../../../../interfaces/IContact";
import github from "../../../../assets/github.svg";
import linkedin from "../../../../assets/linkedin.svg";
import "./Headline.scss";

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
    }
];

const Headline = () => {
    const contactsForDisplay = contact.map((detail, index) => {
        return<a key={index} href={detail.href} target='_blank' rel='noreferrer'><img src={detail.image.link} alt={detail.image.alt} /></a>;

    });
    
    return (
      <div className="headline-grid">
        <img className="logo img-grid-area" src={icon} alt="icon" />
        <div className="h1-grid-area">
          <h1>Hi, I'm Kaitlyn.</h1>
        </div>
        <p className="p-grid-area">
          I'm a Software Engineer from Brisbane, Australia with a passion for
          technology and software development. I focus on writing secure, clean,
          efficient and reusable code.
        </p>
        <div className="links-grid-area">{contactsForDisplay}</div>
      </div>
    );
}

export default Headline;