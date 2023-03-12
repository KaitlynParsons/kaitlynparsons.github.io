import "./Contact.scss";
import location from "../../../../assets/home-100.png";
import github from "../../../../assets/github-100.png";
import linkedin from "../../../../assets/linkedin-100.png";

const contact = [
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
        subtext: 'https://github.com/KaitlynParsons',
        href: 'https://github.com/KaitlynParsons'
    },
    {
        image: {
            link: linkedin,
            alt: 'linkedin'
        },
        subtext: 'https://www.linkedin.com/in/kpars/',
        href: 'https://www.linkedin.com/in/kpars/'
    }
];

const Contact = () => {
    const contactsForDisplay = contact.map((detail, index) => {
        const info = detail.href ? <a href={detail.href} target='_blank'>{detail.subtext}</a> : <p>{detail.subtext}</p>;
        return <div className="row" key={index}><img src={detail.image.link} alt={detail.image.alt} />{info}</div>
    });

    return (
        <div className="container">
            <h3>Contact</h3>
            {contactsForDisplay}
        </div>
    )
}

export default Contact;