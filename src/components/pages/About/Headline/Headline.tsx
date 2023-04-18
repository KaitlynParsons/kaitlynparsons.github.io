import TabCard from "../../../layouts/TabCard/TabCard";
import icon from "../../../../assets/code-merge.svg";
import "./Headline.scss";

const Headline = () => {
  return (
      <TabCard
        content={
          <div>
            <h2 className="headline-title">
              <img src={icon} alt="icon" />
            </h2>
            I'm a Software Engineer from Brisbane, Australia with a passion for technology and software development.
            I focus on writing secure, clean, efficient and reusable code.<br /><br />
            Outside of software, you'll find me watching tennis, at the gym, reading or eating yumcha &#129375;
          </div>
        }
      />
  );
}

export default Headline;