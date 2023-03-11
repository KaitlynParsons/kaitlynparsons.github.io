import './Card.css';
import { AppProps } from '../../../interfaces/AppProps';

const Card = (props: AppProps) => {
    return (
        <div className={`card ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Card;