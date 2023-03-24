import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Headline from "./Headline/Headline";
import "./About.scss";

const About = () => {
    return (
      <div className="wrapper">
        <div className="headline">
          <Headline />
        </div>
        <div className="experience">
          <Experience />
        </div>
        <div className="education">
          <Education />
        </div>
      </div>
    );
  };
  
  export default About;