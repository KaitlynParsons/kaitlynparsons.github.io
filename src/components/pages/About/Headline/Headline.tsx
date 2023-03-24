import icon from "../../../../assets/code-merge.svg";
import "./Headline.scss";



const Headline = () => {
    
    
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
      </div>
    );
}

export default Headline;