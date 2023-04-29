import { ITabCard } from "../../../interfaces/ITabCard";
import "./TabCard.scss";

const TabCard = (props: ITabCard) => {
    return (
      <section className="cardSection">
        {props.title && (
          <header>
            <h2>{props.title}</h2>
          </header>
        )}
        <div className="container">
          {props.nav && <nav>{props.nav}</nav>}
          <div className="content">{props.content}</div>
        </div>
      </section>
    );
};

export default TabCard;