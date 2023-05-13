import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Headline from "./Headline/Headline";
import "./About.scss";
import { Cover } from "./Cover/Cover";

const PAGE_OFFSET = 1;

const About = () => {
    const aboutJourney = [<Cover key={'cover'} />, <Headline key={'headline'} />, <Experience key={'experience'} />, <Education key={'education'} />];

    return <>{aboutJourney.map((element) => element)}</>;
  };
  
  export default About;