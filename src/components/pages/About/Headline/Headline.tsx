import TabCard from "../../../layouts/TabCard/TabCard";
import "./Headline.scss";

const Headline = () => {
  return (
      <TabCard
        content={
          <div>
            <h2 className="headline-title">&#128075;</h2>
            I'm a Software Engineer from Brisbane, Australia with a passion for technology and software development.<br />
            I focus on writing secure, clean, efficient and reusable code.<br /><br />
            Outside of software engineering, you'll find me watching tennis, at the gym, reading, out to yumcha or going down some internet rabbit hole.
          </div>
        }
      />
  );
}

export default Headline;