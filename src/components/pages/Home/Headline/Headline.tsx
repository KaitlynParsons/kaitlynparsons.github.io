import icon from "../../../../assets/icon.png";
import "./Headline.scss";

const Headline = () => {
    return (
        <div className="headline-grid">
            <img className='logo img-grid-area' src={icon} alt="icon" />
            <div className="h1-grid-area">
                <h1>Kaitlyn Parsons</h1>
                <h3>Software Engineer</h3>
            </div>
            <p className="p-grid-area">I am very passionate about technology and software development with a focus on writing secure, clean, efficient and reusable code. I continuously aim to challenge myself and improve my skill set with industry experience and personal projects.</p>
        </div>
        )
}

export default Headline;