import "./Contact.scss";
import location from "../../../../assets/home.svg";
import github from "../../../../assets/github.svg";
import linkedin from "../../../../assets/linkedin.svg";
import { IContact } from "../../../../interfaces/IContact";

const contact: IContact[] = [
    {
        image: {
            link: location,
            alt: 'location'
        },
        subtext: 'Brisbane, Australia'
    },
    {
        image: {
            link: github,
            alt: 'github'
        },
        subtext: 'github.com/KaitlynParsons',
        href: 'https://github.com/KaitlynParsons'
    },
    {
        image: {
            link: linkedin,
            alt: 'linkedin'
        },
        subtext: 'linkedin.com/in/kpars',
        href: 'https://www.linkedin.com/in/kpars/'
    }
];

const Contact = () => {
    const contactsForDisplay = contact.map((detail, index) => {
        const info = detail.href ? <a href={detail.href} target='_blank' rel='noreferrer'>{detail.subtext}</a> : <p>{detail.subtext}</p>;
        return <div className="row" key={index}><img src={detail.image.link} alt={detail.image.alt} />{info}</div>
    });

    return (
        <div className="container">
            <h2>Contact</h2>
            {contactsForDisplay}
        </div>
    )
}

export default Contact;