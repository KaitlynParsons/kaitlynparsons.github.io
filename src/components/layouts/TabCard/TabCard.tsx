import { ITabCard } from "../../../interfaces/ITabCard";
import "./TabCard.scss";

const TabCard = (props: ITabCard) => {
    return (
        <section className="cardSection">
        <header>
            <h2>{props.title}</h2>
        </header>
        <div className="container">
            <nav>
                {props.nav}
            </nav>
            <div className="padding">
                {props.content}
            </div>
        </div>
        </section>
    )
};

export default TabCard;