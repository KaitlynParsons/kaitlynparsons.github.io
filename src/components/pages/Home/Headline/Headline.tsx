import icon from "../../../../assets/icon.png";
import "./Headline.css";

const Headline = () => {
    return (
        <div className="headline-grid">
            <img className='logo img-grid-area' src={icon} alt="icon" />
            <h1 className="h1-grid-area">Kaitlyn Parsons</h1>
            <p className="p-grid-area">I am very passionate about technology and software development with a focus on writing secure, clean, efficient and reusable code. I continuously aim to challenge myself and improve my skill set with industry experience and personal projects.</p>
        </div>
        )
}

export default Headline;