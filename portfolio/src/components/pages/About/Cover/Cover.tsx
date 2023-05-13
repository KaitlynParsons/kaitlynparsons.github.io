import profile from "../../../../assets/profile.jpg";
import "./Cover.scss";

export const Cover = () => {
  return <section className="cover">
    <img className="profile" src={profile} />
  </section>
};