import profile from "../../../../assets/profile.jpg";
import "./Cover.scss";

export const Cover = () => {
  return <section className="cover">
    <img className="profile" src={profile} />
    <h2>Career Journey</h2>
    <hr className="dotted" />
    <h3>Kaitlyn Parsons</h3>
  </section>
};