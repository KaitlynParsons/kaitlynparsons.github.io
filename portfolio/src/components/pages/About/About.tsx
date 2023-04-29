import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Headline from "./Headline/Headline";
import "./About.scss";

const About = () => {
    return (
      <>
        <Headline />
        <Experience />
        <Education />
      </>
    );
  };
  
  export default About;