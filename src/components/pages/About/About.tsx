import Card from "../../layouts/Card/Card";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Headline from "./Headline/Headline";
import "./About.scss";

const About = () => {
    return (
      <div className="wrapper">
        <Card className='headline'>
          <Headline />
        </Card>
        <Card className="contact">
          <Contact />
        </Card>
        <Card className="experience">
          <Experience />
        </Card>
        <Card className="education">
          <Education />
        </Card>
      </div>
    );
  };
  
  export default About;