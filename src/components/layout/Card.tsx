import "./Card.scss";
import { motion } from "framer-motion";

type OwnProps = {
  children: JSX.Element;
};

const Card = ({ children }: OwnProps) => (
  <section className="page">
    <motion.section className="content-section">{children}</motion.section>
  </section>
);

export default Card;
