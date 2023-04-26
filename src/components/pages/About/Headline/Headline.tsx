import TabCard from "../../../layouts/TabCard/TabCard";
import "./Headline.scss";

const Headline = () => {
  return (
      <TabCard
      title="About"
        content={
          <div>
            I'm a <strong className="role">Software Engineer</strong> from Brisbane, Australia with a passion for technology and software development.<br />
            I focus on writing secure, clean, efficient and reusable code.<br />
            I continuously aim to challenge myself and improve my skill set with industry experience and personal projects.
          </div>
        }
      />
  );
}

export default Headline;