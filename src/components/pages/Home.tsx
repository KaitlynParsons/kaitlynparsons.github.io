import About from "./about/About";
import { AboutContext, aboutContext } from "../../context/AboutContext";

const Home = () => (
  <>
  <AboutContext.Provider value={aboutContext}>
    <About />
  </AboutContext.Provider>
  </>
);

export default Home;
