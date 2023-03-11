import Card from "../../layouts/Card/Card";
import Headline from "./Headline/Headline";
import "./Home.css";

const Home = () => {
    return (
      <div className="wrapper">
        <Card className='header'>
          <Headline />
        </Card>
        <Card className="sidebar">Contact Info</Card>
        <Card className="content">Experience</Card>
        <Card className="footer">Education</Card>
      </div>
    );
  };
  
  export default Home;